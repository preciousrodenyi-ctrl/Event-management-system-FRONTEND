import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("token");

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");
  }

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        <span></span>
        EventHub
      </Link>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        {isLoggedIn && (
          <>
            <Link to="/dashboard">
              Dashboard
            </Link>

            <Link to="/events">
              Events
            </Link>

            <Link to="/create-event">
              Add Event
            </Link>
          </>
        )}

      </div>

      <div className="nav-actions">

        {!isLoggedIn ? (
          <>
            <Link
              to="/login"
              className="login-link"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="signup-btn"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}

      </div>

    </nav>
  );
}

export default Navbar;