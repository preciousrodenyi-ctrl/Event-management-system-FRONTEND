import {
  Navigate
} from "react-router-dom";

import {
  useEffect,
  useState
} from "react";

import api from "../services/api";


function ProtectedRoute({
  children
}) {

  const [loading, setLoading] =
    useState(true);


  const [authenticated,
    setAuthenticated] =
    useState(false);


  useEffect(() => {

    async function checkSession() {

      try {

        await api.get(
          "/check_session"
        );


        setAuthenticated(true);


      } catch (error) {

        setAuthenticated(false);

      } finally {

        setLoading(false);

      }

    }


    checkSession();

  }, []);


  if (loading) {

    return (

      <div className="loading">

        Loading...

      </div>

    );

  }


  if (!authenticated) {

    return (

      <Navigate
        to="/login"
        replace
      />

    );

  }


  return children;

}


export default ProtectedRoute;