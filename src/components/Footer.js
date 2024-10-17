import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Middle Row */}
      <div className="footer-middle">
        <div className="footer-column">
          <img
            src="../images/logo_white_footer.webp"
            alt="Logo"
            className="footer-logo"
          />
          <ul className="social-media-list padding-bottom-20">
            <li>
              <a
                href="https://www.facebook.com/EuroGroupEngineeringConsultancy"
                className="social-icon fab fa-facebook-f"
                aria-label="Facebook"
              ></a>
            </li>
            <li>
              <a
                href="https://x.com/EuroGroupforEn1"
                className="social-icon fab fa-twitter"
                aria-label="Twitter"
              ></a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/eurogroupconsult/"
                className="social-icon fab fa-instagram"
                aria-label="Instagram"
              ></a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/euro-group-for-engineering-consultancy/?viewAsMember=true"
                className="social-icon fab fa-linkedin-in"
                aria-label="LinkedIn"
              ></a>
            </li>
          </ul>
        </div>

        <div className="footer-column one-third-max">
          <h4>Need to reach us?</h4>
          <p>
            We're here to answer all your questions. If the form isn't your
            style, contact us with the means below.
          </p>
          <Link to="/contact">
            <button className="contact-button">Contact Us</button>
          </Link>
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
