import { useState } from "react";
import "./ModalSolicitud.css";

const ModalSolicitud = ({ isOpen, closeModal }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [characterCount, setCharacterCount] = useState(0);
  const [menu, setMenu] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      closeModal();
      
      setCharacterCount(0);
      setMenu(false);

    }, 500);
  };

  if (!isOpen && !isClosing) return null;

  const handleTextareaChange = (e) => {
    setCharacterCount(e.target.value.length);
  };

  const handleSelectionChange = (e) => {
    setMenu(e.target.value === "No");
  };

  return (
    <div
      className={`modalsolicitud ${
        isClosing ? "modalAnimationOut" : "modalAnimation"
      }`}
    >
      <div className="modalInformation">
        <div className="closeModalSolicitud">
          <button onClick={handleClose}>X</button>
        </div>

        <h1>Generar Solicitud</h1>

        <div className="informationOptions">
          <div className="tipoSolicitud">
            <label>Selecciona el tipo: </label>
          </div>

          <div className="tipoOptions">
            <div className="optionOne">
              <input type="radio" name="tipo" />
              <label htmlFor="">Jingle</label>
            </div>

            <div className="optionTwo">
              <input type="radio" name="tipo" />
              <label htmlFor="">Promoción</label>
            </div>
          </div>

          <div className="Solicitud">
            <label>Tienes clara tu solicitud: </label>
          </div>

          <div className="SolicitudOptions">
            <div className="optionOne">
              <input
                type="radio"
                name="seleccion"
                value="Si"
                onChange={handleSelectionChange}
              />
              <label htmlFor="">Si</label>
            </div>

            <div className="optionTwo">
              <input
                type="radio"
                name="seleccion"
                value="No"
                onChange={handleSelectionChange}
              />
              <label htmlFor="">No</label>
            </div>
          </div>
        </div>

        <label className="titleContentSolicitud">
          Escribe el contenido del mensaje
        </label>

        <div className="contentSolicitud">
          <textarea
            className="content"
            rows="4"
            cols="50"
            maxlength="300"
            onChange={handleTextareaChange}
          ></textarea>

          <h5 className="contadorCaracteres">{characterCount} / 300 Máximo</h5>
        </div>

        {menu && (
          <>
            <div className="menu">
              
              <label className="menuOption">
                ¿Qué pretendes con este Jingle?
              </label>

              <select name="select">
                <option value="value1" selected>
                  Seleccionar
                </option>
                <option value="value2">Value 2</option>
                <option value="value3">Value 3</option>
              </select>

            </div>
          </>
        )}

        <button className="buttonSolicitudSave">Generar</button>
      </div>
    </div>
  );
};

export default ModalSolicitud;
