import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function ProtectedRoute({ children }) {
  const location = useLocation();

  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    async function checkSession() {
      try {
        await api.get("/check_session");

        setAuthenticated(true);
      } catch (error) {
        console.error(
          "Authentication check failed:",
          error.response?.data || error.message
        );

        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    }

    checkSession();
  }, []);

  if (loading) {
    return (
      <div className="protected-loading">
        <div className="loading-spinner"></div>
        <p>Checking your session...</p>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
}

export default ProtectedRoute;