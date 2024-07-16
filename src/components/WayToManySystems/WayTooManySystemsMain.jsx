import React from 'react'
import WayToManySystems from './WayToManySystems'
import WayToManySystemsMobile from './WayToManySystemsMobile'

export default function WayTooManySystemsMain() {
  return (
    <>
        {/* <div className=' hidden sm:block'> */}
            <WayToManySystems />
        {/* </div> */}
        <div className=' grid sm:hidden overflow-hidden'>
            <WayToManySystemsMobile />
        </div>
    </>
  )
}
