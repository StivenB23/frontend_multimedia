import { useRegFormcontext } from "../Providers/RegFormsProvidex";
import "./ProgressBar.css";

const ProgressBar = ({}) => {
  const [state] = useRegFormcontext();

  return (
    <div className="progressbar">
      <div
        className="progressbar-filled"
        style={{ width: `${state.percent}%` }}
        aria-valuemin={state.percent}
        aria-valuemax={state.percent}
      >
        {state.percent}%
      </div>
    </div>
  );
};

export default ProgressBar;
