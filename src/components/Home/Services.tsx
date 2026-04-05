import { content } from "@/data/content";
import { cn } from "@/utils/cn";
import { useTranslations } from "next-intl";

interface ServiceCardProps {
  title: string;
  description: string;
  color: string;
  image: string;
  saturate: number;
}

export default function Services() {
  const t = useTranslations("services");
  const data = content.services;

  return (
    <div
      id="services"
      className="sm:h-[65vh] sm:grid sm:grid-cols-2 flex flex-col"
    >
      <ServiceCard
        title={t("graphic-design.title")}
        description={t("graphic-design.description")}
        color="green-800"
        image={data[0].image}
        saturate={1.2}
      />
      <ServiceCard
        title={t("photography.title")}
        description={t("photography.description")}
        color="blue-800"
        image={data[1].image}
        saturate={1.5}
      />
    </div>
  );
}

function ServiceCard({
  title,
  description,
  color,
  image,
  saturate,
}: ServiceCardProps) {
  // Map color prop to CSS variable
  const colorMap: Record<string, string> = {
    "green-800": "var(--color-green-800)",
    "blue-800": "var(--color-blue-800)",
  };
  const textColor = colorMap[color] || "text-black";
  const imgSrc = `/images/${image}`;
  const saturateFilter = `saturate(${saturate})`;

  const containerClasses = cn(
    "flex justify-center items-end bg-cover bg-center",
    "h-[80vh] pb-18",
    "sm:h-full sm:pb-12"
  );

  return (
    <div
      className={containerClasses}
      style={{
        backgroundImage: `url(${imgSrc})`,
        filter: saturateFilter,
      }}
    >
      <div className="w-[80%] sm:w-[70%] flex flex-col justify-center items-center gap-4 text-center">
        <h3
          className="text-4xl font-bold font-fraunces"
          style={{ color: textColor }}
        >
          {title}
        </h3>
        <p
          className="font-barlow text-base"
          style={{ color: textColor }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
