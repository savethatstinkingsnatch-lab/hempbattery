import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { CellSim } from "@/components/cell-sim";
import { FiberFigure } from "@/components/fiber-figure";
import { PublishedFigures } from "@/components/published-figures";
import { ReadingCheck } from "@/components/reading-check";
import { Stations } from "@/components/stations";
import { myths } from "@/data/guide";

export const Route = createFileRoute("/")({ component: Home });

const nav = [
  { href: "#fiber", label: "Fiber" },
  { href: "#process", label: "Process" },
  { href: "#cell", label: "Cell" },
  { href: "#numbers", label: "Numbers" },
  { href: "#limits", label: "Limits" },
  { href: "#check", label: "Check" },
];

function Home() {
  return (
    <div className="min-h-screen">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-fiber focus:px-4 focus:py-2 focus:text-fiber-ink"
      >
        Skip to the guide
      </a>
      <SiteHeader />
      <main id="content">
        <Hero />
        <Caution />
        <Devices />
        <Section
          id="fiber"
          kicker="01 — The precursor"
          title="A hollow fiber, not a leaf."
          lede="The carbon in this cell starts as bast, the long fiber in hemp bark. Its wall is three layers around an empty core. The process is a way of peeling the middle layer into sheets."
        >
          <FiberFigure />
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted">
            Hemp here means industrial fiber hemp. The flowers are not an electrode. The woody hurd inside the
            stalk can be turned into charcoal, but it does not have this layered wall, so it does not become
            these nanosheets.
          </p>
        </Section>
        <Section
          id="process"
          kicker="02 — The laboratory path"
          title="Six stations, from stalk to stack."
          lede="This is how the 2013 cell was made: hydrothermal carbonization, then potassium hydroxide at furnace temperature, then a washed carbon powder built into a supercapacitor. Read it as a map of the paper. It is not a procedure, and it has no safe home version."
        >
          <Stations />
        </Section>
        <Section
          id="cell"
          kicker="03 — How it charges"
          title="Ions park on the carbon. They do not go inside it."
          lede="A supercapacitor is rechargeable because the ions can be sent back. Drag the charge and watch them separate. That separation, spread over thousands of square meters of pore wall in a single gram, is the stored energy."
        >
          <CellSim />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Fact
              title="Recharge"
              body="Reverse the current and the ions drift back into the liquid. You are not regenerating a chemical fuel."
            />
            <Fact
              title="Speed"
              body="Nothing has to squeeze into a crystal lattice, so the cell can take and give current that would stress a lithium-ion electrode."
            />
            <Fact
              title="The limit"
              body="Surface storage holds less energy per kilogram than insertion chemistry. That is the trade the paper actually made."
            />
          </div>
        </Section>
        <Section
          id="numbers"
          kicker="04 — What was measured"
          title="The figures people round off."
          lede="Wang, Mitlin, and colleagues, ACS Nano, 2013. Ionic-liquid cells, carbon from hemp bast. The bars below are the paper’s points, not a projection of a product you could buy."
        >
          <PublishedFigures />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-card border border-line bg-surface p-5">
              <p className="font-display text-6xl tabular-nums tracking-tight text-fiber">12</p>
              <p className="mt-2 font-medium">Wh/kg, the full device</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Maximum energy density of the assembled supercapacitor. Higher than commercial supercapacitors
                they compared against in 2013. This is the honest “battery” number.
              </p>
            </div>
            <div className="rounded-card border border-line bg-surface p-5">
              <p className="font-display text-6xl tabular-nums tracking-tight">150–250</p>
              <p className="mt-2 font-medium">Wh/kg, a modern lithium-ion cell</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                A typical range, for scale only — not a result from this paper. Hemp carbon did not catch a
                lithium-ion cell on energy. It was never trying to be one.
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
            Power is the other half. At 20 kW per kilogram of active material the electrode still held 19, 34,
            and 40 Wh/kg at 20°C, 60°C, and 100°C. A 2013 ASME account of the same work quotes about 49 kW/kg
            against about 17 kW/kg for commercial electrodes. Those are press figures; the paper’s Ragone point
            used here is 20 kW/kg. Conductivity of the sheets was about 211–226 S/m.
          </p>
        </Section>
        <Section
          id="limits"
          kicker="05 — What it is not"
          title="Four claims that outran the paper."
          lede="The popular version collapsed a supercapacitor, a biomass precursor, and a lithium battery into one story. These are the seams."
        >
          <ul className="grid gap-4">
            {myths.map((item) => (
              <li key={item.claim} className="rounded-card border border-line bg-surface p-5">
                <p className="font-display text-xl tracking-tight">{item.claim}</p>
                <p className="mt-2 max-w-2xl leading-relaxed text-muted">{item.fact}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-card border border-kiln/50 bg-paper p-5">
            <p className="font-medium">If you need a rechargeable battery</p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
              Buy a certified cell. Hemp-derived hard carbon has been studied separately as an anode, including
              in sodium-ion work, where ions do insert into the carbon. That is a different experiment, with
              different electrolytes and different ways to fail. It is not this guide, and it is not a weekend
              build either.
            </p>
          </div>
        </Section>
        <Section
          id="check"
          kicker="06 — Hold the distinctions"
          title="Four questions. No scoreboard beyond the page."
          lede="They ask whether the precursor, the hydrothermal step, the device, and the surface area stayed separate in your head."
        >
          <ReadingCheck />
        </Section>
        <footer className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
            <p className="font-display text-2xl tracking-tight">Sources</p>
            <ul className="mt-4 max-w-2xl space-y-3 text-sm leading-relaxed text-muted">
              <li>
                Wang et al., “Interconnected carbon nanosheets derived from hemp for ultrafast supercapacitors
                with high energy,”{" "}
                <a className="text-fiber underline decoration-line underline-offset-4" href="https://doi.org/10.1021/nn400731g">
                  ACS Nano 2013, 7, 5131–5141
                </a>
                . The temperatures, the nanosheet thickness, the surface area, the capacitance, and the device
                energy on this page come from that paper.
              </li>
              <li>
                ASME,{" "}
                <a
                  className="text-fiber underline decoration-line underline-offset-4"
                  href="https://www.asme.org/topics-resources/content/hemp-carbon-makes-supercapacitors-superfast"
                >
                  “Hemp Carbon Makes Supercapacitors Superfast”
                </a>
                , a popular account of the same work. The 49 kW/kg comparison is theirs, and it is labeled as
                such above.
              </li>
            </ul>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
              Bast is an explanation. It is not instructions, not engineering advice, and not a claim that a
              cell built outside that lab will match these figures. Potassium hydroxide, pressurized hot water,
              and an 800°C furnace are how people get hurt.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <a href="#content" className="flex items-baseline gap-2">
          <span className="font-display text-xl tracking-tight">Volume 30: Hemp Batteries</span>
          <span className="hidden text-sm text-muted sm:inline">The Education Revolution</span>
        </a>
        <nav aria-label="Guide" className="flex min-w-0 gap-1 overflow-x-auto">
          {nav.map((item) => (
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
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-12 md:px-8 md:pb-20 md:pt-16 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-end">
      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-fiber">
          Hemp bast carbon · a rechargeable cell
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
          The charge lives in the stalk’s fiber.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          What people call a hemp battery is a laboratory supercapacitor. Its electrodes are carbon sheets,
          ten to thirty nanometers thick, split out of bast fiber. It recharges. It is not a lithium-ion cell,
          and it is not something you cook.
        </p>
      </div>
      <FiberMark />
    </section>
  );
}

function FiberMark() {
  return (
    <svg viewBox="0 0 200 200" className="mx-auto w-40 lg:w-full" aria-hidden="true">
      <circle cx="100" cy="100" r="92" fill="none" stroke="var(--color-line)" strokeWidth="10" />
      <circle cx="100" cy="100" r="64" fill="none" stroke="var(--color-fiber)" strokeWidth="18" />
      <circle cx="100" cy="100" r="36" fill="none" stroke="var(--color-kiln)" strokeWidth="6" />
      <circle cx="100" cy="100" r="22" fill="var(--color-paper-deep)" />
    </svg>
  );
}

function Caution() {
  return (
    <aside className="border-y border-kiln/40 bg-kiln/10">
      <div className="mx-auto max-w-6xl px-5 py-5 md:px-8">
        <p className="font-medium">Not a procedure. A reading of a lab paper.</p>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
          Reproducing it takes a hydrothermal autoclave, molten potassium hydroxide, and a furnace near 800°C.
          Those injure people. Drain cleaner, a pressure cooker, and a kiln are not stand-ins. If you want a
          rechargeable battery, buy one that was certified. Use this page to understand the one that was
          published.
        </p>
      </div>
    </aside>
  );
}

function Devices() {
  const [mode, setMode] = useState<"capacitor" | "battery">("capacitor");
  const capacitor = mode === "capacitor";
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16" aria-labelledby="devices-title">
      <p className="font-display text-sm italic text-fiber">Before the steps</p>
      <h2 id="devices-title" className="mt-3 max-w-3xl font-display text-4xl tracking-tight md:text-5xl">
        Two devices share one plant, and almost nothing else.
      </h2>
      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Device type">
        <ModeButton on={capacitor} onClick={() => setMode("capacitor")}>
          Supercapacitor
        </ModeButton>
        <ModeButton on={!capacitor} onClick={() => setMode("battery")}>
          Battery
        </ModeButton>
      </div>
      <div className="mt-4 rounded-card border border-line bg-surface p-5 md:p-8">
        {capacitor ? (
          <>
            <p className="text-xs font-medium uppercase tracking-wider text-kiln">This guide</p>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed">
              The 2013 device stores charge by parking ions on carbon. Both electrodes are the same hemp-derived
              sheets. The electrolyte in the headline results is an ionic liquid, so the cell still works from
              about freezing to 100°C. It is rechargeable in the plain sense: reverse the current, the ions go
              home.
            </p>
          </>
        ) : (
          <>
            <p className="text-xs font-medium uppercase tracking-wider text-kiln">A different literature</p>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed">
              A battery stores charge by moving ions into a host material. Researchers have since carbonized
              hemp into hard carbon and tested it as an anode, including for sodium-ion cells. That chemistry
              can hold more energy, and it can fail in the ways batteries fail — heat, flammable solvent,
              plating. It is not what Wang and Mitlin assembled, and this page will not walk through it.
            </p>
          </>
        )}
      </div>
    </section>
  );
}

function ModeButton({ on, onClick, children }: { on: boolean; onClick: () => void; children: string }) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={
        "min-h-11 rounded-full px-5 text-sm font-medium " +
        (on ? "bg-fiber text-fiber-ink" : "border border-line bg-surface text-ink")
      }
    >
      {children}
    </button>
  );
}

function Section({
  id,
  kicker,
  title,
  lede,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  lede: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-line py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="font-display text-sm italic text-fiber">{kicker}</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl tracking-tight md:text-5xl">{title}</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{lede}</p>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Fact({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-card border border-line bg-surface p-5">
      <p className="font-medium">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
    </div>
  );
}
