"use client";

import { useRef } from "react";
import Header from "../Header/Header";
import StickyCursor from "../StickyCursor/StickyCursor";
// import HeroSection from "../HeroSection/HeroSection";
// import BentoGrid from "../BentoGrid/BentoGrid";
// import WhatAllAbout from "../WhatAllAbout/WhatAllAbout";
// import WordpressToReact from "../WordpressToReact/WordpressToReact";
// import TechUsed from "../TechUsed/TechUsed";
// import Security from "../Security/Security";
// import Section7 from "../Section7/Section7";
// import WayTooManySystemsMain from "../WayToManySystems/WayTooManySystemsMain";
// import Section9 from "../Section9/Section9";
// import Contact from "../Contact/Contact";
// import GameSectionMain from "../GameSection/GameSectionMain";
import dynamic from 'next/dynamic';
import { useTranslations } from "next-intl";

const loadingComponent = () => (
  <div className=" w-full h-screen grid place-items-center">
    <div className="spinner-medium"></div>
  </div>
);

const HeroSection = dynamic(() => import("../HeroSection/HeroSection"), {
  loading: loadingComponent,
});
const BentoGrid = dynamic(() => import("../BentoGrid/BentoGrid"), {
  loading: loadingComponent,
});
const WhatAllAbout = dynamic(() => import("../WhatAllAbout/WhatAllAbout"), {
  loading: loadingComponent,
});
const WordpressToReact = dynamic(() => import("../WordpressToReact/WordpressToReact"), {
  loading: loadingComponent,
});
const TechUsed = dynamic(() => import("../TechUsed/TechUsed"), {
  loading: loadingComponent,
});
const Security = dynamic(() => import("../Security/Security"), {
  loading: loadingComponent,
});
const Section7 = dynamic(() => import("../Section7/Section7"), {
  loading: loadingComponent,
});
const WayTooManySystemsMain = dynamic(() => import("../WayToManySystems/WayTooManySystemsMain"), {
  loading: loadingComponent,
});
const Section9 = dynamic(() => import("../Section9/Section9"), {
  loading: loadingComponent,
});
const Contact = dynamic(() => import("../Contact/Contact"), {
  loading: loadingComponent,
});
const GameSectionMain = dynamic(() => import("../GameSection/GameSectionMain"), {
  loading: loadingComponent,
});

export default function Main({}) {
  const stickyElement = useRef(null);
  const footerTrans = useTranslations('footer');
  const currentYear = new Date().getFullYear();
  
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
        <div className=" hidden sm:block">
        <GameSectionMain />
        </div>


        {/* section 11 contact  */}
        <Contact />

        {/* footer  */}
        <footer className=" py-4 w-full">
          <p className=" text-center">
            {currentYear} &copy; {footerTrans('text')}
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
