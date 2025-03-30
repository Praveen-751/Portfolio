import React from "react";
import "./education.css"; // Add a CSS file for styling

const Education = () => {
  return (
    <div className="edu-main">
      <div className="edu-sections">
        <section className="education">
            <div className="content-inside">
            <img className="icons" src="icons/edu.svg" alt="svg icon"/>
            <h2>Education</h2>
            <p>Details edu your education go here.</p>
          </div>
        </section>
        <section className="experience">
          <div className="content-inside">
            <h2>Professional Experience</h2>
            <p>Details edu your professional experience go here.</p>
          </div>
        </section>
        <section className="certifications">
          <div className="content-inside">
            <h2>Certifications</h2>
            <p>Details edu your certifications go here.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Education;
