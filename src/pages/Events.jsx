import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";

import technologyImage from "../assets/Technology event.jpg";
import birthdayImage from "../assets/Birthday event.jpg";
import musicImage from "../assets/Music festival(5).jpeg";
import artImage from "../assets/Art event.jpg";
import startupImage from "../assets/Startup pitch.jpg";
import charityImage from "../assets/Charity gala.jpg";
import foodImage from "../assets/Food Event.jpg";

function Events() {
  const events = [
    {
      id: 1,
      title: "Tech Conference",
      location: "Nairobi",
      date: "2026-08-10",
      category: "Technology",
      image: technologyImage,
    },
    {
      id: 2,
      title: "Birthday Party",
      location: "Kiambu",
      date: "2026-09-20",
      category: "Social",
      image: birthdayImage,
    },
    {
      id: 3,
      title: "Music Festival",
      location: "Mombasa",
      date: "2026-10-15",
      category: "Entertainment",
      image: musicImage,
    },
    {
      id: 4,
      title: "Art Exhibition",
      location: "Nairobi",
      date: "2026-11-05",
      category: "Art",
      image: artImage,
    },
    {
      id: 5,
      title: "Startup Pitch",
      location: "Nairobi",
      date: "2026-12-01",
      category: "Business",
      image: startupImage,
    },
    {
      id: 6,
      title: "Charity Gala",
      location: "Nairobi",
      date: "2026-12-15",
      category: "Charity",
      image: charityImage,
    },
    {
      id: 7,
      title: "Food Festival",
      location: "Nairobi",
      date: "2026-12-20",
      category: "Food",
      image: foodImage,
    },
  ];

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>My Events</h1>

        <div className="event-grid">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Events;