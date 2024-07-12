import React from "react";
import WordPullUp from "../magicui/word-pull-up";
import Link from "next/link";
import IconCloud from "../magicui/icon-cloud";

export default function TechUsed() {
  const techs = [
    {
      name: "React Js",
      link: "https://legacy.reactjs.org/",
    },
    {
      name: "Next Js",
      link: "https://nextjs.org/",
    },
    {
      name: "Node Js",
      link: "https://nodejs.org/en",
    },
    {
      name: "MongoDB",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      link: "https://firebase.google.com/",
    },
    {
      name: ".Net Core",
      link: "https://dotnet.microsoft.com/en-us/apps/aspnet",
    },
  ];

  const techIcons = [
    "typescript",
    "javascript",
    // "dart",
    // "java",
    "react",
    // "flutter",
    // "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    // "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    // "testinglibrary",
    // "jest",
    // "cypress",
    "docker",
    "git",
    // "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    // "androidstudio",
    // "sonarqube",
    "figma",
  ];

  return (
    <section className=" sectionCSS grid place-items-center ">
      <div className=" w-full h-fit md:h-full grid grid-cols-7 ">
        <div className=" grid place-items-center h-fit md:h-full col-span-7 md:col-span-3">
        <div className=" ">
          <WordPullUp
            words={"Tech Used"}
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
          {/* techs name  */}
          <div className=" flex flex-wrap items-center gap-2 px-8 ">
            {techs.map((item, index) => {
              return (
                <Link
                  key={index}
                  className=" text-2xl md:text-3xl lg:text-4xl"
                  href={item?.link}
                >
                  {item?.name}{index !== techs.length - 1 ? ", " : null}
                </Link>
              );
            })}
          </div>
        </div>
        </div>
        <div className=" col-span-7 md:col-span-4 grid place-items-center h-fit md:h-full ">
            <IconCloud iconSlugs={techIcons} />
        </div>
      </div>
    </section>
  );
}
