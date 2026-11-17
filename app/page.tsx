import ChorusArt from "@/components/ChorusArt";
import Logo from "@/components/Logo";
import PhoneMock from "@/components/PhoneMock";
import Reveal from "@/components/Reveal";
import WaitlistForm from "@/components/WaitlistForm";

const PLUS_PRICE = "$6.99";

const navLinks = [
  { label: "Discover", href: "#discover" },
  { label: "Artists", href: "#artists" },
  { label: "Plans", href: "#plans" },
];

const reasons = [
  {
    title: "Discovery with taste",
    body: "Human curators and community playlists sit next to the algorithm, so your recommendations stop going in circles.",
    meta: "Curators · Community · Editorial",
  },
  {
    title: "Fairer pay for artists",
    body: "A bigger share of every stream goes to the people who made the music, with clear reports on where it came from.",
    meta: "Direct payouts · Clear reports",
  },
  {
    title: "Sound and credits done right",
    body: "Lossless audio, and every writer, producer and player listed on every track.",
    meta: "Lossless · Full credits",
  },
];

const artistPoints = [
  {
    title: "Direct payouts",
    body: "A bigger share of every stream goes straight to you.",
  },
  {
    title: "Your own page",
    body: "Tell your story, list your credits, link your shows.",
  },
  {
    title: "Full credits",
    body: "Everyone who worked on a track is listed and recognized.",
  },
];

const tracks = [
  { title: "Wherever we fall", time: "3:42" },
  { title: "Slow Static", time: "4:05" },
  { title: "Tide Letters", time: "2:58" },
];

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12.5l4.5 4.5L19 6.5" />
    </svg>
  );
}

function Label({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-[11px] font-medium tracking-[0.14em] uppercase ${className}`}
    >
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <div className="bg-ink text-bone">
      <Reveal />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink">
        <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <Logo className="h-8 w-8" />
            <span className="font-display text-[17px] font-medium tracking-[-0.01em]">
              Chorus
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] text-bone/50 transition-colors hover:text-bone"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#waitlist"
            className="rounded-full bg-bone px-4 py-2 text-[13px] font-medium text-ink transition-colors hover:bg-white"
          >
            Get Chorus
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-0 hidden w-[46%] overflow-hidden bg-brand lg:block"
          >
            <div className="absolute inset-[-35%] animate-orbit">
              <ChorusArt variant="brand" className="h-full w-full" />
            </div>
          </div>

          <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-10 px-6 pt-14 lg:grid-cols-12 lg:gap-8 lg:py-24">
            <div className="lg:col-span-6">
              <Label className="text-mist">Early access · 2026</Label>

              <h1 className="mt-6 font-display text-[clamp(3.4rem,8.4vw,7rem)] leading-[0.86] font-medium tracking-[-0.05em]">
                Hear
                <br />
                <span className="text-brand">everyone.</span>
              </h1>

              <p className="mt-7 max-w-sm text-[15px] leading-relaxed text-bone/55">
                A music platform that helps you find voices you would have
                missed, and pays the people who make them a fairer share.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a
                  href="#waitlist"
                  className="rounded-full bg-bone px-5 py-2.5 text-[13px] font-medium text-ink transition-colors hover:bg-white"
                >
                  Start listening
                </a>
                <a
                  href="#artists"
                  className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-bone/70 transition-colors hover:text-bone"
                >
                  For artists
                  <Arrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>

              <p className="mt-6 text-[12px] text-bone/30">
                Free to start. No card needed.
              </p>
            </div>

            <div className="relative lg:col-span-5 lg:col-start-8 lg:justify-self-end">
              <div className="relative -mx-6 overflow-hidden bg-brand px-6 pt-10 pb-12 lg:mx-0 lg:overflow-visible lg:bg-transparent lg:p-0">
                <div
                  aria-hidden="true"
                  className="absolute inset-[-30%] animate-orbit lg:hidden"
                >
                  <ChorusArt variant="brand" className="h-full w-full" />
                </div>
                <div className="relative flex justify-center">
                  <PhoneMock className="w-[280px] sm:w-[300px]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="border-b border-white/10">
          <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-y-3 px-6 py-4 text-[11px] tracking-[0.12em] text-mist uppercase md:grid-cols-4">
            <span>Lossless audio</span>
            <span>Direct payouts</span>
            <span>Full credits</span>
            <span className="hidden md:block md:text-right">
              Every voice. One sound.
            </span>
          </div>
        </div>

        {/* Why Chorus */}
        <section id="discover" className="scroll-mt-20 border-b border-white/10">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-6 py-20 md:py-28 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-24">
                <Label className="text-mist">Why Chorus</Label>
                <h2 className="mt-5 font-display text-[clamp(2.4rem,4.6vw,3.8rem)] leading-[0.98] font-medium tracking-[-0.045em]">
                  Built for people who actually love music.
                </h2>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="border-t border-white/10">
                {reasons.map((reason, index) => (
                  <div
                    key={reason.title}
                    data-reveal
                    style={
                      {
                        "--reveal-delay": `${index * 70}ms`,
                      } as React.CSSProperties
                    }
                    className="grid gap-3 border-b border-white/10 py-8 transition-colors hover:bg-white/[0.02] sm:grid-cols-[3rem_1fr] sm:-mx-4 sm:px-4"
                  >
                    <span className="text-[12px] tabular-nums text-bone/25">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-medium tracking-[-0.02em]">
                        {reason.title}
                      </h3>
                      <p className="mt-2 max-w-lg text-sm leading-relaxed text-bone/50">
                        {reason.body}
                      </p>
                      <p className="mt-3 text-[11px] tracking-[0.1em] text-bone/25 uppercase">
                        {reason.meta}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* For artists */}
        <section
          id="artists"
          className="scroll-mt-20 bg-brand text-ink"
        >
          <div className="mx-auto grid max-w-[1240px] gap-14 px-6 py-20 md:py-28 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <Label className="text-ink/50">For artists</Label>
              <h2 className="mt-5 font-display text-[clamp(2.4rem,5vw,4.2rem)] leading-[0.95] font-medium tracking-[-0.045em] text-ink">
                Get paid for being heard.
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/60">
                Keep the people who made the record in the picture — from the
                first stream to the last credit.
              </p>

              <div className="mt-10 border-t border-ink/25">
                {artistPoints.map((point) => (
                  <div
                    key={point.title}
                    className="border-b border-ink/15 py-5"
                  >
                    <h3 className="font-display text-lg font-medium tracking-[-0.015em] text-ink">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-ink/60">{point.body}</p>
                  </div>
                ))}
              </div>

              <a
                href="#waitlist"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-bone transition-colors hover:bg-surface"
              >
                Open an artist page
                <Arrow className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <div className="rounded-xl bg-ink p-5 text-bone ring-1 ring-black/20">
                <div className="flex items-center gap-3.5">
                  <span className="h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-coral">
                    <ChorusArt variant="coral" className="h-full w-full" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] tracking-[0.12em] text-bone/35 uppercase">
                      Artist page
                    </p>
                    <p className="mt-0.5 font-display text-[17px] font-medium">
                      Okra Lane
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-bone px-3.5 py-1.5 text-[11px] font-medium text-ink">
                    Follow
                  </span>
                </div>

                <div className="mt-5 border-t border-white/10 pt-2">
                  {tracks.map((track, index) => (
                    <div
                      key={track.title}
                      className="flex items-center gap-3 py-2.5"
                    >
                      <span className="w-4 text-[11px] tabular-nums text-bone/25">
                        {index + 1}
                      </span>
                      <span className="flex-1 truncate text-[13px] text-bone/85">
                        {track.title}
                      </span>
                      <span className="text-[11px] tabular-nums text-bone/25">
                        {track.time}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-bone/35">
                  <span>Wherever we fall — EP</span>
                  <span>Okra Lane</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plans */}
        <section id="plans" className="scroll-mt-20 border-b border-white/10">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-6 py-20 md:py-28 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-24">
                <Label className="text-mist">Plans</Label>
                <h2 className="mt-5 font-display text-[clamp(2.4rem,4.6vw,3.8rem)] leading-[0.98] font-medium tracking-[-0.045em]">
                  Start free. Go further when you want.
                </h2>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-2 sm:gap-0 sm:border-t-0 sm:pt-0">
                <div data-reveal className="sm:pr-10">
                  <Label className="text-mist">Free</Label>
                  <p className="mt-4 font-display text-[2.6rem] leading-none font-medium tracking-[-0.04em]">
                    $0
                  </p>
                  <ul className="mt-7 space-y-2.5 text-sm text-bone/55">
                    {[
                      "Listening with ads",
                      "Daily picks and community playlists",
                      "Standard audio quality",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-bone/20" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#waitlist"
                    className="mt-8 block rounded-full border border-white/20 py-2.5 text-center text-[13px] font-medium text-bone/80 transition-colors hover:border-white/45 hover:text-bone"
                  >
                    Start free
                  </a>
                </div>

                <div
                  data-reveal
                  style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
                  className="border-t border-white/10 pt-10 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-10"
                >
                  <Label className="text-brand">Chorus Plus</Label>
                  <p className="mt-4 flex items-baseline gap-1.5 font-display text-[2.6rem] leading-none font-medium tracking-[-0.04em]">
                    {PLUS_PRICE}
                    <span className="font-sans text-sm font-normal tracking-normal text-bone/40">
                      /month
                    </span>
                  </p>
                  <ul className="mt-7 space-y-2.5 text-sm text-bone/55">
                    {["Lossless audio", "No ads", "Offline listening"].map(
                      (item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                          {item}
                        </li>
                      ),
                    )}
                  </ul>
                  <a
                    href="#waitlist"
                    className="mt-8 block rounded-full bg-brand py-2.5 text-center text-[13px] font-medium text-ink transition-colors hover:bg-brand/90"
                  >
                    Get Chorus Plus
                  </a>
                </div>
              </div>

              <p className="mt-8 text-[11px] tracking-[0.1em] text-bone/25 uppercase">
                Prices in USD · cancel anytime
              </p>
            </div>
          </div>
        </section>

        {/* Waitlist */}
        <section id="waitlist" className="scroll-mt-20">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-6 py-20 md:py-28 lg:grid-cols-12 lg:items-end">
            <div data-reveal className="lg:col-span-7">
              <Label className="text-mist">Early access</Label>
              <h2 className="mt-6 font-display text-[clamp(3rem,7.2vw,6rem)] leading-[0.88] font-medium tracking-[-0.05em]">
                Every voice.
                <br />
                <span className="text-brand">One sound.</span>
              </h2>
            </div>

            <div
              data-reveal
              style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
              className="lg:col-span-4 lg:col-start-9"
            >
              <p className="text-sm leading-relaxed text-bone/50">
                Join the waitlist and be the first to listen.
              </p>
              <div className="mt-6">
                <WaitlistForm />
              </div>
              <p className="mt-3 text-[11px] text-bone/30">
                One email at launch. No playlists in your inbox.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-[1240px] px-6 py-12">
          <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-3">
              <Logo className="h-8 w-8" />
              <div>
                <p className="font-display text-[17px] font-medium tracking-[-0.01em]">
                  Chorus
                </p>
                <p className="mt-1 text-[13px] text-bone/40">
                  Music with every voice in it.
                </p>
              </div>
            </div>

            <nav className="flex flex-wrap gap-x-10 gap-y-3 text-[13px] text-bone/50">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-bone"
                >
                  {link.label}
                </a>
              ))}
              <a href="#waitlist" className="transition-colors hover:text-bone">
                Privacy
              </a>
              <a href="#waitlist" className="transition-colors hover:text-bone">
                Terms
              </a>
            </nav>
          </div>

          <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-5 text-[11px] tracking-[0.1em] text-bone/30 uppercase sm:flex-row sm:justify-between">
            <span>© 2026 Chorus</span>
            <span>Every voice. One sound.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
