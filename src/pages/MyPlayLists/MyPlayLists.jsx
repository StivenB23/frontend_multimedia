import { useEffect, useState } from "react";
import "./MyPlayLists.css";
import { listarPlayListServicio } from "../../services/playListServicio";
import { getUsuarioLista } from "../../services/usuarioListaService";

const MyPlayLists = () => {
  const [playList, setPlayList] = useState([]);
  const [savedPlayLists, setSavedPlayLists] = useState([]);

  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));


  useEffect(() => {
    listarPlayListServicio()
      .then((data) => {
        setPlayList(data);
      })
      .catch((error) => {
        console.error("Error al obtener las playlists:", error);
      });

    getUsuarioLista()
      .then((data) => {
        setSavedPlayLists(data);
      })
      .catch((error) => {
        console.error("Error al obtener las playlists del usuario:", error);
      });
  }, []);

  return (
    <div className="listplaylist">
      <h2>Mis Listas de reproducción</h2>
      <div className="searchSong">
        <input type="text" />
      </div>

      <div className="filters">
        <div className="filterState">
          <h5>Categoría</h5>
          <img src="/src/assets/img/deploy.svg" />
        </div>

        <div className="filterRol">
          <h5>Género</h5>
          <img src="/src/assets/img/deploy.svg" />
        </div>
      </div>

      <div className="playLists">
        {playList
          .filter((playlistItem) =>
            savedPlayLists.some(
              (item) =>
                item.lista_reproduccion_fk === playlistItem.id &&
                item.usuario_fk === userInfo.id
            )
          )
          .map((playlistItem, index) => (
            <div key={index} className="cardPlayL">
              <div className="imgPlaylist"></div>

              <div className="infoPlayL">
                <h4>{playlistItem.nombre}</h4>
                <div className="savePlayL">
                  <button className="moreInformation">
                    Ver más <img src="/src/assets/img/ArrowRed.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
3;

export default MyPlayLists;
