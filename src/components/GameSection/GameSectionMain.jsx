import React from "react";
import MaskSection from "./MaskSection";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

const GameSection = dynamic(() => import("./GameSection"), {
  loading: () => (
    <div className=" w-full h-screen grid place-items-center">
      <div className="spinner-large"></div>
    </div>
  ),
  ssr: false,
});

export default function GameSectionMain() {
  const trans = useTranslations("gameSection");
  return (
    <div>
      <MaskSection
        heading1={{
          text1: trans("heading1.text1"),
          text2: trans("heading1.text2"),
        }}
        heading2={{
          text1: trans("heading2.text1"),
          text2: trans("heading2.text2"),
        }}
      />
      <GameSection />
    </div>
  );
}
