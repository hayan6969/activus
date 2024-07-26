import React from "react";
import BlurIn from "../magicui/blur-in";
import Lottie from "react-lottie";
import security from "../../../public/assets/security.json";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import SecurityBG from "./SecurityBG";

const Chat = dynamic(() => import("./Chat"), {
  loading: () => (
    <div className={" grid place-items-center w-full h-full"}>
      <div className="spinner-small"> </div>
    </div>
  ),
  ssr: false,
});

const Payment = dynamic(() => import("./Payment"), {
  loading: () => (
    <div className={" grid place-items-center w-full h-full"}>
      <div className="spinner-small"> </div>
    </div>
  ),
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

  const divStyle =
    " rounded-2xl h-full w-full overflow-hidden bg-white md:row-span-3 ";

  return (
    <section className=" sectionCS h-fit md:h-screen w-full stickyScrol overflow-hidden site-bg ">
      <div className={"bg-white rounded-2xl m-4 md:mx-24 relative overflow-hidden"}>
        <div className={"absolute top-0 left-0 w-full h-full "}>
          <SecurityBG />
        </div>
        <BlurIn
          word={trans("heading")}
          className={
            " text-4xl sm:text-6xl md:text-7xl font-bold bg green-300 py-4 pointer-events-none "
          }
          id={23}
        />
        <div className="  h-fit w-full grid place-items-center overflow-hidden pointer-events-none">
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
      </div>

      <BlurIn
        word={trans("subHeading")}
        className={
          " text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg violet-300 pt-1 "
        }
        id={24}
      />
      <div className=" grid grid-cols-1 grid-rows-3 md:grid-cols-3 gap-6 w-full h-full md:h-[43vh] px-4 md:px-24 bg red-500 py-2 site-bg ">
        <div className={divStyle + " row-span-1 "}>
          {/* <h1 className=" text-center font-semibold text-xl md:text-2xl lg:text-3xl">
          {trans('chat')}
          </h1> */}
          {/* <div className=" bg-white w-full h-[40vh] md:h-[36vh] rounded-b-2xl grid place-items-center"> */}
          <Chat />
          {/* </div> */}
        </div>
        <div className={divStyle + " row-span-1 "}>
          {/* <h1 className=" text-center font-semibold text-xl md:text-2xl lg:text-3xl">
            {trans("payment")}
          </h1>
          <div className=" bg-white w-full h-[40vh] md:h-[36vh] rounded-b-2xl grid place-items-center "> */}
            <Payment />
          {/* </div> */}
        </div>
        <div className={divStyle + " row-span-1 "}>
          <h1 className=" text-center font-semibold text-xl md:text-2xl lg:text-3xl pointer-events-none md:pointer-events-auto">
            {trans("andMore")}
          </h1>
          <div className=" bg-white w-full h-[40vh] md:h-[36vh] rounded-b-2xl grid place-items-center">
            <AndMore />
          </div>
        </div>
      </div>
    </section>
  );
}
