"use client";

import Spline from "@splinetool/react-spline/next";
import React from 'react'

export default function GameSection() {
  return (
    
    <div
    id="spline-game"    
    className=" w-full h-screen">
    <Spline scene="https://prod.spline.design/QGtEm2jxEuay6unH/scene.splinecode" />
  </div>
  )
}
