import React from "react";
import Navigation from "./Navigation";
import { FaBars } from "react-icons/fa";

function Header({ setCurrentPage, setShowNav, showNav, currentPage }) {
  return (
    <header className="header">
      <div className="nav-header">
        <h1>
          <div className="text text-1">T</div>
          <div className="text text-2">R</div>
          <div className="text text-3">A</div>
          <div className="text text-4">V</div>
          <div className="text text-2">I</div>
          <div className="text text-3">S</div>
        </h1>

        <FaBars
          className="icons open-icon"
          onClick={() => setShowNav(!showNav)}
        />
      </div>
      <Navigation
        setCurrentPage={setCurrentPage}
        showNav={showNav}
        setShowNav={setShowNav}
        currentPage={currentPage}
      />
    </header>
  );
}

export default Header;
