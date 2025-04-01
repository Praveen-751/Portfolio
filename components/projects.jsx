import React from "react";
import "./projects.css"; // Add a CSS file for styling
import Cards from "./cards";

const Projects = () => {
  return (
    <div className="projects-main">
      <h1 className="projects-heading"> My Recent Projects Including Full Stack and Machine Learning</h1>
      <div className="cards-section">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default Projects;
