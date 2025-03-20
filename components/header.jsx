import React from 'react';
import './header.css'; // Add styles for the header

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Praveen Kumar</div>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><a href="#home">Home</a></li>
                    <li className="nav-item"><a href="#about">About</a></li>
                    <li className="nav-item"><a href="#projects">Projects</a></li>
                    <li className="nav-item"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;


