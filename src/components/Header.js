import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="header-logo">
        <Link to="/">
          <img src="../images/logos/logo_white.png" alt="Logo" className="logo" />
        </Link>
      </div>

      {/* Hamburger Menu for Mobile View */}
      <Menu right className="burger-menu">
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
      </Menu>

      {/* Desktop Navigation Links */}
      <nav className="header-nav">
        <ul className="nav-list">
          <li><a href="/">Home</a></li>
          <li><a href="/About">About Us</a></li>
          <li><a href="/Projects">Projects</a></li>
          <li><a href="/Services">Services</a></li>
          <li><a href="/Careers">Careers</a></li>
          <li><a href="/Contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
