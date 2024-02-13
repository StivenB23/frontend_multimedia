import './FormContentMultimedia.css';

const FormContentMultimedia = ({ }) => {
	return (
		<div>
			<form  className="formContainerContetMultimedia">
				<h1>Contenido Multimedia</h1>
				<section className='formInputContetMultimedia'>
					<article>
						<label htmlFor="">Nombre de la canción</label>
						<input type="text" />
						<label htmlFor="">Cargar Archivo</label>
						<input type="file" />
					</article>
					<article>

					</article>
				</section>

			</form>
		</div>
	);
};

export default FormContentMultimedia;