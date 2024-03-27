import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Package.css';
import { comprarPaqueteCliente, obtenerPaquetePorIdServicio, obtenerUsuariosPaqueteIdServicio } from '../../services/paqueteServicio';
import FormCliente from '../../components/FormCliente/FormCliente';
import { getUsersServicio } from '../../services/userService';
import Modal from '../../components/Modal/Modal';
import useModal from '../../hooks/useModal';
const Package = ({ }) => {

    const { id } = useParams();
    const [paquete, setPaquete] = useState({});
    const [isOpen, openModal, closeModal] = useModal();
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [filters, setFilters] = useState([]);
    const [actionPackage, setActionPackage] = useState("addClient");
    const [clients, setclients] = useState([]);


    useEffect(() => {
        const obtenerPaquete = async () => {
            try {
                const paquete = await obtenerPaquetePorIdServicio(id);
                const usuarios = await getUsersServicio({ estado: 1, rol: "cliente" })
                setUsers(usuarios);
                setFilters(usuarios);
                setPaquete(paquete);
            } catch (error) {
                console.error('Error al obtener el paquete:', error);
            }
        };

        obtenerPaquete();
    }, [id]);


    const showAddClient = () => {
        setActionPackage("addClient");
    }
    const showClients = async () => {
        const clientsPackage = await obtenerUsuariosPaqueteIdServicio(id);
        setclients(clientsPackage);
        setActionPackage("clients");
    }

    const findUser = (event) => {
        const filter = event.target.value;
        if (filter != "") {
            const filteredUsers = users.includes((filter) => filter.nombre == filter);
            setFilters(filteredUsers);
        } else {
            setFilters(users);
        }
    }


    const addUser = (userData) => {
        console.log("click");
        setUser(userData)
    }

    const removeUser = () => {
        setUser({})
    }

    const buyPackage = async () => {
        const buy = {
            id: paquete.id,
            usuario: user.id,
            diasVigencia: paquete.dias_vigencia,
        }
        await comprarPaqueteCliente(buy);
        openModal()
    }

    return (
        <div className='package'>
            <div className="details-package">
                <div className='package-header'>
                    <Link to='/paquetes' >Volver</Link>
                    <h2>{paquete.nombre} <figure className='iconPackage'>
                    </figure></h2>
                </div>
                <div className="paquete">{paquete.nombre_etiqueta}</div>
                <div className='PackageTitleTags'>
                </div>
                <label htmlFor="">Descripción</label>
                <p className='descriptionP'>{paquete.descripcion}</p>
                <div className="PackageSoundPublicationValidity">
                    <div>
                        <label htmlFor="">Número de canciones</label>
                        <span>{paquete?.limite_canciones}</span>
                    </div>
                    <div>
                        <label htmlFor="">Número de promociones</label>
                        <span>{paquete?.limite_promociones}</span>
                    </div>
                    <div>
                        <label htmlFor="">Número de jingles</label>
                        <span>{paquete?.limite_jingles}</span>
                    </div>
                    <div>
                        <label htmlFor="">Número de Enlaces</label>
                        <span>{paquete?.numero_enlaces}</span>
                    </div>
                    <div>
                        <label htmlFor="">Duración del paquete</label>
                        <span>{paquete?.dias_vigencia} Días</span>
                    </div>
                    <div>
                        <label htmlFor="">Precio</label>
                        <span>{paquete?.precio} $</span>
                    </div>
                </div>
            </div>
            <div className="package-actions">
                <div className='containerButtonPackage'>
                    <span className={actionPackage == "addClient" ? "tab tab-active" : "tab"} onClick={showAddClient}>Agregar Cliente</span>
                    <span className={actionPackage == "clients" ? "tab tab-active" : "tab"} onClick={showClients}>Clientes</span>
                </div>
                {actionPackage === "addClient" ? (
                    <div>
                        <h4>Buscar Usuario</h4>
                        <p>Filtro en desarrollo</p>
                        <input type="text" onChange={findUser} />
                        {filters?.length === 0 ? (
                            <h2>No hay Clientes</h2>
                        ) : (
                            user.nombre === undefined && (
                                <div className='list-clients-add'>
                                    {filters?.map((filter, index) => (
                                        <div className='client-add' key={index} onClick={() => addUser(filter)}>
                                            <p>{filter.nombre}</p>
                                        </div>
                                    ))}
                                </div>
                            )
                        )}

                        <hr />
                        {
                            user.nombre !== undefined && (
                                <div className='user-selected'>
                                    <span className='user'>{user?.nombre} {user?.apellido}</span><span className='btn-remove-user' onClick={removeUser}>X</span>
                                </div>
                            )
                        }
                        <Modal isOpen={isOpen} closeModal={closeModal} title={"Asignación Cliente"} message={"El usuario ha sido asignado al paquete de forma exitosa"} />
                        <button type='button' disabled={user.nombre === undefined} onClick={buyPackage}>Registrar Compra (Dar clic para asignar)</button>
                    </div>
                ) : (
                    <>
                        {clients?.length === 0 ?
                            (<h2>No hay Clientes asignados a este paquete</h2>) : (
                                <div className="listClients">
                                    <h3>Los clientes asignados a este paquete son:</h3>
                                    <ul>
                                        {clients?.map((client, index) => (
                                            <li key={index}>{client.nombre} {client.apellido}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                    </>)}
            </div>
        </div>
    );
};

export default Package;
