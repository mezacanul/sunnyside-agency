import { useResponsive } from "../../hooks/useResponsive";
import { cn } from "../../utils/cn";
import { imgPrefix } from "../../utils/constants";

const bgImage = "image-header.jpg";
const arrowDownImage = "icon-arrow-down.svg";

const images = {
    arrow: `${imgPrefix}/${arrowDownImage}`,
    desktop: {
        bg: `${imgPrefix}/desktop/${bgImage}`,
    },
    mobile: {
        bg: `${imgPrefix}/mobile/${bgImage}`,
    },
};

export default function Hero() {
    const classNames = {
        container: cn(
            "bg-cover bg-center h-screen flex items-center justify-center"
        ),
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
                "text-white text-center font-fraunces"
            ),
        },
    };
    return (
        <div
            id="hero-section"
            className={classNames.container}
            style={{
                backgroundImage: `url(${useResponsive<string>(
                    [images.mobile.bg, images.desktop.bg]
                )})`,
            }}
        >
            <div
                className={classNames.textSection.container}
            >
                <h1 className={classNames.textSection.h1}>
                    {"WE ARE CREATIVES"}
                </h1>
                <img className="h-[8rem]" src={images.arrow} alt="arrow down" />
            </div>
        </div>
    );
}
