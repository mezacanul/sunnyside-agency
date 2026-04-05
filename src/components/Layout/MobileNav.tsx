"use client";
import { useState } from "react";
import type { Config } from "@/types";
import { useEffect } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import MobileMenu from "./MobileMenu";

export default function MobileNav() {
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
