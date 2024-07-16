'use client';
import "./puzzle.css";
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Puzzle = () => {
    const containerRef = useRef(null);

    useEffect(() => {
      const triggerPoint = document.querySelector('.trigger-point'); // Adjust based on your trigger element
//   const triggerPoint = 100;
    let previousScrollY = 0;

      const handleScroll = () => {
        const scrollY = window.scrollY;
        const scrollDirection = scrollY > previousScrollY ? 'down' : 'up'; // Calculate direction

        
  
        if (triggerPoint && scrollY >= triggerPoint.offsetTop && scrollDirection === 'down') {
                animateContent();
            }
            
            if(triggerPoint && scrollY >= triggerPoint.offsetTop && scrollDirection === 'up'){
                resetContent();
            }


    previousScrollY = scrollY;
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const animateContent = () => {
      gsap.to(containerRef.current, {
        duration: 2, // Adjust animation duration as needed
        ease: 'easeOut', // Customize easing function
        width: '37.65vw',
        height: '37.65vw',
        
        onStart: () => {
          // Animate individual grid items here (assuming they have unique class names)
          gsap.to('.peice', {
            duration: 1.5, // Adjust animation duration for individual items
            ease: 'easeInOut', // Customize easing function
            // Animate properties like rotate, translateX, translateY based on initial values
            stagger: 0.1, // Add stagger effect for each item (adjust as needed)
            rotate: 0,
            translateX: 0,
            translateY: 0,
          });
        },
      });
    };
    
    const resetContent = () => {
        gsap.to(containerRef.current, {
          duration: 2, // Adjust animation duration as needed
          ease: 'easeOut', // Customize easing function
          width: '45vw',
          height: '45vw',
          
          onStart: () => {
            // Reset individual grid items to their initial states
            gsap.to('.peice', {
              duration: 1.5, // Adjust animation duration for individual items
              ease: 'easeInOut', // Customize easing function
              stagger: 0.1, // Add stagger effect for each item (adjust as needed)
              rotate: (i) => {
                const initialRotates = [-13, -26, 3, 20, -13, 43, 30, 11, 75];
                return initialRotates[i];
              },
              translateX: (i) => {
                const initialTranslateX = ['-1vw', '-18vw', '-15vw', '15vw', '16vw', '-30vw', '34vw', '16vw', '-16vw'];
                return initialTranslateX[i];
              },
              translateY: (i) => {
                const initialTranslateY = ['30vw', '-6vw', '11vw', '13vw', '17vw', '-4vw', '-30vw', '-14vw', '-32vw'];
                return initialTranslateY[i];
              },
            });
          },
        });
      };
      
    
      
  return (
    <div  className=" w-full h-fit py-12 grid place-items-center ">

      {/* initial state  */}
      <div  ref={containerRef} className="w-[45vw] bg-white h-[45vw] grid grid-rows grid-cols-3 place-items-center">
        <div className="peice bg-primary rotate-[-13deg] translate-x-[-1vw] translate-y-[30vw]">
          <span className=" "></span>
          <span className="r bg-white "></span>
          <span className="b bg-white"></span>
          <span className=" "></span>
          <p className=" text-white text-4xl text-center pt-6 z-[2]">1</p>
        </div>

        <div className="peice bg-primary rotate-[-26deg] translate-x-[-18vw] translate-y-[-6vw]">
          <span className=""></span>
          <span className="r bg-white" ></span>
          <span className="b bg-white "></span>
          <span className="l bg-primary"></span>

          <p className=" text-white text-4xl text-center pt-6 z-[2]">2</p>
        </div>

        <div className="peice bg-primary rotate-[3deg] translate-x-[-15vw] translate-y-[11vw]">
          <span className=" "></span>
          <span className=" "></span>
          <span className="b bg-white"></span>
          <span className="l bg-primary "></span>

          <p className=" text-white text-4xl text-center pt-6 z-[2]">3</p>
        </div>

        <div className="peice bg-primary rotate-[20deg] translate-x-[15vw] translate-y-[13vw]">
          <span className="t bg-primary "></span>
          <span className="r bg-white"></span>
          <span className="b bg-white "></span>
          <span className=" "></span>

          <p className=" text-white text-4xl text-center pt-6 z-[2]">4</p>
        </div>

        <div className="peice bg-primary rotate-[-13deg] translate-x-[16vw] translate-y-[17vw]">
          <span className="t bg-primary"></span>
          <span className="r bg-white"></span>
          <span className="b bg-white"></span>
          <span className="l bg-primary "></span>

          <p className=" text-white text-4xl text-center pt-6 z-[2]">5</p>
        </div>

        <div className="peice bg-primary rotate-[43deg] translate-x-[-30vw] translate-y-[-4vw]">
          <span className="t bg-primary "></span>
          <span className=" "></span>
          <span className="b bg-white"></span>
          <span className="l bg-primary "></span>

          <p className=" text-white text-4xl text-center pt-6 z-[2]">6</p>
        </div>

        <div className="peice bg-primary rotate-[30deg] translate-x-[34vw] translate-y-[-30vw] ">
          <span className="t bg-primary"></span>
          <span className="r bg-white "></span>
          <span className=" "></span>
          <span className=" "></span>

          <p className=" text-white text-4xl text-center pt-6 z-[2]">7</p>
        </div>

        <div className="peice bg-primary rotate-[11deg] translate-x-[16vw] translate-y-[-14vw]">
          <span className="t bg-primary "></span>
          <span className="r bg-white "></span>
          <span className=" "></span>
          <span className="l bg-primary"></span>

          <p className=" text-white text-4xl text-center pt-6 z-[2]">8</p>
        </div>

        <div className="peice bg-primary rotate-[75deg] translate-x-[-16vw] translate-y-[-32vw]">
          <span className="t bg-primary "></span>
          <span className=" "></span>
          <span className=" "></span>
          <span className="l bg-primary"></span>

          <p className=" text-white text-4xl text-center pt-6 z-[2]">9</p>
        </div>
      </div>

    </div>
  );
};

export default Puzzle;
