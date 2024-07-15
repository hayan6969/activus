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
import Section8 from "../Section8/Section8";

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
        <Section8 />

        {/* <div className="mt-44"></div> */}
      </div>

      <div className=" hidden sm:block">
        <StickyCursor stickyElement={stickyElement} />
      </div>
    </div>
  );
}
