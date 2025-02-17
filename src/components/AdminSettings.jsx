import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/AdminSettings.css";
import logo from '../assets/sidebar logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faCog, faSignOutAlt, faBullhorn, faUserCircle, faEdit } from '@fortawesome/free-solid-svg-icons';

function AdminSettings() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <div className="sidebar">
        <img src={logo} alt="Ecorecyc Logo" className="logo" />
        <ul>
          <li><Link to="/dashboard"><FontAwesomeIcon icon={faTachometerAlt} className="icon" /> Dashboard</Link></li>
          <li><Link to="/users"><FontAwesomeIcon icon={faUsers} className="icon" /> Manage Users</Link></li>
          <li><Link to="/announcements"><FontAwesomeIcon icon={faBullhorn} className="icon" /> Announcements</Link></li>
          <li><Link to="/settings"><FontAwesomeIcon icon={faCog} className="icon" /> Settings</Link></li>
          <li>
            <Link to="#" onClick={(e) => { e.preventDefault(); handleLogout(); }}>
              <FontAwesomeIcon icon={faSignOutAlt} className="icon" /> Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="content-settings">
        <h1>Settings</h1>

        {/* Admin Profile Section */}
        <div className="profile-section-settings">
          <FontAwesomeIcon icon={faUserCircle} className="profile-icon-settings" />
          <div className="profile-info-settings">
            <h2>Admin</h2>
            <p>Role: Super Admin</p>
          </div>
        </div>

        {/* Personal Information Section */}
        <div className="personal-info-settings">
          <h3>Personal Information</h3>
          <form>
            <div className="form-group">
              <label>First Name:</label>
              <input type="text" placeholder="Enter first name" />
            </div>

            <div className="form-group">
              <label>Last Name:</label>
              <input type="text" placeholder="Enter last name" />
            </div>

            <div className="form-group">
              <label>Email Address:</label>
              <input type="email" placeholder="Enter email" />
            </div>

            <div className="form-group">
              <label>User Role:</label>
              <input type="text" value="Admin" disabled />
            </div>

            <button type="submit" className="save-btn">
              <FontAwesomeIcon icon={faEdit} /> Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminSettings;
