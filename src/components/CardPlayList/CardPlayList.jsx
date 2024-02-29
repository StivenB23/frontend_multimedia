
import './CardPlayList.css';
import iconPlayList from "../../assets/img/iconoPlayList.svg";

const CardPlayList = ({playlist}) => {
	return (
		<div className='cardplaylist'>
 			<div className='imageCard'>
				<img src={iconPlayList} alt="" />
			</div>
			<div className='informationCard'>
				<h3>{playlist.title}</h3>
				<p className='numberSounds'>Canciones: {playlist.canciones}</p>
			</div>
 		</div>
	);
};


export default CardPlayList;