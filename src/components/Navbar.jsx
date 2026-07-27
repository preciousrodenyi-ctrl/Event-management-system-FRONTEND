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

      // Backend returns the user directly
      setUser(response.data);

    } catch (error) {
      setUser(null);

    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    try {
      await api.delete("/logout");

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
      <Link
        to="/"
        className="logo"
      >
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

            <Link to="/signup">
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