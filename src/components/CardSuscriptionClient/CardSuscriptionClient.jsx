import { useEffect, useState } from 'react';
import './CardSuscriptionClient.css';
import { getPackageUser } from '../../services/userService';

const CardSuscriptionClient = ({ }) => {
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
		<>
			{userpackage?.nombre != null && (
				<div className='cardSuscriptionClient'>
					<div className='cardSuscriptionClientHeader'>
						<h2>{userpackage?.nombre}</h2>
					</div>
					<div className="cardBody">
						<h3>Tienes <span className='colorViolet'>{calculateDyeOfLife(userpackage?.fecha_finalizacion)}</span> días para seguir disfrutando tu plan</h3>
						<div className="datesPackage">
							<div>
								<h5>Fecha de adquisición</h5>
								<p>{new Date(userpackage?.fecha_inicio).toLocaleDateString()}</p>
							</div>
							<div>
								<h5>Fecha de Finalización</h5>
								<p>{new Date(userpackage?.fecha_finalizacion).toLocaleDateString()}</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default CardSuscriptionClient;