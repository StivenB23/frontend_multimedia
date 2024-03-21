import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Package.css';
import { comprarPaqueteCliente, obtenerPaquetePorIdServicio } from '../../services/paqueteServicio';
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
    const showClients = () => {
        setActionPackage("clients");
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

                {/* <div className='containerButtonPackege'>
                    <button type="button" className='buttonYellowPackege' onClick={show} >
                        Asignar cliente
                    </button>
                    <button type="button" className='buttonWhiteWithYellowBorder' >
                        Clientes
                    </button>
                </div> */}
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
                        {
                            user.nombre === undefined && (
                                <div className='list-clients-add'>
                                    {filters?.map(filter => (
                                        <div className='client-add' onClick={() => addUser(filter)}>
                                            <p>{filter.nombre}</p>
                                        </div>
                                    ))}
                                </div>)
                        }
                        <hr />
                        {
                            user.nombre !== undefined && (
                                <div className='user-selected'>
                                    <span className='user'>{user?.nombre} {user?.apellido}</span><span className='btn-remove-user' onClick={removeUser}>X</span>
                                </div>
                            )
                        }
                        <Modal isOpen={isOpen} closeModal={closeModal} title={"Asignación Cliente"} message={"El usuario ha sido asignado al paquete de forma exitosa"} />
                        <button type='button' onClick={buyPackage}>Registrar Compra (Dar clic para asignar)</button>
                    </div>
                ) : (<>
                   <p>clientes</p>
                </>)}
            </div>
        </div>
    );
};

export default Package;
