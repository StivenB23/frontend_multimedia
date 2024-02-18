import { useEffect, useState } from 'react';
import './ListUsers.css';
import { getUsersServicio } from '../../services/userService';

const ListUsers = ({}) => {
    const [users, setUsers] = useState([]);
    const [usersFiltered, setUsersFiltered] = useState([]);
    const [filter, setfilter] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    useEffect(() => {
        const getUsers = async () => {
            const users = await getUsersServicio();
            setUsers(users);
            setUsersFiltered(users);
        };
        getUsers();
    }, []);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

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

	const filterUsers = (e) =>{
		
		if (e.target.value.length > 0)  {
			setfilter(e.target.value);
			const filteredUsers = users.filter(user => user?.nombre.toLowerCase().includes(e.target.value.toLowerCase()) || user?.apellido.toLowerCase().includes(e.target.value.toLowerCase()));
			setUsersFiltered(filteredUsers);
		}else{
			setfilter("");
            setUsersFiltered(users);
		}
	}

    return (
        <div className="listusers">
			<label htmlFor="">Buscar</label>
			<input type="text" name="" onChange={filterUsers} id="" />
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo</th>
                        <th>Teléfono</th>
                        <th>Rol</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usersFiltered.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1 + indexOfFirstUser}</td>
                            <td>{user.nombre}</td>
                            <td>{user.apellido}</td>
                            <td>{user.correo}</td>
                            <td>{user.telefono}</td>
                            <td>{user.rol}</td>
                            <td>
                                <button>Inactivar</button>
                                <button>Actualizar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <button className='button-aqua ' onClick={() => handleClick('prev')} disabled={currentPage === 1}>
                    Anterior
                </button>
                <button className='button-aqua ' onClick={() => handleClick('next')} disabled={currentPage === totalPages}>
                    Siguiente
                </button>
                <span>Página {currentPage} de {totalPages}</span>
            </div>
        </div>
    );
};

export default ListUsers;
