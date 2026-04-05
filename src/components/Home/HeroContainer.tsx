"use client";
import { useResponsive } from "@/hooks/useResponsive";
import { content } from "@/data/content";

const bgImage = "image-header.jpg";

export default function HeroContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      id="hero"
      className={
        "bg-cover bg-center h-screen flex items-center justify-center"
      }
      style={{
        backgroundImage: `url(${useResponsive<string>([
          `/images/${content.hero.bg.mobile}`,
          `/images/${content.hero.bg.desktop}`,
        ])})`,
      }}
    >
      {children}
    </div>
  );
}
