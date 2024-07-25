import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure this file exists

const Navbar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-me">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
