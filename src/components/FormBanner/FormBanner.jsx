import { useState } from 'react';
import { registrarBannerServicio } from '../../services/bannerServicio';
import './FormBanner.css';

const FormBanner = ({ }) => {

	const [nombre, setNombre] = useState("");
	const [tipoPublicidad, setTipoPublicidad] = useState("");
	const [archivo, setArchivo] = useState("");
	const registrarBanner = async () => {
		try {
			const banner_data = {
				"nombreBanner":nombre,
				"posicion":1,
				tipoPublicidad,
				archivo,
			};
			await registrarBannerServicio(banner_data);
		} catch (error) {
			console.log(error);
		}
	}
	const handleFileChange = (event) => {
		const file = event.target.files[0];
		setArchivo(file);
	  };
	return (
		<div className='formbanner'>
			<h2>Subir Archivo publicitario</h2>
			<form action="">
				<div>
					<label htmlFor="">Nombre</label>
					<input type="text" onChange={(e) => setNombre(e.target.value)} />
				</div>
				<div>
					<label htmlFor="">Tipo de publicidad</label>
					<input type="radio" onChange={(e) => setTipoPublicidad("Imagen")} name="tipoPublicidad" id="" />Imagen
					<input type="radio" onChange={(e) => setTipoPublicidad("Video")} name="tipoPublicidad" id="" />Video
				</div>
				<label htmlFor="">Cargar Archivo</label>
				<input type="file" onChange={(e)=>handleFileChange(e) } name="" id="" />
				<div className="">
					<button type='button' onClick={registrarBanner}>Guardar</button>
				</div>
			</form>
		</div>
	);
};

export default FormBanner;