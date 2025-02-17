import React, { useState } from 'react';  
import { Link, useNavigate } from 'react-router-dom';  
import '../styles/AdminAnnouncements.css';  
import logo from '../assets/sidebar logo.png';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faCog, faSignOutAlt, faBullhorn, faUserCircle, faIndustry } from '@fortawesome/free-solid-svg-icons';

function AdminAnnouncements() {
  const navigate = useNavigate();
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [recipient, setRecipient] = useState("all"); // Default selection

  const handleLogout = () => {
    navigate("/login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending announcement to:", recipient);
    console.log("Subject:", subject);
    console.log("Body:", body);
    // Add API call or processing logic here
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
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

      {/* Content Area */}
      <div className="content">
        <div className="header">
          <h1>Announcements</h1>
          <div className="profile-section">
            <Link to="/admin-profile" className="profile-link">
              <FontAwesomeIcon icon={faUserCircle} className="profile-icon" />
              <span className="profile-name">Admin</span>
            </Link>
          </div>
        </div>

        {/* Announcement Form */}
        <div className="white-box">
          <p>Fill in the details for the announcement. Users will receive a notification.</p>
          <form onSubmit={handleSubmit}>
            {/* Subject Input */}
            <div className="announcement-wrapper">
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>

            {/* Body Input */}
            <div className="announcement-wrapper2">
              <textarea
                placeholder="Enter announcement details..."
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
              />
            </div>

            {/* Select Recipient Section */}
            <div className="recipient-selection">
              <label><strong>Send to:</strong></label>
              <div className="radio-group">
                <label>
                  <input type="radio" value="all" checked={recipient === "all"} onChange={(e) => setRecipient(e.target.value)} />
                  <FontAwesomeIcon icon={faBullhorn} className="icon" /> All Users
                </label>
                <label>
                  <input type="radio" value="users" checked={recipient === "users"} onChange={(e) => setRecipient(e.target.value)} />
                  <FontAwesomeIcon icon={faUsers} className="icon" /> Regular Users
                </label>
                <label>
                  <input type="radio" value="junkshop" checked={recipient === "junkshop"} onChange={(e) => setRecipient(e.target.value)} />
                  <FontAwesomeIcon icon={faIndustry} className="icon" /> Junkshop Owners
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit">Send Announcement</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminAnnouncements;