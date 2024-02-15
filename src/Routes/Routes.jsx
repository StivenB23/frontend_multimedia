import App from "../App"; // Componente de prueba
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/layout/Dashboard/Dashboard";
import { Login } from "../pages/Login";
import Panel from "../pages/Panel/Panel";
import ListPackage from "../pages/ListPackage/ListPackage";

const MultimediaRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />}></Route> */}
        <Route path="/" element={<Dashboard />}>
          <Route path="/dashboard" element={<Panel />}></Route>
          <Route path="/paquetes" element={<ListPackage />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MultimediaRoutes;
