import type { ReactNode } from "react";
import { DISPLAY_TITLE, EDITION, VOLUME_LINE } from "@/data/edition";

const pages = [
  { href: "/start", label: "Start here" },
  { href: "/safe", label: "Stay safe" },
  { href: "/", label: "Guide" },
  { href: "/glossary", label: "Glossary" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/privacy", label: "Privacy" },
];

export function Shell({
  children,
  sections,
}: {
  children: ReactNode;
  sections?: { href: string; label: string }[];
}) {
  return (
    <div className="min-h-screen">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-fiber focus:px-4 focus:py-2 focus:text-fiber-ink"
      >
        Skip to the guide
      </a>
      <header className="sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 md:px-8">
          <a href="/" className="min-w-0">
            <span className="block font-display text-xl leading-none tracking-tight">{DISPLAY_TITLE}</span>
            <span className="block truncate text-xs text-muted">{EDITION.seriesShort}</span>
          </a>
          <nav aria-label="Series pages" className="flex min-w-0 gap-1 overflow-x-auto">
            {pages.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex min-h-11 items-center px-2.5 text-sm text-muted hover:text-ink sm:px-3"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        {sections ? (
          <nav aria-label="Guide sections" className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-3 pb-2 md:px-6">
            {sections.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex min-h-11 items-center px-2.5 text-sm text-fiber"
              >
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}
      </header>
      <main id="content">{children}</main>
      <footer className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-8 text-sm leading-relaxed text-muted md:px-8">
          <p>{VOLUME_LINE}</p>
          <p className="mt-1">by {EDITION.author}</p>
          <p className="mt-3">
            <a className="text-fiber underline decoration-line underline-offset-4" href="/privacy">
              Privacy
            </a>
            <span aria-hidden="true"> · </span>
            <a className="text-fiber underline decoration-line underline-offset-4" href="/disclaimer">
              Disclaimer
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export function Page({ kicker, title, lede, children }: { kicker: string; title: string; lede: string; children: ReactNode }) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
      <p className="text-xs font-medium uppercase tracking-widest text-fiber">{kicker}</p>
      <h1 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">{title}</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">{lede}</p>
      <div className="mt-8 space-y-4 text-base leading-relaxed">{children}</div>
    </article>
  );
}
