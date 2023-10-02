import React from "react";
import heroImg from "./assets/hero1.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>My React Projects</h1>
          <p>
            Hello there I am Neeraj Rai, an aspiring front-end developer and
            welcome to my React Portfolio, a thoughtfully curated collection of
            web projects I've had the privilege to work on. Within these
            snippets, you'll discover a glimpse of my journey in web
            development.
          </p>
          <p>
            Feel free to explore further by visiting the live versions of these
            projects, where you can experience the full scope of their
            capabilities.Thank you for visiting, and enjoy your exploration!!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="hero" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
