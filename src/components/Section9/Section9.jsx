import React from "react";
import BlurIn from "../magicui/blur-in";
import { AppDevelopment } from "./AppDevelopment";
import SparklesText from "../magicui/sparkles-text";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import Design from "./Design";
import NewDesign from "./NewDesign";

const Camera = dynamic(() => import("./Camera"), {
  loading: () => <div className="spinner-small"> </div>,
  ssr: false,
});

export default function Section9() {
  const trans = useTranslations("section9");

  const divStyle =
    " relative w-full -fit sm:h-full rounded-2xl bg-white overflow-hidden ";

  const headingStyle = " text-2xl sm:text-3xl md:text-5xl font-semibold ";

  return (
    <section className="  w-full sm:h-fit lg:h-screen px-4 md:px-24 py-2 my6 overflow-hidden site-bg">
      <div className=" grid grid-cols-12 sm:grid-rows-12 gap-6 w-full h-full site-bg">
        {/* programming  */}
        <div className={divStyle + " col-span-full row-span-8 lg:row-span-4"}>
          <BlurIn
            word={trans("programming.heading")}
            id={91}
            className={"sectionHeading sm:py-6"}
          />
          <p className="  text-center font-light text-xl md:text-2xl lg:text-3xl w-full px-1 sm:px-24 ">
            {trans("programming.desc")}
          </p>
        </div>

        {/* design  */}
        <div
          className={
            divStyle +
            " col-span-full md:col-span-6 lg:col-span-4 row-span-12 md:row-span-8 "
          }
        >
          <SparklesText className={" text-center "}>
            <BlurIn
              word={trans("design.heading")}
              className={headingStyle + " "}
              id={92}
            />
          </SparklesText>
          <p className="  text-center font-light text-xl md:text-2xl lg:text-3xl w-full px-1 sm:px-4 lg:px-12 ">
            {trans("design.desc")}
          </p>
          <Design />
        </div>

        {/* app development   */}
        <div
          className={
            divStyle +
            " col-span-full md:col-span-6 lg:col-span-8 row-span-8 lg:row-span-4 "
          }
        >
          <BlurIn
            word={trans("appDev.heading")}
            className={headingStyle + " "}
            id={93}
          />

          <div className={" grid grid-cols-1 md:grid-cols-3"}>
            <div className={" col-span-1 md:col-span-2"}>
              <AppDevelopment
                stacks={[
                  {
                    name: trans("appDev.stacks.reactNative.name"),
                    username: trans("appDev.stacks.reactNative.username"),
                    body: trans("appDev.stacks.reactNative.body"),
                    img: trans("appDev.stacks.reactNative.img"),
                  },
                  {
                    name: trans("appDev.stacks.flutter.name"),
                    username: trans("appDev.stacks.flutter.username"),
                    body: trans("appDev.stacks.flutter.body"),
                    img: trans("appDev.stacks.flutter.img"),
                  },
                  {
                    name: trans("appDev.stacks.kotlin.name"),
                    username: trans("appDev.stacks.kotlin.username"),
                    body: trans("appDev.stacks.kotlin.body"),
                    img: trans("appDev.stacks.kotlin.img"),
                  },
                  {
                    name: trans("appDev.stacks.swift.name"),
                    username: trans("appDev.stacks.swift.username"),
                    body: trans("appDev.stacks.swift.body"),
                    img: trans("appDev.stacks.swift.img"),
                  },
                  {
                    name: trans("appDev.stacks.ionic.name"),
                    username: trans("appDev.stacks.ionic.username"),
                    body: trans("appDev.stacks.ionic.body"),
                    img: trans("appDev.stacks.ionic.img"),
                  },
                ]}
              />
            </div>
            <div className={"col-span-1 grid place-items-center"}>
              <NewDesign />
            </div>
          </div>
        </div>

        {/* cooperation   */}
        <div
          className={
            divStyle + " col-span-full lg:col-span-4 row-span- lg:row-span-4 "
          }
        >
          <BlurIn
            word={trans("cooperation.heading")}
            id={94}
            className={headingStyle + " "}
          />
          <p className="  text-center font-light text-sm md:text-xl lg:text-2xl w-full px-1 sm:px-4 py-3 lg:pt-6 ">
            {trans("cooperation.desc")}
          </p>
        </div>

        {/* monitoring   */}
        <div
          className={
            divStyle +
            " col-span-full lg:col-span-4 lg:row-span-4 overflow-hidde "
          }
        >
          <BlurIn
            word={trans("monitoring.heading")}
            id={95}
            className={headingStyle + " "}
          />
          <p className=" text-center font-light text-md md:text-xl lg:text-2xl w-full px-1 sm:px-4 ">
            {trans("monitoring.desc")}
          </p>
          <div className=" w-full h-[150px] sm:h-[22vh] grid place-items-center">
            <Camera />
          </div>
        </div>
      </div>
    </section>
  );
}
