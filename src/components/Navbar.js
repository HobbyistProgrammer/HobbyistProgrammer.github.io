import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaProjectDiagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="brand">
          {/* <img src="logo.png" alt="Logo" className="logo" /> */}
          <h1>Benton Le</h1>
        </div>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-me" className={({ isActive }) => (isActive ? 'active' : '')}>
              <FaUser /> About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
              <FaProjectDiagram /> Projects
            </NavLink>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/benton-le" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/HobbyistProgrammer" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
          </li>
          <br/>
          <li>
            <h3>Contact Me</h3>
            <p><a href="mailto:benton.le@hotmail.com"><FaEnvelope />benton.le@hotmail.com</a></p>
            <p></p>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
