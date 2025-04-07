import React from "react";
import "./contact.css"; // Add a CSS file for styling

const Contact = () => {
  return (
    <div className="contact-main">
      <div className="contact-header">
        <h1>
          Wanna Connect Please connect with me and create exciting projects !!
        </h1>
      </div>
      <div className="contact-content">
        <div className="icon-div">
          <img src="linkedin.svg" alt="LinkedIn" className="contact-icon" />
        </div>
        <div className="icon-div">
          <img src="github.svg" alt="Github" className="contact-icon" />
        </div>
        <div className="icon-div">
          <img src="facebook.svg" alt="Facebook" className="contact-icon" />
        </div>
        <div className="icon-div">
          <img src="twitter.svg" alt="Twitter" className="contact-icon" />
        </div>
        <div className="icon-div">
          <img src="mail.svg" alt="Mail" className="contact-icon" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
