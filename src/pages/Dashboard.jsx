import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      const userRes = await api.get("/check_session");
      setUser(userRes.data);

      const eventsRes = await api.get("/events");
      setEvents(eventsRes.data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="dashboard">

      <h1>
        Welcome{user ? `, ${user.username}` : ""} 
      </h1>

      <p>
        Manage your events from one place.
      </p>

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <h2>{events.length}</h2>
          <p>Total Events</p>
        </div>

        <div className="dashboard-card">
          <Link
            to="/create-event"
            className="dashboard-btn"
          >
            + Create Event
          </Link>
        </div>

        <div className="dashboard-card">
          <Link
            to="/events"
            className="dashboard-btn"
          >
            View Events
          </Link>
        </div>

      </div>

      <h2 className="recent-title">
        Recent Events
      </h2>

      <div className="dashboard-events">

        {events.length === 0 ? (

          <p>No events available.</p>

        ) : (

          events.slice(0, 3).map((event) => (

            <div
              className="dashboard-event"
              key={event.id}
            >

              <h3>{event.title}</h3>

              <p>{event.location}</p>

              <p>{event.date}</p>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default Dashboard;