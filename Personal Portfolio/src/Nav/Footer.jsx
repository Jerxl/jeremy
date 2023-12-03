// At the top of your Footer.jsx
import "./Footer.css";

// Footer.jsx
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-title">Jeremy Zhao</p>
        <div className="footer-links">
          <a href="/" className="footer-link">
            HOME
          </a>
          <a href="/about" className="footer-link">
            ABOUT
          </a>
          <a href="/works" className="footer-link">
            WORKS
          </a>
          <a href="/contact" className="footer-link">
            CONTACT
          </a>
        </div>
        <p className="footer-rights">© All rights reserved by Jeremy</p>
      </div>
    </footer>
  );
}

export default Footer;
