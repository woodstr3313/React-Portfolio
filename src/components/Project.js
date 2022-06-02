import React, { useState } from "react";
import About from "../sections/About";
import Portfolio from "../sections/Portfolio";
import Contact from "../sections/Contact";
import Resume from "../sections/Resume";

function Project({ currentPage, setCurrentPage }) {
  if (currentPage == "About") {
    return <About />;
  } else if (currentPage == "Portfolio") {
    return <Portfolio />;
  } else if (currentPage == "Contact") {
    return <Contact />;
  } else if (currentPage == "Resume") {
    return <Resume />;
  }
}

export default Project;
