import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadEvents();
  }, []);

  async function loadEvents() {
    try {
      const response = await api.get("/events");

      setEvents(
        response.data.events || response.data
      );

    } catch (err) {
      console.error(
        "Events error:",
        err.response?.data || err.message
      );

      setError(
        err.response?.data?.error ||
        "Failed to load events."
      );

    } finally {
      setLoading(false);
    }
  }

  async function deleteEvent(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (!confirmed) return;

    try {
      await api.delete(`/events/${id}`);

      setEvents(
        events.filter((event) => event.id !== id)
      );

    } catch (err) {
      setError(
        err.response?.data?.error ||
        "Failed to delete event."
      );
    }
  }

  if (loading) {
    return (
      <div className="loading">
        Loading events...
      </div>
    );
  }

  return (
    <div className="events-page">

      <div className="events-header">

        <div>
          <h1>My Events</h1>

          <p>
            Create and manage all your events.
          </p>
        </div>

        <Link
          to="/create-event"
          className="primary-btn"
        >
          + Create Event
        </Link>

      </div>

      {error && (
        <p className="error">
          {error}
        </p>
      )}

      {events.length === 0 ? (

        <div className="empty-state">

          <h2>
            No events yet
          </h2>

          <p>
            Create your first event.
          </p>

          <Link
            to="/create-event"
            className="primary-btn"
          >
            Create Event
          </Link>

        </div>

      ) : (

        <div className="event-grid">

          {events.map((event) => (

            <div
              className="event-card"
              key={event.id}
            >

              <div className="event-card-content">

                <span className="event-category">
                  {event.category || "Event"}
                </span>

                <h2>
                  {event.title}
                </h2>

                <p>
                  {event.description}
                </p>

                <p>
                  {event.location}
                </p>

                <p>
                  {event.date}
                </p>

                <div className="event-actions">

                  <Link
                    to={`/events/${event.id}`}
                    className="view-event-btn"
                  >
                    View
                  </Link>

                  <Link
                    to={`/edit-event/${event.id}`}
                    className="edit-button"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() =>
                      deleteEvent(event.id)
                    }
                    className="delete-button"
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Events;