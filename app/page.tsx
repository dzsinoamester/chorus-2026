import ChorusArt from "@/components/ChorusArt";
import Logo from "@/components/Logo";
import WaitlistForm from "@/components/WaitlistForm";

const PLUS_PRICE = "$6.99";

const features = [
  {
    title: "Discovery with taste",
    body: "Human curators and community playlists sit next to the algorithm, so your recommendations stop going in circles.",
    tone: "text-brand bg-brand/12",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="2.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Fairer pay for artists",
    body: "A bigger share of every stream goes to the people who made the music, with clear reports on where it came from.",
    tone: "text-coral bg-coral/12",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.2v9.6" />
        <path d="M14.6 9.4c0-1-1.1-1.6-2.6-1.6s-2.5.7-2.5 1.8c0 1.4 1.3 1.7 2.5 2s2.6.7 2.6 2.1c0 1.2-1.1 1.9-2.6 1.9s-2.6-.7-2.6-1.8" />
      </svg>
    ),
  },
  {
    title: "Sound and credits done right",
    body: "Lossless audio, and every writer, producer and player listed on every track.",
    tone: "text-mist bg-mist/12",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <path d="M3.5 10v4M7.5 7v10M11.5 9.5v5M15.5 6v12M19.5 9.5v5" />
      </svg>
    ),
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

const plans = [
  {
    name: "Free",
    price: "Free",
    caption: null,
    features: [
      "Listening with ads",
      "Daily picks and community playlists",
      "Standard audio quality",
    ],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Chorus Plus",
    price: PLUS_PRICE,
    caption: "/month",
    features: ["Lossless audio", "No ads", "Offline listening"],
    cta: "Get Chorus Plus",
    featured: true,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="sticky top-0 z-40 border-b border-white/5 bg-ink/85 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <Logo className="h-9 w-9" />
            <span className="font-display text-2xl font-medium tracking-tight">
              Chorus
            </span>
          </a>

          <nav className="hidden items-center gap-10 text-sm text-bone/75 md:flex">
            <a className="transition-colors hover:text-bone" href="#discover">
              Discover
            </a>
            <a className="transition-colors hover:text-bone" href="#artists">
              Artists
            </a>
            <a className="transition-colors hover:text-bone" href="#plans">
              Plans
            </a>
          </nav>

          <a
            href="#waitlist"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-brand/90"
          >
            Get Chorus
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center rounded-full border border-brand/40 px-3 py-1 text-[11px] font-medium tracking-[0.08em] text-brand">
                Early access
              </span>
              <h1 className="mt-6 font-display text-[clamp(3.4rem,8vw,6.2rem)] leading-[0.92] font-medium tracking-[-0.04em]">
                Hear
                <br />
                everyone.
              </h1>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-mist">
                A music platform that helps you find voices you would have
                missed, and pays the people who make them a fairer share.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#waitlist"
                  className="rounded-full bg-brand px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-brand/90"
                >
                  Start listening
                </a>
                <a
                  href="#artists"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-bone transition-colors hover:bg-white/5"
                >
                  For artists
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[5/4] overflow-hidden rounded-[28px] border border-white/10">
                <ChorusArt variant="ink" className="h-full w-full" />
                <div className="absolute inset-x-5 bottom-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-ink/85 p-2.5 pr-4 backdrop-blur">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-coral">
                    <span className="h-4 w-4 rounded-full bg-ink" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-medium tracking-[0.16em] text-mist uppercase">
                      Now playing
                    </p>
                    <p className="truncate text-sm font-medium">Midnight Tram</p>
                    <p className="truncate text-xs text-mist">Okra Lane</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Chorus */}
        <section id="discover" className="scroll-mt-24 border-t border-white/5">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="text-[11px] font-medium tracking-[0.18em] text-coral uppercase">
              Why Chorus
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-4xl leading-[1.05] font-medium tracking-[-0.03em] md:text-5xl">
              Built for people who actually love music.
            </h2>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-3xl border border-white/5 bg-surface p-7"
                >
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-xl ${feature.tone}`}
                  >
                    <span className="h-5 w-5">{feature.icon}</span>
                  </span>
                  <h3 className="mt-6 font-display text-xl font-medium tracking-[-0.01em]">
                    {feature.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-mist">
                    {feature.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* For artists */}
        <section
          id="artists"
          className="scroll-mt-24 border-t border-white/5 bg-surface/40"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-[11px] font-medium tracking-[0.18em] text-coral uppercase">
                For artists
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] font-medium tracking-[-0.03em] md:text-5xl">
                Get paid for being
                <br className="hidden sm:block" /> heard.
              </h2>

              <dl className="mt-10">
                {artistPoints.map((point) => (
                  <div
                    key={point.title}
                    className="border-t border-white/10 py-5 first:border-t-0 first:pt-0"
                  >
                    <dt className="font-display text-lg font-medium">
                      {point.title}
                    </dt>
                    <dd className="mt-1 text-sm text-mist">{point.body}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative aspect-[5/4] overflow-hidden rounded-[28px]">
              <ChorusArt variant="brand" className="h-full w-full" />

              <span className="absolute top-6 left-6 rounded-full bg-ink px-3.5 py-1.5 text-[11px] font-medium text-bone">
                artist page
              </span>

              <div className="absolute right-6 bottom-6 flex items-center gap-3 rounded-xl bg-bone p-2 pr-4">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-coral">
                  <span className="h-4 w-4 rounded-full bg-ink" />
                </span>
                <div>
                  <p className="text-sm leading-tight font-semibold text-ink">
                    Okra Lane
                  </p>
                  <p className="text-xs leading-tight text-ink/55">
                    Wherever we fall
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plans */}
        <section id="plans" className="scroll-mt-24 border-t border-white/5">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="text-center text-[11px] font-medium tracking-[0.18em] text-mist uppercase">
              Plans
            </p>
            <h2 className="mx-auto mt-5 max-w-2xl text-center font-display text-4xl leading-[1.05] font-medium tracking-[-0.03em] md:text-5xl">
              Start free. Go further when you want.
            </h2>

            <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex flex-col rounded-3xl p-7 ${
                    plan.featured
                      ? "border border-brand/60 bg-surface"
                      : "border border-white/10 bg-surface/60"
                  }`}
                >
                  <p
                    className={`text-sm ${
                      plan.featured ? "text-brand" : "text-mist"
                    }`}
                  >
                    {plan.name}
                  </p>
                  <p className="mt-3 flex items-baseline gap-1.5 font-display text-4xl font-medium tracking-[-0.02em]">
                    {plan.price}
                    {plan.caption && (
                      <span className="font-sans text-sm font-normal text-mist">
                        {plan.caption}
                      </span>
                    )}
                  </p>

                  <ul className="mt-7 flex-1 space-y-3">
                    {plan.features.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-bone/80"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            plan.featured ? "text-brand" : "text-mist"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4.5 12.5l4.5 4.5L19.5 6.5" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#waitlist"
                    className={`mt-8 rounded-xl py-3 text-center text-sm font-medium transition-colors ${
                      plan.featured
                        ? "bg-brand text-ink hover:bg-brand/90"
                        : "border border-white/15 text-bone hover:bg-white/5"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Waitlist */}
        <section id="waitlist" className="scroll-mt-24 px-6 pb-20 md:pb-28">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-brand px-8 py-12 md:px-14 md:py-16">
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
              <div>
                <h2 className="font-display text-4xl leading-[1.02] font-medium tracking-[-0.03em] text-ink md:text-5xl">
                  Every voice. One sound.
                </h2>
                <p className="mt-4 text-ink/70">
                  Join the waitlist and be the first to listen.
                </p>
              </div>
              <WaitlistForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="h-8 w-8" />
              <span className="font-display text-xl font-medium tracking-tight">
                Chorus
              </span>
            </div>
            <p className="mt-3 text-sm text-mist">Music with every voice in it.</p>
            <p className="mt-6 text-xs text-mist/70">© 2026 Chorus</p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-mist">
            <a className="transition-colors hover:text-bone" href="#discover">
              Discover
            </a>
            <a className="transition-colors hover:text-bone" href="#artists">
              Artists
            </a>
            <a className="transition-colors hover:text-bone" href="#plans">
              Plans
            </a>
            <a className="transition-colors hover:text-bone" href="#waitlist">
              Privacy
            </a>
            <a className="transition-colors hover:text-bone" href="#waitlist">
              Terms
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
