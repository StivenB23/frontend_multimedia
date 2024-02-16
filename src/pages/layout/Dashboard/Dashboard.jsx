import React from 'react';
import './Dashboard.css';
import FormEmpresa from '../../../components/FormEmpresa/FormEmpresa';
<<<<<<< HEAD
import ImagePerfil from '../../../assets/img/Perfil.svg'
=======
import FormCliente from '../../../components/FormCliente/FormCliente';
import { useNavigate } from 'react-router-dom';


>>>>>>> 4094fbf18a53565713a3befb36677f3d7f55b56c
const Dashboard = ({ }) => {

	const navegate = useNavigate();

	const cerrarSesion = () =>{
		console.log("Dio click a cerrar sesión");
		sessionStorage.removeItem('userInfo');
		sessionStorage.removeItem('token');
		navegate("/login")
	}
	return (
		<main className='dashboard'>
			<section>
				<h1>Fedora</h1>
				<figure className='imagePerfil'>
					<img src={ImagePerfil} alt="" />
				</figure>
				Dashboard works!

				<button onClick={cerrarSesion}>CERRAR SESIÓN</button>

			</section>
			<section>
				
				{/* <FormEmpresa /> */} 

				<FormCliente></FormCliente>


			</section>
		</main>
	);
};

Dashboard.propTypes = {};

export default Dashboard;