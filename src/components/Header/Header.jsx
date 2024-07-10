"use client";

import "./Header.css";
import { forwardRef, useState } from "react";
import Framer from "../Magnetic/Magnetic";

const Header = forwardRef(function index(props, ref) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        {isOpen && "Show Menu"}
        <div className={"header"}>
      <Framer>
        <div
          className=" p-8"
          onClick={() => {
            console.log("clicked", !isOpen);
            setIsOpen(!isOpen);
          }}
        >
          <input type="checkbox" id="checkbox" checked={isOpen} />
          <label htmlFor="checkbox" className="toggle">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label>
          <div ref={ref} className={"bounds"}></div>
        </div>

      </Framer>
    </div>
    </div>
  );
});

export default Header;
