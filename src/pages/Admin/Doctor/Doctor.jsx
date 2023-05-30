import React from "react";
import AdDashboardLayout from "../DashLayout/DashboardLayout";
import AdDoctorIcon from "../../../assets/svg/addoc";
import { useNavigate } from "react-router-dom";

const AdDoctor = () => {
  const navigate = useNavigate();

  return (
    <AdDashboardLayout state={3}>
      <div className="ad-stud">
        <div className="ad-search">
          <div className="st-flex">
            <p className="student-name">Doctor Portal</p>
            <button
              type="button"
              onClick={() => navigate("/admin/doctors/new")}
              className="search-btn"
            >
              New
            </button>
          </div>

          <div className="ad-nav">
            <div className="search-bar">
              <AdDoctorIcon />
              <input
                type="text"
                placeholder="Enter ID Number"
                className="mat-ad"
              />
            </div>
            <button type="submit" className="search-btn">
              Search
            </button>
          </div>

          <div className="search-welcome">
            <div className="welcome-info">
              <p className="student-name">Dr. Thomas Shelby</p>
              <p className="student-level">CUL/CMC/1234</p>
            </div>

            <div className="search-col">
              <div
                onClick={() => navigate("/admin/doctors/profile")}
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

export default AdDoctor;
