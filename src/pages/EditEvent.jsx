import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import api from "../services/api";

function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    category: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadEvent();
  }, [id]);

  async function loadEvent() {
    try {
      const response = await api.get(`/events/${id}`);

      const event =
        response.data.event || response.data;

      setFormData({
        title: event.title || "",
        description: event.description || "",
        location: event.location || "",
        date: event.date || "",
        category: event.category || "",
      });

    } catch (err) {
      console.error(
        "Load event error:",
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

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setSaving(true);
    setError("");

    try {
      await api.patch(
        `/events/${id}`,
        formData
      );

      navigate(`/events/${id}`);

    } catch (err) {
      console.error(
        "Update event error:",
        err.response?.data || err.message
      );

      setError(
        err.response?.data?.error ||
        err.response?.data?.message ||
        "Failed to update event."
      );

    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="loading-page">
        <div className="loading-spinner"></div>
        <p>Loading event...</p>
      </div>
    );
  }

  return (
    <div className="form-page">

      <Link
        to={`/events/${id}`}
        className="back-link"
      >
        ← Back to Event
      </Link>

      <form
        className="event-form"
        onSubmit={handleSubmit}
      >

        <h1>
          Edit Event
        </h1>

        <p>
          Update your event information below.
        </p>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <label>
          Event Title
        </label>

        <input
          type="text"
          name="title"
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
          value={formData.location}
          onChange={handleChange}
          required
        />

        <label>
          Category
        </label>

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">
            Select a category
          </option>

          <option value="Technology">
            Technology
          </option>

          <option value="Music">
            Music
          </option>

          <option value="Business">
            Business
          </option>

          <option value="Sports">
            Sports
          </option>

          <option value="Education">
            Education
          </option>

          <option value="Social">
            Social
          </option>
        </select>

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

        <div className="form-actions">

          <Link
            to={`/events/${id}`}
            className="cancel-button"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="primary-btn"
            disabled={saving}
          >
            {saving
              ? "Saving Changes..."
              : "Save Changes"}
          </button>

        </div>

      </form>

    </div>
  );
}

export default EditEvent;