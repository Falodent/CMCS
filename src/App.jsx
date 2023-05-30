import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import StudentLogin from "./pages/Student/Login/StudentLogin";
import DoctorLogin from "./pages/Doctor/Login/DoctorLogin";
import AdminLogin from "./pages/Admin/Login/AdminLogin";
import Dashboard from "./pages/Student/Dashboard/Dashboard";
import Ambulance from "./pages/Student/Ambulance/Ambulance";
import Profile from "./pages/Student/Profile/Profile";
import Settings from "./pages/Student/Settings/Settings";
import AdDashboard from "./pages/Admin/Dashboard/Dashboard";
import AdStudent from "./pages/Admin/Student/Student";
import AdDoctor from "./pages/Admin/Doctor/Doctor";
import AdSettings from "./pages/Admin/Settings/Settings";
import StudProfile from "./pages/Admin/Student/Profile/StudProfile";
import DocProfile from "./pages/Admin/Doctor/Profile/DocProfile";
import NewStud from "./pages/Admin/Student/New/NewStud";
import NewDoc from "./pages/Admin/Doctor/New/NewDoc";
import DocDashboard from "./pages/Doctor/Dashboard/Dashboard";
import DocStudent from "./pages/Doctor/Student/Student";
import DocNewStud from "./pages/Doctor/Student/New/NewStud";
import DocStudProfile from "./pages/Doctor/Student/Profile/StudProfile";
import DocSettings from "./pages/Doctor/Settings/Settings";
import Records from "./pages/Doctor/Records/Records";
import StudEdit from "./pages/Doctor/Student/Edit/StudEdit";
import Diagnosis from "./pages/Doctor/Student/Diagnosis/Diagnosis";
import AdStudEdit from "./pages/Admin/Student/Edit/StudEdit";
import AdDocEdit from "./pages/Admin/Doctor/Edit/DocEdit";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student" element={<StudentLogin />} />
        <Route path="/student/dashboard" element={<Dashboard />} />
        <Route path="/student/ambulance" element={<Ambulance />} />
        <Route path="/student/profile" element={<Profile />} />
        <Route path="/student/settings" element={<Settings />} />

        <Route path="/doctor" element={<DoctorLogin />} />
        <Route path="/doctor/dashboard" element={<DocDashboard />} />
        <Route path="/doctor/students" element={<DocStudent />} />
        <Route path="/doctor/students/new" element={<DocNewStud />} />
        <Route path="/doctor/students/edit" element={<StudEdit />} />
        <Route path="/doctor/students/diagnosis" element={<Diagnosis />} />
        <Route path="/doctor/students/profile" element={<DocStudProfile />} />
        <Route path="/doctor/records" element={<Records />} />
        <Route path="/doctor/settings" element={<DocSettings />} />

        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdDashboard />} />
        <Route path="/admin/students" element={<AdStudent />} />
        <Route path="/admin/students/new" element={<NewStud />} />
        <Route path="/admin/students/edit" element={<AdStudEdit />} />
        <Route path="/admin/students/profile" element={<StudProfile />} />
        <Route path="/admin/doctors" element={<AdDoctor />} />
        <Route path="/admin/doctors/edit" element={<AdDocEdit />} />
        <Route path="/admin/doctors/new" element={<NewDoc />} />
        <Route path="/admin/doctors/profile" element={<DocProfile />} />
        <Route path="/admin/settings" element={<AdSettings />} />
      </Routes>
    </Router>
  );
};

export default App;
