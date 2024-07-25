"use client";
import "./puzzle.css";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const Puzzle = ({ onSolved, onUnSolved, hideSectionRef }) => {

  const [isSolved, setIsSolved] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    

    // const handleScroll = () => {
    //   const scrollY = window.scrollY;
    //   const scrollDirection = scrollY > previousScrollY ? "down" : "up"; // Calculate direction

    //   if (
    //     triggerPoint &&
    //     scrollY >= triggerPoint.offsetTop &&
    //     scrollDirection === "down"
    //   ) {
    //     animateContent();
    //   }

    //   // if (
    //   //   triggerPoint &&
    //   //   scrollY >= triggerPoint.offsetTop &&
    //   //   scrollDirection === "up"
    //   // ) {
    //   //   resetContent();
    //   // }

    //   previousScrollY = scrollY;
    // };

    const handleScroll = () => { 
      const puzzleDiv = document.getElementById('pc-puzzle');
      if(puzzleDiv){
        const rect = puzzleDiv.getBoundingClientRect();
        if (rect.top <= 300) {
          animateContent();
        }
      }
        
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const animateContent = () => {
    gsap.to(".peice-pc", {
      onComplete: () => {
        gsap.to(containerRef.current, {
          duration: 1.5,
          ease: "easeOut",
          width: "36.3em",
          height: "36.3em",
        });
        onSolved();
        setIsSolved(true)
      },
      onStart: () => {
        gsap.to(".outer-pc", {
          duration: 2,
          ease: "easeInOut",
          backgroundColor: "#22C55E",
        });
      },
      duration: 1,
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
  //     width: "55vw",
  //     height: "45vw",

  //     onComplete: () => {
  //       // Reset individual grid items to their initial states
  //       gsap.to(".peice-pc", {
  //         onStart: () => {
  //           gsap.to(".outer-pc", {
  //             duration: 2,
  //             ease: "easeInOut",
  //             backgroundColor: "#EF4444",
  //           });
  //         },
  //         duration: 1.5, // Adjust animation duration for individual items
  //         ease: "easeInOut", // Customize easing function
  //         stagger: 0.1, // Add stagger effect for each item (adjust as needed)
  //         backgroundColor: "#EF4444",
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
    <div className=" w-full h-[1200px] py-12 grid place-items-center relative">

      {/* initial state  */}
      <div
      id="pc-puzzle"
        ref={containerRef}
        className="w-[55vw] site-bg h-[45vw] grid grid-cols-3 place-items-center"
      >
        <div className="peice-pc bg-[#EF4444] rotate-[-13deg] translate-x-[-1vw] translate-y-[30vw]">
          <span className=" "></span>
          <span className="r site-bg "></span>
          <span className="b site-bg"></span>
          <span className=" "></span>
          {isSolved ? <p className={"solved-pc"}>O</p> : <p className={" text-center w-full text-2xl font-light text-white "}>Marketing, CMR</p>}
        </div>

        <div className="peice-pc bg-[#EF4444] rotate-[-26deg] translate-x-[-18vw] translate-y-[-6vw]">
          <span className=""></span>
          <span className="r site-bg"></span>
          <span className="b site-bg "></span>
          <span className="l outer-pc bg-[#EF4444] "></span>
          {isSolved ? <p className={"solved-pc"}>N</p> :<p className={" text-center w-full text-2xl font-light text-white "}>ERP, Finance</p>}
        </div>

        <div className="peice-pc bg-[#EF4444] rotate-[3deg] translate-x-[-15vw] translate-y-[11vw]">
          <span className=" "></span>
          <span className=" "></span>
          <span className="b site-bg"></span>
          <span className="l outer-pc bg-[#EF4444]  "></span>
          {isSolved ? <p className={"solved-pc"}>E</p> :<p className={" text-center w-full text-2xl font-light text-white "}>Sales, Customer Support</p>}
        </div>

        <div className="peice-pc bg-[#EF4444] rotate-[20deg] translate-x-[15vw] translate-y-[13vw]">
          <span className="t outer-pc bg-[#EF4444]  "></span>
          <span className="r site-bg"></span>
          <span className="b site-bg "></span>
          <span className=" "></span>
          {isSolved ? <p className={"solved-pc"}>S</p> :<p className={" text-center w-full text-2xl font-light text-white "}>Inventory, Supply Chain</p>}
        </div>

        <div className="peice-pc bg-[#EF4444] rotate-[-13deg] translate-x-[16vw] translate-y-[17vw]">
          <span className="t outer-pc bg-[#EF4444] "></span>
          <span className="r site-bg"></span>
          <span className="b site-bg"></span>
          <span className="l outer-pc bg-[#EF4444]  "></span>
          {isSolved ? <p className={"solved-pc"}>Y</p> :<p className={" text-center w-full text-2xl font-light text-white "}>Project Management</p>}
        </div>

        <div className="peice-pc bg-[#EF4444] rotate-[43deg] translate-x-[-30vw] translate-y-[-4vw]">
          <div ref={hideSectionRef} className=" hideSection"></div>
          <span className="t outer-pc bg-[#EF4444]  "></span>
          <span className=" "></span>
          <span className="b site-bg"></span>
          <span className="l outer-pc bg-[#EF4444]  "></span>
          {isSolved ? <p className={"solved-pc"}>S</p> :<p className={" text-center w-full text-2xl font-light text-white "}>IT, Compliance</p>}
        </div>

        <div className="peice-pc bg-[#EF4444] rotate-[30deg] translate-x-[34vw] translate-y-[-30vw] ">
          <span className="t outer-pc bg-[#EF4444] "></span>
          <span className="r site-bg "></span>
          <span className=" "></span>
          <span className=" "></span>
          {isSolved ? <p className={"solved-pc"}>T</p> :<p className={" text-center w-full text-2xl font-light text-white "}>Reporting, Data Analysis</p>}
        </div>

        <div className="peice-pc bg-[#EF4444] rotate-[11deg] translate-x-[16vw] translate-y-[-14vw]">
          <span className="t outer-pc bg-[#EF4444]  "></span>
          <span className="r site-bg "></span>
          <span className=" "></span>
          <span className="l outer-pc bg-[#EF4444] "></span>
          {isSolved ? <p className={"solved-pc"}>E</p> :<p className={" text-center w-full text-2xl font-light text-white "}>E-commerce, Scheduling</p>}
        </div>

        <div className="peice-pc bg-[#EF4444] rotate-[75deg] translate-x-[-16vw] translate-y-[-32vw]">
          <span className="t outer-pc bg-[#EF4444]  "></span>
          <span className=" "></span>
          <span className=" "></span>
          <span className="l outer-pc bg-[#EF4444] "></span>
          {isSolved ? <p className={"solved-pc"}>M</p> :<p className={" text-center w-full text-2xl font-light text-white "}>Communication, Collaboration</p>}
        </div>
      </div>
    </div>
  );
};

export default Puzzle;
