"use client";
import type { Config } from "@/types";
import { cn } from "@/utils/cn";
import Nav from "./Nav";

export default function MobileMenu({
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
