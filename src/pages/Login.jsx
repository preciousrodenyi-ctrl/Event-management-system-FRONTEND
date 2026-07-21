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

function handleChange(e) {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
}

async function handleSubmit(e) {
e.preventDefault();
setError("");

try {
  await api.post("/login", formData);

  navigate("/dashboard");

  window.location.reload();
} catch (err) {
  setError("Invalid username or password.");
}

}

return (
<div className="auth-page">
<div className="auth-container">
<form onSubmit={handleSubmit} className="auth-card">

      <h1>Welcome Back</h1>

      <p>Login to continue to EventHub</p>

      {error && <p className="error">{error}</p>}

      <div className="auth-form">

        <label>Username</label>

        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label>Password</label>

        <div className="password-container">

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>

        </div>

        <p className="forgot-password">
          <Link to="/forgot-password">
            Forgot Password?
          </Link>
        </p>

        <button type="submit" className="auth-btn">
          Login
        </button>

      </div>

      <p className="auth-footer">
        Don't have an account?
        <Link to="/signup"> Sign Up</Link>
      </p>

    </form>
  </div>
</div>

);
}

export default Login;