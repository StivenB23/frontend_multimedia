import React, { useState } from "react";
import "./ModalTest.css";

const ModalTest = ({ isOpen, closeModal }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      closeModal();
    }, 500);
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div
      className={`modal-background ${
        isClosing ? "modalAnimationOut" : "modalAnimation"
      }`}
    >
      <div className="modaltest">
        <div className="closeModalPlayList">
          <button onClick={handleClose}>X</button>
        </div>

        <h1>Añadir Canción a Playlist</h1>

        <div className="cardPlayList">
          <input type="radio" name="" id="" />
          <h3>
            Nombre Lista de <br /> reproducción
          </h3>
        </div>

        <div className="newPlayList">
          <button type="button">Nueva Lista</button>
        </div>

        <button className="buttonPlayListSave">Guardar</button>
      </div>
    </div>
  );
};

export default ModalTest;
