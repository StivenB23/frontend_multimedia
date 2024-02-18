import './ListPackage.css';

const ListPackage = ({ }) => {
	const packages = [
		{ id: 1, name: "Titulo Paquete 1", description: "Descripción del paquete 1", price: "$10", image: "url_de_la_imagen_1" },
		{ id: 2, name: "Titulo Paquete 2", description: "Descripción del paquete 2", price: "$20", image: "url_de_la_imagen_2" },
		{ id: 3, name: "Titulo Paquete 3", description: "Para que se muestren dos líneas de texto, necesitas ajustar algunos valores. Primero, asegúrate de que la altura máxima sea el doble de la altura de una línea de texto normal. Luego, para garantizar que solo se muestren dos líneas completas, ajusta el line-height para que coincida con la altura de línea multiplicada por el número deseado de líneas. Aquí está el código actualizado:", price: "$30", image: "url_de_la_imagen_3" },
		{ id: 3, name: "Titulo Paquete 3", description: "Para que se muestren dos líneas de texto, necesitas ajustar algunos valores. Primero, asegúrate de que la altura máxima sea el doble de la altura de una línea de texto normal. Luego, para garantizar que solo se muestren dos líneas completas, ajusta el line-height para que coincida con la altura de línea multiplicada por el número deseado de líneas. Aquí está el código actualizado:", price: "$30", image: "url_de_la_imagen_3" }
	];

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
				<div className="card-container">
					{/* Mapear los paquetes y renderizar una tarjeta por cada uno */}
					{packages.map(paquete => (
						<div key={paquete.id} className="card">
							<div className="card-background">
								<img src={paquete.image} alt={paquete.name} />
							</div>
							<div className="contentList">
								<div className="label">Etiqueta</div> {/* Aquí puedes reemplazar 'Etiqueta' con la etiqueta real si tienes esa información */}
								<h3>{paquete.name}</h3>
								<p>{paquete.description}</p>
								
							</div>
							<button>Ver más</button>
						</div>
					))}
				</div>
			</div>
		</div>

	);
};

export default ListPackage;