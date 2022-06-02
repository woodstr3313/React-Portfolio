import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <footer id="Contact-Me">
      <h1>Contact Me</h1>

      <div class="contact-info">
        <a href="mailto:woodstr3313@gmail.com">
          <FaEnvelope />
        </a>
        <a href="tel:+845-514-4488">
          <FaPhone />
        </a>
        <a href="https://www.linkedin.com/in/travis-woods-54284a101/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/woodstr3313">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
