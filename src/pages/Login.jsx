import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      // Login
      const response = await api.post("/login", formData);

      console.log("Login successful:", response.data);

      // Confirm that the session was saved
      const sessionResponse = await api.get("/check_session");

      console.log("Session confirmed:", sessionResponse.data);

      // Go to dashboard
      navigate("/dashboard");

    } catch (error) {
      console.error(
        "Login error:",
        error.response?.data || error.message
      );

      setError(
        error.response?.data?.error ||
        "Login failed"
      );

    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <form
          className="auth-card"
          onSubmit={handleSubmit}
        >
          <h1>Welcome Back</h1>

          <p>
            Login to continue to EventHub
          </p>

          {error && (
            <p className="error">
              {error}
            </p>
          )}

          <label>
            Username
          </label>

          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <label>
            Password
          </label>

          <div className="password-container">
            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword
                ? "Hide"
                : "Show"}
            </button>
          </div>

          <p>
            <Link to="/forgot-password">
              Forgot Password?
            </Link>
          </p>

          <button
            type="submit"
            className="auth-btn"
            disabled={loading}
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </button>

          <p>
            Don't have an account?

            <Link to="/signup">
              {" "}Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
