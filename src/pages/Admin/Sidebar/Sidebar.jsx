import React from "react";
import "./Sidebar.css";
import Logo from "../../../assets/Caleb.png";
import DashboardIcon from "../../../assets/svg/dashboard";
import SettingsIcon from "../../../assets/svg/settings";
import { Link, useNavigate } from "react-router-dom";
import AdStudentIcon from "../../../assets/svg/adstud";
import AdDoctorIcon from "../../../assets/svg/addoc";

const AdSidebar = ({state}) => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="side-container">
        <img src={Logo} alt="" className="side-logo" />

        <div className="side-links">

          <Link to="/admin/dashboard" className={`${state === 1 ? "side-flex active": "side-flex"}`}>
            <DashboardIcon />
            Dashboard
          </Link>

          <Link to="/admin/students" className={`${state === 2 ? "side-flex active": "side-flex"}`}>
            <AdStudentIcon />
            Students
          </Link>

          <Link to="/admin/doctors" className={`${state === 3 ? "side-flex active": "side-flex"}`}>
            <AdDoctorIcon />
            Doctors
          </Link>

          <Link to="/admin/settings" className={`${state === 4 ? "side-flex active": "side-flex"}`}>
            <SettingsIcon />
            Settings
          </Link>

        </div>

        <button className="logout" onClick={() => navigate("/")}>
          Logout
        </button>

      </div>
    </div>
  );
};

export default AdSidebar;
