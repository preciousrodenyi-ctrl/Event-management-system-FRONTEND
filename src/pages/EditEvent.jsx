import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import api from "../services/api";

function EditEvent() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    category: "",
  });


  useEffect(() => {
    fetchEvent();
  }, []);


  async function fetchEvent() {

    try {

      const response = await api.get(`/events/${id}`);

      setFormData({
        title: response.data.title || "",
        description: response.data.description || "",
        location: response.data.location || "",
        date: response.data.date || "",
        category: response.data.category || "",
      });

    } catch (error) {

      console.error(error);

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

    setSaving(true);

    setError("");

    try {

      await api.put(
        `/events/${id}`,
        formData
      );


      alert("✅ Event updated successfully!");

      navigate(`/events/${id}`);


    } catch (error) {

      console.error(error);

      setError(
        error.response?.data?.error ||
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

        <h2>Loading Event...</h2>

      </div>

    );

  }



  return (

    <div className="form-page">


      <form
        className="event-form"
        onSubmit={handleSubmit}
      >


        <Link
          to={`/events/${id}`}
          className="back-link"
        >
          ← Cancel
        </Link>



        <p className="section-label">
          EDIT EVENT
        </p>


        <h1>
          Update Event
        </h1>


        <p>
          Modify your event details below.
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

          rows="5"

          name="description"

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
          Date
        </label>


        <input

          type="date"

          name="date"

          value={formData.date}

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
            Select Category
          </option>

          <option value="Technology">
            Technology
          </option>

          <option value="Business">
            Business
          </option>

          <option value="Education">
            Education
          </option>

          <option value="Music">
            Music
          </option>

          <option value="Sports">
            Sports
          </option>

          <option value="Networking">
            Networking
          </option>

          <option value="Other">
            Other
          </option>

        </select>



        <button

          type="submit"

          className="primary-button"

          disabled={saving}

        >

          {
            saving
            ? "Saving..."
            : "Save Changes"
          }


        </button>


      </form>


    </div>

  );

}


export default EditEvent;