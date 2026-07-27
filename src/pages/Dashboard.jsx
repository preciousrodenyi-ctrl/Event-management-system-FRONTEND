import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      // Get logged-in user
      const userResponse = await api.get(
        "/check_session"
      );

      setUser(userResponse.data);

      // Get events
      const eventsResponse = await api.get(
        "/events/events"
      );

      setEvents(eventsResponse.data);

    } catch (error) {
      console.error(
        "Dashboard error:",
        error.response?.data ||
        error.message
      );

    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="loading">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="dashboard">

      <div className="dashboard-header">

        <div>
          <h1>
            Dashboard
          </h1>

          {user && (
            <h2>
              Welcome, {user.username} 👋
            </h2>
          )}

          <p>
            Manage your events from one place.
          </p>
        </div>

        <Link
          to="/create-event"
          className="primary-btn"
        >
          + Create Event
        </Link>

      </div>

      <div className="dashboard-stats">

        <div className="stat-card">
          <h3>
            {events.length}
          </h3>

          <p>
            Total Events
          </p>
        </div>

        <div className="stat-card">
          <h3>
            EventHub
          </h3>

          <p>
            Your Event Platform
          </p>
        </div>

      </div>

      <section className="dashboard-events">

        <div className="section-header">

          <h2>
            Your Events
          </h2>

          <Link to="/events">
            View All
          </Link>

        </div>

        {events.length === 0 ? (

          <div className="empty-state">

            <h3>
              No events yet
            </h3>

            <p>
              Create your first event to get started.
            </p>

            <Link
              to="/create-event"
              className="primary-btn"
            >
              Create Your First Event
            </Link>

          </div>

        ) : (

          <div className="event-grid">

            {events.slice(0, 3).map((event) => (

              <div
                className="event-card"
                key={event.id}
              >

                <h3>
                  {event.title}
                </h3>

                <p>
                  {event.description}
                </p>

                <p>
                  📍 {event.location}
                </p>

                <Link
                  to={`/events/${event.id}`}
                >
                  View Details
                </Link>

              </div>

            ))}

          </div>

        )}

      </section>

    </div>
  );
}

export default Dashboard;;