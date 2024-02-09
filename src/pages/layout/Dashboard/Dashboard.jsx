import React from 'react';
import './Dashboard.css';
import FormEmpresa from '../../../components/FormEmpresa/FormEmpresa';

const Dashboard = ({ }) => {
	return (
		<main className='dashboard'>
			<section>
				<h1>Sidebar</h1>
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