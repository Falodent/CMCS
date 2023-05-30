import React from "react";
import DocDashboardLayout from "../DashLayout/DashboardLayout";
import { useNavigate } from "react-router-dom";

const Records = () => {
  const navigate = useNavigate();
  return (
    <DocDashboardLayout state={3}>
      <div className="medical-record">
        <p className="pers-header">Patient Records</p>

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
            <p className="med-text">Headache, Heart burn and fever</p>
            <p className="med-text">Drugs</p>
            <p className="med-text">25/5/2023</p>
          </div>

          <div className="medical-head">
            <p
              className="med-text pointer"
              onClick={() => navigate("/doctor/students/profile")}
            >
              22/20233
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
    </DocDashboardLayout>
  );
};

export default Records;
