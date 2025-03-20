"use client";

import React, { useState, useEffect } from "react";
import Main from "@/components/main";
import Intro from "@/components/Introduction";
import Header from "@/components/header";

export default function Home() {
  // const [scrollY, setScrollY] = useState(0);
  // const [showHeader, setShowHeader] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //     if (window.scrollY > window.innerHeight) {
  //       setShowHeader(true);
  //     } else {
  //       setShowHeader(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const headerOpacity = Math.min(1, scrollY / window.innerHeight); // Header opacity increases

  return (
    <div>
      {/* {showHeader && (
        <div
          className="header"
          style={{ opacity: headerOpacity }}
        >
          <h1>My Portfolio</h1>
        </div>
      )} */}
      {/* <Intro scrollY={scrollY} /> */}
      <Header />
      <Main />
    </div>
  );
}


// "use client";

// import React, { useState, useEffect } from "react";
// import Main from "@/components/main";
// import Intro from "@/components/Introduction";
// import Header from "@/components/header";
// // import "./intro.css"; // Add styles for the intro section

// export default function Home() {
//   const [scrollY, setScrollY] = useState(0);
//   const [showNavbar, setShowNavbar] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//       if (window.scrollY > window.innerHeight) {
//         setShowNavbar(true); // Show the navbar when scrolled past the intro section
//       } else {
//         setShowNavbar(false); // Hide the navbar when in the intro section
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const dpSize = Math.max(50, 300 - scrollY * 0.5); // DP size decreases as you scroll
//   const nameSize = Math.max(1, 3 - scrollY * 0.01); // Name font size decreases
//   const headerOpacity = Math.min(1, scrollY / window.innerHeight); // Header opacity increases

//   return (
//     <div>
//       <Header
//         dpSize={dpSize}
//         nameSize={nameSize}
//         headerOpacity={headerOpacity}
//         showNavbar={showNavbar}
//       />
//       <Intro scrollY={scrollY} />
//       <Main />
//     </div>
//   );
// }