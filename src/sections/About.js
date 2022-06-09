import React from "react";
import image from "../portfolio images/Headshot.jpg";
import { useNavigate } from "react-router-dom";

function About({ setCurrentPage }) {
  let navigate = useNavigate();
  return (
    <div className="about-section" id="About">
      <div className="about-container">
        <h1>About Me</h1>
        <div className="border-primary pr-4 about-header">
          <div className="about-img">
            <img src={image} alt="Travis Pic" />
          </div>
          <div className="header-text">
            <h2>
              Hi I'm <span>Travis</span> <span>Woods</span>
            </h2>
            <h3>A full-stack Web Developer</h3>
          </div>
        </div>
        <p id="hero-text">
          I'm currently living in Atlanta, Georgia. I studied at Georgia Tech
          and completed a full-stack web developer bootcamp. My primary focus
          for becoming a web developer is my passion in computer science and
          paving the way for future developers. In my free time, I enjoy
          fishing, hiking, playing guitar and taking my dogs out on my boat. I
          really enjoy either being out on the lake or somewhere on a beach.
        </p>
        <div className="about-footer">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/travis-woods-54284a101/">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/woodstr3313">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
          </ul>
          <button 
            id="contact-me" className="about-footer-btn"
            onClick={() => {
              setCurrentPage("Contact");
              navigate("/Contact");
            }}
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;

