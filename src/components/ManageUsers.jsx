import React, { useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; 
import '../styles/ManageUsers.css'; 
import logo from '../assets/sidebar logo.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faCog, faSignOutAlt, faBullhorn, faUserCircle, faEnvelope, faSearch, faBusinessTime, faUserLarge, faTrashAlt } from '@fortawesome/free-solid-svg-icons'; 

function ManageUsers() {
  const [email, setEmail] = useState(''); 
  const navigate = useNavigate(); 

  // Function to handle logout
  const handleLogout = (e) => {
    e.preventDefault(); 
    navigate("/login"); 
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search submitted:', email); 
  };

  // Functions to handle button clicks (navigation)
  const handleUsersClick = () => {
    navigate("/users");
  };

  const handleJunkshopOwnersClick = () => {
    navigate("/junkshop-owners");
  };

  // Function to handle search icon click
  const handleSearchClick = () => {
    console.log('Searching for:', email); 
  };

  // Function to handle delete user action
  const handleDeleteUser = (email) => {
    console.log(`User with email ${email} deleted.`);
    // Add delete logic here
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
            <Link to="#" onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} className="icon" /> Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Content Area */}
      <div className="content-manage-users">
        <h1>Manage Users</h1>

        {/* Admin Profile Section */}
        <div className="profile-section-manage-users">
          <Link to="/admin-profile" className="profile-link">
            <FontAwesomeIcon icon={faUserCircle} className="profile-icon" />
            <span className="profile-name">Admin</span>
          </Link>
        </div>

        <div className="white-box-manage-users">
          {/* Buttons and Search Bar in a single line */}
          <div className="buttons-search-container">
            <button className="btn" onClick={handleUsersClick}>
              <FontAwesomeIcon icon={faUsers} className="icon" /> Users
            </button>
            <button className="btn" onClick={handleJunkshopOwnersClick}>
              <FontAwesomeIcon icon={faUserLarge} className="icon" /> Junkshop Owners
            </button>

            {/* Search Form */}
            <form onSubmit={handleSubmit} className="search-form">
              {/* Search Input */}
              <div className="input-wrapper-manage-users">
                <input
                  type="text"
                  placeholder="Search"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
                {/* Magnifying Glass Icon */}
                <FontAwesomeIcon 
                  icon={faSearch} 
                  className="search-icon" 
                  onClick={handleSearchClick} 
                />
              </div>
            </form>
          </div>

          {/* Users Email Status Section */}
          <div className="users-email-status">
            <div className="table-header">
              <span>User</span>
              <span>Email</span>
              <span>Status</span>
              <span>Details</span>
            </div>
            <div className="user-item">
              <div className="user-profile">
                <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
                <span>User 1</span>
              </div>
              <span className="user-email">user1@example.com</span>
              <span className="status active">Active</span>
              <div className="user-actions">
                <Link to="/user-details" className="view-link">View User</Link>
                <FontAwesomeIcon 
                  icon={faTrashAlt} 
                  className="delete-icon" 
                  onClick={() => handleDeleteUser('user1@example.com')} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageUsers;
