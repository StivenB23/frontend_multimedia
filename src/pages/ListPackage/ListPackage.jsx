import { useEffect, useState } from 'react';
import './ListPackage.css';
import { obtenerPaquetesServicio } from '../../services/paqueteServicio';
import { obtenerEtiquetasServicio } from '../../services/etiquetasServicio';
import { Link } from 'react-router-dom';

const ListPackage = ({ }) => {
	const [packages, setpackages] = useState([])
	const [tags, setTags] = useState([])
	const [packagesFiltered, setpackagesFiltered] = useState([])
	useEffect(() => {
		const obtenerPaquetes = async () => {
			const packages = await obtenerPaquetesServicio();
			const tags = await obtenerEtiquetasServicio();
			setpackages(packages)
			setpackagesFiltered(packages)
			setTags(tags)
		}
		obtenerPaquetes()
	}, [])

	const textLimite = (text, limit = 20) => {
		const textLimited = text.slice(0, limit);
		return textLimited
	}

	// const packages = [
	// 	{ id: 1, name: "Titulo Paquete 1", description: "Descripción del paquete 1", price: "$10", image: "url_de_la_imagen_1" },
	// 	{ id: 2, name: "Titulo Paquete 2", description: "Descripción del paquete 2", price: "$20", image: "url_de_la_imagen_2" },
	// 	{ id: 3, name: "Titulo Paquete 3", description: "Para que se muestren dos líneas de texto, necesitas ajustar algunos valores. Primero, asegúrate de que la altura máxima sea el doble de la altura de una línea de texto normal. Luego, para garantizar que solo se muestren dos líneas completas, ajusta el line-height para que coincida con la altura de línea multiplicada por el número deseado de líneas. Aquí está el código actualizado:", price: "$30", image: "url_de_la_imagen_3" },
	// 	{ id: 3, name: "Titulo Paquete 3", description: "Para que se muestren dos líneas de texto, necesitas ajustar algunos valores. Primero, asegúrate de que la altura máxima sea el doble de la altura de una línea de texto normal. Luego, para garantizar que solo se muestren dos líneas completas, ajusta el line-height para que coincida con la altura de línea multiplicada por el número deseado de líneas. Aquí está el código actualizado:", price: "$30", image: "url_de_la_imagen_3" }
	// ];
	const filterPackages = (e) => {
		let filter = e.target.value;
		if (filter.length > 0) {
			const packagesFilter = packages.filter(packageItem => packageItem.nombre.toLowerCase().includes(filter.toLowerCase()))
			setpackagesFiltered(packagesFilter)
		} else {
			setpackagesFiltered(packages)
		}
	}


	const filterTags = (e) => {
		let filter = e.target.value;
		if (filter.length > 0) {
			const packagesFilter = packages.filter(packageItem => packageItem.nombre_etiqueta.toLowerCase().includes(filter.toLowerCase()))
			setpackagesFiltered(packagesFilter)
		} else {
			setpackagesFiltered(packages)
		}
	}
	return (
		<div className='listpackage'>
			<h2>Paquetes</h2>
			<div>
				<input type="text" className='search' onChange={filterPackages} name="" id="" />
				<div className='filters'>
					<select name="" onChange={filterTags} id="">
						<option value="" selected>Etiquetas</option>
						{tags.map(tag => (
							<option value={tag.nombre}>{tag.nombre}</option>
						))}
					</select>

				</div>
				<div className="card-container">
					{/* Mapear los paquetes y renderizar una tarjeta por cada uno */}
					{packagesFiltered.map(paquete => (
						<div key={paquete.id} className="card">
							<div className="card-background">
							</div>
							<div className="contentList">
								<div className="label">{paquete.nombre_etiqueta}</div>
								<h3>{paquete.nombre}</h3>
								<p>{textLimite(paquete.descripcion)}...</p>
							</div>
							<button><Link to={`/paquete/${paquete.id}`} className="link-button">Ver más</Link></button>
						</div>
					))}
				</div>
			</div>
		</div>

	);
};

export default ListPackage;