import App from "../App" // Componente de prueba
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/layout/Dashboard/Dashboard";
import DashboardTest from "../pages/DashboardTest/DashboardTest";
import { Login } from "../pages/Login";


const MultimediaRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/dashboardTest" element={<DashboardTest/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MultimediaRoutes;
