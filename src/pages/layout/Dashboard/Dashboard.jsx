import React from 'react';
import './Dashboard.css';
import FormEmpresa from '../../../components/FormEmpresa/FormEmpresa';
import FormCliente from '../../../components/FormCliente/FormCliente';
import { useNavigate } from 'react-router-dom';


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
				<h1>Sidebar</h1>
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