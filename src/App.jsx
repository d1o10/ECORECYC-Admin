import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import ManageUsers from "./components/ManageUsers";
import AdminAnnouncements from "./components/AdminAnnouncement";
import AdminSettings from "./components/AdminSettings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/users" element={<ManageUsers />} />
        <Route path="/announcements" element={<AdminAnnouncements/>} />
        <Route path="/settings" element={<AdminSettings/>} />
      </Routes>
    </Router>
  );
}

export default App;
