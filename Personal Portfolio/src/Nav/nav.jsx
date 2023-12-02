import React from "react";
import { NavLink } from "react-router-dom";

import "./nav.css";

function Navigation() {
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">Jeremy</NavLink>
      </div>
      <div className="pages">
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
        <div className="Contact">Contact</div>
      </div>
    </nav>
  );
}

export default Navigation;
