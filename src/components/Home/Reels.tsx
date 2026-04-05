import { content } from "@/data/content";

export default function Reels() {
  const { reels } = content;
  return (
    <div className="h-[50vh] grid sm:grid-cols-4 grid-cols-2">
      {reels.map((reel) => (
        <div
          key={reel}
          className="w-full h-full overflow-hidden"
        >
          <img
            src={`/images/desktop/${reel}`}
            alt={reel}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
