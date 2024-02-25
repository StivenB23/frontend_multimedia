import "./FormCliente.css";
import { useForm } from "react-hook-form";
import { createUser } from "../../services/userService";
import { useState, useEffect } from "react";
import { obtenerSectorEmpresarial } from "../../services/sectorEmpresarialServicios";
import { crearSectorEmpresarial } from "../../services/sectorEmpresarialServicios";

const FormCliente = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [menuEmpresa, setMenuEmpresa] = useState(false);
  const [sectoresEmpresariales, setsectoresEmpresariales] = useState("");

  const handleChange = (event) => {
    if (event.target.value === "opcion1") {
      setMenuEmpresa(true);
    } else {
      setMenuEmpresa(false);
    }
  };

  const registrar = async (data) => {
    try {
      let {
        nombre,
        apellido,
        correo,
        telefono,
        nit,
        correoEmpresa,
        nombresEmpresa,
        telefonoEmpresa,
        sector_empresarial_fk,
        direccion,
      } = data;

      const cliente_data = {
        nombre,
        apellido,
        correo,
        telefono,
        rol: "Cliente",
      };
      const registrarservicio = await createUser(cliente_data);

      const {id} = registrarservicio.data

      if (registrarservicio && !menuEmpresa) {
        alert("Usuario registrado correctamente");
        reset();
      }

      if (menuEmpresa) {

        const empresa_data = {
          nit,
          nombre: nombresEmpresa,
          telefono: telefonoEmpresa,
          direccion,
          correo: correoEmpresa,
          usuario_fk: id,
          sector_empresarial_fk,
        };

        console.log("Esto es un objeto: " + JSON.stringify(empresa_data));

        const registrarEmpresa = await crearSectorEmpresarial(empresa_data);

        console.log("Insercion de empresa " + registrarEmpresa);

        if (registrarservicio && registrarEmpresa) {
          alert("Usuario y asignación de empresa registrado correctamente");
          reset();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const obtenerInformacion = async () => {
      try {
        const response = await obtenerSectorEmpresarial();
        setsectoresEmpresariales(response);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    obtenerInformacion();
  }, []);

  return (
    <div className={`formcliente ${menuEmpresa ? "alargarTarjeta" : ""}`}>
      <h1 className="titleFormCliente">
        Registrar&nbsp;<span className="clienteColor">cliente</span>
      </h1>
      <form>
        <div className="personalInformation">
          <div className="ContenedorUno">
            <label htmlFor="">Nombres</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="example@dominio.com"
              {...register("nombre", { required: "El nombre es obligatorio" })}
            />

            <label htmlFor="">Correo</label>
            <input
              type="email"
              name=""
              id=""
              placeholder="example@dominio.com"
              {...register("correo", { required: "El correo es obligatorio" })}
            />
          </div>

          <div className="ContenedorDos">
            <label htmlFor="">Apellidos</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="example@dominio.com"
              {...register("apellido", {
                required: "El apellido es obligatorio",
              })}
            />

            <label htmlFor="">Telefono</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="example@dominio.com"
              {...register("telefono", {
                required: "El telefono es obligatorio",
              })}
            />
          </div>
        </div>

        <label className="TitleEmpresaApartado">
          Registrar y asignar empresa
        </label>
        <div className="optionEmpresa">
          <div className="opcionUno">
            <input
              type="radio"
              name="opciones"
              value="opcion1"
              onChange={handleChange}
            />
            <label htmlFor="">Si</label>
          </div>

          <div className="opcionDos">
            <input
              type="radio"
              name="opciones"
              value="opcion2"
              onChange={handleChange}
            />
            <label htmlFor="">No</label>
          </div>
        </div>

        <div
          className={`buttonFormCliente ${
            menuEmpresa ? "hidden" : "buttonFormCliente"
          }`}>
          <button type="submit" onClick={handleSubmit(registrar)}>
            Registrar
          </button>
        </div>

        {menuEmpresa && (
          <>
            <h2 className="titleFormEmpresa">
              &nbsp;<span className="clienteColor">Empresa</span>
            </h2>
            <div className="FormEmpresa">
              <div className="ContenedorUno">
                <label htmlFor="">Nit</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="example@dominio.com"
                  {...register("nit")}
                />

                <label htmlFor="">Correo</label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="example@dominio.com"
                  {...register("correoEmpresa")}
                />

                <label htmlFor="">Sector empresarial</label>
                <select name="" id="" {...register("sector_empresarial_fk")}>
                  <option value="" disabled>
                    Seleccionar
                  </option>
                  {sectoresEmpresariales.map((sectoresEmpresarial) => (
                    <>
                      <option value={sectoresEmpresarial.id}>
                        {sectoresEmpresarial.nombre}
                      </option>
                    </>
                  ))}
                </select>
              </div>

              <div className="ContenedorDos">
                <label htmlFor="">Nombres</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="example@dominio.com"
                  {...register("nombresEmpresa")}
                />

                <label htmlFor="">Telefono</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="example@dominio.com"
                  {...register("telefonoEmpresa")}
                />
                <label htmlFor="">Dirección</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="example@dominio.com"
                  {...register("direccion")}
                />
                <div className="buttonFormEmpresa">
                  <button type="submit" onClick={handleSubmit(registrar)}>
                    Registrar
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default FormCliente;
