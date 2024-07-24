"use client";

import { useParams } from "next/navigation";
import { useTransition } from "react";
import { useRouter, usePathname } from "@/navigation";

export default function LanguageSwitcher({ english, french }) {
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
    <div className=" flex flex-wrap items-center justify-center gap-4 md:gap-8 w-full px-8">
      <button
        onClick={() => {
          handleChangeLanguage("en");
        }}
        disabled={isPending}
        key="lang-btn-en"
        className={" rounded-3xl bg-black text-white px-4 py-2"}
      >
        {english}
      </button>
      <button
        onClick={() => {
          handleChangeLanguage("fr");
        }}
        disabled={isPending}
        key="lang-btn-fr"
        className={" rounded-3xl bg-black text-white px-4 py-2"}
      >
        {french}
      </button>
    </div>
  );
}
