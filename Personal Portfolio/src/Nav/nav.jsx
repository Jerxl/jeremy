import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

function Navigation() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Jeremy
        </NavLink>
      </div>
      <button
        className="hamburger"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        {/* Icon from Bootstrap Icons */}
        <i className={isNavExpanded ? "bi bi-x-lg" : "bi bi-list"}></i>
      </button>
      <div className={`pages ${isNavExpanded ? "nav-expanded" : ""}`}>
        <ul className="page_list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Skills"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Works"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Works
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Experiences"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Experiences
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="CTA">
        <NavLink to="/contact" className="Contact">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
