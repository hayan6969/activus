"use client";

import { useRef } from "react";
import Header from "../Header/Header";
import StickyCursor from "../StickyCursor/StickyCursor";
import HeroSection from "../HeroSection/HeroSection";
import BentoGrid from "../BentoGrid/BentoGrid";

export default function Main() {
  const stickyElement = useRef(null);

  return (
    <div>
      <Header ref={stickyElement} />
      <div className={" bg-white grid gap-6"}>

        {/* section 1  */}
        <HeroSection />

        {/* section 2  */}
        <BentoGrid />

      </div>

      <div className=" hidden sm:block">
        <StickyCursor stickyElement={stickyElement} />
      </div>
    </div>
  );
}
