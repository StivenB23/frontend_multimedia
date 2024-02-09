import App from "../App" // Componente de prueba
import { BrowserRouter, Route, Routes } from "react-router-dom";

const MultimediaRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MultimediaRoutes;
