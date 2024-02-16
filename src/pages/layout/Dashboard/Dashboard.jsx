import React from 'react';
import './Dashboard.css';
import FormEmpresa from '../../../components/FormEmpresa/FormEmpresa';
import ImagePerfil from '../../../assets/img/Perfil.svg'
const Dashboard = ({ }) => {
	return (
		<main className='dashboard'>
			<section>
				<h1>Fedora</h1>
				<figure className='imagePerfil'>
					<img src={ImagePerfil} alt="" />
				</figure>
				Dashboard works!
			</section>
			<section>
				Container Information
				<FormEmpresa />
			</section>
		</main>
	);
};

Dashboard.propTypes = {};

export default Dashboard;