import LoadingScreen from "@/components/Utils/LoadingScreen";
import dynamic from "next/dynamic";
import React from "react";
import {unstable_setRequestLocale} from 'next-intl/server';

const Main = dynamic(() => import("@/components/Main/Main"), {
  loading: ()=>{
    return <LoadingScreen />;
  },
});

export default function page({params: {locale}}) {
  unstable_setRequestLocale(locale);
  return (<Main />);
}
