import { Link } from "react-router-dom";

import heroImage from "../assets/Technology event.jpg";
import musicImage from "../assets/Music festival(5).jpeg";
import artImage from "../assets/Art event.jpg";

function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">

        <div className="hero-text">

          <span className="hero-badge">
            Welcome to EventHub
          </span>

          <h1>
            Discover Amazing
            <br />
            Events Near You
          </h1>

          <p>
            EventHub helps you discover, create and manage events.
            From technology conferences to music festivals,
            everything is in one place.
          </p>

          <div className="hero-buttons">

            <Link to="/login">
              <button className="primary-btn">
                Explore Events
              </button>
            </Link>

            <Link to="/signup">
              <button className="secondary-btn">
                Get Started
              </button>
            </Link>

          </div>

        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Event" />
        </div>

      </section>

      {/* FEATURED EVENTS */}

      <section className="featured-events">

        <h2>Featured Events</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <img src={heroImage} alt="" />
            <h3>Technology Conference</h3>
            <p>Nairobi • Aug 10, 2026</p>
          </div>

          <div className="feature-card">
            <img src={musicImage} alt="" />
            <h3>Music Festival</h3>
            <p>Mombasa • Oct 15, 2026</p>
          </div>

          <div className="feature-card">
            <img src={artImage} alt="" />
            <h3>Art Exhibition</h3>
            <p>Nairobi • Nov 5, 2026</p>
          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="why-us">

        <h2>Why Choose EventHub?</h2>

        <div className="why-grid">

          <div className="why-card">
            <h3>Easy Event Creation</h3>
            <p>Create events in just a few clicks.</p>
          </div>

          <div className="why-card">
            <h3> Manage Events</h3>
            <p>Update and organize your events anytime.</p>
          </div>

          <div className="why-card">
            <h3>Secure Accounts</h3>
            <p>Your information is protected and secure.</p>
          </div>

          <div className="why-card">
            <h3> Anywhere</h3>
            <p>Access your events from any device.</p>
          </div>

        </div>

      </section>

      {/* STATISTICS */}

      <section className="stats">

        <div className="stat-card">
          <h2>500+</h2>
          <p>Events</p>
        </div>

        <div className="stat-card">
          <h2>2,000+</h2>
          <p>Users</p>
        </div>

        <div className="stat-card">
          <h2>100+</h2>
          <p>Organizers</p>
        </div>

      </section>

      {/* TESTIMONIALS */}

      <section className="testimonials">

        <h2>What Our Users Say</h2>

        <div className="testimonial-grid">

          <div className="testimonial-card">
            
            <p>
              "EventHub made organizing my graduation event so easy!"
            </p>
            <h4>- Precious</h4>
          </div>

          <div className="testimonial-card">
            
            <p>
              "A beautiful platform with everything I needed."
            </p>
            <h4>- Mercy</h4>
          </div>

        </div>

      </section>

      {/* CALL TO ACTION */}

      <section className="cta">

        <h2>Ready to Join EventHub?</h2>

        <p>
          Sign up today and start creating amazing events.
        </p>

        <Link to="/signup">
          <button className="primary-btn">
            Create Free Account
          </button>
        </Link>

      </section>

      {/* FOOTER */}

      <footer className="footer">

        <h2>EventHub</h2>

        <p>
          Making event planning easier and more enjoyable.
        </p>

        <p>
          © 2026 EventHub. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default Home;