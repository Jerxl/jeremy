// At the top of your Footer.jsx
import "./Footer.css";
import { NavLink } from "react-router-dom";
// Footer.jsx
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-title">Jeremy Zhao</p>
        <div className="footer-links">
          <NavLink to="/" className="footer-link">
            HOME
          </NavLink>

          <NavLink to="/about" className="footer-link">
            ABOUT
          </NavLink>

          <NavLink to="/works" className="footer-link">
            WORKS
          </NavLink>

          <NavLink to="/contact" className="footer-link">
            CONTACT
          </NavLink>
        </div>
        <p className="footer-rights">© All rights reserved by Jeremy</p>
      </div>
    </footer>
  );
}

export default Footer;
