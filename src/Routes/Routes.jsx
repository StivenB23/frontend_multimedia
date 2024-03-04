import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/layout/Dashboard/Dashboard";
import { Login } from "../pages/Login";
import Panel from "../pages/Panel/Panel";
import ListPackage from "../pages/ListPackage/ListPackage";
import BannerPanel from "../pages/BannerPanel/BannerPanel";
import FormPackage from "../components/FormPackage/FormPackage";
import FormCliente from "../components/FormCliente/FormCliente";
import ListUsers from "../pages/ListUsers/ListUsers";
import Package from "../pages/Package/Package";
import SubscriptionClient from "../pages/SubscriptionClient/SubscriptionClient";
import ModalTest from "../components/ModalTest/ModalTest";
import { FormMultiStep } from "../components/TESTEO/FormMultiStep";

import { FormTwo } from "../components/TESTEO/Forms/FormTwo";
import { FormOne } from "../components/TESTEO/Forms/FormOne";

const MultimediaRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/dashboard" element={<Panel />}></Route>
          <Route path="/users" element={<ListUsers />}></Route>
          <Route path="/paquetes" element={<ListPackage />}></Route>
          <Route path="/banner" element={<BannerPanel />}></Route>
          <Route path="/paquete/:id" element={<Package />}></Route>
          <Route path="/formpaquetes" element={<FormPackage />}></Route>
          <Route path="/formcliente" element={<FormCliente />}></Route>
          <Route
            path="/mySubscription"
            element={<SubscriptionClient />}
          ></Route>
          <Route path="/modalTest" element={<ModalTest />}></Route>
          <Route path="/formMultiStep" element={<FormMultiStep />}>
            <Route path="formOne" element={<FormOne />}></Route>
            <Route path="formTwo" element={<FormTwo />}></Route>
          </Route>
        </Route>
        <Route exact path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MultimediaRoutes;
