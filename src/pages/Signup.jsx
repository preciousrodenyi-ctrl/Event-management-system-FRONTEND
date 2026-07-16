import { Link } from "react-router-dom";

function Signup() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Create Account</h1>

      <input type="text" placeholder="Username" />
      <br />
      <br />

      <input type="email" placeholder="Email" />
      <br />
      <br />

      <input type="password" placeholder="Password" />
      <br />
      <br />

      <button>Register</button>

      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default Signup;