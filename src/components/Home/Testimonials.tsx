import { content } from "@/data/content";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface TestimonialCardProps {
  image: string;
  description: string;
  name: string;
  position: string;
}

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const data = content.testimonials;

  return (
    <div
      id="testimonials"
      className="py-20 sm:py-0 sm:h-screen flex justify-center items-center"
    >
      <div className="w-[80%] sm:w-[70%] flex flex-col justify-center items-center gap-15">
        <h2 className="sm:text-2xl text-lg text-gray-550 font-fraunces font-bold text-center tracking-[0.5rem]">
          {t("title")}
        </h2>
        <div className="flex flex-col gap-15 sm:grid sm:grid-cols-3 sm:gap-10">
          <TestimonialCard
            image={data[0].image}
            description={t("people.emily.description")}
            name={t("people.emily.name")}
            position={t("people.emily.position")}
          />
          <TestimonialCard
            image={data[1].image}
            description={t("people.thomas.description")}
            name={t("people.thomas.name")}
            position={t("people.thomas.position")}
          />
          <TestimonialCard
            image={data[2].image}
            description={t("people.jennie.description")}
            name={t("people.jennie.name")}
            position={t("people.jennie.position")}
          />
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({
  image,
  description,
  name,
  position,
}: TestimonialCardProps) {
  return (
    <div className="gap-7 sm:gap-15 flex flex-col justify-center items-center">
      <Image
        src={`/images/${image}`}
        alt={name}
        width={1000}
        height={1000}
        loading="eager"
        className="rounded-full w-20 h-20 object-cover"
      />
      <p className="text-center text-gray-600 font-barlow font-medium text-base/8">
        {description}
      </p>
      <div className="flex flex-col justify-center items-center gap-1.5">
        <h3 className="text-gray-950 font-fraunces font-bold text-2xl">
          {name}
        </h3>
        <p className="text-gray-400 font-barlow font-medium text-sm">
          {position}
        </p>
      </div>
    </div>
  );
}
