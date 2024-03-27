import './FormSong.css';

const FormSong = () => {
	return (
		<div className='formPackage'>
			<form className='formContent' action="">
				<h2>Registrar <span className='textColorViolet'>Canción</span></h2>
				<div className='contentSong'>
					<div className="">
						<label htmlFor="">Nombre</label>
						<input type="text" />
						<label htmlFor="">Archivo</label>
						<input type="file" name="" id="" />
						<label htmlFor="">Categoria</label>
						<select name="" id="">
							<option value="">Seleccionar</option>
						</select>
					</div>
					<div className="">
						<h1>IMAGE</h1>
					</div>
				</div>
				<div className='containerButton'>
					<button type="button" className='buttonViolet'>
						Guardar
					</button>
				</div>
			</form>

		</div>
	);
};

FormSong.propTypes = {};

export default FormSong;