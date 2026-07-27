import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function CreateEvent() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await api.post(
        "/events/events",
        formData
      );

      navigate("/events");

    } catch (err) {
      console.error(
        "Create event error:",
        err.response?.data ||
        err.message
      );

      setError(
        err.response?.data?.error ||
        "Failed to create event."
      );

    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-page">

      <form
        className="event-form"
        onSubmit={handleSubmit}
      >

        <h1>
          Create New Event
        </h1>

        <p>
          Add the details of your upcoming event.
        </p>

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        <label>
          Event Title
        </label>

        <input
          type="text"
          name="title"
          placeholder="e.g. Tech Conference 2026"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label>
          Description
        </label>

        <textarea
          name="description"
          placeholder="Describe your event..."
          rows="5"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label>
          Location
        </label>

        <input
          type="text"
          name="location"
          placeholder="e.g. Nairobi, Kenya"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <label>
          Date
        </label>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="primary-btn"
          disabled={loading}
        >
          {loading
            ? "Creating Event..."
            : "Create Event"}
        </button>

      </form>

    </div>
  );
}

export default CreateEvent;