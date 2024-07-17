import React from 'react'
import BlurIn from '../magicui/blur-in';
import { AppDevelopment } from './AppDevelopment';
import SparklesText from '../magicui/sparkles-text';
import dynamic from 'next/dynamic';

const Camera = dynamic(() => import("./Camera"), {
    loading: () => <div className="spinner-small"> </div>,
    ssr: false,
  });

export default function Section9() {
    
  const divStyle =
  " relative w-full -fit sm:h-full rounded-2xl bg-white overflow-hidden  shadow-[0px_0px_20px_7px_#00000024]";

const headingStyle = " text-2xl sm:text-3xl md:text-5xl font-semibold ";

  return (
    <section className="  w-full sm:h-fit lg:h-screen px-4 md:px-24 py-2 my6 overflow-hidden">
      <div className=" grid grid-cols-12 sm:grid-rows-12 gap-6 w-full h-full">

        {/* programming  */}
        <div className={divStyle + " col-span-full row-span-8 lg:row-span-4"}>
          <BlurIn word={"Programming"} id={91} className={'sectionHeading sm:py-6'} />
          <p className='  text-center font-light text-xl md:text-2xl lg:text-3xl w-full px-1 sm:px-24 '>
          We can program every conceivable application that is on the market today and we trust ourselves to design and program anything that the mind desires.
          </p>
        </div>

{/* design  */}
<div className={divStyle + " col-span-full md:col-span-6 lg:col-span-4 row-span-12 md:row-span-8 "}>
          
<SparklesText className={" text-center "}>
<BlurIn word={"Design"} className={headingStyle + " "} id={92} />

</SparklesText>
<p className='  text-center font-light text-xl md:text-2xl lg:text-3xl w-full px-1 sm:px-4 lg:px-12 '>
Years of experience in all design
</p>
<video
            className={" absolute bottom-0 left-0 w-full h-[23vh] md:h-[25vh] lg:h-[44vh] object-cover  "}
            src="/assets/design.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

        </div>

        {/* app development   */}
<div className={divStyle + " col-span-full md:col-span-6 lg:col-span-8 row-span-8 lg:row-span-4 "}>
          <BlurIn word={"App Development"} className={headingStyle + " "}  id={93} />
          <AppDevelopment />
        </div>
        
        
        {/* cooperation   */}
<div className={divStyle + " col-span-full lg:col-span-4 row-span- lg:row-span-4 "}>
<BlurIn word={"Cooperation"} id={94} className={headingStyle + " "} />
          <p className='  text-center font-light text-sm md:text-xl lg:text-2xl w-full px-1 sm:px-4 py-3 lg:pt-6 '>
          We conduct functional tests with users and prospective customers who will use our applications.
          </p>
        </div>

        
        {/* monitoring   */}
<div className={divStyle + " col-span-full lg:col-span-4 lg:row-span-4 overflow-hidde "}>
<BlurIn word={"Monitoring"} id={95} className={headingStyle + " "} />
          <p className=' text-center font-light text-md md:text-xl lg:text-2xl w-full px-1 sm:px-4 '>
          24/7 monitoring and response
          </p>
          <div className=' w-full h-[150px] sm:h-[22vh] grid place-items-center'>
          <Camera /></div>
        </div>
      </div>
    </section>
  )
}
