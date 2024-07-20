import React from "react";

export default function BentoGrid() {
  const divStyle = " rounded-2xl w-full h-full relative overflow-hidden ";
  const videoStyle = " absolute top-0 left-0 w-full h-full object-cover ";

  return (
    <section
    id="projects"
      className=" sectionCSS stickyScroll "
    >
      <div className="  grid gap-6 grid-cols-12 grid-rows-10 w-full h-full">
        <div
          className={
            divStyle + " row-span-10 col-span-6 md:row-span-6 md:col-span-3 "
          }
        >
          <video
            className={videoStyle}
            src="/assets/3.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div
          className={
            divStyle + " row-span-5 md: col-span-6 md:col-span-5 md:row-span-3 "
          }
        >
          <video
            className={videoStyle}
            src="/assets/2.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div
          className={
            divStyle +
            "  row-span-5 md: col-span-6 md:row-span-4 md:col-span-4 "
          }
        >
          <video
            className={videoStyle + " block sm:hidden "}
            src="/assets/5.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <video
            className={videoStyle + " hidden sm:block "}
            src="/assets/1.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div
          className={
            divStyle + " col-span-12 row-span-10 md:col-span-5 md:row-span-3"
          }
        >
        <video
          className={videoStyle + " block sm:hidden"}
          src="/assets/1.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
          <video
            className={videoStyle + " hidden sm:block"}
            src="/assets/5.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div
          className={
            divStyle + " col-span-12 row-span-10 md:row-span-6 md:col-span-4 "
          }
        >
          <video
            className={videoStyle}
            src="/assets/4.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div
          className={
            divStyle + " row-span-10 col-span-6 md:row-span-4 md:col-span-5 "
          }
        >
          <video
            className={videoStyle}
            src="/assets/6.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div
          className={
            divStyle + " row-span-10 col-span-6 md:row-span-4 md:col-span-3 "
          }
        >
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
    </section>
  );
}
