import { sources } from "@/data/sources";

export function SourcesList() {
  return (
    <section aria-labelledby="sources-title">
      <h2 id="sources-title" className="font-display text-2xl tracking-tight">
        Sources
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
        Each number is a source that was read for the sentence it is attached to. A marker means that source
        says that part. It does not mean the source says everything else on the page.
      </p>
      <ol className="mt-6 max-w-2xl space-y-5">
        {sources.map((source) => (
          <li key={source.n} id={`source-${source.n}`} className="scroll-mt-28 text-sm leading-relaxed">
            <p className="font-medium text-ink">
              [{source.n}]{" "}
              <a className="text-fiber underline decoration-line underline-offset-4" href={source.href}>
                {source.title}
              </a>
            </p>
            <p className="mt-1 text-muted">{source.detail}</p>
            <p className="mt-2 text-muted">{source.bears}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
