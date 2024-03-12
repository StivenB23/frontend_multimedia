import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Package.css';
import { comprarPaqueteCliente, obtenerPaquetePorIdServicio } from '../../services/paqueteServicio';
import FormCliente from '../../components/FormCliente/FormCliente';
import { getUsersServicio } from '../../services/userService';
const Package = ({ }) => {

    const { id } = useParams();
    const [paquete, setPaquete] = useState({});
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [modalClient, setmodalClient] = useState(false);
    const [filters, setFilters] = useState([]);


    useEffect(() => {
        const obtenerPaquete = async () => {
            try {
                const paquete = await obtenerPaquetePorIdServicio(id);
                const usuarios = await getUsersServicio({ estado: 1 })
                setUsers(usuarios);
                setFilters(usuarios);
                setPaquete(paquete);
            } catch (error) {
                console.error('Error al obtener el paquete:', error);
            }
        };

        obtenerPaquete();
    }, [id]);


    const show = () => {
        setmodalClient(!modalClient)
    }

    const findUser = (event) => {
        const filter = event.target.value;
        if (filter != "") {
            const filteredUsers = users.includes((filter) => filter.nombre == filter);
            setFilters(filteredUsers);
        } else {
            setFilters(usuarios);
        }
    }


    const addUser = (userData) => {
        console.log("click");
        setUser(userData)
    }

    const buyPackage = async () => {
        const buy = {
            id: paquete.id,
            usuario: user.id,
            diasVigencia: paquete.dias_vigencia,
        }
        await comprarPaqueteCliente(buy);
    }

    return (
        <div className='Package'>
            <form className='formContent' action="">
                <span className='arrow-back'>&#10132;</span>
                <h2>{paquete.nombre} <figure className='iconPackage'>
                </figure></h2>
                <div className="paquete">{paquete.nombre_etiqueta}</div>

                <div className='PackageTitleTags'>
                </div>
                <label htmlFor="">Descripción</label>
                <p className='descriptionP'>{paquete.descripcion}</p>
                <div className="PackageSoundPublicationValidity">
                    <div>
                        <label htmlFor="">Número de canciones</label>
                        <span>{paquete.limite_canciones}</span>
                    </div>
                    <div>
                        <label htmlFor="">Número de publicidades</label>
                        <span>{paquete.numero_publicidad}</span>
                    </div>
                    <div>
                        <label htmlFor="">Días de vigencia</label>
                        <span>{paquete.dias_vigencia}</span>
                    </div>
                </div>
                {modalClient && (
                    <div>
                        <h2>Modal temporal</h2>
                        <h4>Buscar Usuario</h4>
                        <p>Filtro en desarrollo</p>
                        {/* <input type="text" onChange={findUser} /> */}
                        {filters?.map(filter => (
                            <div onClick={() => addUser(filter)}>
                                <h2>{filter.nombre} (Dar clic)</h2>
                            </div>
                        ))}
                        <hr />
                        <h2>Cliente asignado</h2>
                        <p><b>{user.nombre}. {user.apellido}</b></p>
                        <button type='button' onClick={buyPackage}>Registrar Compra (Dar clic para asignar)</button>
                    </div>
                )}
                <div className='containerButtonPackege'>
                    <button type="button" className='buttonYellowPackege' onClick={show} >
                        Asignar cliente
                    </button>
                    <button type="button" className='buttonWhiteWithYellowBorder' >
                        Clientes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Package;
