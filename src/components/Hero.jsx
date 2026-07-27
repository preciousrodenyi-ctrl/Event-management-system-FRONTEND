import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero.jpg";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">

      <div className="hero-text">

        <p className="hero-label">
          EVENT MANAGEMENT MADE SIMPLE
        </p>

        <h1>
          Plan Your Events Easily
        </h1>

        <p>
          Create, manage, and organize your events
          all in one place.
        </p>

        <button
          className="primary-btn"
          onClick={() => navigate("/signup")}
        >
          Get Started →
        </button>

      </div>

      <div className="hero-image-container">
        <img
          src={heroImage}
          alt="People enjoying an event"
        />
      </div>

    </section>
  );
}

export default Hero;