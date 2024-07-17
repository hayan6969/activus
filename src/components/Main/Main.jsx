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
import Section9 from "../Section9/Section9";
import Contact from "../Contact/Contact";

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
        <Section9 />

        {/* section 10 game */}


        {/* section 11 contact  */}
        <Contact />

        {/* footer  */}
        <footer className=" py-4 w-full">
          <p className=" text-center">
            2024 &copy; Activus - All rights are reserved.
          </p>
        </footer>
        

        {/* <div className="mt-44"></div> */}
      </div>

      <div className=" hidden sm:block">
        <StickyCursor stickyElement={stickyElement} />
      </div>
    </div>
  );
}
