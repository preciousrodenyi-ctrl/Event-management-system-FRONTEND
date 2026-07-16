import Navbar from "../components/Navbar";

function Events() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h1>My Events</h1>

        <button>Add Event</button>

        <p>No events available.</p>
      </div>
    </>
  );
}

export default Events;