"use client";

import { useRef } from "react";
import Header from "../Header/Header";
import StickyCursor from "../StickyCursor/StickyCursor";
import HeroSection from "../HeroSection/HeroSection";
import BentoGrid from "../BentoGrid/BentoGrid";
import WhatAllAbout from "../WhatAllAbout/WhatAllAbout";
import WordpressToReact from "../WordpressToReact/WordpressToReact";
import TechUsed from "../TechUsed/TechUsed";
import Security from "../Security/Security";
import Section7 from "../Section7/Section7";
import WayTooManySystemsMain from "../WayToManySystems/WayTooManySystemsMain";

export default function Main() {
  const stickyElement = useRef(null);

  return (
    <div>
      <Header ref={stickyElement} />
      <div className={" bg-white grid relative"}>
        {/* section 1  */}
        <HeroSection />

        {/* section 2  */}
        <BentoGrid />

        {/* section 3  */}
        <WhatAllAbout />

        {/* section 4  */}
        <WordpressToReact />

        {/* section 5  */}
        <TechUsed />

        {/* section 6  */}
        <Security />

        {/* section 7 */}
        <Section7 />

        {/* section 8  */}
        <WayTooManySystemsMain />

        {/* section9  */}
        <div className=" h-screen w-full">section 9</div>
        

        {/* <div className="mt-44"></div> */}
      </div>

      <div className=" hidden sm:block">
        <StickyCursor stickyElement={stickyElement} />
      </div>
    </div>
  );
}
