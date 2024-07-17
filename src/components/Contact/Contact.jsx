import React from "react";
import BlurIn from "../magicui/blur-in";
import dynamic from "next/dynamic";
import ContactForm from "./ContactForm";
import { BorderBeam } from "../magicui/border-beam";

const Robot = dynamic(() => import("./Robot"), {
  loading: () => (
    <div className=" h-screen w-full grid place-items-center">
      <div className="spinner-medium"> </div>
    </div>
  ),
  ssr: false,
});

export default function Contact() {
  return (
    <section className=" w-full h-screen overflow-hidden bg-red300 relative ">
      <BlurIn
        id={111}
        word={"Like What you experienced?"}
        className={" sectionHeading py-6 "}
      />
      <Robot />
      <div className=" grid place-items-center absolute left-auto right-auto w-full top-[50vh] sm:top-[38vh]">
        <div className=" bg-white relative p-2 rounded-2xl w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] ">
        <BorderBeam size={300} />
          <BlurIn
            id={112}
            word={"Contact us"}
            className={
              " text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold"
            }
          />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
