import App from "../App" // Componente de prueba
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/layout/Dashboard/Dashboard";

const MultimediaRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MultimediaRoutes;
