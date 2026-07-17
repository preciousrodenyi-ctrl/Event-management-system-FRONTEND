import { useState } from "react";

function EventForm() {

  const [event, setEvent] = useState({
    title: "",
    location: "",
    date: "",
    category: "",
    description: ""
  });


  function handleChange(e) {
    setEvent({
      ...event,
      [e.target.name]: e.target.value
    });
  }


  function handleSubmit(e) {
    e.preventDefault();

    console.log(event);

    alert("Event saved!");
  }


  return (
    <form onSubmit={handleSubmit}>

      <h2>Create Event</h2>


      <input
        name="title"
        placeholder="Event title"
        onChange={handleChange}
      />


      <input
        name="location"
        placeholder="Location"
        onChange={handleChange}
      />


      <input
        name="date"
        type="date"
        onChange={handleChange}
      />


      <input
        name="category"
        placeholder="Category"
        onChange={handleChange}
      />


      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
      />


      <button type="submit">
        Save Event
      </button>


    </form>
  );
}


export default EventForm;