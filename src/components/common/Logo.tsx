export default function Logo({
    color,
    className,
}: {
    color?: string;
    className: string;
}) {
    // Map color prop to CSS variable or use Tailwind class if it's a standard color
    const colorMap: Record<string, string> = {
        "green-800": "var(--color-green-800)",
        "blue-800": "var(--color-blue-800)",
    };
    const textColorStyle = color && colorMap[color] ? { color: colorMap[color] } : { };
    
    return (
        <h2
            className={`text-white font-barlow font-bold ${className}`}
            style={textColorStyle}
        >
            {"sunnyside"}
        </h2>
    );
}
