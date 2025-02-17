import { useState } from "react";
import "../styles/Login.css"; // Ensure this is the correct path
import logo from "../assets/ecorecyclogo-admin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
    // Temporarily redirect to the dashboard without authentication logic
    navigate("/dashboard"); // This will redirect to the dashboard
  };

  return (
    <div className="login-container">
      {/* Left Side - Form */}
      <div className="login-form-container">
        <img src={logo} alt="Logo" className="login-logo" />

        <div className="login-box">
          <h2 className="login-title">Welcome Admin!</h2>
          <p id="enter-details">Please enter your login details</p>

          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="input-wrapper">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                /*required */  /* put this back later */
              />
            </div>

            <div className="input-wrapper">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input
                type={showPassword ? "text" : "password"} // Toggle visibility correctly
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                /*required */  /* put this back later */
              />
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash} // Fix: Swap icons correctly
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)} // Toggle visibility
              />
            </div>

            <div className="remember-forgot">
              {/* Remember Me Checkbox */}
              <label htmlFor="rememberMe" className="remember-me">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember Me</span> {/* Wrap text in <span> to ensure proper alignment */}
              </label>
              <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="login-image-container"></div>
    </div>
  );
};

export default Login;
