import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to track the menu open status

  // Function to close the menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      {/* Logo Section */}
      <div className="header-logo">
        <Link to="/">
          <img
            src="../images/logo_white.webp"
            alt="Logo"
            className="logo"
          />
        </Link>
      </div>

      {/* Hamburger Menu for Mobile View */}
      <Menu
        right
        isOpen={menuOpen}
        onStateChange={(state) => setMenuOpen(state.isOpen)}
        className="burger-menu"
      >
        {/* Close button on the right */}
        <button className="menu-item close-button" onClick={closeMenu}>
          X
        </button>

        <a className="menu-item" href="/">
          Home
        </a>
        <a className="menu-item" href="/About">
          About Us
        </a>
        <a className="menu-item" href="/Projects">
          Projects
        </a>
        <a className="menu-item" href="/Services">
          Services
        </a>
        <a className="menu-item" href="/Careers">
          Careers
        </a>
        <a className="menu-item" href="/Contact">
          Contact Us
        </a>

        {/* Company Logo at the bottom */}
        <div className="menu-logo">
          <img
            src="../images/logo_white.webp"
            alt="Company Logo"
            className="menu-company-logo"
          />
        </div>

        {/* Social Media Icons */}
        <div className="social-media-icons">
          <ul>
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
      </Menu>

      {/* Desktop Navigation Links */}
      <nav className="header-nav">
        <ul className="nav-list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/About">About Us</a>
          </li>
          <li>
            <a href="/Projects">Projects</a>
          </li>
          <li>
            <a href="/Services">Services</a>
          </li>
          <li>
            <a href="/Careers">Careers</a>
          </li>
          <li>
            <a href="/Contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
