import { useParams, Link } from "react-router-dom";

import technologyImage from "../assets/Technology event.jpg";
import birthdayImage from "../assets/Birthday event.jpg";
import musicImage from "../assets/Music festival(5).jpeg";
import artImage from "../assets/Art event.jpg";
import startupImage from "../assets/Startup pitch.jpg";
import charityImage from "../assets/Charity gala.jpg";
import foodImage from "../assets/Food Event.jpg";

function EventDetails() {

  const { id } = useParams();

  const events = [

    {
      id: 1,
      title: "Tech Conference",
      location: "Nairobi",
      date: "August 10, 2026",
      category: "Technology",
      image: technologyImage,
      description:
        "Join technology enthusiasts, developers, entrepreneurs, and innovators for an exciting conference filled with ideas, networking, and learning opportunities.",
    },

    {
      id: 2,
      title: "Birthday Party",
      location: "Kiambu",
      date: "September 20, 2026",
      category: "Social",
      image: birthdayImage,
      description:
        "Come celebrate an unforgettable birthday party filled with fun, music, food, friends, and amazing memories.",
    },

    {
      id: 3,
      title: "Music Festival",
      location: "Mombasa",
      date: "October 15, 2026",
      category: "Entertainment",
      image: musicImage,
      description:
        "Enjoy live music, amazing performances, great food, and an unforgettable festival experience by the coast.",
    },

    {
      id: 4,
      title: "Art Exhibition",
      location: "Nairobi",
      date: "November 5, 2026",
      category: "Art",
      image: artImage,
      description:
        "Explore beautiful artwork from talented artists and discover creativity, culture, and imagination.",
    },

    {
      id: 5,
      title: "Startup Pitch",
      location: "Nairobi",
      date: "December 1, 2026",
      category: "Business",
      image: startupImage,
      description:
        "Connect with entrepreneurs, investors, and innovators at this exciting startup pitch event.",
    },

    {
      id: 6,
      title: "Charity Gala",
      location: "Nairobi",
      date: "December 15, 2026",
      category: "Charity",
      image: charityImage,
      description:
        "Join us for an elegant charity gala as we come together to support an important cause and make a difference.",
    },

    {
      id: 7,
      title: "Food Festival",
      location: "Nairobi",
      date: "December 20, 2026",
      category: "Food",
      image: foodImage,
      description:
        "Taste delicious food, discover new flavors, and enjoy an amazing day full of food and entertainment.",
    },

  ];


  const event = events.find(
    (event) =>
      event.id === Number(id)
  );


  if (!event) {

    return (

      <div className="not-found-page">

        <h1>
          Event Not Found 
        </h1>

        <p>
          Sorry, we could not find this event.
        </p>

        <Link to="/events">

          <button>
            Back to Events
          </button>

        </Link>

      </div>

    );

  }


  return (

    <>

      <div className="event-details-page">

        <Link
          to="/events"
          className="back-link"
        >
          ← Back to Events
        </Link>


        <section className="event-details-card">

          <img
            src={event.image}
            alt={event.title}
            className="event-details-image"
          />


          <div className="event-details-content">

            <span className="event-category">
              {event.category}
            </span>


            <h1>
              {event.title}
            </h1>


            <div className="event-information">

              <p>
                 <strong>Location:</strong>{" "}
                {event.location}
              </p>

              <p>
                
                <strong>Date:</strong>{" "}
                {event.date}
              </p>

              <p>
                <strong>Category:</strong>{" "}
                {event.category}
              </p>

            </div>


            <h2>
              About This Event
            </h2>


            <p className="event-description">
              {event.description}
            </p>


            <button>
              Register for Event 
            </button>

          </div>

        </section>

      </div>

    </>

  );

}

export default EventDetails;