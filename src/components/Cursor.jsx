'use client';

import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react';

export default function Cursor() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
      });
    
      useEffect(() => {
        const updateMousePosition = (e) => {
          setMousePosition({
            x: e.clientX,
            y: e.clientY,
          });
        };
    
        window.addEventListener("mousemove", updateMousePosition);
    
        return () => {
          window.removeEventListener("mousemove", updateMousePosition);
        };
      }, []);

      const variants = {
        default: {
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        },
      };


  return (
    <motion.div
      className={`fixed top-0 left-0 w-8 h-8 bg-black rounded-full`}
      variants={variants}
      animate="default"
    ></motion.div>
  )
}
