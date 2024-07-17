'use client';
import React, { useEffect, useRef, useState } from 'react'
import BlurIn from '../magicui/blur-in';
import PuzzleMobile from './PuzzleMobile';


export default function WayToManySystemsMobile() {
  const [isSolved, setIsSolved] = useState(false);

  return (<>
    <section className=' overflow-hidden w-full h-full z-[1] duration-700 transition-all '>
    
        <BlurIn doNotHide={true} word={isSolved ? `Integrate and thereby increase efficiency, automation and benefit for all` : `Way Too Many Systems?` } id={82} className={`${isSolved ? " text-3xl sm:text-4xl md:text-5xl font-semibold " : " sectionHeading " } duration-300 transition-all `} />
    </section>
          <PuzzleMobile onSolved={()=>{setIsSolved(true)}} onUnSolved={()=>{setIsSolved(false)}} />
        </>
  )
}
