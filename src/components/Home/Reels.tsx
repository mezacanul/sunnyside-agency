import { content } from "@/data/content";
import Image from "next/image";

export default function Reels() {
  const { reels } = content;
  return (
    <div className="h-[50vh] grid sm:grid-cols-4 grid-cols-2">
      {reels.map((reel) => (
        <div
          key={reel}
          className="w-full h-full overflow-hidden"
        >
          <Image
            src={`/images/${reel}`}
            alt={reel}
            width={1000}
            height={1000}
            loading="eager"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
