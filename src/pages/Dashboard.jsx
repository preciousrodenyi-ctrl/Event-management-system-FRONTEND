import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";

import technologyImage from "../assets/Technology event.jpg";
import musicImage from "../assets/Music festival(5).jpeg";
import charityImage from "../assets/Charity gala.jpg";

function Dashboard() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Conference",
      location: "Nairobi",
      date: "2026-08-10",
      category: "Technology",
      status: "Upcoming",
      image: technologyImage,
    },
    {
      id: 2,
      title: "Music Festival",
      location: "Mombasa",
      date: "2026-10-15",
      category: "Entertainment",
      status: "Upcoming",
      image: musicImage,
    },
    {
      id: 3,
      title: "Charity Gala",
      location: "Nairobi",
      date: "2026-12-15",
      category: "Charity",
      status: "Upcoming",
      image: charityImage,
    },
  ];

  return (
    <>
      <Navbar />

      <div className="container">
        <h1 className="title">EventHub Dashboard</h1>

        <p style={{ marginBottom: "30px" }}>
          Welcome! Manage your personal events from one place.
        </p>

        {/* Statistics */}
        <div className="stats">
          <div className="stat-card">
            <h2>7</h2>
            <p>Total Events</p>
          </div>

          <div className="stat-card">
            <h2>3</h2>
            <p>Upcoming</p>
          </div>

          <div className="stat-card">
            <h2>4</h2>
            <p>Completed</p>
          </div>
        </div>

        <br />

        <br />
        <br />

        <h2>Upcoming Events</h2>

        <div className="event-grid">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;