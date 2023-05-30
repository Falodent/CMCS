import React from "react";
import AdDashboardLayout from "../../DashLayout/DashboardLayout";
import { useNavigate } from "react-router-dom";

const DocProfile = () => {
  const navigate = useNavigate();
  return (
    <AdDashboardLayout state={3}>
      <div className="student-dash">
        <div className="back m-5">
          <div onClick={() => navigate("/admin/doctors")} className="back-link">
            {`<`} Back
          </div>
        </div>

        <div className="dash-welcome">
          <div className="welcome-info">
            <p className="student-name">Dr. Thomas Shelby</p>
            <p className="student-level">CUL/CMC/1234</p>
          </div>
        </div>
        <div className="pers-info">
          <div className="st-flex">
            <p className="pers-header">Personal Information</p>
            <div
              className="st-edit"
              onClick={() => navigate("/admin/doctors/edit")}
            >
              Edit
            </div>
          </div>

          <div className="details">
            <div className="dets-flex">
              <p className="info">Title:</p>
              <p className="answer">Dr.</p>
            </div>
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
                onClick={() => navigate("/admin/students/profile")}
              >
                20/7321
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
                20/7321
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
                20/7321
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
                20/7321
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
                20/7321
              </p>
              <p className="med-text">Headache, Heart burn and fever</p>
              <p className="med-text">Drugs</p>
              <p className="med-text">25/5/2023</p>
            </div>
          </div>
        </div>
      </div>
    </AdDashboardLayout>
  );
};

export default DocProfile;
