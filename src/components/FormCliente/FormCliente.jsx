import "./FormCliente.css";
import { useForm } from "react-hook-form";
import { createUser } from "../../services/userService";

const FormCliente = ({}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registrar = async (data) => {
    try {
      let { nombre, apellido, correo, telefono } = data;

      const cliente_data = {
        nombre,
        apellido,
        correo,
        telefono,
        rol: "Cliente",
      };
      const registrarservicio = await createUser(cliente_data);

      if (registrarservicio) {
        alert("Usuario registrado correctamente");
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="formcliente">
      <h1 className="titleFormCliente">
        Registrar&nbsp;<span class="clienteColor">cliente</span>
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
            <div className="buttonFormCliente">
              <button type="submit" onClick={handleSubmit(registrar)}>
                Registrar
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormCliente;
