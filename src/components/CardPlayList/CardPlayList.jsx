
import './CardPlayList.css';
import iconPlayList from "../../assets/img/iconoPlayList.svg";

const CardPlayList = ({}) => {
	return (
		<div className='cardplaylist'>
 			<div className='imageCard'>
				<img src={iconPlayList} alt="" />
			</div>
			<div className='informationCard'>
				<h3>Title Playlist</h3>
				<p>Number Musics</p>
			</div>
 		</div>
	);
};


export default CardPlayList;