import Image from "next/image";
import React from "react";

export default function LoadingScreen({message = ""}) {
  return (
    <div className=" w-full h-screen bg-white grid place-items-center">
     <div className=" grid place-items-center gap-2">
     <Image
        className=" aspect-auto animate-pulse duration-1000"
        width={300}
        height={300}
        alt="Activus Icon"
        src={"/assets/gray-logo.png"}
      />
      <p className=" text-gray-300 animate-pulse duration-1000 text-center text-5xl">{message}</p>
     </div>
    </div>
  );
}
