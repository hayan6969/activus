"use client";

import { useRef } from "react";
import Header from "../Header/Header";
import StickyCursor from "../StickyCursor/StickyCursor";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import RenderIfVisible from "react-render-if-visible";

const loadingComponent = () => (
  <div className=" grid p-4 md:px-24 md:py-12 grid-cols-3 grid-rows-3 gap-6 w-full h-screen animate-pulse">
    <div className=" w-full h-full rounded-2xl bg-gray-300 col-span-1 row-span-2 "></div>
    <div className=" w-full h-full rounded-2xl bg-gray-300 col-span-2 row-span-1 "></div>
    <div className=" w-full h-full rounded-2xl bg-gray-300 col-span-1 row-span-1 "></div>
    <div className=" w-full h-full rounded-2xl bg-gray-300 col-span-1 row-span-1 "></div>
    <div className=" w-full h-full rounded-2xl bg-gray-300 col-span-2 row-span-1 "></div>
    <div className=" w-full h-full rounded-2xl bg-gray-300 col-span-1 row-span-1 "></div>
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
const WordpressToReact = dynamic(
  () => import("../WordpressToReact/WordpressToReact"),
  {
    loading: loadingComponent,
  }
);
const TechUsed = dynamic(() => import("../TechUsed/TechUsed"), {
  loading: loadingComponent,
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
    loading: loadingComponent,
  }
);

export default function Main({}) {
  const stickyElement = useRef(null);
  const footerTrans = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  const allComponents = [
    <HeroSection />,
    <BentoGrid />,
    <WhatAllAbout />,
    <WordpressToReact />,
    <TechUsed />,
    <Security />,
    <Section7 />,
    <div className=" relative">
      <WayTooManySystemsMain />
    </div>,
    <Section9 />,
    <div className=" hidden sm:block">
      <GameSectionMain />
    </div>,
    <Contact />,
    <footer className=" py-4 w-full">
      <p className=" text-center">
        {currentYear} &copy; {footerTrans("text")}
      </p>
    </footer>,
  ];


  return (
    <div>
      <Header ref={stickyElement} />

      <div className={" bg-white grid relative "}>
        {allComponents.map((item, index) => {
          return <RenderIfVisible>{item}</RenderIfVisible>;
        })}
      </div>

      {/* <div className=" hidden sm:block">
        <StickyCursor stickyElement={stickyElement} />
      </div> */}
    </div>
  );
}
