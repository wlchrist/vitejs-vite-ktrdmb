// src/Navbar.jsx
import React from 'react';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">
          <img
            src="https://raw.githubusercontent.com/wlchrist/vitejs-vite-ktrdmb/c11a5ed3d3a33230a497f14c6d2ece4c27449d49/src/assets/svg-icons/icons8-bash-96.svg"
            className="logo-navbar"
          />
        </a>
      </div>
      <div className="navbar-menu-group">
        <ul className="navbar-menu">
          <li className="navbar-menu-item">
            <a href="/">Deposit</a>
          </li>
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
