import "./Sidebar.css";
import ImagePerfil from "../../assets/img/perfil.png";
import IconDashboard from "../../assets/img/iconDashboard.svg";
import iconRequest from "../../assets/img/notification-circle.svg";
import iconMusic from "../../assets/img/music-library-2.svg";
import iconSetting from "../../assets/img/iconSetting.svg";
import iconSound from "../../assets/img/sound.svg";
import iconLogout from "../../assets/img/iconLogout.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAvatarImgId } from "../../services/userService";
const Sidebar = () => {
    const navegate = useNavigate();
    const [user, setuser] = useState({})
    const [solicitudesOpen, setSolicitudesOpen] = useState(false);
    const [paquetesOpen, setPaquetesOpen] = useState(false);
    const [usuariosOpen, setUsuariosOpen] = useState(false);
    const [cancionesOpen, setCancionesOpen] = useState(false);
    const [listasReproduccionOpen, setListasReproduccionOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const [userPhotoUrl, setUserPhotoUrl] = useState(null);

    useEffect(() => {
        setuser(JSON.parse(sessionStorage.getItem('userInfo')));
    }, [])

    const cerrarSesion = () => {
        console.log("Dio click a cerrar sesión");
        sessionStorage.removeItem("userInfo");
        sessionStorage.removeItem("token");
        navegate("/login");
    };

    const toggleSolicitudes = () => {
        setSolicitudesOpen(!solicitudesOpen);
        setCancionesOpen(false);
        setListasReproduccionOpen(false);
    };

    const togglePaquetes = () => {
        setPaquetesOpen(!paquetesOpen);
        setCancionesOpen(false);
        setListasReproduccionOpen(false);
    };

    const toggleUsuarios = () => {
        setUsuariosOpen(!usuariosOpen);
        setCancionesOpen(false);
        setListasReproduccionOpen(false);
    };

    const toggleCanciones = () => {
        setCancionesOpen(!cancionesOpen);
        setSolicitudesOpen(false);
        setListasReproduccionOpen(false);
    };

    const toggleListasReproduccion = () => {
        setListasReproduccionOpen(!listasReproduccionOpen);
        setSolicitudesOpen(false);
        setCancionesOpen(false);
    };

    const setFalseToogle = () => {
        setSolicitudesOpen(false);
        setCancionesOpen(false);
        setListasReproduccionOpen(false);
        setActiveSubMenu(null); // Reset activeSubMenu when closing submenus
    };
    useEffect(() => {
        const fetchUserPhoto = async () => {
            try {
                const url = await getAvatarImgId(user.id);
                if (url) {
                    setUserPhotoUrl(URL.createObjectURL(url));
                }
            } catch (err) {
                console.error(err);
                setUserPhotoUrl(null);
            }
        };

        fetchUserPhoto();
    }, [user.id]);
    return (
        <section className="sidebar">
            <div className="logo"></div>

            <figure className="imagePerfil">
                {userPhotoUrl !== null ? <img src={userPhotoUrl} alt="Vista previa de la imagen" /> : <img src={ImagePerfil} alt="Vista previa de la imagen" />}
            </figure>
            <div className="informationUser">
                <h3>{user.nombre} {user.apellido}</h3>
                <small>{user.rol}</small>
            </div>
            <nav className='links'>
                <li onClick={setFalseToogle}>
                    <Link className="mainMenu" to="/dashboard">
                        <img className='icon' src={IconDashboard} alt="" />
                        <p>Dashboard</p>
                    </Link>
                </li>
                <li>
                    <span onClick={toggleSolicitudes} className={solicitudesOpen ? "mainMenu mainMenuActive" : "mainMenu"}>
                        <img className='icon' src={iconRequest} alt="" />
                        <p>Solicitudes</p>
                    </span>
                    <ul className="subMenu" style={{ maxHeight: solicitudesOpen ? '500px' : '0' }}>
                        <li className={activeSubMenu === 'solicitudes' ? 'activeSubMenu' : ''}>
                            <Link to="/formsolicitudes" onClick={() => setActiveSubMenu('solicitudes')}>
                                 Ver Solicitudes (Submenu)
                            </Link>
                        </li>
                        <li className={activeSubMenu === 'crearSolicitudes' ? 'activeSubMenu' : ''}>
                            <Link to="/formsolicitudes" onClick={() => setActiveSubMenu('crearSolicitudes')}>
                                 Crear Solicitudes (Submenu)
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>

                    <span onClick={togglePaquetes} className={paquetesOpen ? "mainMenu mainMenuActive" : "mainMenu"}>
                        <img className='icon' src={iconRequest} alt="" />
                        <p>Paquetes</p>
                    </span>
                    <ul className="subMenu" style={{ maxHeight: paquetesOpen ? '500px' : '0' }}>
                        <li className={activeSubMenu === 'paquetes' ? 'activeSubMenu' : ''}>
                            <Link to="/paquetes" onClick={() => setActiveSubMenu('paquetes')}>
                                 Ver Paquetes (Submenu)
                            </Link>
                        </li>
                        <li className={activeSubMenu === 'crearPaquetes' ? 'activeSubMenu' : ''}>
                            <Link to="/formpaquetes" onClick={() => setActiveSubMenu('crearPaquetes')}>
                                 Crear Paquete (Submenu)
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>

                    <span onClick={toggleUsuarios} className={usuariosOpen ? "mainMenu mainMenuActive" : "mainMenu"}>
                        <img className='icon' src={iconRequest} alt="" />
                        <p>Usuarios</p>
                    </span>
                    <ul className="subMenu" style={{ maxHeight: usuariosOpen ? '500px' : '0' }}>
                        <li className={activeSubMenu === 'usuarios' ? 'activeSubMenu' : ''}>
                            <Link to="/users" onClick={() => setActiveSubMenu('usuarios')}>
                                  Ver usuarios
                            </Link>
                        </li>
                        <li className={activeSubMenu === 'crearUsuarios' ? 'activeSubMenu' : ''}>
                            <Link to="/formcliente" onClick={() => setActiveSubMenu('crearUsuarios')}>
                                  Crear Usuario
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <span onClick={toggleCanciones} className={cancionesOpen ? "mainMenu mainMenuActive" : "mainMenu"}>
                        <img className='icon' src={iconSound} alt="" />
                        <p>Canciones</p>
                    </span>
                    <ul className="subMenu" style={{ maxHeight: cancionesOpen ? '500px' : '0' }}>
                        <li className={activeSubMenu === 'verCanciones' ? 'activeSubMenu' : ''}>
                            <Link to="songs" onClick={() => setActiveSubMenu('verCanciones')}>
                                Ver Canciones (Submenu)
                            </Link>
                        </li>
                        <li className={activeSubMenu === 'crearCanciones' ? 'activeSubMenu' : ''}>
                            <Link to="" onClick={() => setActiveSubMenu('crearCanciones')}>
                                Crear Canciones (Submenu)
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <span onClick={toggleListasReproduccion} className={listasReproduccionOpen ? "mainMenu mainMenuActive" : "mainMenu"}>
                        <img className='icon' src={iconMusic} alt="" />
                        <p>Listas de reproducción</p>
                    </span>
                    <ul className="subMenu" style={{ maxHeight: listasReproduccionOpen ? '500px' : '0' }}>
                        <li className={activeSubMenu === 'misListas' ? 'activeSubMenu' : ''}>
                            <Link to="" onClick={() => setActiveSubMenu('misListas')}>
                                Mis listas de reproducción
                            </Link>
                        </li>
                        <li className={activeSubMenu === 'explorarListas' ? 'activeSubMenu' : ''}>
                            <Link to="/playlist" onClick={() => setActiveSubMenu('explorarListas')}>
                                Explorar Listas de reproducción
                            </Link>
                        </li>
                        <li className={activeSubMenu === 'crearListas' ? 'activeSubMenu' : ''}>
                            <Link to="" onClick={() => setActiveSubMenu('crearListas')}>
                                Crear Listas de reproducción
                            </Link>
                        </li>
                    </ul>
                </li>
                <Link to="/banner"><img className='icon' src={iconSetting} alt="" />Banner</Link>
                <Link to="/myPerfil"><img className='icon' src={iconSetting} alt="" />Configuración</Link>
                <Link to="/login" onClick={cerrarSesion}><img className='icon' src={iconLogout} alt="" />Cerrar Sesión</Link>
            </nav>
        </section>
    );
};

export default Sidebar;
