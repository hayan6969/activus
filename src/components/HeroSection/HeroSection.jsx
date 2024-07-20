import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import Lottie from "react-lottie";
import scrollIcon from "../../../public/assets/scroll.json";

const BG = dynamic(() => import("./BG"), {
  loading: () => (
    <div className="spinner-large">
    </div>
  ),
  ssr: false,
});

export default function HeroSection() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: scrollIcon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className=" w-full h-screen overflow-hidden flex items-center justify-center relative bg-black">
      <Image
        src={"/assets/logo.png"}
        width={900}
        height={100}
        alt="Logo"
        className=" aspect-auto w-full absolute z-[1] pointer-events-none"
      />
      <BG />

      {/* scroll icon  */}
      <div className="z-[2] absolute bottom-0 left-auto right-auto pointer-events-none">
        <Lottie options={defaultOptions} style={{ height: 200, width: 200 }} />
      </div>
    </div>
  );
}
