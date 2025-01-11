import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Handle login submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      // Make API request to the backend
      const response = await axios.post("http://localhost:5000/auth/login", {
        username,
        password,
      });

      const { token } = response.data;

      // Store token in localStorage
      localStorage.setItem("authToken", token);

      // Redirect to home page or dashboard
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container">
      <div className="section">
        <div className="column is-half is-offset-one-quarter">
          <h2 className="title is-3 has-text-centered">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {error && <p className="has-text-danger">{error}</p>}

            <div className="field">
              <div className="control">
                <button className="button is-primary is-fullwidth" type="submit">
                  Login
                </button>
              </div>
            </div>
          </form>
          <p className="has-text-centered">
            Don’t have an account? <a href="/register">Register here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
