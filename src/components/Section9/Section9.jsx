import React from "react";
import BlurIn from "../magicui/blur-in";
import { AppDevelopment } from "./AppDevelopment";
import SparklesText from "../magicui/sparkles-text";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

const Camera = dynamic(() => import("./Camera"), {
  loading: () => <div className="spinner-small"> </div>,
  ssr: false,
});

export default function Section9() {
  const trans = useTranslations("section9");

  const divStyle =
    " relative w-full -fit sm:h-full rounded-2xl bg-white overflow-hidden  shadow-[0px_0px_20px_7px_#00000024]";

  const headingStyle = " text-2xl sm:text-3xl md:text-5xl font-semibold ";

  return (
    <section className="  w-full sm:h-fit lg:h-screen px-4 md:px-24 py-2 my6 overflow-hidden">
      <div className=" grid grid-cols-12 sm:grid-rows-12 gap-6 w-full h-full">
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
          <video
            className={
              " absolute bottom-0 left-0 w-full h-[23vh] md:h-[25vh] lg:h-[44vh] object-cover  "
            }
            src="/assets/design.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
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
          <AppDevelopment
            stacks={[
              {
                name: trans("appDev.stacks.reactNative.name"),
                username: trans("appDev.stacks.reactNative.username"),
                body: trans("appDev.stacks.reactNative.body"),
              },
              {
                name: trans("appDev.stacks.flutter.name"),
                username: trans("appDev.stacks.flutter.username"),
                body: trans("appDev.stacks.flutter.body"),
              },
              {
                name: trans("appDev.stacks.kotlin.name"),
                username: trans("appDev.stacks.kotlin.username"),
                body: trans("appDev.stacks.kotlin.body"),
              },
              {
                name: trans("appDev.stacks.swift.name"),
                username: trans("appDev.stacks.swift.username"),
                body: trans("appDev.stacks.swift.body"),
              },
              {
                name: trans("appDev.stacks.ionic.name"),
                username: trans("appDev.stacks.ionic.username"),
                body: trans("appDev.stacks.ionic.body"),
              },
            ]}
          />
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
