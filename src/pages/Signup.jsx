import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Signup() {
const navigate = useNavigate();

const [formData, setFormData] = useState({
username: "",
email: "",
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
  await api.post("/signup", formData);

  navigate("/login");
} catch (err) {
  setError("Signup failed. Username or email may already exist.");
}

}

return (
<div className="auth-page">
<div className="auth-container">

    <form onSubmit={handleSubmit} className="auth-card">

      <h1>Create Account</h1>

      <p>Join EventHub today</p>

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

        <label>Email Address</label>

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>

        <div className="password-container">

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Create a password"
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

        <button type="submit" className="auth-btn">
          Create Account
        </button>

      </div>

      <p className="auth-footer">
        Already have an account?
        <Link to="/login"> Login</Link>
      </p>

    </form>

  </div>
</div>

);
}

export default Signup;