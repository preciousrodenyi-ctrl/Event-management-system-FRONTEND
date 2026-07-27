import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">

        <div className="hero-content">

          <h1>
            Create, Discover & Manage Amazing Events
          </h1>

          <p>
            EventHub helps you organize conferences, workshops,
            parties, concerts and more—all in one place.
          </p>

          <div className="hero-buttons">
            <Link to="/events" className="primary-btn">
              Explore Events
            </Link>

            <Link to="/signup" className="secondary-btn">
              Get Started
            </Link>
          </div>

        </div>

      </section>

      <section className="features">

        <h2>Why Choose EventHub?</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>Easy Planning</h3>
            <p>Create events in minutes.</p>
          </div>

          <div className="feature-card">
            <h3> Discover Events</h3>
            <p>Find exciting events happening near you.</p>
          </div>

          <div className="feature-card">
            <h3>Secure Accounts</h3>
            <p>Your events are protected with secure authentication.</p>
          </div>

        </div>

      </section>

      <section className="cta">

        <h2>Ready to host your next event?</h2>

        <Link
          to="/create-event"
          className="primary-btn"
        >
          Create an Event
        </Link>

      </section>
    </>
  );
}

export default Home;