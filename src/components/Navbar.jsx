import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#1f2937",
        padding: "15px",
        display: "flex",
        gap: "20px",
      }}
    >
      <Link to="/dashboard" style={{ color: "white" }}>
        Dashboard
      </Link>

      <Link to="/events" style={{ color: "white" }}>
        My Events
      </Link>

      <Link to="/" style={{ color: "white" }}>
        Logout
      </Link>
    </nav>
  );
}

export default Navbar;