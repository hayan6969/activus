import React from "react";
import { VelocityScroll } from "../magicui/scroll-based-velocity";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BlurIn from "../magicui/blur-in";
import { useTranslations } from "next-intl";

export default function WhatAllAbout() {
  const trans = useTranslations('section3');

  const divStyle =
    " rounded-2xl w-full sm h-full  relative overflow-hidden bg-red-300 ";
    
  const settings1 = {
    dots: false,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  const settings2 = {
    dots: false,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    rtl: true
  };

  return (
    <section className=" pt-6 relative overflow-hidden h-fit md:h-screen stickyScroll ">
      <BlurIn word={trans('heading')} className={" sectionHeading "} id={2} />


      <VelocityScroll
        className={" text-3xl sm:text-4xl font-semibold"}
        text={trans('slidingText')}
      >
        <div className="px-4 sm:px-24 pb-6 relative w-full h-[60vh] overflow-hidden">

          <div className=" w-full grid place-items-center py-4">
            <h1 className=" text-center text-xl sm:text-2xl md:text-3xl w-full lg:w-[70%] font-light  ">
             {trans('desc')}

            </h1>
          </div>

          <div className=" grid grid-cols-7 gap-6 h-[45vh] ">
            <div className={`${divStyle} col-span-7 sm:col-span-3 bg-white`}>
              <Slider {...settings1}>
                <div className=" w-full bg-yellow-300 h-[45vh] ">
                  <h3 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-16 sm:py-40 lg:py-32 text-center mix-blend-difference text-white bg-opacity-50">Lorem ipsum sit.</h3>
                </div>
                <div className=" w-full bg-cyan-100 h-[45vh] ">
                  <h3 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-16 sm:py-40 lg:py-32 text-center mix-blend-difference text-white bg-opacity-50">Lorem ipsum sit.</h3>
                </div>
                <div className=" w-full bg-yellow-100 h-[45vh] ">
                  <h3 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-16 sm:py-40 lg:py-32 text-center mix-blend-difference text-white bg-opacity-50">Lorem ipsum sit.</h3>
                </div>
                <div className=" w-full bg-cyan-200 h-[45vh] ">
                  <h3 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-16 sm:py-40 lg:py-32 text-center mix-blend-difference text-white bg-opacity-50">Lorem ipsum sit.</h3>
                </div>
                <div className=" w-full bg-yellow-200 h-[45vh] ">
                  <h3 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-16 sm:py-40 lg:py-32 text-center mix-blend-difference text-white bg-opacity-50">Lorem ipsum sit.</h3>
                </div>
                <div className=" w-full bg-cyan-300 h-[45vh] ">
                  <h3 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-16 sm:py-40 lg:py-32 text-center mix-blend-difference text-white bg-opacity-50">Lorem ipsum sit.</h3>
                </div>
              </Slider>
            </div>
            <div className={`${divStyle} col-span-7 sm:col-span-4 bg-gray-300 `}>
            <Slider {...settings2}>
                <div className=" w-full bg-green-300 h-[45vh] ">
                  <h3 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-16 sm:py-40 lg:py-32 text-center mix-blend-difference text-white bg-opacity-50">Lorem ipsum dolor sit.</h3>
                </div>
                <div className=" w-full bg-purple-100 h-[45vh] ">
                  <h3 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-16 sm:py-40 lg:py-32 text-center mix-blend-difference text-white bg-opacity-50">Lorem ipsum dolor sit.</h3>
                </div>
                <div className=" w-full bg-green-100 h-[45vh] ">
                  <h3 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-16 sm:py-40 lg:py-32 text-center mix-blend-difference text-white bg-opacity-50">Lorem ipsum dolor sit.</h3>
                </div>
                <div className=" w-full bg-purple-200 h-[45vh] ">
                  <h3 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-16 sm:py-40 lg:py-32 text-center mix-blend-difference text-white bg-opacity-50">Lorem ipsum dolor sit.</h3>
                </div>
                <div className=" w-full bg-green-200 h-[45vh] ">
                  <h3 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-16 sm:py-40 lg:py-32 text-center mix-blend-difference text-white bg-opacity-50">Lorem ipsum dolor sit.</h3>
                </div>
                <div className=" w-full bg-purple-300 h-[45vh] ">
                  <h3 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-16 sm:py-40 lg:py-32 text-center mix-blend-difference text-white bg-opacity-50">Lorem ipsum dolor sit.</h3>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </VelocityScroll>
    </section>
  );
}
