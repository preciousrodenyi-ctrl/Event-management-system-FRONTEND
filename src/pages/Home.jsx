import { Link } from "react-router-dom";
import { FaCalendarAlt, FaUsers, FaMapMarkerAlt } from "react-icons/fa";

function Home() {

  return (

    <div className="home-page">

      {/* HERO SECTION */}

      <section className="hero">

        <div className="hero-content">

          <h1>
            Create Amazing
            <br />
            <span>Events Easily</span>
          </h1>

          <p>
            EventHub helps you create, manage and discover
            amazing events in one simple platform.
          </p>


          <div className="hero-buttons">

            <Link
              to="/signup"
              className="primary-button"
            >
              Get Started
            </Link>


            <Link
              to="/events"
              className="secondary-button"
            >
              Explore Events
            </Link>

          </div>


        </div>

      </section>



      {/* FEATURES */}

      <section className="features">

        <h2>
          Everything You Need
        </h2>

        <p className="section-description">
          Manage your events professionally with powerful tools.
        </p>



        <div className="feature-grid">


          <div className="feature-card">

            <FaCalendarAlt />

            <h3>
              Create Events
            </h3>

            <p>
              Easily create and organize events with details,
              dates and locations.
            </p>

          </div>




          <div className="feature-card">

            <FaUsers />

            <h3>
              Manage Guests
            </h3>

            <p>
              Keep track of your events and attendees
              from your dashboard.
            </p>

          </div>




          <div className="feature-card">

            <FaMapMarkerAlt />

            <h3>
              Find Locations
            </h3>

            <p>
              Add event locations and share information
              with your community.
            </p>

          </div>



        </div>


      </section>




      {/* CALL TO ACTION */}

      <section className="cta">


        <h2>
          Ready to create your next event?
        </h2>


        <p>
          Join EventHub and start managing events today.
        </p>


        <Link
          to="/signup"
          className="primary-button"
        >
          Join EventHub
        </Link>


      </section>




      {/* FOOTER */}

      <footer className="footer">

        <h2>
          EventHub
        </h2>


        <p>
          © 2026 EventHub. All rights reserved.
        </p>


      </footer>


    </div>

  );

}


export default Home;