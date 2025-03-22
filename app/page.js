"use client";

import React, { useState, useEffect } from "react";
import Main from "@/components/main";
import Header from "@/components/header";
import "../assets/styles.css";
import About from "@/components/about";

export default function Home() {

  return (
    <div className="scroll-container">
      <Header />
      <Main />
      <About />
    </div>
  );
}


