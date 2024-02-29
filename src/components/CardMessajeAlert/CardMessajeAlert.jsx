import { Link } from 'react-router-dom';
import './CardMessajeAlert.css';

const CardMessajeAlert = ({ type = "info", typeMessage = "warningIncomplete" }) => {
	const messages = {
		"informationIncomplete": {
			message: "Parece que tu información o la de la empresa se encuentran incompletas. No tardaras nada",
			link: {
				route:"/myPerfil",
				nameButton:"Completar Información"
			}
		},
		"warningIncomplete": {
			message: "Tu suscripción esta llegando a la final de su uso, no olvides renovarla. Comunicate con el administrador",
			link: false
		},
		"changePassword": {
			message: "Es la primera vez que ingresas al sistema, para mayor seguridad cambia la contraseña",
			link: {
				route:"/myPerfil",
				nameButton:"Cambiar mi contraseña"
			}
		}
	}
	return (
		<div className='cardmessajealert'>
			<div className={type == 'info' ? 'icon info' : 'icon alert'}>
			</div>
			<p className='messageCard'>{messages[typeMessage].message}</p>
			{messages[typeMessage].link != false && (
				<Link className={type == 'info' ? 'button-aqua' : 'icon alert'} to={messages[typeMessage].link.route} >{messages[typeMessage].link.nameButton}</Link>
			)}
		</div>
	);
};

export default CardMessajeAlert;