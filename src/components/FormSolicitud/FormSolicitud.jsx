import "./FormSolicitud.css";
import ModalSolicitud from "../ModalSolicitud/ModalSolicitud";
import { useState } from "react";

const FormSolicitud = ({}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="formsolicitud">
      <h2>Solicitudes</h2>

      <div className="crearSolicitud">
        <button onClick={() => setIsModalOpen(true)}>Crear solicitud</button>
      </div>

      <div className="searchSolicitud">
        <input type="text" />
      </div>

      <div className="ContenedorModal">
        <ModalSolicitud
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        ></ModalSolicitud>
      </div>
    </div>
  );
};

export default FormSolicitud;
