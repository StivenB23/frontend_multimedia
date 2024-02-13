import './Dashboard.css';
import FormEmpresa from '../../../components/FormEmpresa/FormEmpresa';

import FormCliente from '../../../components/FormCliente/FormCliente';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar/Sidebar';


const Dashboard = ({ }) => {
	const navegate = useNavigate();
	return (
		<main className='dashboard'>
			<Sidebar />
			<section>
				
				{/* <FormEmpresa /> */} 

				<FormCliente></FormCliente>


			</section>
		</main>
	);
};

export default Dashboard;