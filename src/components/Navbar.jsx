import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);


  useEffect(() => {

    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

  }, []);



  function handleLogout() {

    localStorage.removeItem("user");

    setUser(null);

    navigate("/login");

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



        {!user && (
          <>
            <Link to="/login">
              Login
            </Link>


            <Link 
              to="/signup" 
              className="signup-link"
            >
              Sign Up
            </Link>
          </>
        )}




        {user && (
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