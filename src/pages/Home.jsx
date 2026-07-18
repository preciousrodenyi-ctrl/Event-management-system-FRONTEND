import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <main className="landing-page">

        <div className="landing-content">

          <span className="welcome-badge">
            Welcome to EventHub 
          </span>

          <h1>
            Discover Events.
            <br />
            Create Memories.
          </h1>

          <p>
            Find exciting events, connect with people,
            and create unforgettable experiences.
          </p>

          <div className="landing-buttons">

            <Link to="/events">
              <button>
                Explore Events
              </button>
            </Link>

            <Link to="/signup">
              <button className="secondary-button">
                Get Started
              </button>
            </Link>

          </div>

        </div>

        <div className="landing-image">

          <img
            src="/src/assets/Technology event.jpg"
            alt="Technology event"
          />

        </div>

      </main>


      <section className="features-section">

        <h2>
          Everything You Need for Amazing Events
        </h2>

        <p className="features-intro">
          EventHub makes discovering and managing events simple.
        </p>


        <div className="features-grid">

          <div className="feature-card">

            <div className="feature-icon">
              
            </div>

            <h3>
              Discover Events
            </h3>

            <p>
              Find exciting events happening around you.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              
            </div>

            <h3>
              Manage Events
            </h3>

            <p>
              Create and organize your own events easily.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              
            </div>

            <h3>
              Connect With People
            </h3>

            <p>
              Meet people and enjoy unforgettable experiences.
            </p>

          </div>

        </div>

      </section>


      <section className="home-call-to-action">

        <h2>
          Ready to Discover Your Next Event?
        </h2>

        <p>
          Join EventHub today and start exploring amazing experiences.
        </p>

        <Link to="/signup">
          <button className="secondary-button">
            Join EventHub
          </button>
        </Link>

      </section>


      <footer className="site-footer">

        <h3>
           EventHub
        </h3>

        <p>
          Discover. Connect. Experience.
        </p>

        <small>
          © 2026 EventHub. All rights reserved.
        </small>

      </footer>

    </>
  );
}

export default Home;