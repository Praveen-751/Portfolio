import React from "react";
import "./about.css"; // Add a CSS file for styling

const About = () => {
  return (
      <div className="about-content">
        <div className="about-image">
          <img src="img.png" alt="Praveen Kumar Chinnamshetty" />
        </div>
        <div className="about-info">
          <h2>Praveen Kumar Chinnamshetty</h2>
          <p>
            Hi, I'm a passionate developer with a knack for creating beautiful
            and functional web applications. I love solving problems and
            bringing ideas to life.
          </p>
        </div>
      </div>
  );
};

export default About;
