import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function CreateEvent() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    title: "",
    description: "",
    location: "",
    date: "",
    category: "",

  });


  function handleChange(e) {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  }


  function handleSubmit(e) {

    e.preventDefault();

    console.log(
      "New event:",
      formData
    );

    alert(
      "Event created successfully! "
    );

    navigate("/events");

  }


  return (

    <>

      <Navbar />

      <main className="create-event-page">

        <form
          className="create-event-form"
          onSubmit={handleSubmit}
        >

          <h1>
            Create New Event 
          </h1>

          <p>
            Create an amazing event for people to discover.
          </p>


          <input
            type="text"
            name="title"
            placeholder="Event title"
            value={formData.title}
            onChange={handleChange}
            required
          />


          <textarea
            name="description"
            placeholder="Describe your event..."
            value={formData.description}
            onChange={handleChange}
            rows="5"
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

            <option value="">
              Select category
            </option>

            <option value="Technology">
              Technology
            </option>

            <option value="Social">
              Social
            </option>

            <option value="Entertainment">
              Entertainment
            </option>

            <option value="Art">
              Art
            </option>

            <option value="Business">
              Business
            </option>

            <option value="Charity">
              Charity
            </option>

            <option value="Food">
              Food
            </option>

          </select>


          <button
            type="submit"
          >
            Create Event
          </button>

        </form>

      </main>

    </>

  );

}

export default CreateEvent;