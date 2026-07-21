import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function Dashboard() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    try {
      const response = await api.get("/events");
      setEvents(response.data.events);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteEvent(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/events/${id}`);

      setEvents(events.filter((event) => event.id !== id));
    } catch (error) {
      console.log(error);
      alert("Failed to delete event.");
    }
  }

  if (loading) {
    return (
      <div className="loading">
        <h2>Loading Dashboard...</h2>
      </div>
    );
  }

  return (
    <div className="dashboard">

      <h1>Dashboard</h1>

      <p>Welcome back! Here are your events.</p>

      <div className="dashboard-stats">

        <div className="stat-box">
          <h2>{events.length}</h2>
          <p>Total Events</p>
        </div>

        <div className="stat-box">
          <h2>
            {events.filter(event => new Date(event.date) >= new Date()).length}
          </h2>
          <p>Upcoming</p>
        </div>

        <div className="stat-box">
          <h2>
            {[...new Set(events.map(event => event.category))].length}
          </h2>
          <p>Categories</p>
        </div>

      </div>

      <div className="dashboard-header">

        <h2>My Events</h2>

        <Link to="/create-event">
          <button className="add-btn">
            + Create Event
          </button>
        </Link>

      </div>

      {events.length === 0 ? (
        <div className="empty-events">

          <h3>No events yet.</h3>

          <p>Create your first event.</p>

        </div>
      ) : (
        <div className="dashboard-events">

          {events.map((event) => (

            <div className="dashboard-card" key={event.id}>

              <h3>{event.title}</h3>

              <p><strong>Location:</strong> {event.location}</p>

              <p><strong>Date:</strong> {event.date}</p>

              <p><strong>Category:</strong> {event.category}</p>

              <div className="dashboard-buttons">

                <Link to={`/events/${event.id}`}>
                  <button className="view-btn">
                    View
                  </button>
                </Link>

                <Link to={`/events/${event.id}/edit`}>
                  <button className="edit-btn">
                    Edit
                  </button>
                </Link>

                <button
                  className="delete-btn"
                  onClick={() => deleteEvent(event.id)}
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}

export default Dashboard;