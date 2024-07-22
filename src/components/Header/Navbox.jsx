"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { perspective } from "./anim";
import { useTranslations } from "next-intl";

export default function Navbox() {
  const trans = useTranslations("navbar");

  const navbar_options = [
    { name: trans("projects.name"), path: trans("projects.path") },
    { name: trans("customization.name"), path: trans("customization.path") },
    { name: trans("contact.name"), path: trans("contact.path") }
  ];

  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    
    const targetElement = document.getElementById(targetId);
    // console.log(targetId, targetElement);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className=" grid place-items-start gap-2 px-14">
      {navbar_options.map((item, index) => {
        return (
          <div
            key={index}
            className=" hover:translate-x-4 ease-out transition-all p-2 duration-500"
          >
            <motion.div
              custom={index}
              variants={perspective}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <Link href={item?.path} className=" text-4xl " 
              onClick={(e)=>{handleScroll(e)}}
              >
                {item?.name}
              </Link>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
