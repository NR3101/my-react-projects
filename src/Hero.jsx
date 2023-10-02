import React from "react";
import heroImg from "./assets/hero1.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>My React Projects</h1>
          <p>
            Welcome to my React Portfolio, a thoughtfully curated collection of
            web projects I've had the privilege to work on. Within these
            snippets, you'll discover a glimpse of my journey in web
            development. This portfolio offers previews of React-based
            applications, showcasing my commitment to crafting user-friendly and
            visually appealing digital experiences. From responsive web designs
            to interactive interfaces, each project demonstrates a dedication to
            creating functional, elegant solutions.
          </p>
          <p>
            Feel free to explore further by visiting the live versions of these
            projects, where you can experience the full scope of their
            capabilities. It's my hope that this portfolio not only reflects my
            skills but also serves as an inspiring showcase of what's possible
            in web development. Thank you for visiting, and enjoy your
            exploration!
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
