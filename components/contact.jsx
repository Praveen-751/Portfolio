import React from "react";
import "./contact.css"; // Add a CSS file for styling
import LinkedInIcon from "../components/Icons/linkedin";
import GithubIcon from "../components/Icons/github";
import FacebookIcon from "../components/Icons/facebook";
import TwitterIcon from "../components/Icons/twitter";
import MailIcon from "../components/Icons/mail";

const Contact = () => {
  return (
    <div className="contact-main">
      <div className="contact-header">
        <h1>
          Wanna Connect ?? Connect with me and create exciting projects !!
        </h1>
      </div>
      <div className="contact-content">
        <div className="icon-div">
          <a
            href="https://www.linkedin.com/in/praveen-kumar-chinnamshetty-2b3173200/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="contact-icon" />
          </a>
        </div>
        <div className="icon-div">
          <a
            href="https://github.com/Praveen-751"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="contact-icon" />
          </a>
        </div>
        <div className="icon-div">
          <a
            href="https://www.facebook.com/praveenkumar.chinnamsetti"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon className="contact-icon" />
          </a>
        </div>
        <div className="icon-div">
          <a
            href="https://x.com/PChinnamsetti"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon className="contact-icon" />
          </a>
        </div>
        <div className="icon-div">
          <a
            href="mailto:praveenkumar161101@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailIcon className="contact-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;