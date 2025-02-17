import React from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/ManageUsers.css'; // Ensure this CSS file exists
import logo from '../assets/sidebar logo.png'; // Import the logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faCog, faSignOutAlt, faBullhorn, faUserCircle } from '@fortawesome/free-solid-svg-icons'; // Add your icons

function ManageUsers() {
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
          <h1>Manage Users</h1>

          {/* Admin Profile Section */}
          <div className="profile-section">
            <Link to="/admin-profile" className="profile-link">
              <FontAwesomeIcon icon={faUserCircle} className="profile-icon" />
              <span className="profile-name">Admin</span>
            </Link>
          </div>
          <div className="grey-box">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageUsers;
