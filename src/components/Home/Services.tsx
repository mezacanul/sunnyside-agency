import { cn } from "../../utils/cn";
import { imgPrefix } from "../../utils/constants";

interface ServiceCardProps {
    title: string;
    description: string;
    color: string;
    image: string;
    saturate: number;
}

export default function Services() {
    return (
        <div id="services-section" className="sm:h-[65vh] sm:grid sm:grid-cols-2 flex flex-col">
            <ServiceCard
                title="Graphic Design"
                description="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention."
                color="green-800"
                image="image-graphic-design.jpg"
                saturate={1.2}
            />
            <ServiceCard
                title="Photography"
                description="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
                color="blue-800"
                image="image-photography.jpg"
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
    const imgSrc = `${imgPrefix}/desktop/${image}`;
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
