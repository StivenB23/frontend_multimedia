import "./Sidebar.css";
import ImagePerfil from "../../assets/img/perfil.png";
import iconRequest from "../../assets/img/notification-circle.svg";
import iconMusic from "../../assets/img/music-library-2.svg";
import iconSound from "../../assets/img/sound.svg";
import iconLogout from "../../assets/img/iconLogout.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [user, setuser] = useState({})
  const [solicitudesOpen, setSolicitudesOpen] = useState(false);
  const [cancionesOpen, setCancionesOpen] = useState(false);
  const [listasReproduccionOpen, setListasReproduccionOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);


  useEffect(() => {
    setuser(JSON.parse(sessionStorage.getItem('userInfo')));
  }, [])

  const cerrarSesion = () => {
    console.log("Dio click a cerrar sesión");
    sessionStorage.removeItem("userInfo");
    sessionStorage.removeItem("token");
  };

  const toggleSolicitudes = () => {
    setSolicitudesOpen(!solicitudesOpen);
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

  return (
    <section className="sidebar">
      <div className="logo"></div>

      <figure className="imagePerfil">
        <img src={ImagePerfil} alt="" />
      </figure>
      <div className="informationUser">
        <h3>{user.nombre} {user.apellido}</h3>
        <small>{user.rol}</small>
      </div>
      <nav className='links'>
                <li onClick={setFalseToogle}>
                    <Link className="mainMenu" to="/formMultiStep/formOne">
                        <img className='icon' src={iconRequest} alt="" />
                        <p>FORMULARIO MULTI STEP</p>
                    </Link>
                </li>
                <li onClick={setFalseToogle}>
                    <Link className="mainMenu" to="/dashboard">
                        <img className='icon' src={iconRequest} alt="" />
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
                            <Link to="/users" onClick={() => setActiveSubMenu('solicitudes')}>
                                <img className='icon' src={iconRequest} alt="" /> Ver Solicitudes (Submenu)
                            </Link>
                        </li>
                        <li className={activeSubMenu === 'crearSolicitudes' ? 'activeSubMenu' : ''}>
                            <Link to="/formsolicitudes" onClick={() => setActiveSubMenu('crearSolicitudes')}>
                                <img className='icon' src={iconRequest} alt="" /> Crear Solicitudes (Submenu)
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
                            <Link to="/songs" onClick={() => setActiveSubMenu('verCanciones')}>
                                <img className='icon' src={iconSound} alt="" /> Ver Canciones (Submenu)
                            </Link>
                        </li>
                        <li className={activeSubMenu === 'crearCanciones' ? 'activeSubMenu' : ''}>
                            <Link to="" onClick={() => setActiveSubMenu('crearCanciones')}>
                                <img className='icon' src={iconSound} alt="" /> Crear Canciones (Submenu)
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
                        <li className={activeSubMenu === 'explorarListas' ? 'activeSubMenu' : ''}>
                            <Link to="" onClick={() => setActiveSubMenu('explorarListas')}>
                                <img className='icon' src={iconMusic} alt="" /> Explorar Listas de reproducción
                            </Link>
                        </li>
                        <li className={activeSubMenu === 'crearListas' ? 'activeSubMenu' : ''}>
                            <Link to="" onClick={() => setActiveSubMenu('crearListas')}>
                                <img className='icon' src={iconMusic} alt="" /> Crear Listas de reproducción
                            </Link>
                        </li>
                    </ul>
                </li>
                <Link to="" onClick={cerrarSesion}><img className='icon' src={iconLogout} alt="" />Cerrar Sesión</Link>
                
                


            </nav>
    </section>
  );
};

export default Sidebar;
