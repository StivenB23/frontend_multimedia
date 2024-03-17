import { useEffect, useState } from 'react';
import './ListUsers.css';
import { getUsersServicio, inactiveUser } from '../../services/userService';

const ListUsers = ({}) => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;

    useEffect(() => {
        const getUsers = async () => {
            const users = await getUsersServicio();
            setUsers(users);
        };
        getUsers();
    }, []);

    const totalPages = Math.ceil(users.length / usersPerPage);

    const handleClick = (type) => {
        if (type === 'prev') {
            if (currentPage !== 1) {
                setCurrentPage(currentPage - 1);
            }
        } else if (type === 'next') {
            if (currentPage !== totalPages) {
                setCurrentPage(currentPage + 1);
            }
        }
    };

    const filterUsers = (e) => {
        const value = e.target.value.toLowerCase();
        setFilter(value);
    };

    const filteredUsers = users.filter(user =>
        user?.nombre.toLowerCase().includes(filter) || user?.apellido.toLowerCase().includes(filter)
    );

    const userInactive = async (id, estado) =>{
        await inactiveUser(id, estado);
        const users = await getUsersServicio();
        setUsers(users);
    }

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    return (
        <div className="listusers">
            <label htmlFor="">Buscar</label>
            <input type="text" onChange={filterUsers} />
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo</th>
                        <th>Teléfono</th>
                        <th>Rol</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {currentUsers.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1 + indexOfFirstUser}</td>
                            <td>{user.nombre}</td>
                            <td>{user.apellido}</td>
                            <td>{user.correo}</td>
                            <td>{user.telefono}</td>
                            <td>{user.estado == true?"Activo":"Inactivo"}</td>
                            <td>{user.rol}</td>
                            <td>
                                <button type='button' className='btn' onClick={()=>userInactive(user.id, user.estado == true?false:true)}>{user.estado == 1?"Inactivar":"Activar"}</button>
                                <button>Actualizar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <button className='button-aqua' onClick={() => handleClick('prev')} disabled={currentPage === 1}>
                    Anterior
                </button>
                <button className='button-aqua' onClick={() => handleClick('next')} disabled={currentPage === totalPages}>
                    Siguiente
                </button>
                <span>Página {currentPage} de {totalPages}</span>
            </div>
        </div>
    );
};

export default ListUsers;
