"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { perspective } from "./anim";
import { useTranslations } from "next-intl";

export default function Navbox() {
  const trans = useTranslations("navbar");

  const navbar_options = [
    { name: trans("portfolio.name"), path: trans("portfolio.path") },
    { name: trans("projects.name"), path: trans("projects.path") },
    { name: trans("contact.name"), path: trans("contact.path") },
    { name: trans("about.name"), path: trans("about.path") },
  ];

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
              <Link href={item?.path} className=" text-4xl ">
                {item?.name}
              </Link>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
