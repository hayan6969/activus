import React from "react";
import { VelocityScroll } from "../magicui/scroll-based-velocity";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BlurIn from "../magicui/blur-in";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function WhatAllAbout() {
  const trans = useTranslations("section3");

  const divStyle = " rounded-2xl w-full sm h-full  relative overflow-hidden ";

  const stacks = [
    {
      name: trans("stacks.react.name"),
      body: trans("stacks.react.body"),
      img: trans("stacks.react.img"),
    },
    {
      name: trans("stacks.nextjs.name"),
      body: trans("stacks.nextjs.body"),
      img: trans("stacks.nextjs.img"),
    },
    {
      name: trans("stacks.vue.name"),
      body: trans("stacks.vue.body"),
      img: trans("stacks.vue.img"),
    },
    {
      name: trans("stacks.angular.name"),
      body: trans("stacks.angular.body"),
      img: trans("stacks.angular.img"),
    },
    {
      name: trans("stacks.jquery.name"),
      body: trans("stacks.jquery.body"),
      img: trans("stacks.jquery.img"),
    },
  ];

  const techniques = [
    {
      name: trans("techniques.agile.name"),
      body: trans("techniques.agile.body"),
      img: trans("techniques.agile.img"),
    },
    {
      name: trans("techniques.scrum.name"),
      body: trans("techniques.scrum.body"),
      img: trans("techniques.scrum.img"),
    },
    {
      name: trans("techniques.kanban.name"),
      body: trans("techniques.kanban.body"),
      img: trans("techniques.kanban.img"),
    },
    {
      name: trans("techniques.ci_cd.name"),
      body: trans("techniques.ci_cd.body"),
      img: trans("techniques.ci_cd.img"),
    },
    {
      name: trans("techniques.tdd.name"),
      body: trans("techniques.tdd.body"),
      img: trans("techniques.tdd.img"),
    },
    {
      name: trans("techniques.bdd.name"),
      body: trans("techniques.bdd.body"),
      img: trans("techniques.bdd.img"),
    },
    {
      name: trans("techniques.version_control.name"),
      body: trans("techniques.version_control.body"),
      img: trans("techniques.version_control.img"),
    },
    {
      name: trans("techniques.devops.name"),
      body: trans("techniques.devops.body"),
      img: trans("techniques.devops.img"),
    },
  ];
  
  const settings1 = {
    dots: false,
    autoplay: true,
    speed: 1800,
    autoplaySpeed: 2600,
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
    rtl: true,
  };

  return (
    <section id="customization" className=" pt-6 relative overflow-hidden h-fit md:h-screen site-bg w-[99vw]">
      <BlurIn word={trans("heading")} className={" sectionHeading "} id={2} />

      <VelocityScroll
        className={" text-3xl sm:text-4xl font-semibold"}
        text={trans("slidingText")}
      >
        <div className="px-4 sm:px-24 pb-6 relative w-full h-[60vh] overflow-hidden">
          <div className=" w-full grid place-items-center py-4">
            <h1 className=" text-center text-xl sm:text-2xl md:text-3xl w-full lg:w-[70%] font-light  ">
              {trans("desc")}
            </h1>
          </div>

          <div className=" grid grid-cols-7 gap-6 h-[45vh] ">
            <div className={`${divStyle} col-span-7 sm:col-span-3 site-bg`}>
              <Slider {...settings1}>
                {stacks.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className=" w-full bg-white h-[45vh] p-2 md:p-4 "
                    >
                      <div className=" grid grid-cols-2">
                        <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center w-full  my-auto font-semibold ">
                          {item?.name}
                        </h1>
                        <Image
                          className=" aspect-auto p-1 md:p-2 mx-auto"
                          src={item.img}
                          width={100}
                          height={100}
                          aria-label={`${item?.name} Logo`}
                        />
                      </div>
                      <div className=" grid place-items-center">
                        <p className=" text-md px-2 sm:text-lg md:text-xl lg:text-2xl font-light mt-[2vw] ">
                          {item?.body}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
            <div
              className={`${divStyle} col-span-7 sm:col-span-4 bg-gray-300 `}
            >
              <Slider {...settings2}>
                {techniques.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className=" w-full bg-white h-[45vh] p-2 md:p-4 "
                    >
                      <div className=" grid grid-cols-2">
                        <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center w-full  my-auto font-semibold ">
                          {item?.name}
                        </h1>
                        <Image
                          className=" aspect-auto p-1 md:p-2 mx-auto"
                          src={item.img}
                          width={100}
                          height={100}
                          aria-label={`${item?.name} Logo`}
                        />
                      </div>
                      <div className=" grid place-items-center">
                        <p className=" text-md px-2 sm:text-lg md:text-xl lg:text-2xl font-light mt-[2vw] ">
                          {item?.body}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </VelocityScroll>
    </section>
  );
}
