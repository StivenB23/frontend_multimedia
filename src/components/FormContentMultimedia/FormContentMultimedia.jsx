import './FormContentMultimedia.css';
import Medai from "../../assets/img/iconoBigContentMultimedia.svg"
const FormContentMultimedia = ({ }) => {
	return (
		<div className="FormContentMultimedia">
			<h1 className="titleFormContentMultimedia">
				Contenido Multimedia
			</h1>
			<form>
				<div className="informationMedia">
					<div className="ContenedorMediaUno">
						<label htmlFor="">Titulo</label>
						<input
							type="text"
							name=""
							id=""
							placeholder="El mejor jingle"
						/>
						<label htmlFor="">Cargar Archivo</label>
						<input
							type="file"
							name="archivo"
							className="input-file"
						/>
					</div>

					<div className="ContenedorMediaDos">
						<img className="mediaImg" src={Medai} alt="" />
						<div className="buttonFormContentMultimedia">
							<button type="submit" onClick="">
								Guardar
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default FormContentMultimedia;