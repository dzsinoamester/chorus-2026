import { arcPath } from "./Logo";

type Variant = "ink" | "brand";

type Ring = {
  radius: number;
  width: number;
  color: string;
  gap: number;
  rotate: number;
};

const compositions: Record<Variant, { rings: Ring[]; background: string }> = {
  ink: {
    background: "#12121A",
    rings: [
      { radius: 118, width: 26, color: "#F2EFE8", gap: 58, rotate: -8 },
      { radius: 81, width: 26, color: "#8B6CFF", gap: 74, rotate: 8 },
      { radius: 47, width: 24, color: "#FF7A59", gap: 62, rotate: -2 },
    ],
  },
  brand: {
    background: "#8B6CFF",
    rings: [
      { radius: 120, width: 23, color: "#0D0D12", gap: 92, rotate: 12 },
      { radius: 80, width: 25, color: "#F2EFE8", gap: 62, rotate: -10 },
      { radius: 45, width: 24, color: "#FF7A59", gap: 68, rotate: 4 },
    ],
  },
};

export default function ChorusArt({
  variant = "ink",
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
