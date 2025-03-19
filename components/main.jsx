import React from "react";
import "./main.css"; // Add custom styles here

const Main = () => {
    return (
        <div className="home-container">
            <header className="header">
                <h1 className="title">Welcome to My Portfolio</h1>
                <p className="subtitle">Creative Developer | Designer | Innovator</p>
                <nav className="nav">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            <section id="about" className="section">
                <h2>About Me</h2>
                <p>
                    Hi, I'm a passionate developer with a knack for creating beautiful
                    and functional web applications. I love solving problems and bringing
                    ideas to life.
                </p>
            </section>

            <section id="projects" className="section">
                <h2>Projects</h2>
                <div className="projects-grid">
                    <div className="project-card">
                        <h3>Project 1</h3>
                        <p>A brief description of the project.</p>
                    </div>
                    <div className="project-card">
                        <h3>Project 2</h3>
                        <p>A brief description of the project.</p>
                    </div>
                    <div className="project-card">
                        <h3>Project 3</h3>
                        <p>A brief description of the project.</p>
                    </div>
                </div>
            </section>

            <section id="skills" className="section">
                <h2>Skills</h2>
                <ul className="skills-list">
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>CSS</li>
                    <li>Node.js</li>
                </ul>
            </section>

            <section id="contact" className="section">
                <h2>Contact</h2>
                <p>Feel free to reach out to me at:</p>
                <a href="mailto:your-email@example.com">your-email@example.com</a>
            </section>

            <footer className="footer">
                <p>&copy; 2023 Your Name. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Main;