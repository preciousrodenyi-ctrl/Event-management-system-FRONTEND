import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import api from "../services/api";

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvent();
  }, []);

  async function fetchEvent() {
    try {
      const response = await api.get(`/events/${id}`);
      setEvent(response.data.event);
    } catch (error) {
      console.log(error);
      navigate("/events");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="loading">
        <h2>Loading Event...</h2>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="loading">
        <h2>Event not found.</h2>
      </div>
    );
  }

  return (
    <div className="details-page">

      <div className="details-card">

        <div className="details-image">
          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200"
            alt={event.title}
          />
        </div>

        <div className="details-content">

          <span className="category-badge">
            {event.category}
          </span>

          <h1>{event.title}</h1>

          <p className="description">
            {event.description}
          </p>

          <div className="details-info">

            <p>
              📍 <strong>Location:</strong> {event.location}
            </p>

            <p>
              📅 <strong>Date:</strong> {event.date}
            </p>

            <p>
              🆔 <strong>Event ID:</strong> {event.id}
            </p>

          </div>

          <div className="details-buttons">

            <Link to={`/events/${event.id}/edit`}>
              <button className="edit-btn">
                Edit Event
              </button>
            </Link>

            <button
              className="view-btn"
              onClick={() => navigate("/events")}
            >
              Back to Events
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EventDetails;