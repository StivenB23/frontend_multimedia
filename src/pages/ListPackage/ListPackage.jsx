import './ListPackage.css';

const ListPackage = ({}) => {
	return (
		<div className='listpackage'>
 			<h2>Paquetes</h2>
			<div>
				<input type="text" className='search' name="" id="" />
				<div className='filters'>
					<select name="" id="">
						<option value="Etiqueta">Etiqueta</option>
					</select>

				</div>
			</div>
 		</div>
	);
};

export default ListPackage;