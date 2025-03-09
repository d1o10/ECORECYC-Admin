import { useState, useEffect } from "react";
import "../styles/Login.css";
import logo from "../assets/ecorecyclogo-admin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  // Check localStorage for remembered credentials on component mount
  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    const rememberedPassword = localStorage.getItem("rememberedPassword");
    if (rememberedEmail) {
      setEmail(rememberedEmail);
      setRememberMe(true); // Automatically check "Remember Me" if email exists
    }
    if (rememberedPassword) {
      setPassword(rememberedPassword); // Pre-fill password if it exists
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email); // Store email if "Remember Me" is checked
        localStorage.setItem("rememberedPassword", password); // Store password if "Remember Me" is checked
      } else {
        localStorage.removeItem("rememberedEmail"); // Remove email if "Remember Me" is unchecked
        localStorage.removeItem("rememberedPassword"); // Remove password if "Remember Me" is unchecked
      }
      setLoginSuccess(true);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <img src={logo} alt="Logo" className="login-logo" />

        <div className="login-box">
          <h2 className="login-title">Welcome Admin!</h2>
          <p id="enter-details">Please enter your login details</p>

          {error && <p className="error-message">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-wrapper">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>

            <div className="remember-forgot">
              <label htmlFor="rememberMe" className="remember-me">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember Me</span>
              </label>
              <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
            </div>

            <button type="submit" disabled={loading}>
              {loading ? (
                <div className="spinner"></div> // Show spinner when loading
              ) : (
                "Login" // Show "Login" text when not loading
              )}
            </button>
          </form>
        </div>
      </div>
      <div className="login-image-container"></div>
      {loginSuccess && <div className="login-success-message">Logged in successfully</div>}
    </div>
  );
};

export default Login;