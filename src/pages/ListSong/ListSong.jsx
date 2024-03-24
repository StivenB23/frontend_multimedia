import { useEffect, useState } from "react";
import { ModalSong } from "../../components/ModalSong";
import { obtenerContenidoMultimedia } from "../../services/contenidoMultimedia";
import { listarPlayListServicio } from "../../services/playListServicio";
import "./ListSong.css";

const ListSong = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contenidoMultimedia, setContenidoMultimedia] = useState([]);
  const [playList, setPlayList] = useState([]);
  const [selectedSongId, setSelectedSongId] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    obtenerContenidoMultimedia()
      .then((data) => {
        setContenidoMultimedia(data);
      })
      .catch((error) => {
        console.error("Error al obtener el contenido multimedia:", error);
      });

    listarPlayListServicio()
      .then((data) => {
        setPlayList(data);
      })
      .catch((error) => {
        console.error("Error al obtener las playlists:", error);
      });
  }, [searchTerm]);

  return (
    <div className="listsong">
      <h2>Canciones</h2>
      <div className="searchSong">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
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

      {contenidoMultimedia
        .filter(
          (item) =>
            item.tipo === "Song" &&
            item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((cancion) => (
          <div className="cardSong" key={cancion.id}>
            <div className="imgSong"></div>

            <div className="infoSong">
              <h4>{cancion.nombre}</h4>
              <div className="player">
                <img src="/src/assets/img/play.svg" />
              </div>
              <div
                className="addPlayList"
                onClick={() => {
                  setIsModalOpen(true);
                  setSelectedSongId([cancion.nombre, cancion.id]);
                }}></div>
            </div>
          </div>
        ))}

      <div className="ContenedorModal">
        <ModalSong
          playlists={playList}
          isOpen={isModalOpen}
          selectedSongId={selectedSongId}
          closeModal={() => setIsModalOpen(false)}></ModalSong>
      </div>
    </div>
  );
};

export default ListSong;
