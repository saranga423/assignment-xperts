// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation hook
import { Lock, Mail, LogIn } from "lucide-react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ Initialize navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });

    // Here you could add real authentication logic
    // For now, we’ll just navigate to Booking page
    navigate("/booking"); // ✅ Redirect to booking page
  };

  return (
    <div className="login-page">
      {/* Header */}
      <div className="login-header">
        <h1>Welcome Back</h1>
        <p>Log in to continue your journey with Assignment Xperts</p>
      </div>

      {/* Login Card */}
      <div className="login-card">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <div className="input-wrapper">
              <Mail className="icon" />
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="input-wrapper">
              <Lock className="icon" />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/forgot-password" className="forgot-link">
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="login-btn">
            <LogIn size={18} /> Log In
          </button>
        </form>

        <p className="register-text">
          Don’t have an account?{" "}
          <a href="/register" className="register-link">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
