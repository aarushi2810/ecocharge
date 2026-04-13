import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/page.css";
import { API_ENDPOINTS } from "../config";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const response = await fetch(API_ENDPOINTS.login, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      localStorage.setItem("user", JSON.stringify(data.user));
      setIsLoggedIn(true);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(err.message || "Unable to login right now");
    }
  };

  return (
    <div className="page-auth">
      <div className="auth-card">
        <h2>Welcome Back</h2>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            id="email"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <button id="submitBtn" type="submit" className="auth-btn">
            Login
          </button>
        </form>

        <div className="auth-switch">
          <p>Don't have an account?</p>
          <Link to="/register" className="auth-link">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
