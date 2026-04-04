import { imgPrefix } from "../../utils/constants";

const reels = [
    "image-gallery-milkbottles.jpg",
    "image-gallery-orange.jpg",
    "image-gallery-cone.jpg",
    "image-gallery-sugarcubes.jpg",
];

export default function Reels() {
    return (
        <div className="h-[50vh] grid sm:grid-cols-4 grid-cols-2">
            {reels.map((reel) => (
                <div
                    key={reel}
                    className="w-full h-full overflow-hidden"
                >
                    <img
                        src={`${imgPrefix}/desktop/${reel}`}
                        alt={reel}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
        </div>
    );
}
