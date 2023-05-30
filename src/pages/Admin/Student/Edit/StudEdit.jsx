import React from "react";
import AdDashboardLayout from "../../DashLayout/DashboardLayout";
import { useNavigate } from "react-router-dom";

const AdStudEdit = () => {
  const navigate = useNavigate();

  return (
    <AdDashboardLayout state={2}>
      <div className="ad-stud">
        <div className="back m-5">
          <div
            onClick={() => navigate("/admin/students/profile")}
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
          <p className="student-name">Edit Student Profile</p>
          <form className="new-form">
            <p className="pers-header">Personal Information</p>

            <div className="form-grid">
              <label className="form-lab">
                Student Name
                <input
                  type="text"
                  name="Name"
                  className="form-inp"
                  placeholder="Student Name"
                />
              </label>

              <label className="form-lab">
                Matric Number
                <div className="form-blocked">20/7321</div>
              </label>
            </div>

            <div className="form-grid">
              <label className="form-lab">
                Sex
                <select name="Sex" id="Sex" className="form-inp sel">
                  <option value="" selected disabled>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </label>
              <label className="form-lab">
                Level
                <select name="Level" id="Level" className="form-inp sel">
                  <option value="" selected disabled>
                    Select Level
                  </option>
                  <option value="100">100L</option>
                  <option value="100">200L</option>
                  <option value="100">300L</option>
                  <option value="100">400L</option>
                </select>
              </label>
            </div>

            <div className="form-grid">
              <label className="form-lab">
                College
                <select name="College" id="College" className="form-inp sel">
                  <option value="" selected disabled>
                    Select College
                  </option>
                  <option value="CASMAS">CASMAS</option>
                  <option value="COPAS">COPAS</option>
                  <option value="COLENSMA">COLENSMA</option>
                  <option value="CUPRISA">CUPRISA</option>
                </select>
              </label>
              <label className="form-lab">
                Department
                <input
                  type="text"
                  name="Department"
                  className="form-inp"
                  placeholder="Enter Department"
                />
              </label>
            </div>

            <p className="pers-header">Medical Information</p>

            <div className="form-grid">
              <label className="form-lab">
                Height
                <input
                  type="text"
                  name="Height"
                  className="form-inp"
                  placeholder="Height in cm"
                />
              </label>
              <label className="form-lab">
                Weight
                <input
                  type="text"
                  name="Weight"
                  className="form-inp"
                  placeholder="Weight in kg"
                />
              </label>
            </div>

            <div className="form-grid">
              <label className="form-lab">
                Genotype
                <select name="Genotype" id="Genotype" className="form-inp sel">
                  <option value="" disabled>
                    Select Genotype
                  </option>
                  <option value="AA">AA</option>
                  <option value="AS">AS</option>
                  <option value="AC">AC</option>
                  <option value="SS">SS</option>
                  <option value="SC">SC</option>
                  <option value="CC">CC</option>
                </select>
              </label>
              <label className="form-lab">
                Blood Group
                <select name="Blood" id="Blood" className="form-inp sel">
                  <option value="" disabled>
                    Select Blood Group
                  </option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </label>
            </div>

            <div className="form-grid">
              <label className="form-lab">
                Allergies
                <input
                  type="text"
                  name="Allergies"
                  className="form-inp"
                  placeholder="Allergies"
                />
              </label>
              <label className="form-lab">
                Past Medical History
                <input
                  type="text"
                  name="History"
                  className="form-inp"
                  placeholder="Past Medical History"
                />
              </label>
            </div>

            <button type="submit" className="submit-btn m-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </AdDashboardLayout>
  );
};

export default AdStudEdit;
