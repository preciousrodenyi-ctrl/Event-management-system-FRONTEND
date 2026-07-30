import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function ProtectedRoute({ children }) {

  const [authenticated, setAuthenticated] = useState(null);


  useEffect(() => {

    async function checkSession() {

      try {

        await api.get("/check_session", {
          withCredentials: true,
        });

        setAuthenticated(true);

      } catch (error) {

        console.error(
          "Authentication check failed:",
          error.response?.data
        );

        setAuthenticated(false);
      }
    }


    checkSession();

  }, []);


  if (authenticated === null) {
    return <h2>Loading...</h2>;
  }


  return authenticated 
    ? children 
    : <Navigate to="/login" />;
}


export default ProtectedRoute;