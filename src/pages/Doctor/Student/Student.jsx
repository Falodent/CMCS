import React from "react";
import DocDashboardLayout from "../DashLayout/DashboardLayout";
import "./Student.css";
import AdStudentIcon from "../../../assets/svg/adstud";
import { useNavigate } from "react-router-dom";

const DocStudent = () => {
  const navigate = useNavigate();

  return (
    <DocDashboardLayout state={2}>
      <div className="ad-stud">
        <div className="ad-search">
          <div className="st-flex">
            <p className="student-name">Student Portal</p>
            <button
              type="button"
              onClick={() => navigate("/doctor/students/new")}
              className="search-btn"
            >
              New
            </button>
          </div>

          <div className="ad-nav">
            <div className="search-bar">
              <AdStudentIcon />
              <input
                type="text"
                placeholder="Enter Matric Number"
                className="mat-ad"
              />
            </div>
            <button type="submit" className="search-btn">
              Search
            </button>
          </div>

          <div className="search-welcome">
            <div className="welcome-info">
              <p className="student-name">Falola Olamide David</p>
              <p className="student-level">20/7321</p>
            </div>

            <div
              onClick={() => navigate("/doctor/students/profile")}
              className="search-view"
            >
              View
            </div>
          </div>
        </div>
      </div>
    </DocDashboardLayout>
  );
};

export default DocStudent;
