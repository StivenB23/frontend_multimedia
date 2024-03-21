import "./Dashboard.css";
// import FormEmpresa from '../../../components/FormEmpresa/FormEmpresa';
// import ImagePerfil from '../../../assets/img/Perfil.svg'
import FormEmpresa from '../../../components/FormEmpresa/FormEmpresa';

// import FormCliente from '../../../components/FormCliente/FormCliente';
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { useEffect } from "react";
// import { FormContentMultimedia } from '../../../components/FormContentMultimedia';
// import FormPackage from '../../../components/FormPackage/FormPackage';

const Dashboard = () => {
	const navegate = useNavigate();
	useEffect(() => {
    if (sessionStorage.getItem('userInfo') == null) {
      navegate("/login")
    }
	}, [])
  // useEffect(() => {
  // 	navegate("/dashboard")
  // }, [])

  return (
    <main className="dashboard">
      <Sidebar />
      <section className="sectionPanel">
        {/* <div className="navbar">
          <div className="iconContainer">
            <span className="iconSetting"></span>
          </div>
        </div> */}

        {/* <FormEmpresa />  */}

        {/* <FormCliente></FormCliente> */}
        {/* <FormContentMultimedia /> */}
        {/* <FormPackage /> */}
        <Outlet />
      </section>
    </main>
  );
};

export default Dashboard;
