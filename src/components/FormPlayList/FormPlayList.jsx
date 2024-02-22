import { useState } from 'react';
import './FormPlayList.css';
import { crearPlayListServicio } from '../../services/playListServicio';

const FormPlayList = ({ }) => {
	const [nombre, setnombre] = useState("");
	const [descripcion, setdescripcion] = useState("");
	const [genero, setgenero] = useState("");
	const [etiqueta, setetiqueta] = useState("");

	const crearListaReproduccion = async (e) => {
		const listaReproduccion = {
            nombre: nombre,
            descripcion: descripcion
        }
		const response = await crearPlayListServicio(listaReproduccion)
		console.log(response);
        return listaReproduccion;
	}
	return (
		<div className='formplaylist'>
			<h1>Crear Lista de reproducción</h1>
			<form>
				<label htmlFor="">Nombre:</label>
				<input type="text" onChange={(e)=>setnombre(e.target.value)} />
				<label htmlFor="">Descripción</label>
				<textarea name="" id="" onChange={(e)=>setdescripcion(e.target.value)} cols="30" rows="10"></textarea>
				<div className="">
					<label htmlFor="">Genero</label>
					<select name="" id="">
						<option value="">Seleccionar</option>
					</select>
					<label htmlFor="">Etiqueta</label>
					<select name="" id="">
						<option value="">Seleccionar</option>
					</select>
				</div>
				<div>
					<button type='button' className='btn' onClick={crearListaReproduccion}>Crear lista</button>
				</div>
			</form>
		</div>
	);
};

export default FormPlayList;