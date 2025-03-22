import React from "react";
import "./main.css"; 
import About from "./about";

const Main = () => {
return (
  <div className="home-container">
    <section id="about" className="section about-section">
      <div className="about-content">
        <div className="about-image">
          <img
            src="img.png"
            alt="Praveen Kumar Chinnamshetty"
          />
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
    </section>
    </div>
);
};

export default Main;