import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { CellSim } from "@/components/cell-sim";
import { Cited } from "@/components/cited";
import { FiberFigure } from "@/components/fiber-figure";
import { PublishedFigures } from "@/components/published-figures";
import { ReadingCheck } from "@/components/reading-check";
import { Shell } from "@/components/shell";
import { SourcesList } from "@/components/sources-list";
import { Stations } from "@/components/stations";
import { EDITION, VOLUME_LINE } from "@/data/edition";
import { myths } from "@/data/guide";

export const Route = createFileRoute("/")({ component: Home });

const sections = [
  { href: "#fiber", label: "Fiber" },
  { href: "#process", label: "Process" },
  { href: "#cell", label: "Cell" },
  { href: "#numbers", label: "Numbers" },
  { href: "#limits", label: "Limits" },
  { href: "#check", label: "Check" },
];

function Home() {
  return (
    <Shell sections={sections}>
      <Hero />
      <Caution />
      <ChargeAndUse />
      <Section
        id="fiber"
        kicker="01 — The precursor"
        title="A hollow fiber, not a leaf."
        lede="The 2013 carbons start as bast, the long fiber in hemp bark. The authors describe a wall of three layers around an empty core, and they propose that the middle layer is what later becomes sheets. [1] [6]"
      >
        <FiberFigure />
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted">
          <Cited text="The woody hurd is not the tissue this paper used, and the paper does not prove hurd cannot make a carbon. [1] [6] Hemp in the statute is a crop, defined by THC, not a flower-power story. [4]" />
        </p>
      </Section>
      <Section
        id="process"
        kicker="02 — The laboratory path"
        title="Six stations, from stalk to stack."
        lede="Read this as a map of the paper and of the ASME account of the same lab. It is not a procedure. It has no amounts, and it has no safe home version."
      >
        <Stations />
      </Section>
      <Section
        id="cell"
        kicker="03 — Charge and discharge"
        title="Ions sit on the carbon, including inside the pores."
        lede="Charging takes an outside source and pushes the ions apart. Using the cell lets them flow back. That return is discharge. Recharging is a second visit from the outside source, not the return itself."
      >
        <CellSim />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Fact
            title="Charge"
            body="An outside source separates the ions and puts energy in. The slider moving up is that state, not a power supply."
          />
          <Fact
            title="Discharge"
            body="In use, the ions flow back through the circuit and energy comes out. That return is discharge, not a recharge."
          />
          <Fact
            title="Where they sit"
            body="On the carbon surface, including the walls inside the pores. Not plated as a metal. The paper does not say they insert into the solid."
          />
        </div>
      </Section>
      <Section
        id="numbers"
        kicker="04 — What was measured"
        title="The figures, with the basis left where the paper left it."
        lede="Wang and colleagues, ACS Nano, 2013. Ionic-liquid cells, carbon from hemp bast. ASME names the lab as University of Alberta / NINT, led by David Mitlin. [1] [3]"
      >
        <PublishedFigures />
        <div className="mt-6 max-w-xl rounded-card border border-line bg-surface p-5">
          <p className="font-display text-6xl tabular-nums tracking-tight text-fiber">12</p>
          <p className="mt-2 font-medium">Wh/kg, the assembled device</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            <Cited text="The abstract’s maximum for the assembled supercapacitor, higher than the commercial supercapacitors they compared it with. The abstract does not say which parts of the cell are inside that kilogram. This guide will not fill that in. [1] [2]" />
          </p>
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
          <Cited text="Those peaks are not one carbon. A surface area of 2,287 m²/g is the CNS-750 sample. The 10–30 nm sheets are CNS-800, which also has the highest mesopore volume in the series, about 58 percent of pore volume. Sheets made at 700°C and 750°C were thicker. Conductivity across the series is about 211–226 S/m. [1]" />
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          <Cited text="ASME also quotes about 49 kW/kg against about 17 kW/kg for commercial electrodes. Those two numbers are the magazine’s comparison. The paper’s own Ragone point used above is 20 kW/kg. [3]" />
        </p>
      </Section>
      <Section
        id="limits"
        kicker="05 — What it is not"
        title="Four claims that outran the sources."
        lede="A supercapacitor, a proposed fiber mechanism, and a magazine line about graphene are three different sentences."
      >
        <ul className="grid gap-4">
          {myths.map((item) => (
            <li key={item.claim} className="rounded-card border border-line bg-surface p-5">
              <p className="font-display text-xl tracking-tight">{item.claim}</p>
              <p className="mt-2 max-w-2xl leading-relaxed text-muted">
                <Cited text={item.fact} />
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-6 rounded-card border border-kiln/50 bg-paper p-5">
          <p className="font-medium">If you need a cell you can use</p>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            Buy a certified one. This volume does not compare the 2013 device with a lithium-ion cell, and it does
            not add later battery papers the 2013 work does not contain.
          </p>
        </div>
      </Section>
      <Section
        id="check"
        kicker="06 — Hold the distinctions"
        title="Four questions."
        lede="Precursor, hydrothermal step, the device, and what the surface area is for."
      >
        <ReadingCheck />
      </Section>
      <div className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
          <SourcesList />
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
            {VOLUME_LINE}, by {EDITION.author}. An explanation, not instructions, and not the full method. Hot
            acid under pressure, potassium hydroxide, and an 800°C furnace are how people get hurt. Do not mix
            electrolytes, and do not neutralize chemicals at home.
          </p>
        </div>
      </div>
    </Shell>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-12 md:px-8 md:pb-20 md:pt-16 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-end">
      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-fiber">{VOLUME_LINE}</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
          The electrode material starts in hemp bast fiber.
        </h1>
        <p className="mt-3 text-sm text-muted">by {EDITION.author}</p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          <Cited text="What people call a hemp battery is a laboratory supercapacitor from 2013. The electrode material is carbon made from hemp bast fiber. [1] An outside source charges the finished cell. Using it is discharge, which is not the same step." />
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
        <p className="font-medium">Not a procedure. Read Stay safe before the stations.</p>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
          Do not mix electrolytes. Do not neutralize chemicals at home. The lab path uses diluted sulfuric
          acid in a sealed autoclave, then potassium hydroxide, and a furnace near 800°C. Drain cleaner, a
          pressure cooker, and a kiln are not stand-ins. If you need a cell, buy one that was certified.
        </p>
      </div>
    </aside>
  );
}

function ChargeAndUse() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16" aria-labelledby="charge-title">
      <p className="font-display text-sm italic text-fiber">Before the steps</p>
      <h2 id="charge-title" className="mt-3 max-w-3xl font-display text-4xl tracking-tight md:text-5xl">
        Charge, discharge, and recharge are three words.
      </h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <Fact
          title="Charge"
          body="An outside power source forces the ions apart and stores energy in the cell."
        />
        <Fact
          title="Discharge"
          body="The cell is in use. The ions flow back through the circuit, and energy comes out. That is discharge, not a recharge."
        />
        <Fact
          title="Recharge"
          body="Only after discharge. You connect an outside source again and put the energy back. The ions returning during use are not that."
        />
      </div>
    </section>
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
    <section id={id} className="scroll-mt-28 border-t border-line py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="font-display text-sm italic text-fiber">{kicker}</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl tracking-tight md:text-5xl">{title}</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          <Cited text={lede} />
        </p>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Fact({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-card border border-line bg-surface p-5">
      <p className="font-medium">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        <Cited text={body} />
      </p>
    </div>
  );
}
