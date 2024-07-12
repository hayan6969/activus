"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { perspective } from "./anim";

export default function Navbox() {
  const navbar_options = [
    { name: "Portfolio", path: "#" },
    { name: "Projects", path: "#" },
    { name: "Contact", path: "#" },
    { name: "About", path: "#" },
  ];

  return (
    <div className=" grid place-items-start gap-2 px-14">
      {navbar_options.map((item, index) => {
        return (
          <div key={index} className=" hover:translate-x-4 ease-out transition-all p-2 duration-500">
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
