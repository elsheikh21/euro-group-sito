import React from 'react';
import './Footer.css'; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      {/* Upper Row */}
      <div className="footer-upper">
        <img src="../logo192.png" alt="Logo" className="footer-logo" />
      </div>

      {/* Middle Row */}
      <div className="footer-middle">
        <div className="footer-column">
          <h4>Home</h4>
          <ul>
            <li><a href="#About">About us</a></li>
            <li><a href="#Services">Our Services</a></li>
            <li><a href="#Projects">Previous Projects</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>About Us</h4>
          <ul>
            <li><a href="#Story">Our Story</a></li>
            <li><a href="#Team">Team</a></li>
            <li><a href="#Careers">Careers</a></li>
            <li><a href="#News">News</a></li>
          </ul>
        </div>
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
          <ul>
            <li><a href="#Facebook">Facebook</a></li>
            <li><a href="#Twitter">Twitter</a></li>
            <li><a href="#Instagram">Instagram</a></li>
            <li><a href="#LinkedIn">LinkedIn</a></li>
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
        <p>© 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
