import CardPlayList from '../CardPlayList/CardPlayList';
import './MyPlayListDashboard.css';

const MyPlayListDashboard = ({}) => {
	const playLists = [{title:"My Play List", canciones:20},{title:"My Play List", canciones:20}];
	// const playLists = [];
	return (
		<div className='myplaylistdashboard' >
			<h3>Listas de reproducción</h3>
			<div className='list' style={playLists.length > 0 ? {"grid-template-columns": "repeat(4, 1fr)"}:{"grid-template-columns": "repeat(1, 1fr)"}}>
				{playLists.length > 0 ? (
					playLists.map((playlist, index) => (
                        <CardPlayList key={index} playlist={playlist} />
                    ))
				):(
					<div className='messageNotPlayList'>
						<h2>No tienes lista de reproducción aun</h2>
					</div>
				)}
				
			</div>
 		</div>
	);
};

export default MyPlayListDashboard;