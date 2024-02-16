import { useEffect, useState } from 'react';
import './FormEmpresa.css';
import { crearSectorEmpresarial, obtenerSectorEmpresarial } from '../../services/sectorEmpresarialServicios';


const FormEmpresa = () => {
	const [sectoresEmpresariales, setsectoresEmpresariales] = useState([]);
	const [nit, setNit] = useState("");
	const [nombre, setnombre] = useState("");
	const [telefono, settelefono] = useState("");
	const [correo, setcorreo] = useState("");
	const [direccion, setDireccion] = useState("");
	const [sectorEmpresarial, setsectorEmpresarial] = useState("");

	useEffect(() => {
		const obtenerInformacion = async () => {
			try {
                const response = await obtenerSectorEmpresarial()
                setsectoresEmpresariales(response);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
		}
		obtenerInformacion()
	}, [])

	const registrarEmpresa = async (e) => {
		e.preventDefault();
		const empresa = {
			nit: nit,
            nombre: nombre,
            telefono: telefono,
            correo: correo,
            direccion: direccion,
            sectorEmpresarial: sectorEmpresarial
		}
		try {
            const response = await crearSectorEmpresarial(empresa)
            setsectoresEmpresariales(response);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
	}

	return (
		<div className='formempresa'>
			<form >
				<label htmlFor="">Nit</label>
				<input type="text" onChange={(e)=>setNit(e.target.value)} maxLength={15} />
				<label htmlFor="">Nombre</label>
				<input type="text" onChange={(e)=>setnombre(e.target.value)} />
				<label htmlFor="">Telefono</label>
				<input type="text" onChange={(e)=>settelefono(e.target.value)} />
				<label htmlFor="">Correo</label>
				<input type="text" onChange={(e)=>setcorreo(e.target.value)} />
				<label htmlFor="">Dirección</label>
				<input type="text" onChange={(e)=>setDireccion(e.target.value)} />
				<label htmlFor="">Sector empresarial:</label>
				<select name="" id="" onChange={(e)=>setsectorEmpresarial(e.target.value)}>
					<option value="" disabled>seleccionar</option>
					{sectoresEmpresariales.map((sectoresEmpresarial) => (
						<>
							<option value={sectoresEmpresarial.id}>{sectoresEmpresarial.nombre}</option>
						</>
					))}
				</select>
				<button onClick={registrarEmpresa}>Registrar</button>
			</form>
			FormEmpresa works!
		</div>
	);
};

export default FormEmpresa;