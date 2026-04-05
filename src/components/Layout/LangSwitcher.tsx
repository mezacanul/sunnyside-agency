"use client";
import { cn } from "@/utils/cn";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

type Language = (typeof routing.locales)[number];

export default function LangSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const languages = routing.locales;

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const config = {
    current: locale as Language,
    options: languages.filter((lang) => lang !== locale),
  };

  const switchLocale = (newLocale: Language) => {
    if (newLocale === locale) return;

    // This correctly updates the URL with the new locale
    router.replace(pathname, { locale: newLocale });
  };

  const cns = {
    trigger: cn(
      "flex items-center gap-2 text-gray-600 font-medium sm:font-normal sm:text-white cursor-pointer",
      "hover:text-blue-800",
      "transition-all duration-300"
    ),
    dropdown: cn(
      "absolute top-[calc(100%+7px)] left-0 w-full bg-white shadow-lg",
      "flex flex-col items-center justify-center"
    ),
    link: cn(
      "py-2 px-3",
      "transition-all duration-300 cursor-pointer",
      "hover:font-bold hover:_underline"
    ),
  };
  return (
    <div className="relative">
      <div
        className={cns.trigger}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{config.current.toUpperCase()}</span>
        <IoIosArrowDown />
      </div>

      {isOpen && (
        <div className={cns.dropdown}>
          {config.options.map((lang: Language) => (
            <span
              className={cns.link}
              key={lang}
              onClick={() => switchLocale(lang)}
            >
              {lang.toUpperCase()}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
