"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  if (joined) {
    return (
      <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
        <p className="text-sm font-medium text-bone">You&rsquo;re on the list.</p>
        <p className="mt-1 text-sm text-bone/50">
          We&rsquo;ll email {email} when the first rooms open.
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
      <label htmlFor="waitlist-email" className="sr-only">
        Email address
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id="waitlist-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="h-11 min-w-0 flex-1 rounded-lg bg-bone px-4 text-sm text-ink placeholder:text-ink/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/25"
        />
        <button
          type="submit"
          className="h-11 shrink-0 rounded-lg bg-brand px-5 text-sm font-medium whitespace-nowrap text-ink transition-colors hover:bg-brand/90"
        >
          Join the waitlist
        </button>
      </div>
    </form>
  );
}
