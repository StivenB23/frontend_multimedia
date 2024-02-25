import './Panel.css';
import IconoPackage from "../../assets/img/iconoPackage.svg"
import iconoBigContentMultimedia from "../../assets/img/iconoBigContentMultimedia.svg"
import iconoUsers from "../../assets/img/iconoUsers.svg"
import { Link } from 'react-router-dom';
import SubscriptionClient from '../SubscriptionClient/SubscriptionClient';
import FormPlayList from '../../components/FormPlayList/FormPlayList';
import FormEmpresa from '../../components/FormEmpresa/FormEmpresa';
import PromotionalBanner from '../../components/PromotionalBanner/PromotionalBanner';
import MyPlayListDashboard from '../../components/MyPlayListDashboard/MyPlayListDashboard';
import CardMessajeAlert from '../../components/CardMessajeAlert/CardMessajeAlert';
const Panel = ({ }) => {
	return (
		<div className='containerPanel'>
			<div className='promotionalBanners'>
				<PromotionalBanner text={"¡Explora la innovación musical hoy mismo!"} link='/login' />
				<PromotionalBanner text={"¡Explora la innovación musical hoy mismo!"} background='backgroundPink' />
			</div>
			<MyPlayListDashboard />
			<CardMessajeAlert />
			{/* <FormEmpresa />  */}

			{/* <SubscriptionClient /> */}
			{/* <FormPlayList /> */}
		</div>
	);
};

export default Panel;