import { useState } from "react";
import "./FormPlayList.css";
import { crearPlayListServicio } from "../../services/playListServicio";
import { useEffect } from "react";
import { getGenerosService } from "../../services/generoService";
import { postUsuarioLista } from "../../services/usuarioListaService";
import Swal from "sweetalert2"; "sweetalert2";


const FormPlayList = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [generos, setGeneros] = useState([]);
  const [genero, setGenero] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const handleTextareaChange = (e) => {
    setCharacterCount(e.target.value.length);
  };

  const crearListaReproduccion = async (e) => {
    const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    const usuario_fk = userInfo.id;

    const listaReproduccion = {
      nombre: nombre,
      descripcion: descripcion,
      genero_fk: genero,
      usuario_fk: usuario_fk,
    };
    const response = await crearPlayListServicio(listaReproduccion);

    if (!response) {
      alert("Error en la creación de la lista de reproducción");
    }

    const data = {
      usuario_fk: usuario_fk,
      lista_reproduccion_fk: response.id,
    };

    const responseTwo = await postUsuarioLista(data);
    if (!responseTwo) {
      throw new Error("Error al asociar la lista de reproducción al usuario");
    }

    Swal.fire({
      icon: "success",
      title: "Lista de reproducción creada con éxito",
      showConfirmButton: true,
      confirmButtonColor: "#CA2355",
      iconColor: "#CA2355",
      customClass: {
        confirmButton: "btn-custom-color",
      }
    }).then(() => {
      window.location.reload();
    });
    
    return listaReproduccion;
  };

  useEffect(() => {
    getGenerosService()
      .then((data) => {
        setGeneros(data);
      })
      .catch((error) => {
        console.error("Error al obtener los géneros:", error);
      });
  }, []);

  return (
    <div className="formplaylist">
      <h1>
        Registrar <span className="textColorViolet">Lista de reproducción</span>
      </h1>
      <form>
        <div className="infoPlayList">
          <div className="firstInfo">
            <label htmlFor="">Nombre</label>
            <input
              type="text"
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Nombre lista de reproducción"
            />
          </div>

          <div className="secondInfo">
            <label htmlFor="">Género</label>
            <select value={genero} onChange={(e) => setGenero(e.target.value)}>
              <option value="">Seleccionar</option>
              {generos.length > 0 &&
                generos.map((genero) => (
                  <option key={genero.id} value={genero.id}>
                    {genero.nombre}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <label htmlFor="">Escribe una breve descripción</label>

        <div className="contentSolicitud">
          <textarea
            className="content"
            rows="4"
            cols="50"
            maxLength="300"
            onChange={(e) => {
              handleTextareaChange(e);
              setDescripcion(e.target.value);
            }}></textarea>

          <h5 className="contadorCaracteres">{characterCount} / 300 Máximo</h5>
        </div>

        <div>
          <div className="savePlayList">
            <button
              type="button"
              className="btn"
              onClick={crearListaReproduccion}>
              Crear lista
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormPlayList;
