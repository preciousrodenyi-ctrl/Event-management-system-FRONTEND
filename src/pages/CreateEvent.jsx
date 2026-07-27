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
    category: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      await api.post("/events", formData);

      alert(" Event created successfully!");

      navigate("/events");

    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.error ||
        "Failed to create event."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="create-event-page">

      <form
        className="create-event-form"
        onSubmit={handleSubmit}
      >

        <h1>Create New Event</h1>

        {error && (
          <p className="error">{error}</p>
        )}

        <label>Title</label>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label>Description</label>

        <textarea
          name="description"
          rows="5"
          value={formData.description}
          onChange={handleChange}
        />

        <label>Location</label>

        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />

        <label>Date</label>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label>Category</label>

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option value="Conference">Conference</option>
          <option value="Workshop">Workshop</option>
          <option value="Music">Music</option>
          <option value="Sports">Sports</option>
          <option value="Technology">Technology</option>
          <option value="Networking">Networking</option>
          <option value="Education">Education</option>
        </select>
        
        <button
          type="submit"
          className="primary-btn"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Event"}
        </button>

      </form>
    </div>
  );
}

export default CreateEvent;