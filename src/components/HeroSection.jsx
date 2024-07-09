'use client';

import Spline from '@splinetool/react-spline/next';
import React, { useRef } from 'react'

export default function HeroSection() {
    const splineRef = useRef(null);

  const onSplineMouseDown = (event) => {
    event.stopPropagation(); // Prevent further propagation of the click event
    console.log('Mouse down on Spline');
  };

  const onSplineMouseUp = (event) => {
    event.stopPropagation(); // Prevent further propagation of the click event
    console.log('Mouse up on Spline');
  };

  return (
    <div className=" w-full h-screen overflow-hidden flex items-center justify-center">

     <div className=' scale-150'
     >
     <Spline
        ref={splineRef}
        onSplineMouseDown={(e)=>{e.stopPropagation()}}
        onSplineMouseUp={(e)=>{e.stopPropagation()}}
        scene="https://prod.spline.design/MDLEFHXlmzID6oEB/scene.splinecode" 
      />
     </div>
      </div>
  )
}
