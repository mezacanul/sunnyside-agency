import { cn } from "@/utils/cn";
import { useTranslations } from "next-intl";
import { content } from "@/data/content";
import Image from "next/image";

interface TextSectionProps {
  title: string;
  description: string;
  color: string;
  button: string;
}

export default function About() {
  // const { textSections, imageSections } = content;
  const t = useTranslations("about");
  const data = content.about;

  const classNames = {
    sections: {
      upper: cn(
        "flex flex-col-reverse",
        "sm:grid sm:grid-cols-2"
      ),
      lower: cn("flex flex-col", "sm:grid sm:grid-cols-2"),
    },
  };
  return (
    <div id="about" className="sm:h-screen flex flex-col">
      <div className={classNames.sections.upper}>
        <TextSection
          title={t("transform.title")}
          description={t("transform.description")}
          color="red"
          button={t("transform.button")}
        />
        <Image
          className="w-full object-cover h-[50vh]"
          src={`/images/${data[0].image}`}
          style={{ filter: "brightness(1.2)" }}
          alt={data[0].image}
          width={1000}
          height={1000}
          loading="eager"
        />
      </div>

      <div className={classNames.sections.lower}>
        <Image
          className="w-full object-cover h-[50vh]"
          src={`/images/${data[1].image}`}
          alt={data[1].image}
          width={1000}
          height={1000}
          loading="eager"
        />
        <TextSection
          title={t("stand-out.title")}
          description={t("stand-out.description")}
          color="yellow"
          button={t("stand-out.button")}
        />
      </div>
    </div>
  );
}

function TextSection({
  title,
  description,
  color,
  button,
}: TextSectionProps) {
  const colors: Record<string, string> = {
    red: "after:bg-red-400/40 hover:after:bg-red-400",
    yellow:
      "after:bg-yellow-500/40 hover:after:bg-yellow-500",
  };
  const afterClasses = `after:content-[''] after:block after:w-full after:h-[8px] ${colors[color]} after:rounded-full after:-mt-1.5 after:transition-colors after:duration-300`;
  return (
    <div className="flex flex-col justify-center items-center gap-4 h-[50vh]">
      <div className="w-[85%] sm:w-[70%] flex flex-col justify-center gap-7">
        <h3 className="text-center sm:text-left text-4xl font-extrabold font-fraunces text-gray-950">
          {title}
        </h3>
        <p className="text-center sm:text-left font-barlow text-base text-gray-600">
          {description}
        </p>
        <div className="flex justify-center sm:justify-start">
          <a
            href="#"
            className={`font-fraunces w-fit ${afterClasses} font-bold text-sm text-gray-950`}
          >
            {button}
          </a>
        </div>
      </div>
    </div>
  );
}
