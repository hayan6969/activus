"use client";

import React from "react";
import "./new_design.css";

export default function NewDesign() {
  return (
    <>
      <input id="switch" type="checkbox" />
      <div className="app ">
        <div className="body ">
          <div className="phone w-[25rem] md:w-[19rem] h-[17rem]">
            <div className="menu">
              <div className="time">4:20</div>
              <div className="icons">
                <div className="network"></div>
                <div className="battery"></div>
              </div>
            </div>
{/* 5 & 4.3 */}
            <div className="content ">
              <div className="circle w-[8rem] md:w-[3rem] h-[8rem] md:h-[3rem] ">
                <div className="crescent w-[6.75rem] md:w-[2.6rem] h-[6.75rem] md:h-[2.6rem]"></div>
              </div>

              <label className={"label-mb"} htmlFor="switch">
                <div className="toggle-mb"></div>
                <div className="names">
                  <p className="light">Light</p>
                  <p className="dark">Dark</p>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
