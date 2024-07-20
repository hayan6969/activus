"use client";
import React, { useEffect, useState } from "react";
import WayToManySystems from "./WayToManySystems";
import WayToManySystemsMobile from "./WayToManySystemsMobile";
import { useTranslations } from "next-intl";

export default function WayTooManySystemsMain() {
  const trans = useTranslations('wayTooManySystems');
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
          <WayToManySystemsMobile heading1={trans('heading1')} heading2={trans('heading2')} />
        </div>
      ) : 
      isMobile === 'pc'? (
        <WayToManySystems heading1={trans('heading1')} heading2={trans('heading2')} />
      ):null
    }
    </>
  );
}
