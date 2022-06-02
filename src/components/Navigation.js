import React from "react";
import { FaTimes } from "react-icons/fa";
import {Link, NavLink } from "react-router-dom"

function Navigation({ setCurrentPage, currentPage, showNav, setShowNav }) {
  return (
    <nav className={showNav ? "shownav" : ""}>
      <FaTimes className="icons close-icon" onClick={() => setShowNav(false)} />
      <ul className="nav-links">
        
        <NavLink
            to="/"
            className={currentPage == "About" ? "active" : ""}
            onClick={() => {
              setCurrentPage("About");
              setShowNav(false);
            }}
          >
            About Me
        </NavLink>
        
        <NavLink
            to="/Portfolio"
            className={currentPage == "Portfolio" ? "active" : ""}
            onClick={() => {
              setCurrentPage("Portfolio");
              setShowNav(false);
            }}
          >
            Portfolio
        </NavLink>

        <NavLink
            to="/Contact"
            className={currentPage == "Contact" ? "active" : ""}
            onClick={() => {
              setCurrentPage("Contact");
              setShowNav(false);
            }}
          >
            Contact
        </NavLink>

        <NavLink
            to="/Resume"
            className={currentPage == "Resume" ? "active" : ""}
            onClick={() => {
              setCurrentPage("Resume");
              setShowNav(false);
            }}
          
          >
            Resume
        </NavLink>

        
      </ul>
    </nav>
  );
}

export default Navigation;
