"use client";
import { useTranslations } from "next-intl";
import { content } from "@/data/content";
import { cn } from "@/utils/cn";
import NavLink from "./NavLink";
import LangSwitcher from "./LangSwitcher";

export default function Nav({
  toggleMenu,
}: {
  toggleMenu?: () => void;
}) {
  const t = useTranslations("main.nav.links");
  const navLinks = content.nav.links;

  return (
    <nav className="flex flex-col sm:flex-row items-center gap-8">
      {navLinks.map((link: any) => (
        <NavLink
          key={link.href}
          href={link.href}
          toggleMenu={toggleMenu ?? (() => {})}
        >
          {t(link.id)}
        </NavLink>
      ))}
      <LangSwitcher />
      <button
        className={cn(
          "text-gray-600 font-medium text-xl sm:font-normal sm:text-white sm:text-lg",
          "font-barlow transition-colors duration-300 cursor-pointer",
          "bg-yellow-500 sm:bg-white hover:bg-white/30 text-black! hover:text-white! font-fraunces text-base! font-bold! rounded-full px-6 py-2"
        )}
      >
        {t("contact")}
      </button>
    </nav>
  );
}
