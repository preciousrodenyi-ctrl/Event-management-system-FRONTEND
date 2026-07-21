import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function Navbar() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    checkSession();
  }, []);

  async function checkSession() {
    try {
      await api.get("/check_session");
      setLoggedIn(true);
    } catch (error) {
      setLoggedIn(false);
    }
  }

  async function handleLogout() {
    try {
      await api.delete("/logout");
      setLoggedIn(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/">EventHub</Link>
      </div>

      <div className="nav-links">

        {!loggedIn ? (
          <>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard">Dashboard</Link>

            <Link to="/events">Events</Link>

            <Link to="/create-event">Add Event</Link>

            <button
              className="logout-btn"
              onClick={handleLogout}
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