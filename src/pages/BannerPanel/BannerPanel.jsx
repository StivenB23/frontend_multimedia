import "./BannerPanel.css";

import FormBanner from "../../components/FormBanner/FormBanner";
import CardPublicidad from "../../components/CardPublicidad/CardPublicidad";

const BannerPanel = () => {
  return (
    <div className="bannerpanel">
      <h2 className="TituloBannerComponente">Banner</h2>
      <FormBanner />
      <h2 className="TituloBannerComponente">Posición publicidad</h2>
      <CardPublicidad/>
    </div>
  );
};

export default BannerPanel;
