/*

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
*/

'use client';

import { motion } from "framer-motion";
import React, { useEffect, useRef } from 'react';

export default function Cursor() {
    const cursorRef = useRef(null);

    useEffect(() => {
        const updateMousePosition = (e) => {
            const cursor = cursorRef.current;
            cursor.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`;
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    return (
        <motion.div
            ref={cursorRef}
            className=" hidden sm:block fixed top-0 left-0 w-8 h-8 bg-black rounded-full pointer-events-none z-50 shadow-[rgba(255,_255,_255,_0.19)_0px_9px_20px]
"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        ></motion.div>
    );
}

