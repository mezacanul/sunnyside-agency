import { cn } from "@/utils/cn";
import HeroContainer from "./HeroContainer";
import { useTranslations } from "next-intl";
import Image from "next/image";

const arrowDownImage = `/images/icon-arrow-down.svg`;

export default function Hero() {
  const t = useTranslations("hero");

  const classNames = {
    textSection: {
      container: cn(
        "mt-0 gap-30",
        "sm:-mt-[10rem] sm:gap-20",
        "flex flex-col items-center justify-center"
      ),
      h1: cn(
        "text-4xl font-black tracking-[0.7rem]",
        "sm:text-7xl sm:font-bold sm:tracking-[1.3rem]",
        // shared
        "text-white text-center font-fraunces w-[90%] text-center"
      ),
    },
  };
  return (
    <HeroContainer>
      <div className={classNames.textSection.container}>
        <h1 className={classNames.textSection.h1}>
          {t("title")}
        </h1>
        <Image
          src={arrowDownImage}
          alt="arrow down"
          width={1000}
          height={1000}
          loading="eager"
          className="h-[8rem]"
        />
      </div>
    </HeroContainer>
  );
}
