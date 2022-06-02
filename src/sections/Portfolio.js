import React from "react";
import portfolioData from "../assets/portfolioData";
import { FaGlobe, FaGithubSquare } from "react-icons/fa";
// import image2 from "../assets/portfolio Images/ga-hikes.jpg"
function Portfolio() {
  return (
    <section className="My-Work" id="My-Work">
      <h1>My Work</h1>
      <div className="work-section-center">
        {portfolioData.map((data) => {
          const { id, name, image, url1, url2 } = data;
          return (
            <div className="work-card" key={id}>
              <div
                className="card-image"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h3>{name}</h3>
                <div className="layer"></div>
              </div>
              <div className="card-footer">
                <a href={url1}>
                  <FaGlobe />
                </a>

                <a href={url2}>
                  <FaGithubSquare />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;

// {
  /* <div class="work-card">
          <div class="card-image" style="background: url('./Assets/img/ga-hikes.jpg');   background-position: center;
      background-repeat: no-repeat;
      background-size: cover;">
              <h3>GA Hikes</h3>
              <div class="layer"></div>
          </div>
          <div class="card-footer">
              <a href="https://amachkel.github.io/GA-hikes/"><i class="fa-solid fa-globe"></i></i></a>

              <a href="https://github.com/woodstr3313/GA-hikes"><i class="fa-brands fa-github"></i></a>
          </div> */
// }
