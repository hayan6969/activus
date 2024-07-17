'use client';

import Spline from "@splinetool/react-spline";
import React, { useEffect, useState } from "react";


export default function Camera() {
  const [isMobile, setIsMobile] = useState(false);
  
useEffect(()=>{
  let value = window.innerWidth <= 550;
  setIsMobile(value)
}, [])

  return (
   <div id={isMobile?"camera-spline-mb" : "camera-spline-pc"} className=" -translate-y-8">
     <Spline
    scene="https://prod.spline.design/R6FVTvoeIYuttRPl/scene.splinecode"
    />
   </div>
  );
}
