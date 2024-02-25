import CardPlayList from '../CardPlayList/CardPlayList';
import './MyPlayListDashboard.css';

const MyPlayListDashboard = ({}) => {
	return (
		<div className='myplaylistdashboard'>
			<h3>Listas de reproducción</h3>
			<div className='list'>
				<CardPlayList />
				<CardPlayList />
				<CardPlayList />
				<CardPlayList />
			</div>
 		</div>
	);
};

export default MyPlayListDashboard;