import { useEffect, useState } from 'react';
import './ListPackage.css';
import { obtenerPaquetesServicio } from '../../services/paqueteServicio';
import { obtenerEtiquetasServicio } from '../../services/etiquetasServicio';

const ListPackage = () => {
    const [packages, setPackages] = useState([]);
    const [tags, setTags] = useState([]);
    const [packagesFiltered, setPackagesFiltered] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const packagesPerPage = 10;

    useEffect(() => {
		const obtenerPaquetes = async () => {
			const packages = await obtenerPaquetesServicio();
            const tags = await obtenerEtiquetasServicio();
            setPackages(packages);
            setPackagesFiltered(packages);
            setTags(tags);
        };
        obtenerPaquetes();
    }, []);
	
	const totalPages = Math.ceil(packagesFiltered.length / packagesPerPage);
	
	const handleClick = (type) => {
		if (type === 'prev' && currentPage > 1) {
			setCurrentPage(currentPage - 1);
		} else if (type === 'next' && currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

    const textLimite = (text, limit = 20) => text.slice(0, limit);

    const filterPackages = (e) => {
        const filter = e.target.value;
        const packagesFilter = packages.filter(packageItem =>
            packageItem.nombre.toLowerCase().includes(filter.toLowerCase())
        );
        setPackagesFiltered(filter.length > 0 ? packagesFilter : packages);
    };

    const filterTags = (e) => {
        const filter = e.target.value;
        const packagesFilter = packages.filter(packageItem =>
            packageItem.nombre_etiqueta.toLowerCase().includes(filter.toLowerCase())
        );
        setPackagesFiltered(filter.length > 0 ? packagesFilter : packages);
    };

    const indexOfLastPackage = currentPage * packagesPerPage;
    const indexOfFirstPackage = indexOfLastPackage - packagesPerPage;
    const currentPackages = packagesFiltered.slice(indexOfFirstPackage, indexOfLastPackage);

    return (
        <div className='listpackage'>
            <h2>Paquetes</h2>
            <div>
                <input type="text" className='search' onChange={filterPackages} />
                <div className='filters'>
                    <select onChange={filterTags} defaultValue="">
                        <option value="" disabled>Etiquetas</option>
                        {tags.map(tag => (
                            <option key={tag.id} value={tag.nombre}>{tag.nombre}</option>
                        ))}
                    </select>
                </div>
                <div className="card-container">
                    {currentPackages.map(paquete => (
                        <div key={paquete.id} className="card">
                            <div className="card-background">
                          
                            </div>
                            <div className="contentList">
                                <div className="label">{paquete.nombre_etiqueta}</div>
                                <h3>{paquete.nombre}</h3>
                                <p>{textLimite(paquete.descripcion)}...</p>
                            </div>
                            <button>Ver más</button>
                        </div>
                    ))}
                </div>
                <div className="pagination">
                    <button onClick={() => handleClick('prev')} disabled={currentPage === 1}>
                        Anterior
                    </button>
                    <span>Página {currentPage} de {totalPages}</span>
                    <button onClick={() => handleClick('next')} disabled={currentPage === totalPages}>
                        Siguiente
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ListPackage;
