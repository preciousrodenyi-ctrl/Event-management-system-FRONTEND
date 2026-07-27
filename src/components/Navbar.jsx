import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  useEffect,
  useState
} from "react";

import api from "../services/api";


function Navbar() {

  const navigate = useNavigate();


  const [user, setUser] =
    useState(null);


  useEffect(() => {

    checkSession();

  }, []);


  async function checkSession() {

    try {

      const response = await api.get(

        "/check_session"

      );


      setUser(
        response.data.user
      );


    } catch (error) {

      setUser(null);

    }

  }


  async function handleLogout() {

    try {

      await api.delete(
        "/logout"
      );


      setUser(null);


      navigate("/login");


    } catch (error) {

      console.error(
        "Logout failed"
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


        {!user && (

          <>

            <Link to="/login">
              Login
            </Link>


            <Link to="/signup">
              Sign Up
            </Link>

          </>

        )}


        {user && (

          <>

            <Link to="/dashboard">
              Dashboard
            </Link>


            <button
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