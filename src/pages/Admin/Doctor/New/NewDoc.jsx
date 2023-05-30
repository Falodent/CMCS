import React from "react";
import AdDashboardLayout from "../../DashLayout/DashboardLayout";
import { useNavigate } from "react-router-dom";

const NewDoc = () => {
  const navigate = useNavigate();

  return (
    <AdDashboardLayout state={3}>
      <div className="ad-stud">
        <div className="back m-5">
          <div onClick={() => navigate("/admin/doctors")} className="back-link">
            {`<`} Back
          </div>
        </div>

        <div className="stud-new">
          <p className="student-name">Create New Doctor</p>
          <form className="new-form">
            <p className="pers-header">Personal Information</p>

            <div className="form-grid">
              <label className="form-lab">
                Title
                <select name="Title" id="Title" className="form-inp sel" required>
                  <option value="" selected disabled>
                    Select ID
                  </option>
                  <option value="Dr.">Dr</option>
                  <option value="Nurse">Nurse</option>
                </select>
              </label>

              <label className="form-lab">
                Full Name
                <input
                  type="text"
                  name="Name"
                  className="form-inp"
                  placeholder="Full Name"
                  required
                />
              </label>
            </div>

            <div className="form-grid">
              <label className="form-lab">
                ID Number
                <input
                  type="text"
                  name="IdNo"
                  className="form-inp"
                  placeholder="ID Number"
                  required
                />
              </label>

              <label className="form-lab">
                Department
                <select
                  name="Department"
                  id="Department"
                  className="form-inp sel"
                  required
                >
                  <option value="" selected disabled>
                    Select Department
                  </option>
                  <option value="Admissions">Admissions</option>
                  <option value="Emergency">Emergency</option>
                  <option value="Laboratory">Laboratory</option>
                  <option value="Records">Records</option>
                  <option value="Pharmacy">Pharmacy</option>
                </select>
              </label>
            </div>

            <button type="submit" className="submit-btn m-3">
              Create
            </button>
          </form>
        </div>
      </div>
    </AdDashboardLayout>
  );
};

export default NewDoc;
