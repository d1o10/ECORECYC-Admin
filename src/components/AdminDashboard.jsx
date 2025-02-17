import React from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/AdminDashboard.css'; // Ensure this CSS file exists
import logo from '../assets/sidebar logo.png'; // Import the logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faCog, faSignOutAlt, faBullhorn, faUserCircle } from '@fortawesome/free-solid-svg-icons'; // Add your icons

function AdminDashboard() {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle logout
  const handleLogout = () => {
    navigate("/login"); // Redirect to Login page
  };

  return (
    <div className="dashboard-container">
      {/* Left Sidebar Navigation */}
      <div className="sidebar">
        <img src={logo} alt="Ecorecyc Logo" className="logo" />
        <ul>
          <li><Link to="/dashboard"><FontAwesomeIcon icon={faTachometerAlt} className="icon" /> Dashboard</Link></li>
          <li><Link to="/users"><FontAwesomeIcon icon={faUsers} className="icon" /> Manage Users</Link></li>
          <li><Link to="/announcements"><FontAwesomeIcon icon={faBullhorn} className="icon" /> Announcements</Link></li>
          <li><Link to="/settings"><FontAwesomeIcon icon={faCog} className="icon" /> Settings</Link></li>
          {/* Logout Button - Calls handleLogout */}
          <li>
  <Link to="#" onClick={(e) => { e.preventDefault(); handleLogout(); }}>
    <FontAwesomeIcon icon={faSignOutAlt} className="icon" /> Logout
  </Link>
</li>

        </ul>
      </div>

      {/* Right Content Area */}
      <div className="content">
        <div className="header">
          <h1>Dashboard</h1>

          {/* Admin Profile Section */}
          <div className="profile-section">
            <Link to="/admin-profile" className="profile-link">
              <FontAwesomeIcon icon={faUserCircle} className="profile-icon" />
              <span className="profile-name">Admin</span>
            </Link>
          </div>
        </div>

        {/* Stats Section for Total Users and Junkshop Owners */}
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Total Users</h3>
            <p className="stat-value">Loading...</p>
            <p className="stat-description">Total number of registered users on the app.</p>
          </div>

          <div className="stat-card">
            <h3>Total Junkshop Owners</h3>
            <p className="stat-value">Loading...</p>
            <p className="stat-description">Total number of registered junkshops on the app.</p>
          </div>

          <div className="stat-card">
            <h3>Participants in Clean-Up Events</h3>
            <p className="stat-value">Loading...</p>
            <p className="stat-description">Total number of users involved in clean-up events.</p>
          </div>

          <div className="stat-card">
            <h3>Active Users</h3>
            <p className="stat-value">Loading...</p>
            <p className="stat-description">Real-time count of currently active users.</p>
          </div>
        </div>

        {/* Placeholder for Chart Container */}
        <div className="chart-container">
          {/* Chart will be implemented here soon */}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
