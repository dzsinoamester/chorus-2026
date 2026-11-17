import ChorusArt from "./ChorusArt";
import Logo from "./Logo";

const tracks = [
  { title: "Midnight Tram", artist: "Okra Lane", tile: "bg-coral", shape: "dot" },
  {
    title: "Slow Static",
    artist: "Juniper Kade",
    tile: "bg-bone",
    shape: "pill",
  },
  {
    title: "Tide Letters",
    artist: "Vera Noll",
    tile: "bg-brand",
    shape: "triangle",
  },
];

const chips = ["For you", "Late night", "Local", "Focus"];

function TileShape({ shape }: { shape: string }) {
  if (shape === "dot") {
    return <span className="h-4 w-4 rounded-full bg-ink" />;
  }

  if (shape === "pill") {
    return <span className="h-3 w-7 rounded-full bg-brand" />;
  }

  return (
    <span className="h-0 w-0 border-x-[9px] border-b-[16px] border-x-transparent border-b-ink" />
  );
}

export default function PhoneMock({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`select-none ${className}`}>
      <div className="rounded-[42px] bg-ink p-2 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.75)] ring-1 ring-white/10">
        <div className="relative overflow-hidden rounded-[34px] bg-ink">
          <div className="flex items-center justify-between px-6 pt-3 text-[10px] text-bone/55">
            <span className="font-medium">9:41</span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-3.5 rounded-[2px] bg-bone/40" />
              <span className="h-2 w-2.5 rounded-[2px] bg-bone/40" />
              <span className="h-2 w-2.5 rounded-[2px] bg-bone/40" />
            </span>
          </div>

          <div className="px-5 pt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Logo className="h-7 w-7" />
                <span className="font-display text-[17px] font-medium tracking-tight">
                  Chorus
                </span>
              </div>
              <span className="grid h-9 w-9 place-items-center rounded-full border border-white/8 bg-surface text-bone/75">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                >
                  <circle cx="11" cy="11" r="6.5" />
                  <path d="m16 16 4 4" strokeLinecap="round" />
                </svg>
              </span>
            </div>

            <div className="mt-4 flex gap-2 overflow-hidden">
              {chips.map((chip, index) => (
                <span
                  key={chip}
                  className={`shrink-0 rounded-full px-3.5 py-2 text-[10px] font-medium ${
                    index === 0
                      ? "bg-bone text-ink"
                      : "bg-surface text-bone/70"
                  }`}
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="relative mt-4 overflow-hidden rounded-[22px] bg-brand p-5">
              <ChorusArt
                variant="brand"
                className="absolute -right-12 -bottom-10 h-52 w-52"
              />

              <div className="relative">
                <p className="text-[9px] font-medium tracking-[0.18em] text-ink/70 uppercase">
                  Daily chorus
                </p>
                <p className="mt-2 max-w-[120px] font-display text-[21px] leading-[1.05] font-medium text-ink">
                  Late night voices
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-2 text-[10px] font-medium text-bone">
                  <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 fill-bone">
                    <path d="M2 1.2v9.6L11 6z" />
                  </svg>
                  Play
                </span>
              </div>
            </div>

            <p className="mt-5 font-display text-[15px] font-medium tracking-tight">
              Recently played
            </p>

            <div className="mt-3 space-y-3">
              {tracks.map((track) => (
                <div key={track.title} className="flex items-center gap-3">
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-[12px] ${track.tile}`}
                  >
                    <TileShape shape={track.shape} />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[12.5px] leading-tight font-semibold text-bone">
                      {track.title}
                    </p>
                    <p className="truncate text-[10.5px] leading-tight text-mist">
                      {track.artist}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <div className="mx-4 rounded-2xl border border-white/5 bg-surface p-2.5">
              <div className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-coral">
                  <span className="h-3 w-3 rounded-full bg-ink" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[11px] leading-tight font-semibold">
                    Midnight Tram
                  </p>
                  <p className="truncate text-[9.5px] leading-tight text-mist">
                    Okra Lane
                  </p>
                </div>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-bone">
                  <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 fill-ink">
                    <path d="M2 1.2v9.6L11 6z" />
                  </svg>
                </span>
              </div>
              <div className="mt-2.5 h-[3px] overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[38%] rounded-full bg-brand" />
              </div>
            </div>

            <div className="mt-2 grid grid-cols-3 border-t border-white/5 px-3 pt-2 pb-3">
              {[
                { label: "Home", active: true },
                { label: "Search", active: false },
                { label: "Library", active: false },
              ].map((tab) => (
                <div
                  key={tab.label}
                  className={`flex flex-col items-center gap-1 ${
                    tab.active ? "text-brand" : "text-mist"
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {tab.label === "Home" && (
                      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z" />
                    )}
                    {tab.label === "Search" && (
                      <>
                        <circle cx="11" cy="11" r="6.5" />
                        <path d="m16 16 4 4" />
                      </>
                    )}
                    {tab.label === "Library" && (
                      <path d="M5 5v14M10 8v11M15 6v13M20 9v10" />
                    )}
                  </svg>
                  <span className="text-[8.5px]">{tab.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
