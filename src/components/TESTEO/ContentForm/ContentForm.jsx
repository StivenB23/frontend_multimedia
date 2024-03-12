import { useRegFormcontext } from "../Providers/RegFormsProvidex";
import "./ContentForm.css";

const ContentForm = ({}) => {
  const [{ userInfo }] = useRegFormcontext();

  return (
    <div className="contentform">
      <h2>Perfil de usuario</h2>
      <hr />
      <h3>Datos comunes:</h3>
      <label>Nombre: {userInfo ? userInfo.nombres : ""}</label>
      <label>Apellido: {userInfo ? userInfo.apellidos : ""}</label>
      <h3>Descripción: {userInfo ? userInfo.descripcion : ""}</h3>
    </div>
  );
};

export default ContentForm;
