import { useEffect, useState } from "react";
import "./ListPlayList.css";
import { listarPlayListServicio } from "../../services/playListServicio";
import {
  postUsuarioLista,
  getUsuarioLista,
} from "../../services/usuarioListaService";
import Swal from "sweetalert2";

const ListPlayList = () => {
  const [playList, setPlayList] = useState([]);
  const [savedPlayLists, setSavedPlayLists] = useState([]);

  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  const usuario_fk = userInfo.id;

  const handleAddToList = (playlistId) => {
    if (!isSaved(playlistId)) {
      Swal.fire({
        title: "¿Estás seguro de guardar esta lista?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Sí",
        cancelButtonText: "No",
        confirmButtonColor: "#CA2355",
        iconColor: "#CA2355",
        customClass: {
          confirmButton: "btn-custom-color",
        }
      }).then((result) => {
        if (result.isConfirmed) {
          const data = {
            usuario_fk,
            lista_reproduccion_fk: playlistId,
          };

          postUsuarioLista(data)
            .then(() => {
              Swal.fire({
                icon: "success",
                title: "Lista guardada correctamente",
                showConfirmButton: true,
                confirmButtonColor: "#CA2355",
                iconColor: "#CA2355",
                customClass: {
                  confirmButton: "btn-custom-color",
                }
              }).then(() => {
                window.location.reload();
              });
              setSavedPlayLists([...savedPlayLists, data]);
            })
            .catch((error) => {
              console.error("Error al guardar la lista:", error);
            });
        }
      });
    }
  };



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
        console.error("Error al obtener las playlists guardadas:", error);
      });
  }, []);

  const isSaved = (playlistId) => {
    return savedPlayLists.some(
      (item) =>
        item.lista_reproduccion_fk === playlistId &&
        item.usuario_fk === usuario_fk
    );
  };

  return (
    <div className="listplaylist">
      <h2>Listas de reproducción</h2>
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
        {playList.map((playlistItem, index) => (
          <div key={index} className="cardPlayL">
            <div className="imgPlaylist"></div>

            <div className="infoPlayL">
              <h4>{playlistItem.nombre}</h4>
              <div className="savePlayL">
                <button className="moreInformation">
                  Ver más <img src="/src/assets/img/ArrowRed.svg" alt="" />
                </button>
                <div
                  className="addPlayL"
                  onClick={() => handleAddToList(playlistItem.id)}
                  style={{
                    backgroundImage: isSaved(playlistItem.id)
                      ? "url('/src/assets/img/savePlayList2.svg')"
                      : "url('/src/assets/img/savePlayList1.svg')",
                    cursor: isSaved(playlistItem.id) ? "auto" : "pointer",
                  }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListPlayList;
