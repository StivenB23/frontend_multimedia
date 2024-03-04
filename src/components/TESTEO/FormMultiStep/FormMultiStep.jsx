import { Outlet } from "react-router-dom";
import ContentForm from "../ContentForm/ContentForm";
import { FormOne } from "../Forms/FormOne";
import { FormTwo } from "../Forms/FormTwo";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./FormMultiStep.css";
import { RegFormProvider } from "../Providers/RegFormsProvidex";

const FormMultiStep = ({}) => {
  return (
    <RegFormProvider>
      <div className="formmultistep">
        <div className="columnaUno">
          <ProgressBar></ProgressBar>
          <Outlet />
        </div>

        <div className="columnaDos">
          <ContentForm></ContentForm>
        </div>
      </div>
    </RegFormProvider>
  );
};

export default FormMultiStep;
