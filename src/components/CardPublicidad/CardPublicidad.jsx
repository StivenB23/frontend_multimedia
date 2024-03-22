import "./CardPublicidad.css";
import { useEffect, useState } from "react";
import { actualizarPosicioneServicio, listarBannerServicio } from "../../services/bannerServicio";

const CardPublicidad = () => {

  const [banners, setBanners] = useState([]);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await listarBannerServicio();
        setBanners(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBanners();
  }, []);

  const handleDragStart = (index) => {
    setDraggedIndex(index);
    setIsDragging(true);
  };

  const handleDragOver = (index) => {
    if (!isDragging || draggedIndex === null) return;
    const newBanners = [...banners];
    const draggedBanner = newBanners[draggedIndex];
    newBanners.splice(draggedIndex, 1);
    newBanners.splice(index, 0, draggedBanner);
    setBanners(newBanners);
    setDraggedIndex(index);
  };

  const handleSavePositions = async () => {
    try {
      console.log(banners.map(banner => banner.id));
      await actualizarPosicioneServicio(banners.map(banner => banner.id));
      console.log("Posiciones guardadas con éxito.");
    } catch (error) {
      console.log("Error al guardar las posiciones:", error);
    }
    setIsDragging(false);
  };

  return (
    <div className="cardpublicidad">
      {Array.isArray(banners) &&
        banners.map((banner, index) => (
          <div
            key={banner.id}
            className="cardBanner"
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={() => handleDragOver(index)}
          >
            <div className="imgBanner"></div>
            <div className="positionBanner">
              <h2>#{banner.posicion}</h2>
              <h4>{banner.nombre_banner}</h4>
            </div>
          </div>
        ))}
      <button onClick={handleSavePositions} disabled={!isDragging}>
        Guardar Posiciones
      </button>
    </div>
  );
};

export default CardPublicidad;
