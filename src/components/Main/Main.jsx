'use client';

import { useRef } from 'react';
import Header from '../Header/Header';
import StickyCursor from '../StickyCursor/StickyCursor';
import HeroSection from '../HeroSection/HeroSection';

export default function Main() {
  
  const stickyElement = useRef(null);

  
  return (
    <div className={'main'}>
      <Header ref={stickyElement}/>

      <HeroSection />

      <div className=' w-full h-screen'>
        Second section
       
      </div>

      <StickyCursor stickyElement={stickyElement}/>
    </div>
  )
}