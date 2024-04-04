import { useState } from "react";
import { registrarBannerServicio } from "../../services/bannerServicio";
import "./FormBanner.css";

const FormBanner = () => {
  const [nombre, setNombre] = useState("");
  const [tipoPublicidad, setTipoPublicidad] = useState("");
  const [archivo, setArchivo] = useState("");
  const registrarBanner = async () => {
    try {
      const banner_data = {
        nombreBanner: nombre,
        posicion: 1,
        tipoPublicidad,
        archivo,
      };
      const response = await registrarBannerServicio(banner_data);
    
      if (!response){
        return "Error en registrar el banner"
      }

      Swal.fire({
        icon: "success",
        title: "Banner creado con éxito",
        showConfirmButton: true,
        confirmButtonColor: "#CA2355",
        iconColor: "#CA2355",
        customClass: {
          confirmButton: "btn-custom-color",
        }
      }).then(() => {
        window.location.reload();
      });
      reset();
    
    } catch (error) {
      console.log(error);
    }
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setArchivo(file);
  };

  return (
    <div className="formbanner">
      <form action="">

        <h2 className="titleBanner">Subir Archivo publicitario</h2>


        {/* APARTADO 1 */}

        <div className="bannerApartadoOne">
          <div className="NamePublicidad">
            <label htmlFor="">Nombre Publicidad</label>
            <input type="text" onChange={(e) => setNombre(e.target.value)} />
          </div>
          <div className="CargarArchivo">
            <label htmlFor="">Cargar Archivo</label>
            <input
              type="file"
              onChange={(e) => handleFileChange(e)}
              name=""
              id=""
            />
          </div>

        </div>

        {/* APARTADO 2 */}

        <div className="bannerApartadoTwo">
          <div className="TypePublicidad">
            <label htmlFor="">Tipo Archivo</label>

            <div className="imagen">
              <input
                type="radio"
                onChange={(e) => setTipoPublicidad("Imagen")}
                name="tipoPublicidad"
                id=""
              />
              Imagen
            </div>

            <div className="video">
              <input
                type="radio"
                onChange={(e) => setTipoPublicidad("Video")}
                name="tipoPublicidad"
                id=""
              />
              Video
            </div>
          </div>
          <div className="buttonBanner">
            <button type="button" onClick={registrarBanner}>
              Guardar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormBanner;
