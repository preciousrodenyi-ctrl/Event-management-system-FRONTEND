import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import technologyImage from "../assets/Technology event.jpg";
import musicImage from "../assets/Music festival(5).jpeg";
import foodImage from "../assets/Food Event.jpg";


function Home() {

  const featuredEvents = [

    {
      id: 1,
      title: "Tech Conference",
      location: "Nairobi",
      date: "August 10, 2026",
      category: "Technology",
      image: technologyImage
    },

    {
      id: 2,
      title: "Music Festival",
      location: "Mombasa",
      date: "October 15, 2026",
      category: "Entertainment",
      image: musicImage
    },

    {
      id: 3,
      title: "Food Festival",
      location: "Nairobi",
      date: "December 20, 2026",
      category: "Food",
      image: foodImage
    }

  ];


  return (

    <>

      <Navbar />


      {/* HERO SECTION */}

      <section className="home-hero">

        <div className="home-hero-text">

          <h1>
            Plan Amazing Events
            <br />
            Without The Stress 
          </h1>


          <p>

            Create, organize and manage your events
            easily with EventHub.

          </p>


          <div className="hero-buttons">

            <Link to="/signup">

              <button>
                Get Started
              </button>

            </Link>


            <Link to="/events">

              <button className="secondary-btn">
                Explore Events
              </button>

            </Link>

          </div>

        </div>


        <div className="home-hero-image">

          <img
            src={technologyImage}
            alt="Event"
          />

        </div>

      </section>



      {/* STATS */}

      <section className="home-stats">

        <div>

          <h2>500+</h2>

          <p>
            Events Created
          </p>

        </div>


        <div>

          <h2>10K+</h2>

          <p>
            Happy Users
          </p>

        </div>


        <div>

          <h2>50+</h2>

          <p>
            Event Categories
          </p>

        </div>


        <div>

          <h2>24/7</h2>

          <p>
            Support
          </p>

        </div>

      </section>



      {/* FEATURED EVENTS */}

      <section className="featured-section">

        <h2>
          Featured Events
        </h2>


        <p>
          Discover exciting events happening around you.
        </p>


        <div className="featured-grid">

          {featuredEvents.map((event) => (

            <div
              className="featured-card"
              key={event.id}
            >

              <img
                src={event.image}
                alt={event.title}
              />


              <div className="featured-content">

                <span className="category">
                  {event.category}
                </span>


                <h3>
                  {event.title}
                </h3>


                <p>
                  {event.location}
                </p>


                <p>
                   {event.date}
                </p>


                <Link to="/login">

                  <button>
                    View Event
                  </button>

                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>



      {/* FEATURES */}

      <section className="features-section">

        <h2>
          Everything You Need To Manage Events
        </h2>


        <div className="features-grid">


          <div className="feature-card">

            <div className="feature-icon">
              
            </div>

            <h3>
              Easy Scheduling
            </h3>

            <p>
              Organize your event dates and schedules easily.
            </p>

          </div>



          <div className="feature-card">

            <div className="feature-icon">
              
            </div>

            <h3>
              Manage Your Events
            </h3>

            <p>
              Create and manage all your events in one place.
            </p>

          </div>



          <div className="feature-card">

            <div className="feature-icon">
              
            </div>

            <h3>
              Track Locations
            </h3>

            <p>
              Keep all your event locations organized.
            </p>

          </div>



        </div>

      </section>



      {/* CALL TO ACTION */}

      <section className="cta-section">

        <h2>
          Ready To Create Your Next Event?
        </h2>


        <p>
          Join EventHub today and start planning.
        </p>


        <Link to="/signup">

          <button>
            Create Your Free Account
          </button>

        </Link>

      </section>



      {/* FOOTER */}

      <footer>

        <h3>
           EventHub
        </h3>


        <p>
          Making event management simple.
        </p>


        <div className="footer-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/events">
            Events
          </Link>

          <Link to="/login">
            Login
          </Link>

          <Link to="/signup">
            Sign Up
          </Link>

        </div>


        <p>
          © 2026 EventHub. All rights reserved.
        </p>

      </footer>


    </>

  );

}


export default Home;