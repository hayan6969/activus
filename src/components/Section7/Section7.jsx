import React from "react";
import { BorderBeam } from "../magicui/border-beam";
import BlurIn from "../magicui/blur-in";
import OrbitingCircles from "../magicui/orbiting-circles";
import { DiMongodb, DiMsqlServer } from "react-icons/di";
import { GrMysql, GrOracle } from "react-icons/gr";
import { SiPostgresql } from "react-icons/si";
import { Dock, DockIcon } from "../magicui/dock";
import { FaAws, FaDocker } from "react-icons/fa6";
import { SiMicrosoftazure } from "react-icons/si";
import { AiOutlineKubernetes } from "react-icons/ai";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export default function Section7() {
  const trans = useTranslations('section7');


  const divStyle =
    " relative w-full h-fit sm:h-full rounded-2xl lg:col-span-4 bg-white overflow-hidden ";

  const headingStyle = " text-2xl sm:text-3xl md:text-4xl font-semibold pt-2 sm:p-0 ";

  return (
    <section className="  w-full  sm:h-fit lg:h-screen px-4 md:px-24 py-2 my-6 overflow-hidden site-bg">
      <div className=" grid grid-cols-12 sm:grid-rows-12 gap-6 w-full h-full site-bg ">

        {/* helping innovation  */}
        <div className={divStyle + " col-span-full row-span-4 lg:row-span-full grid place-content-center "}>
          <BorderBeam size={300} />
          <div className=" rotate-0 lg:rotate-90 lg:scale-y-[-1] lg:scale-x-[-1] h-fit w-full sm:w-[90vh] grid lg:gap-16">
            <BlurIn
              word={trans("helpingInnovation.heading")}
              className={headingStyle + " h-full w-full"}
              id={81}
            />
            <p className=" text-center font-light text-lg md:text-2xl lg:text-3xl w-full p-2 sm:p-0">
              {trans("helpingInnovation.desc")}
            </p>
          </div>
        </div>

        {/* databsae design  */}
        <div className={divStyle + " col-span-full sm:row-span-8 sm:col-span-6 lg:row-span-8"}>
          <BorderBeam size={240} />

          <BlurIn
            word={trans("dbDesign.heading")}
            className={headingStyle + " "}
            id={82}
          />
          <p className="text-center font-light text-md md:text-lg lg:text-xl px-4 ">
            
            {trans("dbDesign.desc")}
          </p>
          <div className="relative flex h-fit w-full flex-col items-center justify-center overflow-hidden">
            <span className="pointer-events-none whitespace-pre-wrap h-[42vh] "></span>

            {/* Inner Circles */}
            <OrbitingCircles
              className="border-none bg-transparent text-[#f80000]"
              duration={20}
              delay={20}
              radius={60}
            >
              <GrOracle size={40} />
            </OrbitingCircles>
            <OrbitingCircles
              className="border-none bg-transparent text-red-500"
              duration={20}
              delay={10}
              radius={60}
            >
              <DiMsqlServer size={55} />
            </OrbitingCircles>

            {/* Outer Circles (reverse) */}
            <OrbitingCircles
              className=" border-none bg-transparent text-[#00758f]"
              radius={120}
              duration={20}
              reverse
            >
              <GrMysql size={40} />
            </OrbitingCircles>
            <OrbitingCircles
              className=" border-none bg-transparent text-[#4db33d]"
              radius={120}
              duration={20}
              delay={17}
              reverse
            >
              <DiMongodb size={40} />
            </OrbitingCircles>
            <OrbitingCircles
              className=" border-none bg-transparent text-[#008bb9]"
              radius={120}
              duration={20}
              delay={23}
              reverse
            >
              <SiPostgresql size={40} />
            </OrbitingCircles>
          </div>
        </div>

        {/* languages  */}
        <div className={divStyle + " col-span-full sm:row-span-3 sm:col-span-6 lg:row-span-5"}>
          <BorderBeam size={150} />
          <BlurIn word={trans('lang.heading')} className={headingStyle + " "} id={83} />
          <div className=" grid place-items-center h-[24vh]">
            <div className=" flex flex-wrap items-center justify-center gap-4 md:gap-8 w-full px-8">
            
              <Link href="/" locale="en">
              <button className={" rounded-3xl bg-black text-white px-4 py-2"}>
              {trans('lang.english')}
              </button>
              </Link>
              <Link href="/" locale="fr">
              <button className={" rounded-3xl bg-black text-white px-4 py-2"}>
              {trans('lang.french')}
              </button>
              </Link>
            </div>
          </div>
        </div>

        {/* cloud  */}
        <div className={divStyle + " col-span-full  sm:row-span-5 sm:col-span-6 lg:row-span-7"}>
          <BorderBeam size={280} />
          <BlurIn word={trans('cloud.heading')} className={headingStyle + " "} id={84} />
          <div className=" grid gap-6 my-6">
            <div className=" text-center font-light text-md md:text-lg lg:text-xl px-4  ">
              {trans('cloud.desc')}
            </div>
            <div className="relative w-full">
              <Dock magnification={70} distance={80}>
                <DockIcon className="bg-black/10 dark:bg-white/10 p-1 ">
                  <FaAws className=" text-[#FF9900]" size={40} />
                </DockIcon>
                <DockIcon className="bg-black/10 dark:bg-white/10 p-1 ">
                  <SiMicrosoftazure className=" text-[#007FFF]" size={40} />
                </DockIcon>
                <DockIcon className="bg-black/10 dark:bg-white/10 p-1 ">
                  <AiOutlineKubernetes className=" text-[#326CE5]" size={40} />
                </DockIcon>
                <DockIcon className="bg-black/10 dark:bg-white/10 p-1 ">
                  <FaDocker className=" text-[#0db7ed]" size={40} />
                </DockIcon>
              </Dock>
            </div>
          </div>
        </div>

        {/* need analysis  */}
        <div className={divStyle + " row-span-4 col-span-full lg:row-span-4"}>
          <BorderBeam size={160} />
          <BlurIn
            word={trans('analysis.heading')}
            className={headingStyle + " "}
            id={85}
          />
          <p className="text-center font-light text-md md:text-lg px-4 py-2 sm:py-0 ">
          {trans('analysis.desc')}
          </p>
        </div>
      </div>
    </section>
  );
}
