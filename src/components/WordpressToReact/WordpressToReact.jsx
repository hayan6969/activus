import React from "react";
import BlurIn from "../magicui/blur-in";
import Lottie from "react-lottie";
import wTReactArrow from "../../../public/assets/wTReactArrow.json";

export default function WordpressToReact() {
  const divStyle =
    " rounded-2xl w-full h-full relative overflow-hidden grid place-items-center ";
  const videoStyle = " absolute top-0 left-0 w-full h-full object-cover ";

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: wTReactArrow,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className=" sectionCSS ">

      <div className=" flex items-center sm:items-end justify-center flex-wrap gap-4 sm:gap-0 sm:pb-6  ">
        <BlurIn word={"Wordpress"} className={" sectionHeading "} />
        <div className=" w-fit">
          <div className=" w-fit hidden sm:block ">
            <Lottie
              options={defaultOptions}
              style={{ height: 150, width: 300 }}
            />
          </div>
          <BlurIn word={"To"} className={" sectionHeading sm:hidden block"} />
        </div>
        <BlurIn word={"React"} className={" sectionHeading "} />
      </div>

      <div className="  sm:grid gap-6 grid-cols-5  w-full h-[700px] flex flex-col-reverse">
        {/* show on mobile  */}
        <div
          className={" block sm:hidden bg-green-30 h-fit bg-white sm:shadow "}
        >
          <h3 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl mix-blend-differenc text-black text-left sm:text-center sm:px-12">
            We custom build it and put it in a better outfit.
          </h3>
        </div>

        <div className={divStyle + " col-span-5 h-full sm:col-span-3 "}>
          <video
            className={videoStyle}
            src="/assets/wordpresstoreact.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <div className=" col-span-5 h-fit sm:h-full sm:col-span-2 grid gap-6 grid-rows-1 sm:grid-rows-2">
          <div
            className={divStyle + " bg-violet-30 bg-white sm:shadow h-full "}
          >
            <h3 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl mix-blend-differenc text-black text-left sm:text-center sm:px-4">
              Tired of your Wordpress site that is difficult to update?
            </h3>
          </div>
          {/* hide on mobile  */}
          <div
            className={
              divStyle +
              " sm:grid hidden bg-green-30 bg-white sm:shadow h-full "
            }
          >
            <h3 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl mix-blend-differenc text-black text-left sm:text-center sm:px-12">
              We custom build it and put it in a better outfit.
            </h3>
          </div>
        </div>
      </div>

    </section>
  );
}
