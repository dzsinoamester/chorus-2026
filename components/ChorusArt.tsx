import { arcPath } from "./Logo";

type Variant = "brand" | "coral";

const compositions: Record<
  Variant,
  { background: string; rings: { radius: number; width: number; color: string; gap: number; rotate: number }[] }
> = {
  brand: {
    background: "#8B6CFF",
    rings: [
      { radius: 120, width: 23, color: "#0D0D12", gap: 92, rotate: 12 },
      { radius: 80, width: 25, color: "#F2EFE8", gap: 62, rotate: -10 },
      { radius: 45, width: 24, color: "#FF7A59", gap: 68, rotate: 4 },
    ],
  },
  coral: {
    background: "#FF7A59",
    rings: [
      { radius: 118, width: 24, color: "#0D0D12", gap: 64, rotate: -10 },
      { radius: 80, width: 24, color: "#F2EFE8", gap: 78, rotate: 8 },
      { radius: 45, width: 22, color: "#8B6CFF", gap: 66, rotate: 0 },
    ],
  },
};

export default function ChorusArt({
  variant = "brand",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const { rings, background } = compositions[variant];

  return (
    <svg
      viewBox="0 0 300 300"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <rect width="300" height="300" fill={background} />
      <g fill="none" strokeLinecap="round">
        {rings.map((ring) => (
          <path
            key={`${ring.radius}-${ring.color}`}
            d={arcPath(ring.radius, ring.gap, ring.rotate, 150, 150)}
            stroke={ring.color}
            strokeWidth={ring.width}
          />
        ))}
      </g>
    </svg>
  );
}
