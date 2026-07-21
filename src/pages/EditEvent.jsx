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
    category: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchEvent();
  }, []);

  async function fetchEvent() {
    try {
      const response = await api.get(`/events/${id}`);
      setFormData(response.data.event);
    } catch (err) {
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

    try {
      await api.patch(`/events/${id}`, formData);
      navigate("/events");
    } catch (err) {
      setError("Failed to update event.");
    }
  }

  if (loading) {
    return (
      <div className="loading">
        <h2>Loading Event...</h2>
      </div>
    );
  }

  return (
    <div className="form-page">

      <form className="event-form" onSubmit={handleSubmit}>

        <h1>Edit Event</h1>

        {error && <p className="error">{error}</p>}

        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          rows="5"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="Technology">Technology</option>
          <option value="Business">Business</option>
          <option value="Music">Music</option>
          <option value="Sports">Sports</option>
          <option value="Art">Art</option>
          <option value="Education">Education</option>
        </select>

        <button type="submit" className="primary-btn">
          Update Event
        </button>

      </form>

    </div>
  );
}

export default EditEvent;