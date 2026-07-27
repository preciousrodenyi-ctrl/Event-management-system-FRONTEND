import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadEvent();
  }, [id]);

  async function loadEvent() {
    try {
      const response = await api.get(`/events/${id}`);

      setEvent(response.data.event || response.data);
    } catch (err) {
      console.error(
        "Event details error:",
        err.response?.data || err.message
      );

      setError(
        err.response?.data?.error ||
        "Failed to load event."
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (!confirmed) {
      return;
    }

    try {
      await api.delete(`/events/${id}`);

      navigate("/events");
    } catch (err) {
      console.error(
        "Delete event error:",
        err.response?.data || err.message
      );

      setError(
        err.response?.data?.error ||
        "Failed to delete event."
      );
    }
  }

  if (loading) {
    return (
      <div className="loading">
        Loading event...
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="event-not-found">
        <h1>Event Not Found</h1>

        <p>
          {error || "This event does not exist."}
        </p>

        <Link
          to="/events"
          className="primary-btn"
        >
          Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="event-details-page">

      <Link
        to="/events"
        className="back-link"
      >
        ← Back to Events
      </Link>

      <div className="event-details-card">

        <div className="event-details-banner">
          
        </div>

        <div className="event-details-content">

          <span className="event-category">
            {event.category || "Event"}
          </span>

          <h1>
            {event.title}
          </h1>

          <div className="event-details-info">

            <div>
              <strong> Location</strong>
              <p>{event.location}</p>
            </div>

            <div>
              <strong>Date</strong>
              <p>{event.date}</p>
            </div>

          </div>

          <div className="event-description">

            <h2>
              About This Event
            </h2>

            <p>
              {event.description}
            </p>

          </div>

          {error && (
            <p className="error">
              {error}
            </p>
          )}

          <div className="event-actions">

            <Link
              to={`/edit-event/${event.id}`}
              className="edit-button"
            >
              Edit Event
            </Link>

            <button
              onClick={handleDelete}
              className="delete-button"
            >
              Delete Event
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EventDetails;