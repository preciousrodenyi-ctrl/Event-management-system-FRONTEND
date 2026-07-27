import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchEvent();
  }, [id]);

  async function fetchEvent() {
    try {
      const response = await api.get(
        "/events/events"
      );

      const selectedEvent =
        response.data.events.find(
          (event) =>
            event.id === Number(id)
        );

      if (!selectedEvent) {
        setError("Event not found.");
        return;
      }

      setFormData({
        title: selectedEvent.title || "",
        description: selectedEvent.description || "",
        location: selectedEvent.location || "",
        date: selectedEvent.date || "",
      });

    } catch (err) {
      console.error(
        "Unable to load event:",
        err.response?.data ||
        err.message
      );

      setError("Unable to load event.");

    } finally {
      setLoading(false);
    }
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setSaving(true);

    try {
      await api.patch(
        `/events/events/${id}`,
        formData
      );

      navigate("/events");

    } catch (err) {
      console.error(
        "Update error:",
        err.response?.data ||
        err.message
      );

      setError(
        err.response?.data?.error ||
        "Failed to update event."
      );

    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="loading">
        <h2>
          Loading Event...
        </h2>
      </div>
    );
  }

  return (
    <div className="form-page">

      <form
        className="event-form"
        onSubmit={handleSubmit}
      >

        <h1>
          Edit Event
        </h1>

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
          placeholder="Event Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label>
          Description
        </label>

        <textarea
          name="description"
          rows="5"
          placeholder="Description"
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
          placeholder="Location"
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
          disabled={saving}
        >
          {saving
            ? "Updating Event..."
            : "Update Event"}
        </button>

      </form>

    </div>
  );
}

export default EditEvent;