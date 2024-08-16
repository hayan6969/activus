"use client";

import { useParams } from "next/navigation";
import { useTransition } from "react";
import { useRouter, usePathname } from "@/navigation";
import { CircleFlag } from "react-circle-flags";

export default function LanguageSwitcher({language,setLanguage}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function handleChangeLanguage(nextLocale) {
    // sessionStorage.setItem('isLangChanges', "yes");

    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <div className=" flex flex-wrap items-center justify-center gap-4 md:gap-8 w-full px-8 ">
      <button
        onClick={() => {
          // handleChangeLanguage("en");
          setLanguage(0);
        }}
        disabled={isPending}
        key="lang-btn-en"
        className=" w-[45px] h-[45px] overflow-hidden"
      >
        {/* {english} */}
        <CircleFlag countryCode="us" />
      </button>
      <button
        onClick={() => {
          // handleChangeLanguage("fr");
          setLanguage(3);
        }}
        disabled={isPending}
        key="lang-btn-fr"
        className=" w-[45px] h-[45px] overflow-hidden"
      >
        <CircleFlag countryCode="fr" />
      </button>
      <button
        onClick={() => {
          // handleChangeLanguage("es");
          setLanguage(2);
        }}
        disabled={isPending}
        key="lang-btn-es"
        className=" w-[45px] h-[45px] overflow-hidden"
      >
        <CircleFlag countryCode="es" />
      </button>
      <button
        onClick={() => {
          // handleChangeLanguage("de");
          setLanguage(6);
        }}
        disabled={isPending}
        key="lang-btn-de"
        className=" w-[45px] h-[45px] overflow-hidden"
      >
        <CircleFlag countryCode="de" />
      </button>
      <button
        onClick={() => {
          // handleChangeLanguage("it");
          setLanguage(4);
        }}
        disabled={isPending}
        key="lang-btn-it"
        className=" w-[45px] h-[45px] overflow-hidden"
      >
        <CircleFlag countryCode="it" />
      </button>

      <button
        onClick={() => {
          // handleChangeLanguage("cn");
          setLanguage(1);
        }}
        disabled={isPending}
        key="lang-btn-cn"
        className=" w-[45px] h-[45px] overflow-hidden"
      >
        <CircleFlag countryCode="cn" />
      </button>
      <button
        onClick={() => {
          // handleChangeLanguage("br");
          setLanguage(5);
        }}
        disabled={isPending}
        key="lang-btn-br"
        className=" w-[45px] h-[45px] overflow-hidden"
      >
        <CircleFlag countryCode="br" />
      </button>
      <button
        onClick={() => {
          // handleChangeLanguage("ru");
          setLanguage(7);
        }}
        disabled={isPending}
        key="lang-btn-ru"
        className=" w-[45px] h-[45px] overflow-hidden"
        aria-label="Russia"
      >
        <CircleFlag countryCode="ru" />
      </button>
    </div>
  );
}
