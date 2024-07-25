import React from "react";
import BlurIn from "../magicui/blur-in";
import Lottie from "react-lottie";
import wTReactArrow from "../../../public/assets/wTReactArrow.json";
import { useTranslations } from "next-intl";
import "./style.css";
import ColorSelectorNode from "./ColorSelectorNode";
import CustomNodeFlow from "./CustomNodeFlow";

export default function WordpressToReact() {
  const divStyle =
    " rounded-2xl w-full h-full relative overflow-hidden grid place-items-center bg-whit ";
  const videoStyle = " absolute top-0 left-0 w-full h-full object-cover ";

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: wTReactArrow,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const trans = useTranslations('wordpressToReact');

  return (
    <section className=" px-4 sm:px-24 relative w-full h-fit md:h-screen site-bg overflow-hidden stickyScroll ">
{/* heading  */}
      <div className=" flex items-center sm:items-end justify-center flex-wrap gap-4 sm:gap-0 sm:pb-6 site-bg ">
        <BlurIn word={"Wordpress"} className={" sectionHeading "} id={1} />
        <div className=" w-fit">
          <div className=" w-fit hidden sm:block ">
            <Lottie
              options={defaultOptions}
              style={{ height: 150, width: 300 }}
            />
          </div>
          <BlurIn word={"To"} className={" sectionHeading sm:hidden block"} id={1} />
        </div>
        <BlurIn word={"React"} className={" sectionHeading "} id={1} />
      </div>

      <div className="  sm:grid gap-6 grid-cols-5  w-full h-[71vh] flex flex-col-reverse site-bg">

        {/* show on mobile  */}
        <div
          className={" block sm:hidden h-fit bgwhite sm:shadow "}
        >
          <h3 className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mix-blend-differenc text-black text-center sm:px-12">
            {trans('text2')}
          </h3>
        </div>

        <div className={divStyle + " col-span-5 h-full sm:col-span-3 pointer-events-none md:pointer-events-auto "}>
          <CustomNodeFlow />
        </div>

        <div className=" col-span-5 h-fit sm:h-full sm:col-span-2 grid gap-6 grid-rows-1 sm:grid-rows-2">
          <div
            className={divStyle + "  sm:bg-white h-full "}
          >
            <h3 className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mix-blend-differenc text-black text-center sm:px-4">
            {trans('text1')}
            </h3>
          </div>
          {/* hide on mobile  */}
          <div
            className={
              divStyle +
              " sm:grid hidden  bg-white h-full "
            }
          >
            <h3 className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mix-blend-differenc text-black text-center sm:px-12">
              {trans('text2')}
            </h3>
          </div>
        </div>
      </div>

    </section>
  );
}
