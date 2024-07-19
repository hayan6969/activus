import React from "react";
import MaskSection from "./MaskSection";
import dynamic from "next/dynamic";

const GameSection = dynamic(() => import("./GameSection"), {
  loading: () => (
    <div className=" w-full h-screen grid place-items-center">
      <div className="spinner-large"></div>
    </div>
  ),
  ssr: false,
});

export default function GameSectionMain() {
  return (
    <div>
      <MaskSection />
      <GameSection />
    </div>
  );
}
