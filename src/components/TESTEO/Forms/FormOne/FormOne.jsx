import { useForm } from "react-hook-form";
import "./FormOne.css";
import { useRegFormcontext } from "../../Providers/RegFormsProvidex";
import { useNavigate } from "react-router-dom";

const FormOne = ({}) => {
  const [, dispatch] = useRegFormcontext();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
  });

  const obSubmit = (values) => {
    if (isValid) {
      dispatch({
        type: "UPDATE_USER_INFO",
        data: {
          nombres: values.nombres,
          apellidos: values.apellidos,
          correo: values.correo,
        },
      });
      navigate("/formMultiStep/formTwo");
    }
  };

  return (
    <div className="formone">
      <form onSubmit={handleSubmit(obSubmit)}>
        <label htmlFor="">Nombre</label>
        <input type="text" {...register("nombres")} />
        <label htmlFor="">Apellidos</label>
        <input type="text" {...register("apellidos")} />
        <label htmlFor="">Email</label>
        <input type="email" {...register("correo")} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default FormOne;
