import React, { useState } from "react";
import { añadirCanciónPlayListServicio } from "../../services/playListServicio";
import "./ModalSong.css";

const ModalSong = ({ playlists, isOpen, closeModal, selectedSongId }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [nombre, id] = selectedSongId;
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(null);

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
      }`}>
      <div className="modalSong">
        <div className="closeModalPlayList">
          <button onClick={handleClose}>X</button>
        </div>

        <h1>Añadir Canción a Playlist - {nombre}</h1>

        {playlists.map((playlist) => (
          <div className="cardPlayList" key={playlist.id}>
            <input
              type="radio"
              name="playlist"
              id={playlist.id}
              onChange={() => setSelectedPlaylistId(playlist.id)}
            />
            <h3>{playlist.nombre}</h3>
          </div>
        ))}

        <div className="newPlayList">
          <button type="button">Nueva Lista</button>
        </div>

        <button
          className="buttonPlayListSave"
          onClick={() => {
            if (!selectedPlaylistId) {
              alert("Por favor selecciona una playlist");
              return;
            }
            añadirCanciónPlayListServicio({
              lista_reproduccion_fk: selectedPlaylistId,
              contenido_multimedia_fk: id,
            })
              .then(() => {
                alert(
                  `Canción agregada correctamente a la lista ${
                    playlists.find(
                      (playlist) => playlist.id === selectedPlaylistId
                    ).nombre
                  }`
                );
                closeModal();
              })
              .catch((error) => {
                console.error(
                  "Error al añadir la canción a la playlist:",
                  error
                );
              });
          }}>
          Guardar
        </button>
      </div>
    </div>
  );
};

export default ModalSong;
