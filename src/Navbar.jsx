// src/Navbar.jsx
import React from 'react';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand"> 
      <img src= "./assets/svg-icons/icons8-bash-48.svg" className="logo-navbar" />
      </div>
      <div className="navbar-menu-group">
        <ul className="navbar-menu">
          <li className="navbar-menu-item">
            <a href="/">Stats</a>
          </li>
          <li className="navbar-menu-item">
            <a href="/about">Leaderboard</a>
          </li>
          <li className="navbar-menu-item">
            <a href="/contact">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-account">
        <ul>
          <li className="navbar-menu-item-account">
            <a href="">Register</a>
          </li>
          <li className="navbar-menu-item-account">
            <a href="">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;