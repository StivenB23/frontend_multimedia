import App from "../App" // Componente de prueba
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/layout/Dashboard/Dashboard";
import DashboardTest from "../pages/DashboardTest/DashboardTest";

const MultimediaRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/dashboardTest" element={<DashboardTest/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MultimediaRoutes;
