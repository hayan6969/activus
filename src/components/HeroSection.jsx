"use client";

import Spline from "@splinetool/react-spline/next";
import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div className=" w-full h-screen overflow-hidden flex items-center justify-center relative">
      <Image
        src={"/assets/logo.png"}
        width={900}
        height={100}
        alt="Logo"
        className=" aspect-auto w-full absolute z-10 pointer-events-none"
      />
      <div style={{ transform: "scale(2.2)" }}>
        <Spline scene="https://prod.spline.design/MDLEFHXlmzID6oEB/scene.splinecode" />
      </div>
    </div>
  );
}
