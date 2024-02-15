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

	const location = useLocation();
	const [activeMenu, setActiveMenu] = useState(null);
	const [activeSubMenu, setActiveSubMenu] = useState(null);

	const handleMenuClick = (menu) => {
		setActiveMenu(menu);
	};

	const handleSubMenuClick = (submenu) => {
		setActiveSubMenu(submenu);
	};

	useEffect(() => {
		const { pathname } = location;
		if (pathname === '/solicitudes') {
			setActiveMenu('solicitudes');
		} else if (pathname === '/mp3') {
			setActiveMenu('mp3');
		} else if (pathname === '/listas') {
			setActiveMenu('listas');
		} else {
			setActiveMenu(null);
		}
	}, [location]);


	return (
		<section>
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
				{/* <a href=""><img className='icon' src={iconRequest} alt="" /> Solicitudes</a>
				<a href=""><img className='icon' src={iconSound} alt="" /> Mp3</a>
				<a href=""><img className='icon' src={iconMusic} alt="" /> Listas de reproducción</a>
				<a href="" onClick={cerrarSesion}><img  className='icon'src={iconLogout} alt="" />Cerrar Sesión</a> */}
				<Link to="" className={activeMenu === 'solicitudes' ? 'active' : ''} onClick={() => handleMenuClick('solicitudes')}>
					<img className='icon' src={iconRequest} alt="" /> Solicitudes
				</Link>
				<div className={activeMenu === 'solicitudes' ? 'submenu active' : 'submenu'}>
					<Link to="#" className={activeSubMenu === 'subMenu1' ? 'active' : ''} onClick={() => handleSubMenuClick('subMenu1')}>
						Submenú 1
					</Link>
					<Link to="#" className={activeSubMenu === 'subMenu2' ? 'active' : ''} onClick={() => handleSubMenuClick('subMenu2')}>
						Submenú 2
					</Link>
				</div>

				<Link to="" className={activeMenu === 'mp3' ? 'active' : ''} onClick={() => handleMenuClick('mp3')}>
					<img className='icon' src={iconSound} alt="" /> Mp3
				</Link>

				<Link to="" className={activeMenu === 'listas' ? 'active' : ''} onClick={() => handleMenuClick('listas')}>
					<img className='icon' src={iconMusic} alt="" /> Listas de reproducción
				</Link>

				<Link to="#" onClick={cerrarSesion}>
					<img className='icon' src={iconLogout} alt="" /> Cerrar Sesión
				</Link>
			</nav>
		</section>
	);
};

export default Sidebar;