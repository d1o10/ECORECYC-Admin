import React from 'react';
import '../styles/AdminDashboard.css'; // ✅ Correct path if moved to 'styles'

function AdminDashboard() {
  return (
    <div className="dashboard-container">
      <h1>Welcome to the Admin Dashboard</h1>
      <p>This is a test to check if styles are working.</p>
      <button className="test-button">Click Me</button>
    </div>
  );
}

export default AdminDashboard;
