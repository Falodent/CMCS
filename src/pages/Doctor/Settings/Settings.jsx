import React, { useState } from "react";
import DocDashboardLayout from "../DashLayout/DashboardLayout";

const DocSettings = () => {
  const [opass, setOpass] = useState("");
  const [npass, setNpass] = useState("");
  const [cpass, setCpass] = useState("");

  return (
    <DocDashboardLayout state={4}>
      <div className="profile-body">
        <div className="dash-welcome">
          <div className="welcome-info">
            <p className="student-name">Dr. Thomas Shelby</p>
            <p className="student-level">CUL/CMC/1234</p>
          </div>
        </div>

        <div className="pers-info">
          <p className="pers-header">Edit Security Information</p>
          <form className="set-form">
            <label htmlFor="opass" className="set-label">
              Current Password
              <input
                type="text"
                name="cpass"
                placeholder="********"
                value={opass}
                onChange={(e) => setOpass(e.target.value)}
              />
            </label>

            <label htmlFor="npass" className="set-label">
              New Password
              <input
                type="text"
                name="npass"
                placeholder="********"
                value={npass}
                onChange={(e) => setNpass(e.target.value)}
              />
            </label>

            <label htmlFor="cpass" className="set-label">
              Confirm Password
              <input
                type="text"
                name="cpass"
                placeholder="********"
                value={cpass}
                onChange={(e) => setCpass(e.target.value)}
              />
            </label>

            <button className="submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </DocDashboardLayout>
  );
};

export default DocSettings;
