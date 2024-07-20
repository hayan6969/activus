import React from "react";
import MaskSection from "./MaskSection";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import LoadingScreen from "../Utils/LoadingScreen";

const GameSection = dynamic(() => import("./GameSection"), {
  loading: () => (
    <LoadingScreen message="Game Is Loading Please Wait ..." />
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
