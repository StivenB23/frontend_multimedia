import { useEffect, useState } from 'react';
import './SubscriptionClient.css';
import { getPackageUser } from '../../services/userService';


const SubscriptionClient = ({ }) => {
	const [userpackage, setUserPackage] = useState(null)
	useEffect(() => {
		const getData = async () => {
			const user = JSON.parse(sessionStorage.getItem('userInfo'))
			const response = await getPackageUser(user.id);
			console.log(response);
			setUserPackage(response)
		}
		getData()
	}, [])

	const calculateDyeOfLife = (fechaFin) => {
		let fechaActual = new Date();
		let fechaFinal = new Date(fechaFin);
		const diferenciaDias = (fechaFinal - fechaActual) / (1000 * 60 * 60 * 24)
		return Math.round(diferenciaDias)
	}

	return (
		<div className='subscriptionclient'>
			<h1 className="titleRegister">Paquete&nbsp;<span className="clienteColor">{userpackage?.nombre}</span></h1>
			<p>{userpackage?.descripcion}</p>
			<ul>
				<li>Número de publicidades: <b>{userpackage?.numero_publicidad}</b></li>
				<li>Número de canciones: <b>{userpackage?.limite_canciones}</b></li>
				<li>Días de vigencia: <b>{userpackage?.dias_vigencia}</b></li>
			</ul>
			<h3>Tienes <span className='numberLife'>{calculateDyeOfLife(userpackage?.fecha_finalizacion)}</span> días para seguir disfrutando de tu plan</h3>
			<div className="dates">
				<div className="">
					<h4>Fecha de adquisición</h4>
					<p>{new Date(userpackage?.fecha_inicio).toLocaleString()}</p>
				</div>
				<div className="">
					<h4>Fecha de finalización</h4>
					<p>{new Date(userpackage?.fecha_finalizacion).toLocaleString()}</p>
				</div>
			</div>
		</div>
	);
};

export default SubscriptionClient;