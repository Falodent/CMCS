import React from "react";
import AdDashboardLayout from "../DashLayout/DashboardLayout";
import "./Student.css";
import AdStudentIcon from "../../../assets/svg/adstud";
import { useNavigate } from "react-router-dom";

const AdStudent = () => {
  const navigate = useNavigate();

  return (
    <AdDashboardLayout state={2}>
      <div className="ad-stud">
        <div className="ad-search">
          <div className="st-flex">
            <p className="student-name">Student Portal</p>
            <button
              type="button"
              onClick={() => navigate("/admin/students/new")}
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

            <div className="search-col">
              <div
                onClick={() => navigate("/admin/students/profile")}
                className="search-view"
              >
                View
              </div>
              <div className="search-del">Delete</div>
            </div>
          </div>
        </div>
      </div>
    </AdDashboardLayout>
  );
};

export default AdStudent;
