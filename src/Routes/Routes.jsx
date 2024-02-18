import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/layout/Dashboard/Dashboard";
import { Login } from "../pages/Login";
import Panel from "../pages/Panel/Panel";
import ListPackage from "../pages/ListPackage/ListPackage";
import BannerPanel from "../pages/BannerPanel/BannerPanel";
import FormPackage from "../components/FormPackage/FormPackage";
import FormCliente from "../components/FormCliente/FormCliente";

const MultimediaRoutes = () => {
  return (
    <BrowserRouter>
     <Routes>
        {/* <Route path="/" element={<App />}></Route> */}
        <Route path="/" element={<Dashboard />}>
          <Route path="/dashboard" element={<Panel />}></Route>
          <Route path="/paquetes" element={<ListPackage />}></Route>
          <Route path="/banner" element={<BannerPanel />}></Route>
          <Route path="/formpaquetes" element={<FormPackage />}></Route>
          <Route path="/formcliente" element={<FormCliente />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MultimediaRoutes;
