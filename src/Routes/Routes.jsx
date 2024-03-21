import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/layout/Dashboard/Dashboard";
import { Login } from "../pages/Login";
import Panel from "../pages/Panel/Panel";
import ListPackage from "../pages/ListPackage/ListPackage";
import BannerPanel from "../pages/BannerPanel/BannerPanel";
import FormPackage from "../components/FormPackage/FormPackage";
import FormCliente from "../components/FormCliente/FormCliente";
import EditPerfil from "../pages/EditPerfil/EditPerfil";
import ListUsers from "../pages/ListUsers/ListUsers";
import Package from "../pages/Package/Package";
import SubscriptionClient from "../pages/SubscriptionClient/SubscriptionClient";

import { FormMultiStep } from "../components/TESTEO/FormMultiStep";

import { FormTwo } from "../components/TESTEO/Forms/FormTwo";
import { FormOne } from "../components/TESTEO/Forms/FormOne";
import ListSong from "../pages/ListSong/ListSong";
import FormSolicitud from "../components/FormSolicitud/FormSolicitud";
import ListPlayList from "../pages/ListPlayList/ListPlayList";

const MultimediaRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/dashboard" element={<Panel />}></Route>
          <Route path="/users" element={<ListUsers />}></Route>
          <Route path="/paquetes" element={<ListPackage />}></Route>
          <Route path="/banner" element={<BannerPanel />}></Route>
          <Route path="/myPerfil" element={<EditPerfil/>}></Route>
          <Route path="/paquete/:id" element={<Package />}></Route>
          <Route path="/formpaquetes" element={<FormPackage />}></Route>
          <Route path="/formsolicitudes" element={<FormSolicitud />}></Route>
          <Route path="/playlist" element={<ListPlayList />}></Route>
          <Route path="/formcliente" element={<FormCliente />}></Route>
          <Route path="/songs" element={<ListSong />}></Route>
          <Route
            path="/mySubscription"
            element={<SubscriptionClient />}
          ></Route>

          <Route path="/formMultiStep" element={<FormMultiStep />}>
            <Route path="formOne" element={<FormOne />}></Route>
            <Route path="formTwo" element={<FormTwo />}></Route>
          </Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MultimediaRoutes;
