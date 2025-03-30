"use client";

import React, { useState, useEffect } from "react";
import Main from "@/components/main";
import Header from "@/components/header";
import "../assets/styles.css";

export default function Home() {
  return (
    <div className="scroll-container" style={{position: "relative"}}>
      <Header />
      <Main />
      {/* <About /> */}
    </div>
  );
}
