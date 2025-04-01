import React from "react";
import "./cards.css"; // Add a CSS file for styling

const Cards = ({ props, text }) => {
  return (
    <div className="cards-main">
      <div className="cards-content">
        <img className="cards-image" src={props} alt="svg icon" />
        <div className="cards-text">
          {text}
          <button className="cards-button"> Check out !</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
