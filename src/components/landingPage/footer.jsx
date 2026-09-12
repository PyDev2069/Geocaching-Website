import { Compass } from "lucide-react";

function Footer() {
  return (
    <footer className="manus-site-footer">
      <div className="manus-container manus-site-footer__inner">
        <a className="manus-brand" href="#top">
          <span className="manus-brand-mark">
            <Compass size={20} />
          </span>

          <span className="manus-brand__wordmark">
            geocaching<span>india</span>
          </span>
        </a>

        <span className="manus-site-footer__note">
          For the delightfully curious.
        </span>

        <div className="manus-site-footer__links">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#roles">For you</a>
          <a href="/signin">Sign in</a>
        </div>

        <span className="manus-site-footer__copyright">
          © 2026 Geocaching India
        </span>
      </div>
    </footer>
  );
}

export default Footer;