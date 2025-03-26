import React from "react";
import "./main.css";
import About from "./education";
import Projects from "./projects";
import Contact from "./contact";

const Main = () => {
  return (
    <div className="main-container">
      <div className="home-container">
      <section id="about" className="section about-section">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <Contact />
      </section>
      </div>
      </div>
  );
};

export default Main;
