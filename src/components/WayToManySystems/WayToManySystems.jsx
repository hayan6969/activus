import React from 'react'
import BlurIn from '../magicui/blur-in';
import Puzzle from './Puzzle';


export default function WayToManySystems() {
  return (
    <section className=' trigger-point overflow-hidde h-scree w-full h-full'>
        <BlurIn word={"Way To Many Systems?"} id={81} className={" sectionHeading"} />
        <Puzzle />
    </section>
  )
}
