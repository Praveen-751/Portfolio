import React from "react";
import "./cards.css"; // Add a CSS file for styling

const Cards = ({ props, text, id }) => {
  
    const backgroundColors = {
      1: "#0a469a",
      2: "#d76235",
      3: "#24405f",
      4: "2px solid #FF6B6B",
      5: "2px solid #228B22",
      6: "2px solid #1D4ED8",
  };
  
  const urls = {
    1: "https://github.com/Praveen-751/Skin_Disease_Detection",
    2: "https://github.com/Praveen-751/Collating-Weather-Data",
    3: "https://github.com/Praveen-751/netwrok_anomaly",
  };

  return (
    <div className="cards-main">
      <div className="cards-content">
        <img className="cards-image" src={props} alt="svg icon" />
        <div
          className="cards-text"
          style={{
            backgroundColor: backgroundColors[id] || "rgba(0, 0, 0, 0.5)",
          }}
        >
          {text}
          <a href={urls[id] || "#"} target="_blank" rel="noopener noreferrer">
            <button
              className="cards-button"
              style={{
                border: backgroundColors[id + 3] || "rgba(0, 0, 0, 0.5)",
              }}
            >
              Check out
              <img src="send.svg" alt="arrow" className="arrow-icon" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
