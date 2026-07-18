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

      /*
      This will connect to Flask later.

      const response = await api.post("/login", formData);

      localStorage.setItem(
        "token",
        response.data.token
      );
      */

      // Temporary login for frontend testing
      localStorage.setItem(
        "token",
        "demo-token"
      );

      localStorage.setItem(
        "user",
        JSON.stringify({
          username: formData.username,
        })
      );

      navigate("/dashboard");

    } catch (error) {

      setError(
        "Invalid username or password."
      );

    }

  }

  return (

    <>

      <div className="auth-page">

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          <h1>
            Welcome Back 
          </h1>

          <p className="auth-subtitle">
            Login to continue to EventHub
          </p>

          {error && (
            <p className="error-message">
              {error}
            </p>
          )}

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />


          <div className="password-container">

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              name="password"
              placeholder="Password"
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
              {showPassword ? "" : "👁️"}
            </button>

          </div>


          <button
            type="submit"
            className="auth-button"
          >
            Login
          </button>


          <p className="auth-footer">

            Don't have an account?

            <Link to="/signup">
              Sign Up
            </Link>

          </p>

        </form>

      </div>

    </>

  );

}

export default Login;