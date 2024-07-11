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
        {/* <HeroSection /> */}
<div className="my-24"></div>
        {/* section 2  */}
        <BentoGrid />

      </div>
      <StickyCursor stickyElement={stickyElement} />
    </div>
  );
}
