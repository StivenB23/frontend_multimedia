import { useState } from "react";
import "./ModalSolicitud.css";


const ModalSolicitud = ({ isOpen, closeModal }) => {

  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      closeModal();
    }, 500);
  };

  if (!isOpen && !isClosing) return null;

  return <div className="modalsolicitud">
    
    <h1>ESTO ES UNA MODAL</h1>
    
    </div>;
};

export default ModalSolicitud;
