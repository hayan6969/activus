import LoadingScreen from "@/components/Utils/LoadingScreen";
import dynamic from "next/dynamic";
import React from "react";

const Main = dynamic(() => import("@/components/Main/Main"), {
  loading: ()=>{
    return <LoadingScreen />;
  },
});

export default function page() {
  return (<Main />);
}
