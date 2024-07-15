import React from "react";
import Link from "next/link";
import IconCloud from "../magicui/icon-cloud";
import BlurIn from "../magicui/blur-in";

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
    <section className=" sectionCSS grid place-items-center stickyScroll ">
      <div className=" w-full h-fit md:h-full grid grid-cols-7 ">
        <div className=" grid place-items-center h-fit md:h-full col-span-7 md:col-span-3">
        <div className=" ">
        <BlurIn word={"Tech Used"} className={" sectionHeading "} id={3} />
          {/* techs name  */}
          <div className=" flex flex-wrap items-center gap-2 justify-center ">
            {techs.map((item, index) => {
              return (
                <Link
                  key={index}
                  className=" text-xl md:text-2xl lg:text-3xl font-light"
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
