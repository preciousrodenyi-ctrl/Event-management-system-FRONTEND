import { Link } from "react-router-dom";

function Navbar() {

  function handleLogout() {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }


  return (

    <nav className="navbar">


      <div className="logo">

        🎉 EventHub

      </div>



      <div className="nav-links">


        <Link to="/">
          Home
        </Link>


        <Link to="/dashboard">
          Dashboard
        </Link>


        <Link to="/events">
          Events
        </Link>


        <Link to="/create-event">
          Create Event
        </Link>


      </div>



      <div className="nav-actions">


        <Link 
        className="login-link"
        to="/login">
          Login
        </Link>



        <Link 
        className="signup-btn"
        to="/signup">
          Sign Up
        </Link>



        <button 
        className="logout-btn"
        onClick={handleLogout}>

          Logout

        </button>


      </div>


    </nav>

  );

}


export default Navbar;