import React from "react";
import BlurIn from "../magicui/blur-in";

export default function WordpressToReact() {
  const divStyle = " rounded-2xl w-full h-full relative overflow-hidden grid place-items-center ";
  const videoStyle = " absolute top-0 left-0 w-full h-full object-cover ";

  return (
    <section className=" sectionCSS overflow-hidden ">
      <BlurIn word={"Wordpress To React"} className={" sectionHeading "} />

      <div className="  grid gap-6 grid-cols-5  w-full h-[700px]">
        <div
          className={
            divStyle +
            " col-span-5 md:col-span-3  h-[600px"
          }
        >
          <video
            className={videoStyle}
            src="/assets/wordpresstoreact.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className=" col-span-2 grid gap-6 grid-rows-2">
          <div className={divStyle + " bg-violet-30 bg-white "}>
            <h3 className=" text-5xl mix-blend-differenc text-black text-center px-4">
              Tired of your Wordpress site that is difficult to update? 
            </h3>
          </div>
          <div className={divStyle + " bg-green-30 bg-white "}>
            <h3 className=" text-5xl mix-blend-differenc text-black text-center px-12">
            We custom build it and put it in a better outfit.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
