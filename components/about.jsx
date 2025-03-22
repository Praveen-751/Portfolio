import React from "react";
import "./about.css"; // Add a CSS file for styling

const About = () => {
  return (
    <div className="about-main">
      <div className="about-sections">
        <section className="education">
            <div className="content-inside">
            <img className="icons" src="icons/edu.svg" alt="svg icon"/>
            <h2>Education</h2>
            <p>Details about your education go here.</p>
          </div>
        </section>
        <section className="experience">
          <div className="content-inside">
            <h2>Professional Experience</h2>
            <p>Details about your professional experience go here.</p>
          </div>
        </section>
        <section className="certifications">
          <div className="content-inside">
            <h2>Certifications</h2>
            <p>Details about your certifications go here.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
