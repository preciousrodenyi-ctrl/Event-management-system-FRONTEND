import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <article className="event-card">

      <div className="event-card-image">
        
      </div>

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

        <div className="event-info">
           {event.location}
        </div>

        <div className="event-info">
           {event.date}
        </div>

        <Link
          to={`/events/${event.id}`}
          className="view-event-btn"
        >
          View Details →
        </Link>

      </div>

    </article>
  );
}

export default EventCard;