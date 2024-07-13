"use client";

import { useRef } from "react";
import Header from "../Header/Header";
import StickyCursor from "../StickyCursor/StickyCursor";
import HeroSection from "../HeroSection/HeroSection";
import BentoGrid from "../BentoGrid/BentoGrid";
import WhatAllAbout from "../WhatAllAbout/WhatAllAbout";
import WordpressToReact from "../WordpressToReact/WordpressToReact";
import TechUsed from "../TechUsed/TechUsed";

export default function Main() {
  const stickyElement = useRef(null);

  return (
    <div>
      <Header ref={stickyElement} />
      <div className={" bg-white grid"}>

        {/* section 1  */}
        <HeroSection />

        {/* section 2  */}
        <BentoGrid />

        {/* <div className="mt-44"></div> */}

        {/* section 3  */}
        <WhatAllAbout />

        {/* section 4  */}
        <WordpressToReact />

        {/* section 5  */}
        <TechUsed />


      </div>

      <div className=" hidden sm:block">
        <StickyCursor stickyElement={stickyElement} />
      </div>
    </div>
  );
}
