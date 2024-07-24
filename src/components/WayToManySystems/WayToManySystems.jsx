'use client';
import React, { useEffect, useRef, useState } from 'react'
import BlurIn from '../magicui/blur-in';
import Puzzle from './Puzzle';


export default function WayToManySystems({heading1, heading2}) {
  const [isSolved, setIsSolved] = useState(false);

  const hideSectionRef = useRef(null);
  const sectionDRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (hideSectionRef.current && sectionDRef.current) {
        const hideSectionRect = hideSectionRef.current.getBoundingClientRect();
        if (hideSectionRect.top < 0) {
          sectionDRef.current.classList.remove('stickyScroll');
        } else {
          sectionDRef.current.classList.add('stickyScroll');
        }
      }
    };

    window.addEventListener('scroll', handleScroll); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (<>
    <section ref={sectionDRef} className=' w-full h-full stickyScroll top-0 z-[10] '>
        <BlurIn doNotHide={true} word={isSolved ? heading2 : heading1 } id={81} className={`${isSolved ? " text-3xl sm:text-4xl md:text-5xl font-bold px-32 " : " sectionHeading sm:pt-6 " } duration-300 transition-all bg-white`} />
    </section>
          <Puzzle onSolved={()=>{setIsSolved(true)}} onUnSolved={()=>{setIsSolved(false)}} 
          
          hideSectionRef={hideSectionRef}
          
          />
        </>
  )
}
