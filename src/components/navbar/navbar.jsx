import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-row">
        <Link to="/" className="navbar-brand">
          Waypoint
        </Link>
        <nav className="navbar-links">
          <Link to="/signin" className="navbar-link">
            Sign in
          </Link>
          <Link to="/signup" className="navbar-link navbar-link-button">
            Sign up
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
