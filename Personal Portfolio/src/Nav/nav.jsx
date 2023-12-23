import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

function Navigation() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  // This effect sets up the event listener for clicks outside the navigation
  useEffect(() => {
    const handleDocumentClick = (event) => {
      // Get the nav element
      const navElement = document.querySelector(".navbar");

      // Check if the click was outside the nav
      if (navElement && !navElement.contains(event.target)) {
        setIsNavExpanded(false);
      }
    };

    // Add the event listener
    document.addEventListener("click", handleDocumentClick);

    // Clean up the event listener
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const closeNav = () => {
    setIsNavExpanded(false);
  };
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
          <li onClick={closeNav}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li onClick={closeNav}>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>

          <li onClick={closeNav}>
            <NavLink
              to="/Works"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Works
            </NavLink>
          </li>
          <li onClick={closeNav}>
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
