import "./CardPublicidad.css";
import { useEffect, useState } from "react";
import { listarBannerServicio } from "../../services/bannerServicio";

const CardPublicidad = () => {

const [banners, setBanners] = useState([])


 useEffect(() => {
    const bannersService = async () => {
      try {
        const response = await listarBannerServicio();
        setBanners(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    bannersService();
  }, []);

  console.log(banners);

  return (
    <div className="cardpublicidad">
      {Array.isArray(banners) && banners.map((banner) => (
        <div key={banner.id} className="cardBanner">
          <div className="imgBanner"></div>
          <div className="positionBanner">
            <h2>#{banner.posicion}</h2>
            <h4>{banner.nombreBanner}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardPublicidad;
