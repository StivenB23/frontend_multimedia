import "./Panel.css";
import IconoPackage from "../../assets/img/iconoPackage.svg";
import iconoBigContentMultimedia from "../../assets/img/iconoBigContentMultimedia.svg";
import iconoUsers from "../../assets/img/iconoUsers.svg";
import { Link } from "react-router-dom";
import SubscriptionClient from "../SubscriptionClient/SubscriptionClient";
import FormPlayList from "../../components/FormPlayList/FormPlayList";
import FormEmpresa from "../../components/FormEmpresa/FormEmpresa";
import PromotionalBanner from "../../components/PromotionalBanner/PromotionalBanner";
import MyPlayListDashboard from "../../components/MyPlayListDashboard/MyPlayListDashboard";
import CardMessajeAlert from "../../components/CardMessajeAlert/CardMessajeAlert";
import CardSuscriptionClient from "../../components/CardSuscriptionClient/CardSuscriptionClient";
import { useEffect, useState } from "react";
import ModalTest from "../../components/ModalTest/ModalTest";
import Sidebar from "../../components/Sidebar/Sidebar";
const Panel = ({}) => {
  const [cambioClave, setcambioClave] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setcambioClave(
      JSON.parse(sessionStorage.getItem("userInfo")).primer_cambio_clave
    );
  }, []);

  console.log("ESTADO DE LA MODAL: " + isModalOpen);

  return (
    <div className={`containerPanel ${isModalOpen ? 'backgroundIsOpenModal' : ''}`}>

      <div className={`promotionalBanners ${isModalOpen ? 'blurEffect' : ''}`}>
        
        <PromotionalBanner 
          text={"¡Explora la innovación musical hoy mismo!"}
          link="/login"
        />
        <PromotionalBanner
          text={"¡Explora la innovación musical hoy mismo!"}
          background="backgroundPink"
        />
      </div>

      <div className={`MyPlayList ${isModalOpen ? 'blurEffect' : ''}`}>
      <MyPlayListDashboard/>
      </div>

      <div className={`information ${isModalOpen ? 'blurEffect' : ''}`}>
        <CardSuscriptionClient />
        {/* <CardMessajeAlert /> */}
        <CardMessajeAlert typeMessage="informationIncomplete" />
        {cambioClave == 0 && (
          <CardMessajeAlert type="info" typeMessage="changePassword" />
        )}
        {/* <CardMessajeAlert /> */}
      </div>

      {/* <FormEmpresa />  */}

      {/* <SubscriptionClient /> */}
      {/* <FormPlayList /> */}

      <button onClick={() => setIsModalOpen(true)}>OPRIMEME</button>

      <div className="ContenedorModal">
        <ModalTest
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        ></ModalTest>
      </div>
    </div>
  );
};

export default Panel;
