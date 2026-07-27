import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function Navbar() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkSession();
  }, []);

  async function checkSession() {
    try {
      const response = await api.get("/check_session");

      // Supports both:
      // { user: {...} }
      // and directly returned user data
      const loggedInUser = response.data.user || response.data;

      setUser(loggedInUser);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    try {
      await api.post("/logout");

      setUser(null);
      navigate("/login");

    } catch (error) {
      console.error(
        "Logout failed:",
        error.response?.data || error.message
      );
    }
  }

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        EventHub
      </Link>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        {!loading && !user && (
          <>
            <Link to="/login">
              Login
            </Link>

            <Link to="/signup" className="signup-link">
              Sign Up
            </Link>
          </>
        )}

        {!loading && user && (
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

            <span className="welcome-user">
              Hi, {user.username}
            </span>

            <button
              onClick={handleLogout}
              className="logout-btn"
            >
              Logout
            </button>
          </>
        )}

      </div>

    </nav>
  );
}

export default Navbar;