import React from "react";
import BlurIn from "../magicui/blur-in";
import Lottie from "react-lottie";
import security from "../../../public/assets/security.json";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

const Chat = dynamic(() => import("./Chat"), {
  loading: () => <div className="spinner-small"> </div>,
  ssr: false,
});

const Payment = dynamic(() => import("./Payment"), {
  loading: () => <div className="spinner-small"> </div>,
  ssr: false,
});

const AndMore = dynamic(() => import("./AndMore"), {
  loading: () => <div className="spinner-small"> </div>,
  ssr: false,
});

export default function Security() {
  const trans = useTranslations("security");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: security,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const divStyle = " rounded-2xl h-full w-full overflow-hidden";

  return (
    <section className=" sectionCS h-fit md:h-screen w-full stickyScrol overflow-hidden bg red-300 ">
      <BlurIn
        word={trans('heading')}
        className={" text-4xl sm:text-6xl md:text-7xl font-bold bg green-300 pb-2 "}
        id={23}
      />
      <div className=" bg purple-400 h-fit w-full grid place-items-center overflow-hidden ">
        {/* mobile  */}
        <div className="block sm:hidden">
          <Lottie
            options={defaultOptions}
            //   divide width with 2.28 to get height
            // style={{ height: 109, width: 250 }}
            style={{ height: 220, width: 350 }}
          />
        </div>
        {/* tab  */}
        <div className="hidden sm:block lg:hidden">
          <Lottie
            options={defaultOptions}
            //   divide width with 2.28 to get height
            style={{ height: 175, width: 400 }}
          />
        </div>
        {/* desktop  */}
        <div className="hidden lg:block">
          <Lottie
            options={defaultOptions}
            //   divide width with 2.28 to get height
            style={{ height: 241, width: 550 }}
          />
        </div>
      </div>
      <BlurIn
        word={trans('subHeading')}
        className={
          " text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg violet-300 pt-1 "
        }
        id={24}
      />
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-full md:h-[43vh] px-4 md:px-24 bg red-500 py-2">
        <div className={divStyle + " bg yellow-300 "}>
          <h1 className=" text-center font-semibold text-xl md:text-2xl lg:text-3xl">
          {trans('chat')}
          </h1>
          <div className=" bg cyan-200 w-full h-[40vh] md:h-[36vh] rounded-b-2xl grid place-items-center">
            <Chat />
          </div>
        </div>
        <div className={divStyle + " bg yellow-200 "}>
          <h1 className=" text-center font-semibold text-xl md:text-2xl lg:text-3xl">
          {trans('payment')}
          </h1>
          <div className=" bg cyan-200 w-full h-[40vh] md:h-[36vh] rounded-b-2xl grid place-items-center ">
<Payment />
          </div>
        </div>
        <div className={divStyle + " bg yellow-400 "}>
          <h1 className=" text-center font-semibold text-xl md:text-2xl lg:text-3xl">
          {trans('andMore')}</h1>
          <div className=" bg cyan-200 w-full h-[40vh] md:h-[36vh] rounded-b-2xl grid place-items-center">
          <AndMore />

          </div>
        </div>
      </div>
    </section>
  );
}
