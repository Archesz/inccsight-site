import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <a href="/" className="navbar__logo">
          Logo
        </a>
      </div>
      <ul className="navbar__menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Download</a>
        </li>
        <li>
          <a href="/">Guide</a>
        </li>
        <li>
          <a href="/">Support</a>
        </li>
        <li>
          <a href="/">Github</a>
        </li>
        <li>
          <a href="/">News</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
