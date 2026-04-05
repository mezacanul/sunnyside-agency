"use client";
import Logo from "@/components/common/Logo";
import { cn } from "@/utils/cn";
import { useResponsive } from "@/hooks/useResponsive";
import {
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import { useEffect, useState } from "react";
import type { Config } from "@/types";

export default function Header() {
  const classNames = {
    header: cn(
      "px-6 sm:px-8",
      "absolute top-0 left-0 w-full py-6 flex items-center justify-between z-10"
    ),
    logo: cn("text-3xl sm:text-4xl"),
  };
  return (
    <header className={classNames.header}>
      <Logo color="white" className={classNames.logo} />
      {useResponsive<React.ReactNode>([
        <MobileNav />,
        <Nav />,
      ])}
    </header>
  );
}

function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [config, setConfig] = useState<Config>({
    height: "h-0",
    opacity: "opacity-0",
    display: "hidden",
  });

  useEffect(() => {
    if (isMenuOpen) {
      setConfig((prev) => ({
        ...prev,
        display: "absolute",
      }));
      setTimeout(() => {
        setConfig((prev) => ({
          ...prev,
          height: "h-100",
          opacity: "opacity-100",
        }));
      }, 100);
    } else {
      setTimeout(() => {
        setConfig((prev) => ({
          ...prev,
          opacity: "opacity-0",
          height: "h-0",
        }));
      }, 100);
      setTimeout(() => {
        setConfig((prev) => ({
          ...prev,
          display: "hidden",
        }));
      }, 200);
    }
  }, [isMenuOpen]);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <>
      <span
        className="text-white text-3xl"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <AiOutlineClose />
        ) : (
          <AiOutlineMenu />
        )}
      </span>
      <MobileMenu toggleMenu={toggleMenu} config={config} />
    </>
  );
}

function MobileMenu({
  toggleMenu,
  config,
}: {
  toggleMenu: () => void;
  config: Config;
}) {
  return (
    <div
      className={cn(
        "absolute top-[12vh] left-0 w-full bg-white transition-all duration-300",
        config.height,
        config.display
      )}
    >
      <div
        className={cn(
          "flex h-full items-center justify-center transition-opacity duration-300",
          config.opacity
        )}
      >
        <Nav toggleMenu={toggleMenu} />
      </div>
    </div>
  );
}

function Nav({ toggleMenu }: { toggleMenu?: () => void }) {
  const navLinks = [
    { href: "#about-section", children: "About" },
    { href: "#services-section", children: "Services" },
    {
      href: "#testimonials-section",
      children: "Projects",
    },
    { href: "#footer", children: "CONTACT" },
  ];

  return (
    <nav className="flex flex-col sm:flex-row items-center gap-8">
      {navLinks.map((link) => (
        <NavLink
          key={link.href}
          href={link.href}
          toggleMenu={toggleMenu ?? (() => {})}
        >
          {link.children}
        </NavLink>
      ))}
    </nav>
  );
}

function NavLink({
  href,
  children,
  toggleMenu,
}: {
  href: string;
  children: React.ReactNode;
  toggleMenu: () => void;
}) {
  const isContact =
    children === "CONTACT"
      ? "bg-yellow-500 sm:bg-white hover:bg-white/30 text-black! hover:text-white! font-fraunces text-base! font-bold! rounded-full px-6 py-2"
      : "";
  const classNames = cn(
    "text-gray-600 font-medium text-xl sm:font-normal sm:text-white sm:text-lg",
    `hover:text-blue-800 font-barlow transition-colors duration-300 ${isContact}`
  );

  return (
    <a
      href={href}
      onClick={toggleMenu}
      className={classNames}
    >
      {children}
    </a>
  );
}
