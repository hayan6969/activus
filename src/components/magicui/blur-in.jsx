"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

const BlurIn = ({ word, className, variant, duration = .25, id = 0, doNotHide = false }) => {
  const controls = useAnimation();

  const defaultVariants = {
    hidden: { filter: "blur(20px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(`blur-in-element-${id}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          controls.start("visible");
        } else {
          if(!doNotHide){
          controls.start("hidden");
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <motion.h1
      id={`blur-in-element-${id}`}
      initial={doNotHide ? "visible" : "hidden"}
      animate={controls}
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        className,
        " text-center tracking-[-0.02em] drop-shadow-sm md:leading-[3.5rem]"
      )}
    >
      {word}
    </motion.h1>
  );
};

export default BlurIn;


/*
"use client";;
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const BlurIn = ({
  word,
  className,
  variant,
  duration = 1
}) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    (<motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        className,
        "font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      )}>
      {word}
    </motion.h1>)
  );
};

export default BlurIn;
*/