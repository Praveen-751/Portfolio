import React from "react";
import Image from "next/image";
import "./intro.css"; // Add styles for the intro section

const Intro = ({ scrollY }) => {
  const dpSize = Math.max(100, 300 - scrollY * 0.5); // DP size decreases as you scroll
  const nameSize = Math.max(1.5, 3 - scrollY * 0.005); // Name font size decreases

  return (
    <div className="intro-container">
      <div className="intro-image">
        <Image
          src="/your-dp.jpg" // Replace with the path to your image
          alt="Your Display Picture"
          width={dpSize}
          height={dpSize}
          className="dp-image"
        />
      </div>
      <div className="intro-text">
        <h1 className="name" style={{ fontSize: `${nameSize}rem` }}>
          Your Name
        </h1>
        <h2 className="tagline">Creative Developer | Designer | Innovator</h2>
        <p className="summary">
          Hi, I'm a passionate developer with a knack for creating beautiful
          and functional web applications. I love solving problems and bringing
          ideas to life.
        </p>
      </div>
    </div>
  );
};

export default Intro;