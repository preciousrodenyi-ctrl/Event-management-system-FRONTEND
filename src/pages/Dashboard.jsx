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
      const savedUser = JSON.parse(
        localStorage.getItem("user")
      );

      if (savedUser) {
        setUser(savedUser);
      }

      const response = await api.get("/events");

      setEvents(response.data);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="loading-page">
        <div className="loading-spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-page">

      <section className="dashboard-welcome">

        <div>

          <p className="dashboard-label">
            DASHBOARD
          </p>

          <h1>
            Welcome back,
            {" "}
            {user?.username || "User"} 
          </h1>

          <p>
            Manage all your events in one place.
          </p>

        </div>

        <Link
          to="/create-event"
          className="dashboard-create-button"
        >
          + Create Event
        </Link>

      </section>

      <section className="dashboard-stats">

        <div className="dashboard-stat-card">

          <div className="stat-icon">
            
          </div>

          <div>

            <h2>{events.length}</h2>

            <p>Total Events</p>

          </div>

        </div>

        <div className="dashboard-stat-card">

          <div className="stat-icon">
            
          </div>

          <div>

            <h2>
              {events.filter(
                event => event.category === "Featured"
              ).length}
            </h2>

            <p>Featured</p>

          </div>

        </div>

        <div className="dashboard-stat-card">

          <div className="stat-icon">
            👤
          </div>

          <div>

            <h2>1</h2>

            <p>Your Account</p>

          </div>

        </div>

      </section>

      <section className="quick-actions">

        <div className="section-title">

          <p className="dashboard-label">
            QUICK ACTIONS
          </p>

          <h2>
            What would you like to do?
          </h2>

        </div>

        <div className="quick-action-grid">

          <Link
            to="/create-event"
            className="quick-action-card"
          >

            <span></span>

            <h3>Create Event</h3>

            <p>
              Add a new event to EventHub.
            </p>

          </Link>

          <Link
            to="/events"
            className="quick-action-card"
          >

            <span></span>

            <h3>Browse Events</h3>

            <p>
              View all available events.
            </p>

          </Link>

        </div>

      </section>

      <section className="dashboard-events">

        <div className="section-header">

          <h2>
            Recent Events
          </h2>

          <Link to="/events">
            View All →
          </Link>

        </div>

        {events.length === 0 ? (

          <div className="empty-state">

            <div className="empty-icon">
              
            </div>

            <h3>
              No Events Yet
            </h3>

            <p>
              Create your first event to get started.
            </p>

            <Link
              to="/create-event"
              className="dashboard-create-button"
            >
              Create Event
            </Link>

          </div>

        ) : (

          <div className="dashboard-event-grid">

            {events.slice(0, 6).map((event) => (

              <div
                className="dashboard-event-card"
                key={event.id}
              >

                <span className="event-category">
                  {event.category}
                </span>

                <h3>
                  {event.title}
                </h3>

                <p>
                  {event.description}
                </p>

                <p className="event-location">
                   {event.location}
                </p>

                <p>
                   {event.date}
                </p>

                <Link
                  to={`/events/${event.id}`}
                >
                  View Details →
                </Link>

              </div>

            ))}

          </div>

        )}

      </section>

    </div>
  );
}

export default Dashboard;