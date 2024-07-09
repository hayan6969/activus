
import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

const BG = dynamic(() => import('./BG'), {
  ssr: false,
});

export default function HeroSection() {


  return (
    <div className=" w-full h-screen overflow-hidden flex items-center justify-center relative bg-black">
      <Image
        src={"/assets/logo.png"}
        width={900}
        height={100}
        alt="Logo"
        className=" aspect-auto w-full absolute z-10 pointer-events-none"
      />
      <BG />
    </div>
  );
}
