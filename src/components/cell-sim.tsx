import { useState } from "react";
import { Cited } from "@/components/cited";
import * as Slider from "@radix-ui/react-slider";

const cations = [0, 1, 2, 3, 4, 5];
const anions = [0, 1, 2, 3, 4, 5];

function place(index: number, pole: "neg" | "pos", soc: number) {
  const mixed = 10 + ((index * 17 + (pole === "pos" ? 9 : 0)) % 78);
  const packed = pole === "neg" ? 6 + (index % 3) * 8 : 70 + (index % 3) * 8;
  return mixed + ((packed - mixed) * soc) / 100;
}

export function CellSim() {
  const [soc, setSoc] = useState(28);
  const charged = soc > 85;
  const resting = soc < 8;

  return (
    <div className="rounded-card border border-line bg-surface p-4 sm:p-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-fiber">Mechanism, not a sizing tool</p>
          <p className="mt-1 font-display text-2xl tracking-tight">Where the charge sits</p>
        </div>
        <p className="font-display text-4xl tabular-nums text-fiber">{soc}%</p>
      </div>

      <div className="mt-6 grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.5fr)_minmax(0,0.8fr)] gap-2 sm:gap-3">
        <Electrode tone="fiber" title="Negative" detail="Carbon nanosheets" />
        <div className="relative min-h-44 overflow-hidden rounded-2xl border border-line bg-paper">
          <p className="pointer-events-none absolute inset-x-0 top-2 text-center text-xs text-muted">Ionic liquid</p>
          {cations.map((index) => (
            <Ion
              key={"c" + index}
              kind="cation"
              left={place(index, "neg", soc)}
              top={22 + (index % 3) * 24}
            />
          ))}
          {anions.map((index) => (
            <Ion
              key={"a" + index}
              kind="anion"
              left={place(index, "pos", soc)}
              top={28 + (index % 3) * 24}
            />
          ))}
        </div>
        <Electrode tone="kiln" title="Positive" detail="Carbon nanosheets" />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted">
        <span className="inline-flex items-center gap-2">
          <span className="size-3 rounded-full bg-fiber" aria-hidden="true" />
          Cation. An outside source drives it toward the negative electrode while charging.
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="size-3 rounded-full bg-kiln" aria-hidden="true" />
          Anion. Charging drives it toward the positive electrode. In use, ions move back through the electrolyte. Electrons, not these ions, travel the outside wires. That ion return is discharge.
        </span>
      </div>

      <p id="soc-label" className="mt-5 text-sm font-medium">
        State of charge. Raising it is charging, and that takes an outside source. Lowering it, in a real cell, is discharge.
      </p>
      <Slider.Root
        value={[soc]}
        max={100}
        step={1}
        onValueChange={([value]) => setSoc(value ?? 0)}
        className="relative mt-2 flex h-11 w-full touch-none items-center"
        aria-labelledby="soc-label"
        aria-valuetext={
          resting ? "Discharged, ions mixed" : charged ? "Charged, ions separated" : soc + " percent charged"
        }
      >
        <Slider.Track className="relative h-1.5 grow rounded-full bg-paper-deep">
          <Slider.Range className="absolute h-full rounded-full bg-fiber" />
        </Slider.Track>
        <Slider.Thumb className="block size-6 rounded-full border-2 border-fiber bg-surface shadow-sm" />
      </Slider.Root>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
        <Cited
          text={
            resting
              ? "Discharged. The ions are mixed. If the cell just did work, they flowed back and energy came out. That flow is discharge, not a recharge."
              : charged
                ? "Charged. An outside source has separated the ions onto the two carbons. They use the carbon surface, including the walls inside the pores. They are not plated as a metal. Using the cell sends electrons through the outside wires. The ions move back through the electrolyte and the pores. That is discharge. Recharging means connecting a source again."
                : "Partway between. Charging, from an outside source, separates the ions and puts energy in. Discharge, when the cell is used, lets the ions return and energy come out. The slider does not size a pack."
          }
        />
      </p>
    </div>
  );
}

function Electrode({ tone, title, detail }: { tone: "fiber" | "kiln"; title: string; detail: string }) {
  return (
    <div className={"flex min-h-44 flex-col justify-between rounded-2xl p-3 " + (tone === "fiber" ? "pore-fiber text-fiber-ink" : "pore-kiln text-ink")}>
      <p className="font-display text-lg leading-tight sm:text-xl">{title}</p>
      <p className={"text-xs leading-snug " + (tone === "fiber" ? "text-fiber-ink/80" : "text-ink/75")}>{detail}</p>
    </div>
  );
}

function Ion({ kind, left, top }: { kind: "cation" | "anion"; left: number; top: number }) {
  return (
    <span
      aria-hidden="true"
      className={
        "ion absolute size-3.5 rounded-full " + (kind === "cation" ? "bg-fiber" : "bg-kiln")
      }
      style={{ left: left + "%", top: top + "%" }}
    />
  );
}
