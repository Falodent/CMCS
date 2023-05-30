import React from "react";
import "./Sidebar.css";
import Logo from "../../../assets/Caleb.png";
import DashboardIcon from "../../../assets/svg/dashboard";
import SettingsIcon from "../../../assets/svg/settings";
import { Link, useNavigate } from "react-router-dom";
import AdStudentIcon from "../../../assets/svg/adstud";
import RecordsIcon from "../../../assets/svg/records";

const DocSidebar = ({ state }) => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="side-container">
        <img src={Logo} alt="" className="side-logo" />

        <div className="side-links">
          <Link
            to="/doctor/dashboard"
            className={`${state === 1 ? "side-flex active" : "side-flex"}`}
          >
            <DashboardIcon />
            Dashboard
          </Link>

          <Link
            to="/doctor/students"
            className={`${state === 2 ? "side-flex active" : "side-flex"}`}
          >
            <AdStudentIcon />
            Students
          </Link>

          <Link
            to="/doctor/records"
            className={`${state === 3 ? "side-flex active" : "side-flex"}`}
          >
            <RecordsIcon />
            Records
          </Link>

          <Link
            to="/doctor/settings"
            className={`${state === 4 ? "side-flex active" : "side-flex"}`}
          >
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

export default DocSidebar;
