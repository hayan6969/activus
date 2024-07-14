// import { gsap } from "https://cdn.skypack.dev/gsap";
// import { ScrollTrigger } from "https://cdn.skypack.dev/gsap/ScrollTrigger";


const gsap = require('https://cdn.skypack.dev/gsap');
const ScrollTrigger = require('https://cdn.skypack.dev/gsap/ScrollTrigger');

gsap.registerPlugin(ScrollTrigger);

// Select Elements from DOM
const panels = Array.from(document.querySelectorAll(".stickyScroll"));

// Function to create the scroll trigger animations
const createScroll01 = () => {
  panels.forEach((panel, index) => {
    const isLast = index === panels.length - 1;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: panel,
          start: "top top",
          scrub: 1,
        },
      })
      .to(
        panel,
        {
          ease: "none",
          startAt: { filter: "brightness(100%) blur(0px)" },
          filter: isLast ? "none" : "brightness(50%) blur(10px)",
          scale: 0.9,
          borderRadius: 40,
        },
        "<"
      );
  });
};

document.addEventListener("DOMContentLoaded", () => {
  createScroll01();
});



// Backup 1 - main script -  DEPLOYED
/*
"use client";

import { useEffect, useRef } from "react";
import Header from "../Header/Header";
import StickyCursor from "../StickyCursor/StickyCursor";
import HeroSection from "../HeroSection/HeroSection";
import BentoGrid from "../BentoGrid/BentoGrid";
import WhatAllAbout from "../WhatAllAbout/WhatAllAbout";
import WordpressToReact from "../WordpressToReact/WordpressToReact";
import TechUsed from "../TechUsed/TechUsed";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


export default function Main() {
  const stickyElement = useRef(null);

  useEffect(() => {
    // Select Elements from DOM - Use class instead of ID if multiple elements are selected
    const panels = Array.from(document.querySelectorAll('.stickyScroll'));

    // Function to create the scroll trigger animations
    const createScroll01 = () => {
      panels.forEach((panel, index) => {
        const isLast = index === panels.length - 1;

        // gsap
        //   .timeline({
        //     scrollTrigger: {
        //       trigger: panel,
        //       start: 'top top',
        //       scrub: .5,
        //     },
        //   })
        //   .to(
        //     panel,
        //     {
        //       ease: 'power1.inOut',
        //       startAt: { filter: 'brightness(100%) blur(0px)' },
        //       filter: isLast ? 'none' : 'brightness(100%) blur(10px)',
        //       scale: 0.6,
        //     },
        //     '<'
        //   );

        gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: 'top top',
            end: '+=80%', // adjust this value based on your needs
            scrub: 0.5,
            onUpdate: self => {
              if (self.direction < 0) {
                gsap.to(panel, {
                  filter: 'brightness(100%) blur(0px)',
                  scale: 1,
                  overwrite: 'auto',
                  duration: 0.5,
                });
              }
            },
          },
        })
        .to(
          panel,
          {
            ease: 'power1.inOut', // change 'in' to 'power1.inOut' for smoother easing
            startAt: { filter: 'brightness(100%) blur(0px)' },
            filter: isLast ? 'none' : 'brightness(100%) blur(10px)',
            scale: 0.6,
          },
          '<'
        );
        
      });
    };

    createScroll01();

    // Clean up ScrollTrigger instances on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div>
      <Header ref={stickyElement} />
      <div className={" bg-white grid relative"}>
        // <HeroSection />

        // <BentoGrid />


        // <WhatAllAbout />

        // <WordpressToReact />

        // <TechUsed />


      </div>

      <div className=" hidden sm:block">
        <StickyCursor stickyElement={stickyElement} />
      </div>
    </div>
  );
}

*/


// Backup 2 - Main.jsx script - NOT DEPLOYED
/*
"use client";

import { useEffect, useRef } from "react";
import Header from "../Header/Header";
import StickyCursor from "../StickyCursor/StickyCursor";
import HeroSection from "../HeroSection/HeroSection";
import BentoGrid from "../BentoGrid/BentoGrid";
import WhatAllAbout from "../WhatAllAbout/WhatAllAbout";
import WordpressToReact from "../WordpressToReact/WordpressToReact";
import TechUsed from "../TechUsed/TechUsed";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


export default function Main() {
  const stickyElement = useRef(null);

  useEffect(() => {
    // Select Elements from DOM - Use class instead of ID if multiple elements are selected
    const panels = Array.from(document.querySelectorAll('.stickyScroll'));

    // Function to create the scroll trigger animations
    const createScroll01 = () => {
      panels.forEach((panel, index) => {
        const isLast = index === panels.length;
        let triggered = false;

        gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: 'top top',
            end: '+=100%',
            scrub: 1,
            onUpdate: self => {
              const scrollPercent = self.progress * 100;
              // console.log(self.direction, scrollPercent);
            //   if (scrollPercent > 15 && !triggered) {
            //     triggered = true;
            //     gsap.to(panel, {
                  
            // ease: 'power1.inOut', 
            // startAt: { filter: 'brightness(100%) blur(0px)' },
            // filter: isLast ? 'none' : 'brightness(100%) blur(10px)',
            // scale: 0.6,
            // duration: 1,
            //     });
            //   }
              if (scrollPercent > 15 && self.direction > 0) {
                gsap.to(window, {
                  scrollTo: { y: self.end, autoKill: false },
                  duration: 2,
                });
              }
              // if (scrollPercent > 20 && scrollPercent < 30 && self.direction < 0) {
              //   gsap.to(window, {
              //     scrollTo: { y: self.end, autoKill: false },
              //     duration: 2,
              //   });
              // }
            },
          },
        })
        .to(
          panel,
          {
            ease: 'power1.inOut', 
            startAt: { filter: 'brightness(100%) blur(0px)' },
            filter: isLast ? 'none' : 'brightness(100%) blur(10px)',
            scale: 0.6,
            duration: 1,
          },
          '<'
        );
        
      });
    };

    createScroll01();

    // Clean up ScrollTrigger instances on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div>
      <Header ref={stickyElement} />
      <div className={" bg-white grid relative"}>
all sections
      </div>

      <div className=" hidden sm:block">
        <StickyCursor stickyElement={stickyElement} />
      </div>
    </div>
  );
}
*/