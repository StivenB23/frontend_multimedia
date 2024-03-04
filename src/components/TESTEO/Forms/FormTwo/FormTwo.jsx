import { useNavigate } from "react-router-dom";
import { useRegFormcontext } from "../../Providers/RegFormsProvidex";
import "./FormTwo.css";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const FormTwo = ({}) => {
  const [, dispatch] = useRegFormcontext();
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
        data: { descripcion: values.descripcion },
      });

      dispatch({ type: "CHANGE_PERCENT", data: { percent: 100 } });
    }
  };

  useEffect(() => {
    dispatch({ type: "CHANGE_PERCENT", data: { percent: 50 } });
  }, []);

  return (
    <div className="formtwo">
      <form onSubmit={handleSubmit(obSubmit)}>
        <label htmlFor="">Descripción</label>
        <input type="text" {...register("descripcion")} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default FormTwo;
