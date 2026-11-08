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
    body: "The thin outer layer of the bast fiber. The authors’ account is that the 180°C hydrothermal step takes it off. That is their explanation of the micrographs, not a separate measurement. [6]",
  },
  {
    id: "s2",
    name: "S2, the useful wall",
    range: "Microfibrils about 10–30 nm across",
    body: "The thick middle layer, built from cellulose microfibrils about 10–30 nm across. The authors propose that hydrothermal treatment loosens it, and that molten potassium hydroxide then separates the fibrils into sheets. “Pries apart” is their picture of the process, not a settled fact. The measured sheets that are 10–30 nm thick are the 800°C sample, not every activation temperature. [1] [6]",
  },
  {
    id: "s3",
    name: "S3, inner wall",
    range: "Also stripped hydrothermally",
    body: "The thin layer facing the hollow core. In the authors’ account it leaves with S1 during the hydrothermal step, when much of the hemicellulose and part of the lignin dissolve. [6]",
  },
  {
    id: "lumen",
    name: "Lumen",
    range: "The hollow core",
    body: "A bast fiber is a hollow tube, about 10–30 micrometers across, in the authors’ description. [6] The lumen is that empty middle. It is not a reservoir of charge. In the supercapacitor, ions use the carbon surface, including the walls inside the pores. They are not stored in this hollow core, and the paper does not say they insert into the solid.",
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
      "The 2013 work starts from bast, the long fiber in the stalk bark, pulled off the woody hurd. The authors’ explanation is that bast’s layered wall is what lets the later steps make nanosheets. The paper does not test hurd, so this guide does not claim hurd cannot make sheets. [1] [6]",
    conditions:
      "Hemp bast fiber is the precursor they report. Flowers, resin, and oil are not part of that experiment. [1]",
    equipment: "A fiber mill, or hand separation of retted stalk. No chemistry yet.",
    notHome:
      "As of November 8, 2026, 7 U.S.C. § 1639o defines hemp as Cannabis sativa L. with a delta-9 THC concentration of not more than 0.3 percent on a dry-weight basis. “Not more than” includes 0.3 percent. It does not say “under.” [4] Public Law 119-37 rewrites that plant test as total THC, including THCA, still not more than 0.3 percent. The Code note dates the rewrite 365 days after November 12, 2025. [4] Congress later delayed the plant-threshold change to December 11, 2026. [7] Growing it still takes a license or authorization under a state hemp program, a tribal hemp program, or the USDA hemp program. This page is not that license, and it is not legal advice. [5]",
  },
  {
    id: "hydro",
    n: "02",
    title: "Loosen the wall in acidified water",
    summary:
      "The methods hold the fiber in diluted sulfuric acid, inside a sealed stainless steel autoclave. This page names that fact. It does not give the procedure.",
    hazard: "Hot diluted acid under pressure. A failed seal is a chemical burn and a steam blast.",
    changes:
      "The authors write that most of the hemicellulose, and part of the lignin, dissolve, that crystalline cellulose is only partly carbonized, and that S1 and S3 come away while S2 loosens. That is their proposed account of why sheets can form later. [6]",
    conditions:
      "The paper’s methods use diluted sulfuric acid in a sealed stainless steel autoclave at 180°C for 24 hours. [1] ASME’s shorter account says the fiber was pressure-cooked at 180°C for 24 hours and does not mention the acid. [3] Neither line is a recipe.",
    equipment:
      "A sealed stainless steel autoclave, for acid under pressure, in a lab that can vent and contain a failure. This page does not give the acid strength.",
    notHome:
      "A kitchen pressure cooker is the wrong vessel. It is not rated for this, it is not meant to hold plant slurry against a failed gasket, and it will contaminate anything you eat from afterwards. There is no safe substitute.",
  },
  {
    id: "activate",
    n: "03",
    title: "Split the fibrils with potassium hydroxide",
    summary: "The hydrochar is heated with potassium hydroxide. The paper discusses 700–800°C. ASME says the heat reached as high as 800°C.",
    hazard: "Molten caustic at furnace temperature. Severe burns even before it is hot.",
    changes:
      "The authors propose that the KOH melt gets into the loosened gaps and separates S2 into interconnected sheets, while also etching micropores and mesopores. That is their account. [6] The measurements are not one sample. A surface area of 2,287 m²/g is CNS-750. The 10–30 nm sheets are CNS-800, which also has the highest mesopore volume in the series, about 58 percent of pore volume. Conductivity across the series is about 211–226 S/m. The sheets are partially graphitic carbon. The abstract lists those peaks together. [1]",
    conditions: "Potassium hydroxide activation. The paper’s range is 700–800°C. [6] ASME’s ceiling is 800°C. [3] Neither source is a recipe with amounts.",
    equipment:
      "A furnace that can hold that temperature, an inert or controlled atmosphere, a boat that KOH will not destroy, and a fume hood. KOH attacks skin, eyes, aluminum, and glass.",
    notHome:
      "Do not substitute drain cleaner. Do not use a pottery kiln, a grill, or an oven. The melt is caustic, the off-gas is not something to breathe, and a household scale-up is how people lose eyes and start fires. This step has no domestic version.",
  },
  {
    id: "wash",
    n: "04",
    title: "Wash the alkali out",
    summary: "Residual alkali has to leave the carbon before it is an electrode. This page does not say how.",
    hazard: "Caustic waste. Do not neutralize it at home.",
    changes:
      "The paper reports that after activation the carbons were washed with hydrochloric acid and distilled water. [1] This page does not describe that wash, the strength, or what to do with the waste. These stations are a research summary, not the full method.",
    conditions: "A laboratory wash, then drying. This guide does not give volumes, acids, or a neutralization method.",
    equipment: "Whatever that lab used to filter and collect alkali waste. Not a kitchen sink.",
    notHome:
      "Do not neutralize chemicals at home. Do not mix a homemade wash, an acid into a base, or a base into a drain. Caustic wastewater is laboratory waste. The powder is also a dust you do not want in your lungs.",
  },
  {
    id: "electrode",
    n: "05",
    title: "Make an electrode, not a lump of carbon",
    summary: "Sheets only store charge if they are bound to a current collector, with a path for electrons.",
    hazard: "Solvents and powders, handled in a hood.",
    changes:
      "The abstract reports capacitance for the electrode and, separately, energy for an assembled device. [1] [2] It does not give a slurry, a binder ratio, or a current-collector recipe, and neither does this page. A guessed film will not reproduce the paper.",
    conditions:
      "Standard electrode fabrication. The published capacitance is per gram of this active carbon, measured on a potentiostat, not on a multimeter at the kitchen table.",
    equipment: "A coater or a lab draw-down, a vacuum oven, a calender or press, a balance.",
    notHome:
      "Smearing charcoal onto foil does not make these nanosheets. This page gives no slurry recipe. Solvents used for electrode films are often flammable.",
  },
  {
    id: "cell",
    n: "06",
    title: "Assemble a two-electrode test cell",
    summary: "Two carbon electrodes, a separator, and an ionic liquid. Charging it takes an outside source. Using it is discharge.",
    hazard: "A sealed cell, and an electrolyte you do not mix.",
    changes:
      "When an outside source charges the cell, ions move to opposite electrodes and energy goes in. When the cell is used, those ions flow back and energy comes out. That return is discharge, not a recharge. Recharging means connecting a source again. The ions use the carbon surface, including the walls inside the pores. They are not plated as a metal, and the paper does not say they insert into the solid. The abstract reports about 12 Wh/kg for the assembled device and does not itemize that kilogram. [1] [2]",
    conditions:
      "Ionic-liquid electrolyte. The headline results span about 0°C to 100°C. That is a reported test window, not an invitation to heat a homemade cell. [1]",
    equipment:
      "A separator, ionic liquid handled dry, a test-cell stack, and a potentiostat. No amounts are given here.",
    notHome:
      "Do not mix electrolytes. Do not combine liquids, salts, or solvents to imitate an ionic liquid. Water with table salt is a different experiment, and this page will not turn it into one. If you need a cell, buy one that was certified.",
  },
];

export const myths: { claim: string; fact: string }[] = [
  {
    claim: "Hemp beats graphene, so it replaces a lithium battery.",
    fact: "The paper reports strong power-energy numbers for a supercapacitor, on an active-mass basis, and about 12 Wh/kg for the assembled device. The sheets are partially graphitic carbon. [1] ASME wrote that the material outperforms graphene. That sentence is the magazine’s, and this guide does not adopt it. [3]",
  },
  {
    claim: "You can grow a battery.",
    fact: "You can grow a legal precursor only if the crop is hemp under the statute and you are licensed to produce it. [4] [5] The cell is still the pressure vessel and furnace in the ASME account of this lab. [3] The plant does not arrive charged.",
  },
  {
    claim: "It is a lithium battery made of hemp.",
    fact: "The device in the paper is an ionic-liquid supercapacitor made with the hemp-bast carbon. [1] The abstract does not describe a lithium-ion cell, and this guide will not compare the two on weight. An outside source can charge the supercapacitor again. That is what “rechargeable” means here.",
  },
  {
    claim: "Any part of the plant works the same.",
    fact: "The 2013 route starts from bast. The authors propose that the layered wall is why sheets form. They do not test hurd, flower, or leaf, so this guide does not claim those tissues cannot make some other carbon. [1] [6]",
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
    why: "Bast is the precursor the paper reports. The flower and the oil are not. The paper does not test hurd, so “hurd” is the wrong answer here without being a proof that hurd can never make carbon. [1] [6]",
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
    why: "That is the authors’ account: much of the hemicellulose leaves, and the S2 microfibrils loosen. [6] It is not a claim that the fiber has become graphene, and the furnace step is still ahead. The 24 hours, and the diluted sulfuric acid in a sealed autoclave, are in the paper’s methods. [1] ASME repeats the time and does not name the acid. [3]",
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
    why: "An ionic-liquid supercapacitor. [1] Charging it means an outside source puts energy in. When the cell is used, ions flow back and energy comes out. That is discharge, not the recharge.",
  },
  {
    id: "area",
    prompt: "Why does a surface area of about 2,000 m² per gram matter?",
    choices: [
      { id: "smell", label: "The pores store the plant’s oils, and the oils hold electrons" },
      {
        id: "double",
        label: "More accessible carbon surface can support more charge stored in the electric double layer",
      },
      { id: "mass", label: "Extra area makes the cell heavier, and weight is energy" },
      { id: "fuel", label: "The pores are filled with KOH, which is the fuel" },
    ],
    answer: "double",
    why: "Charge in this cell sits in the electric double layer, on carbon surface the ions can reach, including pore walls. More of that accessible surface can support more stored charge. It is not automatic. The 2,287 m²/g figure is the CNS-750 sample, not every carbon in the paper. [1] The ions are not a fuel, and leftover potassium hydroxide is not supposed to stay in the pores.",
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
