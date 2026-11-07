import { createFileRoute } from "@tanstack/react-router";
import { Cited } from "@/components/cited";
import { Page, Shell } from "@/components/shell";

export const Route = createFileRoute("/glossary")({ component: Glossary });

const terms: { term: string; meaning: string }[] = [
  {
    term: "Bast",
    meaning:
      "The long fiber in the bark of the hemp stalk. It is the precursor the 2013 paper reports. [1]",
  },
  {
    term: "Hurd",
    meaning:
      "The woody core inside the stalk. The 2013 paper starts from bast and does not test hurd, so this guide does not claim hurd cannot make a carbon. [1] [6]",
  },
  {
    term: "Supercapacitor",
    meaning: "The kind of cell the paper built. Ions sit at the carbon surface. It is not a lithium-ion battery.",
  },
  {
    term: "Charge",
    meaning: "An outside power source forces ions apart and puts energy into the cell.",
  },
  {
    term: "Discharge",
    meaning: "The cell is in use. Ions flow back and energy comes out. This is not recharging.",
  },
  {
    term: "Recharge",
    meaning: "Connecting an outside source again, after discharge, to put the energy back.",
  },
  {
    term: "Electric double layer",
    meaning: "The piled-up ions at the carbon surface. That surface includes the walls inside the pores.",
  },
  {
    term: "Pore",
    meaning: "A tiny opening in the carbon. Ions can reach the carbon wall inside it. That is not the same as dissolving into the solid.",
  },
  {
    term: "Hydrothermal carbonization",
    meaning:
      "Hot water in a sealed lab vessel. The paper discusses 180°C. [6] ASME adds a 24-hour hold for this work. [3]",
  },
  {
    term: "Activation",
    meaning:
      "The furnace step with potassium hydroxide. The paper discusses 700–800°C. The authors propose that this is when the sheets separate. That proposal is not a recipe. [6]",
  },
  {
    term: "Ionic liquid",
    meaning: "The electrolyte family in the headline tests. This guide does not say how to mix one.",
  },
  {
    term: "Nanosheet",
    meaning: "A carbon sheet about 10–30 nanometers thick, the electrode material the paper reports. [1]",
  },
];

function Glossary() {
  return (
    <Shell>
      <Page
        kicker="Words"
        title="Glossary"
        lede="Short meanings for this volume. Where a word is the authors’ proposal rather than a measurement, it says so."
      >
        <dl className="divide-y divide-line border-y border-line">
          {terms.map((item) => (
            <div key={item.term} className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
              <dt className="font-medium">{item.term}</dt>
              <dd className="text-muted">
                <Cited text={item.meaning} />
              </dd>
            </div>
          ))}
        </dl>
      </Page>
    </Shell>
  );
}
