"use client";
import React, { useEffect, useState } from "react";
import WayToManySystems from "./WayToManySystems";
import WayToManySystemsMobile from "./WayToManySystemsMobile";

export default function WayTooManySystemsMain() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let value = window.innerWidth <= 550;
    setIsMobile(value);
  }, []);
  
  return (
    <>
      {isMobile ? (
        <div className=" grid md:hidden overflow-hidden">
          <WayToManySystemsMobile />
        </div>
      ) : (
        <WayToManySystems />
      )}
    </>
  );
}
