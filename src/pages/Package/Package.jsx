import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Package.css';
import { obtenerPaquetePorIdServicio } from '../../services/paqueteServicio';
const Package = ({ }) => {

    const { id } = useParams();
	const [paquete, setPaquete] = useState([])
    useEffect(() => {
        const obtenerPaquete = async () => {
            try {
                const paquete = await obtenerPaquetePorIdServicio(id);
                setPaquete(paquete)
            } catch (error) {
                console.error('Error al obtener el paquete:', error);
            }
        };

        obtenerPaquete();
    }, [id]);
    
console.log(paquete);
    return (
        <div className='Package'>
            <form action="">
                <div className='formContent'>
					<span className='arrow-back'>&#10132;</span> 
                    <h2>{paquete.nombre} <figure className='iconPackage'>
                    </figure></h2>
                    <div className="paquete">{paquete.nombre_etiqueta}</div>
                    
                    <div className='PackageTitleTags'>
                    </div>
                    <label htmlFor="">Descripción</label>
                    <p className='descriptionP'>{paquete.descripcion}</p>
                    <div className="PackageSoundPublicationValidity">
                        <div>
                            <label htmlFor="">Número de canciones</label>
                            <span>{paquete.limite_canciones}</span>
                        </div>
                        <div>
                            <label htmlFor="">Número de publicidades</label>
                            <span>{paquete.numero_publicidad}</span>
                        </div>
                        <div>
                            <label htmlFor="">Días de vigencia</label>
                            <span>{paquete.dias_vigencia}</span>
                        </div>
                    </div>
                    <div className='containerButtonPackege'>
					<button type="button" className='buttonYellowPackege' >
                            Adquirir productos
                        </button>
                        <button type="button" className='buttonWhiteWithYellowBorder' >
                            Clientes
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Package;
