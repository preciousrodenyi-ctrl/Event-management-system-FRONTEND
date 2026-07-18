import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <div className="event-card">

      <img
        src={event.image}
        alt={event.title}
        className="event-card-image"
      />

      <div className="event-card-content">

        <span className="event-category">
          {event.category}
        </span>

        <h2>
          {event.title}
        </h2>

        <p>
           {event.location}
        </p>

        <p>
           {event.date}
        </p>

        <Link to={`/events/${event.id}`}>
          <button className="view-event-btn">
            View Details
          </button>
        </Link>

      </div>

    </div>
  );
}

export default EventCard;