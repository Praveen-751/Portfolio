"use client";

import Main from "@/components/main";
import Header from "@/components/header";
import "../assets/styles.css";

export default function Home() {
  return (
    <div className="scroll-container" style={{position: "relative",overflow_y: "auto"}}>
      <Header />
      <Main />
      {/* <About /> */}
    </div>
  );
}
