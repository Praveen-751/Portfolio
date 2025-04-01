import React from "react";
import "./education.css"; // Add a CSS file for styling

const Education = () => {
  return (
    <div className="edu-main">
      <div className="edu-header">
        <img className="header-icons" src="hero-devices.svg" alt="svg icon" />
      </div>
      <div className="edu-sections">
        <div className="background">
          <div className="content-heading">
            <h2 className="heading">
              My Education and My Experience and My Projects
            </h2>
          </div>
        </div>
        <div className="content">
          <section className="education">
            <div className="content-inside">
              <div className="image-inside">
                <img className="icons" src="education.svg" alt="svg icon" />
              </div>
              <h2>Education</h2>
              <p style={{ fontsize: "1.5rem" }}>Kent State University</p>
              <p>Master of Computer Science</p>
              <p>August 2022 - May 2024</p>
              <p>GPA: 3.5</p>

              <p style={{ marginTop: "10px" }}>Relevant Coursework :</p>
              <p>
                Design Analysis and Algorithms, Advanced Database Design,
                Software Engineering
              </p>
            </div>
          </section>
          <section className="experience">
            <div className="content-inside">
              <div className="image-inside">
                <img className="icons" src="exp.svg" alt="svg icon" />
              </div>
              <h2>Professional Experience</h2>
              <p>Regami Solutions</p>
              <p>Chennai, India</p>
              <p>Software Developer</p>
              <p>Oct 2022 - Oct 2023</p>
            </div>
          </section>
          <section className="certifications">
            <div className="content-inside">
              <div className="image-inside">
                <img className="icons" src="certified.svg" alt="svg icon" />
              </div>
              <h2>Certifications</h2>
              <p>
                Google Cloud Certification for completing Cloud Engineer and
                Data Science and Machine Learning tracks
              </p>
              <br></br>
              <p>
                LinkedIn Learning Certification for completing JavaScript
                Essential Training
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Education;
