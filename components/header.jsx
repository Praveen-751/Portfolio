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


// import React from "react";
// import "./header.css"; // Add styles for the header

// const Header = ({ dpSize, nameSize, headerOpacity, showNavbar }) => {
//   return (
//     <header
//       className="header"
//       style={{
//         opacity: headerOpacity,
//         transition: "opacity 0.3s ease-in-out",
//       }}
//     >
//       <div className="logo" style={{ fontSize: `${nameSize}rem` }}>
//         <img
//           src="/your-dp.jpg" // Replace with the path to your image
//           alt="Your Display Picture"
//           style={{
//             width: `${dpSize}px`,
//             height: `${dpSize}px`,
//             borderRadius: "50%",
//             transition: "width 0.3s ease, height 0.3s ease",
//           }}
//         />
//         Praveen Kumar
//       </div>
//       {showNavbar && (
//         <nav className="nav">
//           <ul className="nav-list">
//             <li className="nav-item">
//               <a href="#home">Home</a>
//             </li>
//             <li className="nav-item">
//               <a href="#about">About</a>
//             </li>
//             <li className="nav-item">
//               <a href="#projects">Projects</a>
//             </li>
//             <li className="nav-item">
//               <a href="#contact">Contact</a>
//             </li>
//           </ul>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;