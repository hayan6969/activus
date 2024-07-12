import React from "react";
import WordPullUp from "../magicui/word-pull-up";
import { VelocityScroll } from "../magicui/scroll-based-velocity";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function WhatAllAbout() {
  const divStyle =
    " rounded-2xl w-full sm:h-[500px] relative overflow-hidden bg-red-300 ";
    
  const settings1 = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    
  };
  const settings2 = {
    dots: false,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 1800,
    cssEase: "ease-in-out",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false
  };
  return (
    <section className=" py-12 relative overflow-hidden">
      <WordPullUp
        words={"What It's All About"}
        className={" sectionHeading "}
        wrapperFramerProps={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.4,
            },
          },
        }}
        framerProps={{
          hidden: { y: 30, opacity: 0 },
          show: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              repeat: Infinity,
              repeatType: "mirror",
              repeatDelay: 2,
            },
          },
        }}
      />

      <VelocityScroll
        className={" text-3xl sm:text-4xl font-semibold"}
        text={" Custom Programming "}
      >
        <div className=" sectionCSS w-full grid gap-6">
          <div className=" w-full grid place-items-center">
            <h1 className=" text-center text-2xl sm:text-3xl w-full xsm:w-[80%] sm:w-[50%] md:w-[70%]  ">
              We love innovation and want to help you bring your ideas&nbsp;💡
              to the world&nbsp;🌍
            </h1>
          </div>
          <div className=" grid grid-cols-7 gap-12 ">
            <div className={`${divStyle} h-[250px] col-span-7 sm:col-span-3`}>
              <Slider {...settings1}>
                <div className=" w-full bg-yellow-300 h-[500px]">
                  <h3 className=" text-6xl mix-blend-difference text-center py-52 text-white">1</h3>
                </div>
                <div className=" w-full bg-cyan-400 h-[500px]">
                  <h3 className=" text-6xl mix-blend-difference text-center py-52 text-white">2</h3>
                </div>
                <div className=" w-full bg-yellow-100 h-[500px]">
                  <h3 className=" text-6xl mix-blend-difference text-center py-52 text-white">3</h3>
                </div>
                <div className=" w-full bg-cyan-700 h-[500px]">
                  <h3 className=" text-6xl mix-blend-difference text-center py-52 text-white">4</h3>
                </div>
                <div className=" w-full bg-yellow-200 h-[500px]">
                  <h3 className=" text-6xl mix-blend-difference text-center py-52 text-white">5</h3>
                </div>
                <div className=" w-full bg-cyan-500 h-[500px]">
                  <h3 className=" text-6xl mix-blend-difference text-center py-52 text-white">6</h3>
                </div>
              </Slider>
            </div>
            <div className={`${divStyle} h-[400px] col-span-7 sm:col-span-4 bg-red-300 `}>
            <Slider {...settings2}>
                <div className=" w-full bg-green-300 h-[500px]">
                  <h3 className=" text-6xl mix-blend-difference text-center py-52 text-white">1</h3>
                </div>
                <div className=" w-full bg-purple-400 h-[500px]">
                  <h3 className=" text-6xl mix-blend-difference text-center py-52 text-white">2</h3>
                </div>
                <div className=" w-full bg-green-100 h-[500px]">
                  <h3 className=" text-6xl mix-blend-difference text-center py-52 text-white">3</h3>
                </div>
                <div className=" w-full bg-purple-700 h-[500px]">
                  <h3 className=" text-6xl mix-blend-difference text-center py-52 text-white">4</h3>
                </div>
                <div className=" w-full bg-green-200 h-[500px]">
                  <h3 className=" text-6xl mix-blend-difference text-center py-52 text-white">5</h3>
                </div>
                <div className=" w-full bg-purple-500 h-[500px]">
                  <h3 className=" text-6xl mix-blend-difference text-center py-52 text-white">6</h3>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </VelocityScroll>
    </section>
  );
}
