"use client";

import "./puzzle_mobile.css";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const PuzzleMobile = ({ onSolved, onUnSolved }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    
    const handleScroll = () => { 
      const puzzleDiv = document.getElementById('mb-puzzle');
      const rect = puzzleDiv.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const midpoint = viewportHeight / 1.7;
        if (rect.top <= midpoint && rect.bottom >= midpoint) {
          animateContent();
        }
        
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const animateContent = () => {
    gsap.to(".peice-mb", {
      onComplete: () => {
        gsap.to(containerRef.current, {
          duration: 2.5,
          ease: "easeOut",
          // width: "37.65vw",
          // height: "37.65vw",
        });
        onSolved();
      },
      onStart: () => {
        gsap.to(".outer-mb", {
          duration: 2.8,
          ease: "easeInOut",
          backgroundColor: "#22C55E",
        });
      },
      duration: 1.5,
      ease: "easeInOut",
      stagger: 0.1,
      rotate: 0,
      translateX: 0,
      translateY: 0,
      backgroundColor: "#22C55E",
    });
  };

  // const resetContent = () => {
  //   gsap.to(containerRef.current, {
  //     duration: 1, // Adjust animation duration as needed
  //     ease: "easeOut", // Customize easing function
  //     // width: "55vw",
  //     // height: "45vw",

  //     onComplete: () => {
  //       // Reset individual grid items to their initial states
  //       gsap.to(".peice-mb", {
  //         onStart: () => {
  //           gsap.to(".outer-mb", {
  //             duration: 2,
  //         ease: "easeInOut",
  //             backgroundColor: "#EF4444"
  //           })
  //         },
  //         duration: 1.5, // Adjust animation duration for individual items
  //         ease: "easeInOut", // Customize easing function
  //         stagger: 0.1, // Add stagger effect for each item (adjust as needed)
  //         backgroundColor: '#EF4444',
  //         rotate: (i) => {
  //           const initialRotates = [-13, -26, 3, 20, -13, 43, 30, 11, 75];
  //           return initialRotates[i];
  //         },
  //         translateX: (i) => {
  //           const initialTranslateX = [
  //             "-1vw",
  //             "-18vw",
  //             "-15vw",
  //             "15vw",
  //             "16vw",
  //             "-30vw",
  //             "34vw",
  //             "16vw",
  //             "-16vw",
  //           ];
  //           return initialTranslateX[i];
  //         },
  //         translateY: (i) => {
  //           const initialTranslateY = [
  //             "30vw",
  //             "-6vw",
  //             "11vw",
  //             "13vw",
  //             "17vw",
  //             "-4vw",
  //             "-30vw",
  //             "-14vw",
  //             "-32vw",
  //           ];
  //           return initialTranslateY[i];
  //         },
  //       });

  //       onUnSolved();
  //     },
  //   });
  // };

  return (
    <div className=" overflow-hidden relative w-full h-fit py-12 grid place-items-center scale-150">

      {/* initial state  */}
      <div
      id="mb-puzzle"
        ref={containerRef}
        className="w-fit site-bg h-fit grid grid-cols-3 place-items-center"
      >
        <div className="peice-mb bg-[#EF4444] rotate-[-13deg] translate-x-[-1vw] translate-y-[30vw]">
          <span className=" "></span>
          <span className="r site-bg "></span>
          <span className="b site-bg"></span>
          <span className=" "></span>
        </div>

        <div className="peice-mb bg-[#EF4444] rotate-[-26deg] translate-x-[-18vw] translate-y-[-6vw]">
          <span className=""></span>
          <span className="r site-bg"></span>
          <span className="b site-bg "></span>
          <span className="l outer-mb bg-[#EF4444] "></span>
        </div>

        <div className="peice-mb bg-[#EF4444] rotate-[3deg] translate-x-[-15vw] translate-y-[11vw]">
          <span className=" "></span>
          <span className=" "></span>
          <span className="b site-bg"></span>
          <span className="l outer-mb bg-[#EF4444]  "></span>
        </div>

        <div className="peice-mb bg-[#EF4444] rotate-[20deg] translate-x-[15vw] translate-y-[13vw]">
          <span className="t outer-mb bg-[#EF4444]  "></span>
          <span className="r site-bg"></span>
          <span className="b site-bg "></span>
          <span className=" "></span>
        </div>

        <div className="peice-mb bg-[#EF4444] rotate-[-13deg] translate-x-[16vw] translate-y-[17vw]">
          <span className="t outer-mb bg-[#EF4444] "></span>
          <span className="r site-bg"></span>
          <span className="b site-bg"></span>
          <span className="l outer-mb bg-[#EF4444]  "></span>
        </div>

        <div className="peice-mb bg-[#EF4444] rotate-[43deg] translate-x-[-30vw] translate-y-[-4vw]">
          <span className="t outer-mb bg-[#EF4444]  "></span>
          <span className=" "></span>
          <span className="b site-bg"></span>
          <span className="l outer-mb bg-[#EF4444]  "></span>
        </div>

        <div className="peice-mb bg-[#EF4444] rotate-[30deg] translate-x-[34vw] translate-y-[-30vw] ">
          <span className="t outer-mb bg-[#EF4444] "></span>
          <span className="r site-bg "></span>
          <span className=" "></span>
          <span className=" "></span>
        </div>

        <div className="peice-mb bg-[#EF4444] rotate-[11deg] translate-x-[16vw] translate-y-[-14vw]">
          <span className="t outer-mb bg-[#EF4444]  "></span>
          <span className="r site-bg "></span>
          <span className=" "></span>
          <span className="l outer-mb bg-[#EF4444] "></span>
        </div>

        <div className="peice-mb bg-[#EF4444] rotate-[75deg] translate-x-[-16vw] translate-y-[-32vw]">
          <span className="t outer-mb bg-[#EF4444]  "></span>
          <span className=" "></span>
          <span className=" "></span>
          <span className="l outer-mb bg-[#EF4444] "></span>
        </div>
      </div>
    </div>
  );
};

export default PuzzleMobile;
