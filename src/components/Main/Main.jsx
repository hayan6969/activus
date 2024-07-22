"use client";

import { useRef } from "react";
import Header from "../Header/Header";
// import StickyCursor from "../StickyCursor/StickyCursor";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import RenderIfVisible from "react-render-if-visible";
import LoadingScreen from "../Utils/LoadingScreen";

const loadingComponent = () => (
  <div className=" grid p-4 md:px-24 md:py-12 grid-cols-3 grid-rows-6 md:grid-rows-3 gap-6 w-full h-screen animate-pulse">
    <div className=" w-full h-full rounded-2xl bg-gray-300 col-span-3 md:col-span-1 row-span-1 md:row-span-2 "></div>
    <div className=" w-full h-full rounded-2xl bg-gray-300 col-span-3 md:col-span-2 row-span-1 "></div>
    <div className=" w-full h-full rounded-2xl bg-gray-300 col-span-3 md:col-span-1 row-span-1 "></div>
    <div className=" w-full h-full rounded-2xl bg-gray-300 col-span-3 md:col-span-1 row-span-1 "></div>
    <div className=" w-full h-full rounded-2xl bg-gray-300 col-span-3 md:col-span-2 row-span-1 "></div>
    <div className=" w-full h-full rounded-2xl bg-gray-300 col-span-3 md:col-span-1 row-span-1 "></div>
  </div>
);

const HeroSection = dynamic(() => import("../HeroSection/HeroSection"), {
  loading: ()=>{
    return <LoadingScreen />;
  },
});
const BentoGrid = dynamic(() => import("../BentoGrid/BentoGrid"), {
  loading: loadingComponent,
});
const WhatAllAbout = dynamic(() => import("../WhatAllAbout/WhatAllAbout"), {
  loading: loadingComponent,
});
const WordpressToReact = dynamic(
  () => import("../WordpressToReact/WordpressToReact"),
  {
    loading: ()=>{
    return <LoadingScreen />;
  },
  }
);
const TechUsed = dynamic(() => import("../TechUsed/TechUsed"), {
  loading: ()=>{
    return <LoadingScreen />;
  },
});
const Security = dynamic(() => import("../Security/Security"), {
  loading: loadingComponent,
});
const Section7 = dynamic(() => import("../Section7/Section7"), {
  loading: loadingComponent,
});
const WayTooManySystemsMain = dynamic(
  () => import("../WayToManySystems/WayTooManySystemsMain"),
  {
    loading: loadingComponent,
  }
);
const Section9 = dynamic(() => import("../Section9/Section9"), {
  loading: loadingComponent,
});
const Contact = dynamic(() => import("../Contact/Contact"), {
  loading: loadingComponent,
});
const GameSectionMain = dynamic(
  () => import("../GameSection/GameSectionMain"),
  {
    loading: ()=>{
      return <LoadingScreen />;
    },
  }
);

export default function Main({}) {
  const stickyElement = useRef(null);
  const footerTrans = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  const allComponents = [
    <HeroSection key="hero-section" />,
    <BentoGrid key="bento-grid" />,
    <WhatAllAbout key="what-all-about" />,
    <WordpressToReact key="wordpress-to-react" />,
    <TechUsed key="tech-used" />,
    <Security key="security" />,
    <Section7 key="section7" />,
    <div key="way-too-many-systems-main" className="relative">
      <WayTooManySystemsMain />
    </div>,
    <Section9 key="section9" />,
    <div key="game-section-main" className="hidden sm:block">
      <GameSectionMain />
    </div>,
    <Contact key="contact" />,
    <footer key="footer" className="py-4 w-full">
      <p className="text-center">
        {currentYear} &copy; {footerTrans("text")}
      </p>
    </footer>,
  ];

  return (
    <div>
      <Header ref={stickyElement} />

      <div className={" site-bg grid relative "}>
        {allComponents.map((item, index) => {
          if(index === 1){
            return <BentoGrid key="bento-grid-me" />
          }
          if(index === 2){
            return <WhatAllAbout key="what-it-all-about-me" />
          }
          if (index === 7) {
            return <WayTooManySystemsMain key={index} />;
          }
          if(index === 10){
            return <Contact key="contact-me" />
          }
          return <RenderIfVisible key={index}>{item}</RenderIfVisible>;
          })}

          
          </div>

      {/* <div className=" hidden sm:block">
        <StickyCursor stickyElement={stickyElement} />
      </div> */}
    </div>
  );
}
