import { useEffect, useState } from 'react';
import './FormPackage.css';
import { obtenerEtiquetasServicio } from '../../services/etiquetasServicio';
import { registrarPaqueteServicio } from '../../services/paqueteServicio';

const FormPackage = ({ }) => {
	const [etiquetas, setEtiquetas] = useState([])
	const [titulo, setTitulo] = useState("")
	const [etiqueta, setEtiqueta] = useState("")
	const [descripcion, setDescripcion] = useState("")
	const [numeroCanciones, setNumeroCanciones] = useState(0)
	const [numeroPublicidad, setPublicidad] = useState(0)
	const [diaSVigencia, setdiaSVigencia] = useState(0)

	useEffect(() => {
		const obtenerEtiquetas = async () => {
			try {
				const etiquetas = await obtenerEtiquetasServicio()
				setEtiquetas(etiquetas);
			} catch (error) {
				console.error('Error al obtener los datos:', error);
			}
		}
		obtenerEtiquetas()
	}, [])

	const registrarPaquete = async (e) => {
		try {
			const paquete = {
				nombre: titulo,
				etiqueta: etiqueta,
                descripcion: descripcion,
                numeroCanciones: numeroCanciones,
                numeroPublicidad: numeroPublicidad,
                diasVigencia: diaSVigencia
			}
			const response = await registrarPaqueteServicio(paquete);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className='formPackage'>
			<form action="">
				<figure className='iconPackage'>
				</figure>
				<h2>Registrar <span className='textColorYellow'>Paquete</span></h2>
				<div className='formPackageTitleTags'>
					<div>
						<label htmlFor="">Title</label> <br />
						<input type="text" onChange={(e)=>setTitulo(e.target.value)} id="" />
					</div>
					<div>
						<label htmlFor="">Etiquetas</label> <br />
						<select name="" onChange={(e)=>setEtiqueta(e.target.value)} id="">
							{etiquetas.map((etiqueta) => (
								<option value={etiqueta.id}>{etiqueta.nombre}</option>
							))}
						</select>
					</div>
				</div>
				<label htmlFor="">Descripción</label>
				<textarea className='description' onChange={(e)=>setDescripcion(e.target.value)} name="" id="" cols="30" rows="10"></textarea>
				<div className="formPackageSoundPublicationValidity">
					<div>
						<label htmlFor="">Número de canciones</label>
						<input type="number" onChange={(e)=>setNumeroCanciones(e.target.value)} min={0} name="" id="" />
					</div>
					<div>
						<label htmlFor="">Número de publicidades</label>
						<input type="number" onChange={(e)=>setPublicidad(e.target.value)} min={0} name="" id="" />
					</div>
					<div>
						<label htmlFor="">Días de vigencia</label>
						<input type="number" onChange={(e)=>setdiaSVigencia(e.target.value)} min={0} name="" id="" />
					</div>
				</div>
				<div className='containerButton'>

					<button type="button" className='buttonYellow' onClick={registrarPaquete}>
						Guardar
					</button>
				</div>
			</form>

		</div>
	);
};

export default FormPackage;