import React from "react";
import DocDashboardLayout from "../../DashLayout/DashboardLayout";
import { useNavigate } from "react-router-dom";

const Diagnosis = () => {
  const navigate = useNavigate();

  return (
    <DocDashboardLayout state={2}>
      <div className="ad-stud">
        <div className="back m-5">
          <div
            onClick={() => navigate("/doctor/students/profile")}
            className="back-link"
          >
            {`<`} Back
          </div>
        </div>

        <div className="search-welcome">
          <div className="welcome-info">
            <p className="student-name">Falola Olamide David</p>
            <p className="student-level">20/7321</p>
          </div>
        </div>

        <div className="stud-new">
          <p className="student-name">Diagnosis</p>
          <form className="new-form">
            <div className="form-grid">
              <label className="form-lab">
                Description
                <textarea
                  name="Description"
                  className="text-inp"
                  placeholder="Describe the student's complaint..."
                  required
                />
              </label>
              <label className="form-lab">
                Prescription
                <textarea
                  name="Prescription"
                  className="text-inp"
                  placeholder="Prescription made to the student..."
                  required
                />
              </label>
            </div>

            <button type="submit" className="submit-btn m-3">
              Diagnose
            </button>
          </form>
        </div>
      </div>
    </DocDashboardLayout>
  );
};

export default Diagnosis;
