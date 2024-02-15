import './Panel.css';
import IconoPackage from "../../assets/img/iconoPackage.svg"
import iconoBigContentMultimedia from "../../assets/img/iconoBigContentMultimedia.svg"
import iconoUsers from "../../assets/img/iconoUsers.svg"
import { Link } from 'react-router-dom';
const Panel = ({ }) => {
	return (
		<div className='containerPanel'>
			<h2 className='titlePanel'>Bienvenido a <span className='colorViolet'>Fedora</span></h2>
			<div className='accessFast' >
				<Link to={""}>
					<div className='access playlist'>
						<img src={iconoBigContentMultimedia} alt="" />
						<h3>Listas de Reproducción</h3>
					</div>
				</Link>
				<Link to={"/paquetes"}>
					<div className='access'>
						<img src={IconoPackage} alt="" />
						<h3>Paquetes</h3>
					</div>
				</Link>
				<Link to={""}>
					<div className='access'>
						<img src={iconoUsers} alt="" />
						<h3>Usuarios</h3>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Panel;