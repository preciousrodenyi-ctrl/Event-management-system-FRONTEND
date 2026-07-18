import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");

  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  }

  function handleSubmit(e) {

    e.preventDefault();

    setError("");

    if (
      formData.password !==
      formData.confirmPassword
    ) {

      setError(
        "Passwords do not match."
      );

      return;

    }

    /*
    Later this will connect to Flask:

    await api.post(
      "/signup",
      formData
    );
    */

    localStorage.setItem(
      "token",
      "demo-token"
    );

    localStorage.setItem(
      "user",
      JSON.stringify({
        username: formData.username,
        email: formData.email,
      })
    );

    navigate("/dashboard");

  }

  return (

    <div className="auth-page">

      <form
        className="auth-form"
        onSubmit={handleSubmit}
      >

        <h1>
          Create Account 
        </h1>

        <p className="auth-subtitle">
          Join EventHub today
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

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
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


        <input
          type={
            showPassword
              ? "text"
              : "password"
          }
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />


        <button
          type="submit"
          className="auth-button"
        >
          Create Account
        </button>


        <p className="auth-footer">

          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </p>

      </form>

    </div>

  );

}

export default Signup;