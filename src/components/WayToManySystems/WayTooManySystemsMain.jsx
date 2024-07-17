"use client";
import React, { useEffect, useState } from "react";
import WayToManySystems from "./WayToManySystems";
import WayToManySystemsMobile from "./WayToManySystemsMobile";

export default function WayTooManySystemsMain() {
  const [isMobile, setIsMobile] = useState("nothing");

  useEffect(() => {
    let value = window.innerWidth <= 550;
    setIsMobile(value?"mb":"pc");
  }, []);
  
  return (
    <>
      {isMobile === "nothing" ? 
      <></>:
      isMobile === "mb" ? 
      (
        <div className=" grid md:hidden overflow-hidden">
          <WayToManySystemsMobile />
        </div>
      ) : 
      isMobile === 'pc'? (
        <WayToManySystems />
      ):null
    }
    </>
  );
}
