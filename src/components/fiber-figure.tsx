import { useState } from "react";
import { layers, type LayerId } from "@/data/guide";
import { Cited } from "@/components/cited";

const paint: Record<LayerId, { ring: string; label: string }> = {
  s1: { ring: "text-ink", label: "S1" },
  s2: { ring: "text-fiber", label: "S2" },
  s3: { ring: "text-kiln", label: "S3" },
  lumen: { ring: "text-muted", label: "Lumen" },
};

export function FiberFigure() {
  const [active, setActive] = useState<LayerId>("s2");
  const [split, setSplit] = useState(false);
  const layer = layers.find((item) => item.id === active) ?? layers[1];

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,18rem)_1fr] lg:items-start">
      <div>
        <svg viewBox="0 0 320 320" className="mx-auto w-full max-w-xs" role="img" aria-labelledby="fiber-title">
          <title id="fiber-title">Cross-section of a hemp bast fiber, layers exaggerated</title>
          <circle cx="160" cy="160" r="148" fill="var(--color-paper-deep)" />
          <Ring id="s1" active={active} r={128} sw={22} onPick={setActive} />
          <Ring id="s2" active={active} r={92} sw={48} onPick={setActive} />
          <Ring id="s3" active={active} r={58} sw={16} onPick={setActive} />
          <circle
            cx="160"
            cy="160"
            r="46"
            fill="var(--color-paper)"
            stroke="var(--color-ink)"
            strokeWidth={active === "lumen" ? 3 : 1}
            className="cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label="Lumen, the hollow core"
            aria-pressed={active === "lumen"}
            onClick={() => setActive("lumen")}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setActive("lumen");
              }
            }}
          />
          <text x="160" y="164" textAnchor="middle" fill="var(--color-muted)" fontSize="13" className="pointer-events-none">
            lumen
          </text>
        </svg>
        <p className="mt-3 text-center text-sm text-muted">Wall thickness is exaggerated so each layer can be selected.</p>
      </div>

      <div>
        <div className="grid gap-2 sm:grid-cols-2" role="list">
          {layers.map((item) => {
            const on = item.id === active;
            return (
              <button
                key={item.id}
                type="button"
                role="listitem"
                aria-pressed={on}
                onClick={() => setActive(item.id)}
                className={
                  "min-h-11 rounded-card border px-4 py-3 text-left transition-colors " +
                  (on ? "border-fiber bg-fiber text-fiber-ink" : "border-line bg-surface text-ink hover:border-fiber")
                }
              >
                <span className="block font-medium">{item.name}</span>
                <span className={"mt-1 block text-sm " + (on ? "text-fiber-ink/80" : "text-muted")}>{item.range}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-5 rounded-card border border-line bg-surface p-5">
          <p className={"font-display text-sm italic " + paint[layer.id].ring}>{paint[layer.id].label}</p>
          <p className="mt-2 text-lg leading-relaxed">
            <Cited text={layer.body} />
          </p>
        </div>

        {active === "s2" ? (
          <div className="mt-4 rounded-card border border-line bg-surface p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-medium">S2, before and after the melt</p>
              <button
                type="button"
                aria-pressed={split}
                onClick={() => setSplit((value) => !value)}
                className="min-h-11 rounded-full border border-fiber px-4 text-sm font-medium text-fiber"
              >
                {split ? "Show the bound fibrils" : "Show the authors’ split"}
              </button>
            </div>
            <div className={"mt-5 flex flex-col " + (split ? "gap-3" : "gap-1")} aria-hidden="true">
              {["a", "b", "c", "d", "e"].map((bar) => (
                <span key={bar} className="h-2 rounded-full bg-fiber transition-all" />
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              <Cited
                text={
                  split
                    ? "The authors propose that molten KOH at 700–800°C separates loosened S2 into sheets. The measured 10–30 nm thickness is the 800°C sample, CNS-800, not every sample. That picture of how the sheets form is their explanation, not a settled fact. [1] [6]"
                    : "Their account of the hydrothermal step is that it loosens S2. The microfibrils are still a wall. [6]"
                }
              />
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function Ring({
  id,
  active,
  r,
  sw,
  onPick,
}: {
  id: LayerId;
  active: LayerId;
  r: number;
  sw: number;
  onPick: (id: LayerId) => void;
}) {
  const on = active === id;
  const stroke =
    id === "s2" ? "var(--color-fiber)" : id === "s3" ? "var(--color-kiln)" : "var(--color-ink)";
  return (
    <circle
      cx="160"
      cy="160"
      r={r}
      fill="none"
      stroke={stroke}
      strokeWidth={sw}
      opacity={on || active === "lumen" ? 1 : 0.35}
      className="cursor-pointer"
      role="button"
      tabIndex={0}
      aria-label={layers.find((item) => item.id === id)?.name}
      aria-pressed={on}
      onClick={() => onPick(id)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onPick(id);
        }
      }}
    />
  );
}
