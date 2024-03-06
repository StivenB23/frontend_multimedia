import { useState } from "react";
import ModalTest from "../../components/ModalTest/ModalTest";
import "./ListSong.css";

const ListSong = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="listsong">
      <h2>Canciones</h2>
      <div className="searchSong">
        <input type="text" />
      </div>

      <div className="filters">
        <div className="filterState">
          <h5>Estado</h5>
          <img src="/src/assets/img/deploy.svg" />
        </div>

        <div className="filterRol">
          <h5>Rol</h5>
          <img src="/src/assets/img/deploy.svg" />
        </div>
      </div>

      <div className="cardSong">
        <div className="imgSong"></div>

        <div className="infoSong">
          <h4>Nombre Canción</h4>
          <div className="player">
            <img src="/src/assets/img/play.svg" />
          </div>
          <div
            className="addPlayList"
            onClick={() => setIsModalOpen(true)}
          ></div>
        </div>
      </div>

      <div className="ContenedorModal">
        <ModalTest
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        ></ModalTest>
      </div>
    </div>
  );
};

export default ListSong;
