import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

function handleSubmit(e) {
e.preventDefault();

setMessage(
  "If an account exists with this email, password reset instructions will be sent."
);

}

return (
<div className="auth-page">
<div className="auth-container">
<form className="auth-card" onSubmit={handleSubmit} >
<h1>Forgot Password?</h1>

      <p>
        Enter your email address and we will help you reset your password.
      </p>

      {message && (
        <div className="success-message">
          {message}
        </div>
      )}

      <label>
        Email Address
      </label>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button
        type="submit"
        className="auth-btn"
      >
        Send Reset Instructions
      </button>

      <p className="auth-footer">
        Remember your password?

        <Link to="/login">
          {" "}Back to Login
        </Link>
      </p>
    </form>
  </div>
</div>

);
}

export default ForgotPassword;