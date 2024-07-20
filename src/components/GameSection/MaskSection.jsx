"use client";

import React, { useState } from "react";
import "./maskSection.css";
import useMousePosition from "@/utils/useMousePosition";
import { motion } from "framer-motion";
import Image from "next/image";
import Lottie from "react-lottie";
import scrollIcon from "../../../public/assets/scroll.json";

export default function MaskSection({
  heading1, heading2
}) {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 350 : 15;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: scrollIcon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className=" relative w-full h-screen">
      <motion.div
        className={" mask "}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
          backgroundColor: isHovered ? "#7900FF" : "#fff",
          zIndex: isHovered ? 100 : 0,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0 }}
      >
        <h1
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className=" relative "
        >
          {heading2.text1} <br /> {heading2.text2}
          <br />
          <Image
            src={"/assets/keys.png"}
            width={200}
            height={200}
            alt="Keys Img"
            className=" aspect-auto mx-auto"
          />
          {/* scroll icon  */}
          <div className=" absolute -bottom-[140px] left-[25vw] right-[43.4vw bg-blac mix-blend-differenc">
            <Lottie
              options={defaultOptions}
              style={{ height: 200, width: 200 }}
            />
          </div>
        </h1>
      </motion.div>

      <div className=" mask-bg relativ ">
        <h1>
        {heading1.text1}
          <br />
          {heading1.text2}

        </h1>
      </div>

      {/* scroll icon  */}
      {!isHovered && (
        <div className="z-[2] absolute bottom-0 left-[43.4vw] right-[43.4vw] bg-black mix-blend-difference">
          <Lottie
            options={defaultOptions}
            style={{ height: 200, width: 200 }}
          />
        </div>
      )}
    </div>
  );
}
