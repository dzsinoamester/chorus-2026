export function arcPath(
  radius: number,
  gapDeg: number,
  rotateDeg: number,
  cx = 32,
  cy = 32,
) {
  const point = (deg: number) => {
    const rad = (deg * Math.PI) / 180;
    return [
      +(cx + radius * Math.cos(rad)).toFixed(2),
      +(cy + radius * Math.sin(rad)).toFixed(2),
    ] as const;
  };

  const start = rotateDeg + gapDeg / 2;
  const end = rotateDeg + 360 - gapDeg / 2;
  const [x1, y1] = point(start);
  const [x2, y2] = point(end);
  const largeArc = end - start > 180 ? 1 : 0;

  return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`;
}

export default function Logo({
  className = "",
  variant = "onDark",
}: {
  className?: string;
  variant?: "onDark" | "onLight";
}) {
  const outer = variant === "onDark" ? "#F2EFE8" : "#0D0D12";

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d={arcPath(23, 62, 0)} stroke={outer} strokeWidth="5" />
      <path d={arcPath(15.5, 84, -12)} stroke="#8B6CFF" strokeWidth="5" />
      <path d={arcPath(8, 74, 6)} stroke="#FF7A59" strokeWidth="5" />
    </svg>
  );
}
