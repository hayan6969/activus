"use client";

import "./Header.css";
import { forwardRef, useState } from "react";
import Framer from "../Magnetic/Magnetic";
import { AnimatePresence, motion } from "framer-motion";
import Navbox from "./Navbox";

const Header = forwardRef(function Header(props, ref) {
  const [isOpen, setIsOpen] = useState(false);

  const menu = {
    open: {
      width: "350px",
      height: "400px",
      top: "16px",
      right: "16px",
      transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: "0px",
      height: "0px",
      top: "32px",
      right: "32px",
      transition: {
        duration: 0.75,
        delay: 0.35,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <div className=" relative">
      <div className={"header z-[100]"}>
        <Framer>
          <div
            className=" p-8 cursor-pointer "
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <input
              type="checkbox"
              id="checkbox"
              checked={isOpen}
              onChange={(e) => {
                console.log(e.target.checked);
              }}
            />
            <label htmlFor="checkbox" className="toggle">
              <div className="bars" id="bar1"></div>
              <div className="bars" id="bar2"></div>
              <div className="bars" id="bar3"></div>
            </label>
            <div ref={ref} className={"bounds"}></div>
          </div>
        </Framer>
      </div>

      <motion.div
        variants={menu}
        animate={isOpen ? "open" : "closed"}
        initial="closed"
        className={` bg-primary text-white  mix-blend-differenc fixed z-[90] rounded-3xl flex items-center justify-start`}
      >
        <AnimatePresence>{isOpen && <Navbox />}</AnimatePresence>
      </motion.div>
    </div>
  );
});

export default Header;
