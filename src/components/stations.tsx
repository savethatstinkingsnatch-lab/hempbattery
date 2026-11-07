import { useState } from "react";
import { stations } from "@/data/guide";
import { Cited } from "@/components/cited";
import { useSeen } from "@/lib/memory";

export function Stations() {
  const [open, setOpen] = useState<string>("bast");
  const { seen, mark } = useSeen("bast-stations");

  function toggle(id: string) {
    setOpen((current) => (current === id ? "" : id));
    mark(id);
  }

  return (
    <div>
      <p className="mb-6 text-sm text-muted tabular-nums" aria-live="polite">
        {seen.length} of {stations.length} stations opened on this browser. Opening one does not mean performing it.
      </p>
      <ol className="flex flex-col">
        {stations.map((station, index) => {
          const expanded = open === station.id;
          const last = index === stations.length - 1;
          return (
            <li key={station.id} className="grid grid-cols-[3rem_1fr] gap-3 sm:grid-cols-[3.5rem_1fr] sm:gap-5">
              <div className="flex flex-col items-center">
                <span
                  className={
                    "flex size-11 shrink-0 items-center justify-center rounded-full border font-display text-sm " +
                    (expanded ? "border-fiber bg-fiber text-fiber-ink" : "border-line bg-surface text-ink")
                  }
                  aria-hidden="true"
                >
                  {station.n}
                </span>
                {last ? null : <span className="w-px flex-1 bg-line" />}
              </div>
              <div className={last ? "" : "pb-6"}>
                <button
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => toggle(station.id)}
                  className="w-full rounded-card border border-line bg-surface px-4 py-4 text-left hover:border-fiber sm:px-5"
                >
                  <span className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="font-display text-2xl tracking-tight">{station.title}</span>
                    <span className="text-xs font-medium uppercase tracking-wider text-kiln">{station.hazard}</span>
                  </span>
                  <span className="mt-2 block text-base leading-relaxed text-muted">{station.summary}</span>
                </button>
                {expanded ? (
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <Note kicker="What changes" body={station.changes} />
                    <Note kicker="Reported conditions" body={station.conditions} />
                    <Note kicker="Equipment class" body={station.equipment} />
                    <Note kicker="Why this stays in a lab" body={station.notHome} />
                  </div>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function Note({ kicker, body }: { kicker: string; body: string }) {
  return (
    <div className="rounded-card border border-line bg-paper px-4 py-4">
      <p className="text-xs font-medium uppercase tracking-wider text-fiber">{kicker}</p>
      <p className="mt-2 text-sm leading-relaxed">
        <Cited text={body} />
      </p>
    </div>
  );
}
