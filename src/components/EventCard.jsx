function EventCard({ event }) {
  return (
    <div className="card">
      <h2>{event.title}</h2>

      <p>
        <strong>Location:</strong> {event.location}
      </p>

      <p>
        <strong>Date:</strong> {event.date}
      </p>

      <p>
        <strong>Status:</strong> {event.status}
      </p>

      <button>Edit</button>
      <button style={{ marginLeft: "10px" }}>Delete</button>
    </div>
  );
}

export default EventCard;