import React from 'react';
import './Footer.css'; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      {/* Upper Row */}
      <div className="footer-upper">
        <img src="../images/logos/logo_white.png" alt="Logo" className="footer-logo" />
      </div>

      {/* Middle Row */}
      <div className="footer-middle">

        <div className="footer-column">
          <h4>Projects</h4>
          <ul>
            <li><a href="#Projects">All Projects</a></li>
          </ul>
          <h4>Services</h4>
          <ul>
            <li><a href="#Planning">Planning</a></li>
            <li><a href="#Engineering">Engineering</a></li>
            <li><a href="#Architecture">Architecture</a></li>
            <li><a href="#Construction">Construction</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Social Media</h4>
          <ul className="social-media-list">
            <li><a href="#Facebook" className="social-icon fab fa-facebook-f"></a></li>
            <li><a href="#Twitter" className="social-icon fab fa-twitter"></a></li>
            <li><a href="#Instagram" className="social-icon fab fa-instagram"></a></li>
            <li><a href="#LinkedIn" className="social-icon fab fa-linkedin-in"></a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Need to reach us?</h4>
          <p>We're here to answer all your questions. If the form isn't your style, contact us with the means below.</p>
          <button className="contact-button">Contact Us</button>
        </div>
      </div>

      {/* Lower Row */}
      <div className="footer-lower">
        <p>© 2024 TaliCo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
