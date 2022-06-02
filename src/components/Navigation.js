import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

function Navigation({ setCurrentPage, currentPage, showNav, setShowNav }) {
  return (
    <nav className={showNav ? "shownav" : ""}>
      <FaTimes className="icons close-icon" onClick={() => setShowNav(false)} />
      <ul className="nav-links">
        <li>
          <a
            href="#"
            className={currentPage == "About" ? "active" : ""}
            onClick={() => {
              setCurrentPage("About");
              setShowNav(false);
            }}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="#"
            className={currentPage == "Portfolio" ? "active" : ""}
            onClick={() => {
              setCurrentPage("Portfolio");
              setShowNav(false);
            }}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            className={currentPage == "Contact" ? "active" : ""}
            href="#"
            onClick={() => {
              setCurrentPage("Contact");
              setShowNav(false);
            }}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#"
            className={currentPage == "Resume" ? "active" : ""}
            onClick={() => {
              setCurrentPage("Resume");
              setShowNav(false);
            }}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
