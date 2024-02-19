import './Sidebar.css';
import ImagePerfil from '../../assets/img/Perfil.svg'
import iconRequest from '../../assets/img/notification-circle.svg'
import iconMusic from '../../assets/img/music-library-2.svg'
import iconSound from '../../assets/img/sound.svg'
import iconLogout from '../../assets/img/iconLogout.svg'
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react'
const Sidebar = ({ }) => {
	const cerrarSesion = () => {
		console.log("Dio click a cerrar sesión");
		sessionStorage.removeItem('userInfo');
		sessionStorage.removeItem('token');
		navegate("/login")
	}

	return (
		<section className='sidebar'>
			<h1>Fedora</h1>
			<hr />
			<figure className='imagePerfil'>
				<img src={ImagePerfil} alt="" />
			</figure>
			<div className='informationUser' >
				<h3>Albert Ospina</h3>
				<small>Administrador</small>
			</div>
			<nav className='links'>
				<Link to="/dashboard"><img className='icon' src={iconRequest} alt="" /> Home</Link>
				<Link to=""><img className='icon' src={iconRequest} alt="" /> Solicitudes</Link>
				<Link to=""><img className='icon' src={iconRequest} alt="" /> Ver Solicitudes (Submenu)</Link>
				<Link to=""><img className='icon' src={iconRequest} alt="" /> Crear Solicitudes (Submenu)</Link>
				<Link to=""><img className='icon' src={iconSound} alt="" /> Canciones</Link>
				<Link to=""><img className='icon' src={iconSound} alt="" /> Explorar canciones Canciones</Link>
				<Link to=""><img className='icon' src={iconSound} alt="" /> Cargar Canción</Link>
				<Link to=""><img className='icon' src={iconMusic} alt="" /> Listas de reproducción</Link>
				<Link to=""><img className='icon' src={iconMusic} alt="" /> Explorar Listas de reproducción</Link>
				<Link to=""><img className='icon' src={iconMusic} alt="" /> Crear Listas de reproducción</Link>
				<Link to="" onClick={cerrarSesion}><img  className='icon'src={iconLogout} alt="" />Cerrar Sesión</Link>
			</nav>
		</section>
	);
};

export default Sidebar;