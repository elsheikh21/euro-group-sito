import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { slide as Menu } from 'react-burger-menu';
import './Header.css'; // Import your CSS file

const Header = () => {
  // Use media query to determine if the device is a handheld device
  const isHandheldDevice = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <header className="header">
      {/* Left Part: Logo */}
      <div className="header-logo">
        <img src="../logo192.png" alt="Logo" />
      </div>

      {/* Conditionally render the menu based on device size */}
      {isHandheldDevice ? (
        <Menu right>
          <a className="menu-item" href="#Home">
            Home
          </a>
          <a className="menu-item" href="#About">
            About Us
          </a>
          <a className="menu-item" href="#Projects">
            Projects
          </a>
          <a className="menu-item" href="#Services">
            Services
          </a>
          <a className="menu-item" href="#Contact">
            Contact
          </a>
        </Menu>
      ) : (
        // Regular navigation links for larger screens
        <nav className="header-nav">
          <ul className="nav-list">
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About Us</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Services">Services</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
