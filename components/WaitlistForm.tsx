"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  if (joined) {
    return (
      <div className="rounded-2xl bg-ink/10 px-5 py-4">
        <p className="font-display text-lg text-ink">You&rsquo;re on the list.</p>
        <p className="text-sm text-ink/70">
          We&rsquo;ll email {email} when the first listening rooms open.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!email.trim()) return;
        setJoined(true);
      }}
    >
      <label
        htmlFor="waitlist-email"
        className="mb-2 block text-[11px] font-medium tracking-[0.12em] text-ink/70 uppercase"
      >
        Email address
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="waitlist-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="h-12 flex-1 rounded-full bg-bone px-5 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/40"
        />
        <button
          type="submit"
          className="h-12 shrink-0 rounded-full bg-ink px-6 text-sm font-medium text-bone transition-colors hover:bg-surface"
        >
          Join the waitlist
        </button>
      </div>
    </form>
  );
}
