'use client';
import React, { useEffect, useRef, useState } from 'react'
import BlurIn from '../magicui/blur-in';
import PuzzleMobile from './PuzzleMobile';


export default function WayToManySystemsMobile() {
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
    <section ref={sectionDRef} className=' overflow-hidden w-full h-full stickyScroll top-0 z-[1] duration-700 transition-all '>
      
        <BlurIn word={isSolved ? `Integrate and thereby increase efficiency, automation and benefit for all` : `Way Too Many Systems?` } id={82} className={`${isSolved ? " text-3xl sm:text-4xl md:text-5xl font-semibold " : " sectionHeading " } duration-300 transition-all `} />
    </section>
          <PuzzleMobile onSolved={()=>{setIsSolved(true)}} onUnSolved={()=>{setIsSolved(false)}} hideSectionRef={hideSectionRef} />
        </>
  )
}
