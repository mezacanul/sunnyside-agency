import { cn } from "../../utils/cn";
import { imgPrefix } from "../../utils/constants";

interface TextSectionProps {
    title: string;
    description: string;
    color: string;
}

export default function About() {
    const { textSections, imageSections } = content;
    const classNames = {
        sections: {
            upper: cn(
                "flex flex-col-reverse",
                "sm:grid sm:grid-cols-2"
            ),
            lower: cn(
                "flex flex-col",
                "sm:grid sm:grid-cols-2"
            ),
        },
    };
    return (
        <div id="about-section" className="sm:h-screen flex flex-col">
            <div className={classNames.sections.upper}>
                <TextSection
                    title={textSections[0].title}
                    description={
                        textSections[0].description
                    }
                    color="red"
                />
                <img
                    className="w-full object-cover h-[50vh]"
                    src={`${imgPrefix}/desktop/${imageSections[0]}`}
                    style={{ filter: "brightness(1.2)" }}
                />
            </div>
            <div className={classNames.sections.lower}>
                <img
                    className="w-full object-cover h-[50vh]"
                    src={`${imgPrefix}/desktop/${imageSections[1]}`}
                />
                <TextSection
                    title={textSections[1].title}
                    description={
                        textSections[1].description
                    }
                    color="yellow"
                />
            </div>
        </div>
    );
}

function TextSection({
    title,
    description,
    color,
}: TextSectionProps) {
    const colors: Record<string, string> = {
        red: "after:bg-red-400/40 hover:after:bg-red-400",
        yellow: "after:bg-yellow-500/40 hover:after:bg-yellow-500",
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
                        LEARN MORE
                    </a>
                </div>
            </div>
        </div>
    );
}

const content = {
    textSections: [
        {
            title: "Transform your brand",
            description:
                "We are a full-service creative agency that specializes in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
        },
        {
            title: "Stand out to the right audience",
            description:
                "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.",
        },
    ],
    imageSections: [
        "image-transform.jpg",
        "image-stand-out.jpg",
    ],
};
