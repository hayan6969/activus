"use client";

import Spline from "@splinetool/react-spline/next";
import React from 'react'

export default function BG() {
  return (
    
    <div
    id="spline-cube"    
    className=" w-full h-screen">
    <Spline scene="https://prod.spline.design/MDLEFHXlmzID6oEB/scene.splinecode" />
  </div>
  )
}
