"use client";

import React from "react";
import "./new_design.css";

export default function NewDesign() {
  return (
    <>
      <input id="switch" type="checkbox" />
      <div className="app">
        <div className="body">
          <div className="phone w-[25rem] md:w-[19rem] h-[17rem] ">
            <div className="menu">
              <div className="time">4:20</div>
              <div className="icons">
                <div className="network"></div>
                <div className="battery"></div>
              </div>
            </div>

            <div className="content">
              <div className="circle w-[8rem] md:w-[5rem] h-[8rem] md:h-[5rem] ">
                <div className="crescent w-[6.75rem] md:w-[4.3rem] h-[6.75rem] md:h-[4.3rem]"></div>
              </div>

              <label htmlFor="switch">
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
