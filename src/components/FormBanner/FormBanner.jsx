import './FormBanner.css';

const FormBanner = ({}) => {
	return (
		<div className='formbanner'>
 			<h2>Subir Archivo publicitario</h2>
			<form action="">
				<div>
					<label htmlFor="">Nombre</label>
					<input type="text" />
				</div>
				<div>
					<label htmlFor="">Tipo de publicidad</label>
					<input type="radio" name="" id="" />Imagen
					<input type="radio" name="" id="" />Video
				</div>
				<label htmlFor="">Cargar Archivo</label>
				<input type="file" name="" id="" />
				<div className="">
					<button>Guardar</button>
				</div>
			</form>
 		</div>
	);
};

export default FormBanner;