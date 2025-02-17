import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Set the root path to load Login */}
        <Route path="/" element={<Login />} />
        
        {/* Route for login page (optional, you can remove this since it's the same as root) */}
        <Route path="/login" element={<Login />} />
        
        {/* Route for dashboard */}
        <Route path="/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
