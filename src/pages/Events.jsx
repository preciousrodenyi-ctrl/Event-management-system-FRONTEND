import { useState } from "react";
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

  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState("All");

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


  const filteredEvents =
    events.filter((event) => {

      const matchesSearch =

        event.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

        ||

        event.location
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );


      const matchesCategory =

        category === "All"

        ||

        event.category === category;


      return (
        matchesSearch &&
        matchesCategory
      );

    });


  return (

    <>

      <Navbar />

      <main className="events-page">

        <section className="events-header">

          <h1>
            Discover Amazing Events 
          </h1>

          <p>
            Find events happening around you.
          </p>

        </section>


        <section className="event-controls">

          <input
            type="text"
            placeholder="🔍 Search events..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />


          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
          >

            <option value="All">
              All Categories
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

        </section>


        <section className="event-grid">

          {filteredEvents.length > 0 ? (

            filteredEvents.map(
              (event) => (

                <EventCard
                  key={event.id}
                  event={event}
                />

              )
            )

          ) : (

            <div className="no-events">

              <h2>
                 No events found
              </h2>

              <p>
                Try searching for another event.
              </p>

            </div>

          )}

        </section>

      </main>

    </>

  );

}

export default Events;