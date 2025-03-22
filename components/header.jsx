import React, { useState, useEffect } from 'react';
import './header.css'; // Add styles for the header

const Header = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    // Check screen width on load and resize
    useEffect(() => {
        const checkScreenWidth = () => {
            setIsSmallScreen(window.innerWidth < 300);
        };

        checkScreenWidth(); // Initial check
        window.addEventListener('resize', checkScreenWidth);

        return () => window.removeEventListener('resize', checkScreenWidth);
    }, []);

    // Close the nav when clicking outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (isNavOpen && !event.target.closest('.nav') && !event.target.closest('.nav-button')) {
                setIsNavOpen(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, [isNavOpen]);

    return (
        <header className="header">
            <div className="logo">Praveen Kumar</div>
            {isSmallScreen ? (
                <div className="nav-toggle">
                    <button onClick={() => setIsNavOpen(!isNavOpen)} className="nav-button">
                        {isNavOpen ? 'Menu' : 'Menu'}
                    </button>
                    {isNavOpen && (
                        <nav className="nav">
                            <ul className="nav-list">
                                <li className="nav-item">
                                    <a href="#home" onClick={() => setIsNavOpen(false)}>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#about" onClick={() => setIsNavOpen(false)}>About</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#projects" onClick={() => setIsNavOpen(false)}>Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#contact" onClick={() => setIsNavOpen(false)}>Contact</a>
                                </li>
                            </ul>
                        </nav>
                    )}
                </div>
            ) : (
                <nav className="nav-close">
                    <ul className="nav-list-close">
                        <li className="nav-item"><a href="#home">Home</a></li>
                        <li className="nav-item"><a href="#about">About</a></li>
                        <li className="nav-item"><a href="#projects">Projects</a></li>
                        <li className="nav-item"><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;