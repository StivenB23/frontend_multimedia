import './FormSong.css';
import IconBigContentMultimedia from '../../assets/img/iconoBigContentMultimedia.svg'
import { useEffect, useState } from 'react';
import { obtenerCategoriasServicio } from '../../services/categoriaServicio';
import { saveContentMultimediaServicio } from '../../services/contenidoMultimedia';
const FormSong = () => {
	const [categories, setCategories] = useState([])
	const [name, setname] = useState("")
	const [file, setfile] = useState(null)
	const [genery, setgenery] = useState("")
	const [category, setcategory] = useState("")
	
	useEffect(() => {
		const getData = async () => {
			const categories = await obtenerCategoriasServicio();
			setCategories(categories);
		}
		getData()
	}, [])

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		setfile(file);
	  };

	  const saveSong = async () => {
		try {
			const data = {
				nombre: name,
				tipo:"cancion",
                archivo: file,
				categoria:category,
                genero: 1
			}
			await saveContentMultimediaServicio(data)
		} catch (error) {
			
		}
	  }

	return (
		<div className='formSong'>
			<form className='formContent' action="">
				<h2>Registrar <span className='textColorViolet'>Canción</span></h2>
				<div className='contentSong'>
					<div className="">
						<label htmlFor="">Nombre</label>
						<input type="text" onChange={(e)=>setname(e.target.value)} />
						<label htmlFor="">Archivo</label>
						<input type="file" name="" id="" onChange={handleFileChange} />
						<label htmlFor="">Categoria</label>
						<select name="" id="" onChange={(e)=>{setcategory(e.target.value)}}>
							<option value="">Seleccionar</option>
							{categories?.map(category => (
								<option value={category.id}>{category.nombre}</option>
							))}
						</select>
					</div>
					<div className="imageSong">
						<img src={IconBigContentMultimedia} alt="" />
					</div>
				</div>
				<div className='containerButton'>
					<button type="button" className='buttonViolet' onClick={saveSong}>
						Guardar
					</button>
				</div>
			</form>

		</div>
	);
};

FormSong.propTypes = {};

export default FormSong;