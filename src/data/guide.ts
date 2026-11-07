export type LayerId = "s1" | "s2" | "s3" | "lumen";

export const layers: {
  id: LayerId;
  name: string;
  range: string;
  body: string;
}[] = [
  {
    id: "s1",
    name: "S1, outer wall",
    range: "Comes off in the hydrothermal step",
    body: "The thin outer layer of the bast fiber. At 180°C in water, under pressure, it does not survive as a sheet. It is not the carbon you keep.",
  },
  {
    id: "s2",
    name: "S2, the useful wall",
    range: "Microfibrils about 10–30 nm across",
    body: "The thick middle layer. It is built from cellulose microfibrils. Hydrothermal treatment loosens the ties between them. Molten potassium hydroxide then pries those fibrils apart into carbon nanosheets of roughly the same thickness.",
  },
  {
    id: "s3",
    name: "S3, inner wall",
    range: "Also stripped hydrothermally",
    body: "The thin layer facing the hollow core. Like S1, it is removed when hemicellulose and part of the lignin dissolve. What remains to be split is S2.",
  },
  {
    id: "lumen",
    name: "Lumen",
    range: "The hollow core",
    body: "A bast fiber is a tube, about 10–30 micrometers across. The lumen is the empty middle. It is not a reservoir of charge. The charge, later, sits on the pore walls of the carbon made from S2.",
  },
];

export type Station = {
  id: string;
  n: string;
  title: string;
  summary: string;
  hazard: string;
  changes: string;
  conditions: string;
  equipment: string;
  notHome: string;
};

export const stations: Station[] = [
  {
    id: "bast",
    n: "01",
    title: "Separate the bast",
    summary: "The precursor is the long fiber in the stalk bark — not the flower, the seed, or the woody core.",
    hazard: "Dust. This is the only ordinary step.",
    changes:
      "Industrial hemp is retted and the bast is pulled from the hurd. Bast has the layered, hollow-fiber architecture the rest of the process exploits. Hurd can be charred into ordinary carbon. It does not split into these nanosheets.",
    conditions:
      "The 2013 work starts from hemp bast fiber. Nothing in the paper depends on flowers, resin, or oil.",
    equipment: "A fiber mill, or hand separation of retted stalk. No chemistry yet.",
    notHome:
      "Growing hemp is agriculture, and legality depends on where you are. Growing it does not produce a cell. It produces a precursor for a furnace.",
  },
  {
    id: "hydro",
    n: "02",
    title: "Loosen the wall in hot water",
    summary: "A sealed vessel holds the fiber at 180°C for 24 hours. The yarn breaks into small pieces of hydrochar.",
    hazard: "Pressurized hot liquid. A failed seal is a steam explosion.",
    changes:
      "Most of the hemicellulose, and part of the lignin, dissolve. Crystalline cellulose is only partly carbonized. S1 and S3 come away. In S2, the connections between microfibrils loosen, which is the entire point of this step.",
    conditions: "Hydrothermal carbonization at 180°C for 24 hours, as reported for this precursor.",
    equipment:
      "A hydrothermal autoclave rated for the vapor pressure of water at that temperature, with a chemically compatible liner, in a lab that can vent and contain a failure.",
    notHome:
      "A kitchen pressure cooker is the wrong vessel. It is not rated for this, it is not meant to hold plant slurry against a failed gasket, and it will contaminate anything you eat from afterwards. There is no safe substitute.",
  },
  {
    id: "activate",
    n: "03",
    title: "Split the fibrils with potassium hydroxide",
    summary: "The hydrochar is heated with KOH to 700–800°C. Layers separate into sheets 10–30 nm thick.",
    hazard: "Molten caustic at furnace temperature. Severe burns even before it is hot.",
    changes:
      "The KOH melt wicks into the loosened gaps and peels S2 into interconnected, partly graphitic nanosheets. It also etches micropores and mesopores. Reported peaks: surface area up to 2,287 m² per gram, mesoporosity up to 58 percent, conductivity about 211–226 S/m. The samples are named by activation temperature — CNS-700, CNS-800, and so on.",
    conditions: "Potassium hydroxide activation between 700°C and 800°C.",
    equipment:
      "A furnace that can hold that temperature, an inert or controlled atmosphere, a boat that KOH will not destroy, and a fume hood. KOH attacks skin, eyes, aluminum, and glass.",
    notHome:
      "Do not substitute drain cleaner. Do not use a pottery kiln, a grill, or an oven. The melt is caustic, the off-gas is not something to breathe, and a household scale-up is how people lose eyes and start fires. This step has no domestic version.",
  },
  {
    id: "wash",
    n: "04",
    title: "Wash the alkali out",
    summary: "Residual KOH has to leave the carbon, or the electrode and the electrolyte are both ruined.",
    hazard: "Caustic wastewater. It is chemical waste, not sink water.",
    changes:
      "Washing neutralizes and removes leftover potassium salts so the pores stay open and the surface is carbon, not caustic. Drying leaves a fine black powder of nanosheets. That powder is the active material.",
    conditions: "A laboratory wash to neutral, then drying. The paper’s performance figures are for cleaned carbon.",
    equipment: "Filtration, plenty of rinse water, pH checks, and a waste container rated for alkali.",
    notHome:
      "Pouring this wash down a drain dumps caustic into plumbing and the watershed. The powder is also a fine dust you do not want in your lungs.",
  },
  {
    id: "electrode",
    n: "05",
    title: "Make an electrode, not a lump of carbon",
    summary: "Sheets only store charge if they are bound to a current collector, with a path for electrons.",
    hazard: "Solvents and powders, handled in a hood.",
    changes:
      "The carbon is blended with a conductive additive and a binder, spread as a film on a metal current collector, dried, and pressed. Two films, matched in mass, become the two electrodes. This page does not give a slurry recipe. A guessed ratio will not reproduce the paper, and it is not the dangerous-looking step — the furnace was.",
    conditions:
      "Standard electrode fabrication. The published capacitance is per gram of this active carbon, measured on a potentiostat, not on a multimeter at the kitchen table.",
    equipment: "A coater or a lab draw-down, a vacuum oven, a calender or press, a balance.",
    notHome:
      "Smearing charcoal onto foil does not make these nanosheets, and it does not make a stable rechargeable cell. Solvents used in electrode slurries are often flammable and toxic.",
  },
  {
    id: "cell",
    n: "06",
    title: "Assemble a two-electrode test cell",
    summary: "Two carbon electrodes, a separator, and an ionic liquid. That stack is the rechargeable device.",
    hazard: "A sealed energy-storage cell. Short it, and the energy leaves as heat.",
    changes:
      "Ions from the electrolyte move to opposite electrodes when you charge the cell, and move back when you discharge it. Nothing is burned. In this device the ions sit on the carbon surface — an electric double layer — rather than inserting into a crystal the way lithium does in a lithium-ion battery. The paper’s full device stored up to about 12 Wh per kilogram.",
    conditions:
      "Ionic-liquid electrolyte. The headline results span roughly 0°C to 100°C. That temperature window is a property of the electrolyte and the carbon, not an invitation to heat a homemade cell.",
    equipment:
      "A separator, ionic liquid handled dry, a coin-cell or pouch crimp inside a dry environment, and a potentiostat to charge and measure it.",
    notHome:
      "Do not invent an electrolyte. Water with table salt is a different, low-voltage experiment, and sealing it between random metals makes hydrogen, corrosion, and a mess — not this device. Buy a commercial cell if you need a rechargeable battery. Study this one in a lab.",
  },
];

export const myths: { claim: string; fact: string }[] = [
  {
    claim: "Hemp beats graphene, so it replaces a lithium battery.",
    fact: "The 2013 carbons matched graphene electrodes of that era on a supercapacitor Ragone plot. They are partly graphitic nanosheets, not graphene, and the full device stored about 12 Wh/kg. A modern lithium-ion cell is often 150–250 Wh/kg. Different job.",
  },
  {
    claim: "You can grow a battery.",
    fact: "You can grow a precursor, where that crop is legal. The cell is a product of a pressure vessel and an 800°C furnace. The plant does not arrive charged.",
  },
  {
    claim: "It is a lithium battery made of hemp.",
    fact: "The device in the paper contains no lithium. Two hemp-carbon electrodes, a separator, an ionic liquid. Rechargeable, yes. A lithium-ion cell, no.",
  },
  {
    claim: "Any part of the plant works the same.",
    fact: "The sheet morphology comes from the bast fiber’s layered wall. Flower, leaf, and hurd do not follow the same path, even if they can be burned into some other carbon.",
  },
];

export type CheckQ = {
  id: string;
  prompt: string;
  choices: { id: string; label: string }[];
  answer: string;
  why: string;
};

export const checks: CheckQ[] = [
  {
    id: "tissue",
    prompt: "Which part of the plant is the precursor in this work?",
    choices: [
      { id: "flower", label: "The flower" },
      { id: "hurd", label: "The woody hurd" },
      { id: "bast", label: "Bast fiber from the stalk" },
      { id: "oil", label: "The seed oil" },
    ],
    answer: "bast",
    why: "The hollow, layered bast fiber is what splits into nanosheets. The flower is irrelevant to the chemistry.",
  },
  {
    id: "hydro",
    prompt: "What is the 180°C, 24-hour step actually for?",
    choices: [
      { id: "graphene", label: "To turn the fiber into graphene" },
      {
        id: "loosen",
        label: "To dissolve much of the hemicellulose and loosen the S2 microfibrils",
      },
      { id: "charge", label: "To charge the cell" },
      { id: "skip", label: "To avoid needing a furnace" },
    ],
    answer: "loosen",
    why: "Hydrothermal treatment only partly carbonizes the cellulose. The furnace and the KOH still have to finish the job.",
  },
  {
    id: "device",
    prompt: "What did Wang, Mitlin, and colleagues actually assemble?",
    choices: [
      { id: "li", label: "A lithium-ion cell with a hemp cathode" },
      {
        id: "edlc",
        label: "An ionic-liquid supercapacitor with hemp-carbon electrodes",
      },
      { id: "potato", label: "A galvanic cell in plant sap" },
      { id: "fuel", label: "A fuel cell that consumes the stalk" },
    ],
    answer: "edlc",
    why: "Charge sits on the carbon surface in an electric double layer. It is rechargeable storage. It is not a lithium-ion battery.",
  },
  {
    id: "area",
    prompt: "Why does a surface area of about 2,000 m² per gram matter?",
    choices: [
      { id: "smell", label: "The pores store the plant’s oils, and the oils hold electrons" },
      {
        id: "double",
        label: "Ions park on the carbon surface, so more wall means more charge",
      },
      { id: "mass", label: "Extra area makes the cell heavier, and weight is energy" },
      { id: "fuel", label: "The pores are filled with KOH, which is the fuel" },
    ],
    answer: "double",
    why: "After washing, the KOH is gone. What remains is carbon area for the double layer. That is also why the cell can dump its energy quickly — the ions never have to push inside a crystal.",
  },
];

export const capacitance = [
  { temp: "20°C", farads: 113 },
  { temp: "60°C", farads: 144 },
  { temp: "100°C", farads: 142 },
];

export const energy = [
  { temp: "20°C", wh: 19 },
  { temp: "60°C", wh: 34 },
  { temp: "100°C", wh: 40 },
];
