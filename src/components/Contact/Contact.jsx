import React from "react";
import BlurIn from "../magicui/blur-in";
import dynamic from "next/dynamic";
import ContactForm from "./ContactForm";
import { BorderBeam } from "../magicui/border-beam";
import { useTranslations } from "next-intl";

const Robot = dynamic(() => import("./Robot"), {
  loading: () => (
    <div className=" h-screen w-full grid place-items-center">
      <div className="spinner-medium"> </div>
    </div>
  ),
  ssr: false,
});

export default function Contact() {
  const trans = useTranslations('contact');

  return (
    <section id="contact" className=" w-full h-full overflow-hidden site-bg relative ">
      <BlurIn
        id={111}
        word={trans('heading')}
        className={" sectionHeading py-6 "}
      />
      <div className=" h-[60vh] sm:h-[98vh] lg:h-[88vh] w-full"></div>
      <div className=" h-[28vh] lg:h-fit w-full"></div>
      <Robot />
      <div className=" grid place-items-center absolute left-auto right-auto w-full top-[50vh]sm:top-[38vh] bottom-10">
        <div className=" bg-white relative p-2 rounded-2xl w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] ">
        <BorderBeam size={300} />
          <BlurIn
            id={112}
            word={trans('subHeading')}
            className={
              " text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold"
            }
          />
          <ContactForm data={
            {
              name: trans('form.name'),
              email: trans('form.email'),
              message: trans('form.message'),
              sendBtn: trans('form.sendBtn')
            }
          } />
        </div>
      </div>
    </section>
  );
}
