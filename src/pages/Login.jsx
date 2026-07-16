import { Link } from "react-router-dom";

function Login() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>EventHub Planner</h1>

      <h2>Login</h2>

      <input type="text" placeholder="Username" />
      <br />
      <br />

      <input type="password" placeholder="Password" />
      <br />
      <br />

      <button>Login</button>

      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;