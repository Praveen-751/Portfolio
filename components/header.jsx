import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import "./header.css"; // Add styles for the header

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Check screen width on load and resize
  useEffect(() => {
    const checkScreenWidth = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    checkScreenWidth(); // Initial check
    window.addEventListener("resize", checkScreenWidth);

    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  // Close the nav when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isNavOpen &&
        !event.target.closest(".nav") &&
        !event.target.closest(".nav-button")
      ) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isNavOpen]);

  return (
    <header className="header">
      <div className="logo">Praveen Kumar</div>
      {isSmallScreen ? (
        <div className="nav-toggle">
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="nav-button"
          >
            {isNavOpen ? "Menu" : "Menu"}
          </button>
          {isNavOpen && (
            <nav className="nav">
              <ul className="nav-list">
                <li className="nav-item">
                  <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    onClick={() => setIsNavOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    onClick={() => setIsNavOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    onClick={() => setIsNavOpen(false)}
                  >
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    onClick={() => setIsNavOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      ) : (
        <nav className="nav-close">
          <ul className="nav-list-close">
            <li className="nav-item">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
