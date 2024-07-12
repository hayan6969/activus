"use client";

import { useRef } from "react";
import Header from "../Header/Header";
import StickyCursor from "../StickyCursor/StickyCursor";
import HeroSection from "../HeroSection/HeroSection";
import BentoGrid from "../BentoGrid/BentoGrid";
import WhatAllAbout from "../WhatAllAbout/WhatAllAbout";
import WordpressToReact from "../WordpressToReact/WordpressToReact";

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


        {/* section 3  */}
        <WhatAllAbout />

        {/* section 4  */}
        <WordpressToReact />

        <div className="mt-24"></div>

      </div>

      <div className=" hidden sm:block">
        <StickyCursor stickyElement={stickyElement} />
      </div>
    </div>
  );
}
