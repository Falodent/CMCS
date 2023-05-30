import React from "react";
import DocDashboardLayout from "../DashLayout/DashboardLayout";
import "./AdDash.css";
import { useNavigate } from "react-router-dom";

const DocDashboard = () => {
  const navigate = useNavigate();

  return (
    <DocDashboardLayout state={1}>
      <div className="ad-flex">
        <div className="dash-welcome">
          <div className="welcome-info">
            <p className="student-name">Dr. Thomas Shelby</p>
            <p className="student-level">CUL/CMC/1234</p>
          </div>
        </div>

        <div className="pers-info">
          <p className="pers-header">Personal Information</p>

          <div className="details">
            <div className="dets-flex">
              <p className="info">Full Name:</p>
              <p className="answer">Thomas Shelby</p>
            </div>
            <div className="dets-flex">
              <p className="info">ID Number:</p>
              <p className="answer">CUL/CMC/1234</p>
            </div>
            <div className="dets-flex">
              <p className="info">Department</p>
              <p className="answer">Admissions</p>
            </div>
            <div className="dets-flex">
              <p className="info">Role:</p>
              <p className="answer">Ward Allocation</p>
            </div>
          </div>
        </div>

        <div className="grid-2">
          <div
            onClick={() => navigate("/doctor/students/new")}
            className="ad-card"
          >
            New
            <br />
            Student
            <br />
            Profile
          </div>

          <div onClick={() => navigate("/doctor/students")} className="ad-card">
            Edit
            <br />
            Student
            <br />
            Profile
          </div>
        </div>

        <div className="medical-record">
          <p className="pers-header">Recent Patient Records</p>

          <div className="medical-table">
            <div className="medical-head">
              <p className="med-head">Mat No.</p>
              <p className="med-head">Description</p>
              <p className="med-head">Prescription</p>
              <p className="med-head">Date</p>
            </div>

            <div className="medical-head">
              <p
                className="med-text pointer"
                onClick={() => navigate("/doctor/students/profile")}
              >
                20/7321
              </p>
              <p className="med-text">Fever and Migraine</p>
              <p className="med-text">Drugs</p>
              <p className="med-text">25/5/2023</p>
            </div>

            <div className="medical-head">
              <p
                className="med-text pointer"
                onClick={() => navigate("/doctor/students/profile")}
              >
                20/6906
              </p>
              <p className="med-text">Headache, Heart burn and fever</p>
              <p className="med-text">Drugs</p>
              <p className="med-text">25/5/2023</p>
            </div>

            <div className="medical-head">
              <p
                className="med-text pointer"
                onClick={() => navigate("/doctor/students/profile")}
              >
                19/2321
              </p>
              <p className="med-text">Malaria</p>
              <p className="med-text">Injections and Drugs</p>
              <p className="med-text">26/5/2023</p>
            </div>

            <div className="medical-head">
              <p
                className="med-text pointer"
                onClick={() => navigate("/doctor/students/profile")}
              >
                21/8878
              </p>
              <p className="med-text">Body weakness</p>
              <p className="med-text">Drips</p>
              <p className="med-text">26/5/2023</p>
            </div>

            <div className="medical-head">
              <p
                className="med-text pointer"
                onClick={() => navigate("/doctor/students/profile")}
              >
                22/12233
              </p>
              <p className="med-text">Headache and fever</p>
              <p className="med-text">Drugs</p>
              <p className="med-text">27/5/2023</p>
            </div>
          </div>
        </div>
      </div>
    </DocDashboardLayout>
  );
};

export default DocDashboard;
