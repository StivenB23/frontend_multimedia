import './Sidebar.css';
import ImagePerfil from '../../assets/img/Perfil.svg'
import iconRequest from '../../assets/img/notification-circle.svg'
import iconMusic from '../../assets/img/music-library-2.svg'
import iconSound from '../../assets/img/sound.svg'
import iconLogout from '../../assets/img/iconLogout.svg'

const Sidebar = ({ }) => {
	const cerrarSesion = () => {
		console.log("Dio click a cerrar sesión");
		sessionStorage.removeItem('userInfo');
		sessionStorage.removeItem('token');
		navegate("/login")
	}
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
				<a href=""> <img className='icon' src={iconRequest} alt="" /> Solicitudes</a>
				<a href=""><img className='icon' src={iconSound} alt="" /> Mp3</a>
				<a href=""><img className='icon' src={iconMusic} alt="" /> Listas de reproducción</a>
				<a href="" onClick={cerrarSesion}><img  className='icon'src={iconLogout} alt="" />Cerrar Sesión</a>
			</nav>
		</section>
	);
};

export default Sidebar;