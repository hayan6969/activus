import Image from "next/image";
import React from "react";

export default function BentoGrid() {
  const divStyle =
    " rounded-2xl w-full h-full relative overflow-hidden ";
  const videoStyle = " absolute top-0 left-0 w-full h-full object-cover ";

  return (
    <div className=" px-4 sm:px-24 py-12">

        <div className="  grid gap-6 grid-cols-12 grid-rows-10 w-full h-screen">
      <div className={divStyle + " row-span-6 col-span-3"}>
        <video
          className={videoStyle}
          src="/assets/3.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className={divStyle + " col-span-5 row-span-3 "}>
        <video
          className={videoStyle}
          src="/assets/2.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className={divStyle + " row-span-4 col-span-4 "}>
        <video
          className={videoStyle}
          src="/assets/1.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className={divStyle + " col-span-5 row-span-3"}>
        <video
          className={videoStyle}
          src="/assets/5.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className={divStyle + " row-span-6 col-span-4 "}>
        <video
          className={videoStyle}
          src="/assets/4.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className={divStyle + " row-span-4 col-span-5 "}>
        <video
          className={videoStyle}
          src="/assets/6.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className={divStyle + " row-span-4 col-span-3 "}>
        <video
          className={videoStyle}
          src="/assets/7.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
    </div>
  );
}
