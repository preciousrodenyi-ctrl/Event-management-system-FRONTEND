import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function Events() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    try {
      const response = await api.get("/events");
      setEvents(response.data.events);
      setFilteredEvents(response.data.events);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function handleSearch(e) {
    const value = e.target.value;
    setSearch(value);

    const filtered = events.filter((event) =>
      event.title.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredEvents(filtered);
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this event?")) return;

    try {
      await api.delete(`/events/${id}`);

      const updated = events.filter((event) => event.id !== id);
      setEvents(updated);
      setFilteredEvents(updated);
    } catch (error) {
      console.log(error);
    }
  }

  if (loading) {
    return <h2 className="loading">Loading Events...</h2>;
  }

  return (
    <div className="events-page">

      <div className="events-header">
        <h1>All Events</h1>

        <Link to="/create-event">
          <button className="add-btn">+ New Event</button>
        </Link>
      </div>

      <input
        className="search-bar"
        type="text"
        placeholder="Search events..."
        value={search}
        onChange={handleSearch}
      />

      {filteredEvents.length === 0 ? (
        <h3>No events found.</h3>
      ) : (
        <div className="events-grid">

          {filteredEvents.map((event) => (

            <div className="event-card" key={event.id}>

              <h2>{event.title}</h2>

              <p>
                <strong>Category:</strong> {event.category}
              </p>

              <p>
                <strong>Date:</strong> {event.date}
              </p>

              <p>
                <strong>Location:</strong> {event.location}
              </p>

              <p>{event.description}</p>

              <div className="event-buttons">

                <Link to={`/events/${event.id}`}>
                  <button className="view-btn">View</button>
                </Link>

                <Link to={`/events/${event.id}/edit`}>
                  <button className="edit-btn">Edit</button>
                </Link>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(event.id)}
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

export default Events;