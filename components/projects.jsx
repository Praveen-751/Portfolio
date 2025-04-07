import React from "react";
import "./projects.css"; // Add a CSS file for styling
import Cards from "./cards";

const Projects = () => {
  return (
    <div className="projects-main">
      <h1 className="projects-heading">
        {" "}
        My Recent Projects Including Full Stack and Machine Learning
      </h1>
      <div className="cards-section">
        <Cards
          props={"Skin_Diesease.png"}
          text={
            "Image-based system for detecting skin diseases using processing algorithms, aiding diagnosis in remote areas with limited dermatologist access."
          }
          id={1}
        />

        <Cards
          props={"crop_price_prediction.png"}
          text={
            "Machine learning predicts vegetable prices using weather data, helping farmers plan crops and maximize profits through accurate forecasting."
          }
          id={2}
        />
        <Cards
          props={"netwrok_anomaly.png"}
          text={
            "Machine learning-based system to detect network anomalies like DDoS and unauthorized access, improving security over traditional methods."
          }
          id={3}
        />
      </div>
    </div>
  );
};

export default Projects;
