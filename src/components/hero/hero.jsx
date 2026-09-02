import { Link } from 'react-router-dom';
import './hero.css';

function Hero() {
  return (
    <section className="hero">
      <h1>Find what's hidden nearby.</h1>
      <p className="hero-sub">
        Waypoint is a place to track caches, log your finds, and hide new
        ones for the next person to discover.
      </p>
      <div className="hero-actions">
        <Link to="/signup" className="hero-button hero-button-primary">
          Start exploring
        </Link>
        <Link to="/signin" className="hero-button hero-button-secondary">
          Sign in
        </Link>
      </div>
    </section>
  );
}

export default Hero;
