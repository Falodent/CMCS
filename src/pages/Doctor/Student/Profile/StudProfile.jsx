import React from "react";
import DocDashboardLayout from "../../DashLayout/DashboardLayout";
import { useNavigate } from "react-router-dom";

const DocStudProfile = () => {
  const navigate = useNavigate();
  return (
    <DocDashboardLayout state={2}>
      <div className="student-dash">
        <div className="back m-5">
          <div
            onClick={() => navigate("/doctor/students")}
            className="back-link"
          >
            {`<`} Back
          </div>
        </div>

        <div className="dash-welcome">
          <div className="welcome-info">
            <p className="student-name">Falola Olamide David</p>
            <p className="student-level">20/7321</p>
          </div>

          <button
            onClick={() => navigate("/doctor/students/diagnosis")}
            type="button"
            className="search-view"
          >
            Diagnosis
          </button>
        </div>

        <div className="student-info">
          <div className="pers-info">
            <div className="st-flex">
              <p className="pers-header">Personal Information</p>
              <div
                className="st-edit"
                onClick={() => navigate("/doctor/students/edit")}
              >
                Edit
              </div>
            </div>

            <div className="details">
              <div className="dets-flex">
                <p className="info">Full Name:</p>
                <p className="answer">Falola Olamide David</p>
              </div>
              <div className="dets-flex">
                <p className="info">Matric Number:</p>
                <p className="answer">20/7321</p>
              </div>
              <div className="dets-flex">
                <p className="info">Sex:</p>
                <p className="answer">Male</p>
              </div>
              <div className="dets-flex">
                <p className="info">Level:</p>
                <p className="answer">400</p>
              </div>
              <div className="dets-flex">
                <p className="info">College:</p>
                <p className="answer">COPAS</p>
              </div>
              <div className="dets-flex">
                <p className="info">Department:</p>
                <p className="answer">Computer Science</p>
              </div>
            </div>
          </div>

          <div className="pers-info">
            <div className="st-flex">
              <p className="pers-header">Medical Information</p>
              <div
                className="st-edit"
                onClick={() => navigate("/doctor/students/edit")}
              >
                Edit
              </div>
            </div>

            <div className="details">
              <div className="dets-flex">
                <p className="info-2">Height:</p>
                <p className="answer">188cm</p>
              </div>
              <div className="dets-flex">
                <p className="info-2">Weight:</p>
                <p className="answer">78kg</p>
              </div>
              <div className="dets-flex">
                <p className="info-2">Genotype:</p>
                <p className="answer">AS</p>
              </div>
              <div className="dets-flex">
                <p className="info-2">Blood Group:</p>
                <p className="answer">O+</p>
              </div>
              <div className="dets-flex">
                <p className="info-2">Allergies:</p>
                <p className="answer">None</p>
              </div>
              <div className="dets-flex">
                <p className="info-2">Past Medical History:</p>
                <p className="answer">None</p>
              </div>
            </div>
          </div>
        </div>

        <div className="medical-record">
          <p className="pers-header">Medical Records</p>

          <div className="medical-table">
            <div className="medical-second">
              <p className="med-head">Date</p>
              <p className="med-head">Description</p>
              <p className="med-head">Prescription</p>
            </div>

            <div className="medical-second">
              <p className="med-text">25/5/2023</p>
              <p className="med-text">Headache, Heart burn and fever</p>
              <p className="med-text">Drugs</p>
            </div>

            <div className="medical-second">
              <p className="med-text">22/5/2023</p>
              <p className="med-text">Headache, Heart burn and fever</p>
              <p className="med-text">Drugs</p>
            </div>
          </div>
        </div>
      </div>
    </DocDashboardLayout>
  );
};

export default DocStudProfile;
