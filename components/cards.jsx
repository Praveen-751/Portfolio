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
          <button className="cards-button"
            style={{
            border: backgroundColors[id + 3] || "rgba(0, 0, 0, 0.5)",
          }}
          > Check out !</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
