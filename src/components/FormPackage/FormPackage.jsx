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
	const [numeroPromociones, setnumeroPromociones] = useState(0)
	const [numeroJingles, setnumeroJingles] = useState(0)
	const [numeroEnlaces, setnumeroEnlaces] = useState(0)
	const [precio, setprecio] = useState(0)
	const [diasVigencia, setdiasVigencia] = useState(0)

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
                numeroPromociones: numeroPromociones,
                numeroJingles: numeroJingles,
                numeroEnlaces: numeroEnlaces,
                precio: precio,
                diasVigencia: diasVigencia
			}
			console.log(paquete);
			const response = await registrarPaqueteServicio(paquete);
			alert("Paquete regisrtrado de forma exitosa")
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className='formPackage'>
			<form action="">
				<div className='formContent'>
				{/* <figure className='iconPackage'>
				</figure> */}
				<h2>Registrar <span className='textColorYellow'>Paquete</span></h2>
				<div className='formPackageTitleTags'>
					<div className='titulo'>
						<label htmlFor="">Titulo</label> <br />
						<input type="text" onChange={(e)=>setTitulo(e.target.value)} id="" />
					</div>
					<div>
						<label htmlFor="">tipo de paquete</label> <br />
						<select className='etiqueta' name="" onChange={(e)=>setEtiqueta(e.target.value)} id="">
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
						<label htmlFor="">Número de promociones</label>
						<input type="number" onChange={(e)=>setnumeroPromociones(e.target.value)} min={0} name="" id="" />
					</div>
					<div>
						<label htmlFor="">Número de jingles</label>
						<input type="number" onChange={(e)=>setnumeroJingles(e.target.value)} min={0} name="" id="" />
					</div>
					<div>
						<label htmlFor="">Días de vigencia</label>
						<input type="number" onChange={(e)=>setdiasVigencia(e.target.value)} min={0} name="" id="" />
					</div>
					<div>
						<label htmlFor="">Número de enlaces</label>
						<input type="number" onChange={(e)=>setnumeroEnlaces(e.target.value)} min={0} name="" id="" />
					</div>
					<div>
						<label htmlFor="">Precio</label>
						<input type="number" onChange={(e)=>setprecio(e.target.value)} min={0} name="" id="" />
					</div>
				</div>
				<div className='containerButton'>

					<button type="button" className='buttonYellow' onClick={registrarPaquete}>
						Guardar
					</button>
				</div>
				</div>
			</form>

		</div>
	);
};

export default FormPackage;