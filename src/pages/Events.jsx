import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";

function Events() {
  const events = [
    {
      id: 1,
      title: "Tech Conference",
      location: "Nairobi",
      date: "2026-08-20",
      status: "Upcoming",
    },
    {
      id: 2,
      title: "Birthday Party",
      location: "Kiambu",
      date: "2026-09-05",
      status: "Planned",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>My Events</h1>

        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </>
  );
}

export default Events;