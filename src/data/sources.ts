export type Source = {
  n: number;
  title: string;
  href: string;
  detail: string;
  /** What this source actually says, and what this guide refuses to hang on it. */
  bears: string;
};

export const sources: Source[] = [
  {
    n: 1,
    title: "Wang et al., ACS Nano 2013, 7, 5131–5141",
    href: "https://doi.org/10.1021/nn400731g",
    detail: "Interconnected carbon nanosheets derived from hemp for ultrafast supercapacitors with high energy.",
    bears: "The paper’s abstract reports hemp-bast carbon, an ionic-liquid supercapacitor, and peak figures that are not all from one sample: surface area up to 2,287 m²/g, mesoporosity up to 58 percent, sheets 10–30 nm, and conductivity 211–226 S/m. In the body, 2,287 m²/g is the CNS-750 sample. The 10–30 nm thickness is CNS-800, which also has the highest reported mesopore volume, about 58 percent of pore volume. Thicker sheets are reported at 700°C and 750°C. At 0°C and 10 A/g the abstract reports 106 F/g. At 100 A/g it reports 113, 144, and 142 F/g at 20, 60, and 100°C. At 20 kW/kg, on an active-mass-normalized basis, it reports 19, 34, and 40 Wh/kg. It reports 12 Wh/kg as the assembled device’s maximum energy density, and it does not itemize what that kilogram includes. The methods put the bast fiber in diluted sulfuric acid in a sealed stainless steel autoclave at 180°C for 24 hours, then activate with potassium hydroxide. After activation the carbons were washed with hydrochloric acid and distilled water. This guide does not copy amounts, acid strength, or that wash. The authors also propose that hydrothermal treatment removes the S1 and S3 layers and loosens S2, and that KOH activation at 700–800°C separates those layers into sheets. That morphology story is their explanation.",
  },
  {
    n: 2,
    title: "PubMed 23651213",
    href: "https://pubmed.ncbi.nlm.nih.gov/23651213/",
    detail: "Open record of the same ACS Nano abstract.",
    bears: "The same abstract as source 1, without the paywall. It does not add the autoclave, the sulfuric acid, the hydrochloric acid wash, the 24-hour hold, the sample names, or the 49 kW/kg press figure. It does not describe a lithium-ion or sodium-ion cell.",
  },
  {
    n: 3,
    title: "ASME, “Hemp Carbon Makes Supercapacitors Superfast,” 31 July 2013",
    href: "https://www.asme.org/topics-resources/content/hemp-carbon-makes-supercapacitors-superfast",
    detail: "A magazine account of the University of Alberta / NINT work led by David Mitlin.",
    bears: "It says the fiber was pressure-cooked at 180°C for 24 hours, then treated with potassium hydroxide and heated as high as 800°C. It does not mention diluted sulfuric acid. It gives 49 kW/kg against 17 kW/kg for commercial electrodes, and it repeats the paper’s 12 Wh/kg device figure. It also says the material outperforms graphene. That graphene sentence is the magazine’s, and this guide does not adopt it. The University of Alberta attribution is this article’s, not a line in the abstract.",
  },
  {
    n: 4,
    title: "7 U.S. Code § 1639o",
    href: "https://uscode.house.gov/us/usc/119-138/t7/s1639o/",
    detail: "The official Code page. Current hemp definition, and the amendment note.",
    bears: "The text in force defines hemp as Cannabis sativa L. and any part of that plant “with a delta-9 tetrahydrocannabinol concentration of not more than 0.3 percent on a dry weight basis.” “Not more than” includes 0.3 percent. It does not say “under.” The amendment note prints Public Law 119-37’s replacement: a total tetrahydrocannabinols concentration, including tetrahydrocannabinolic acid, of not more than 0.3 percent, effective 365 days after November 12, 2025. This page does not print December 11, 2026. This section does not itself issue a growing license.",
  },
  {
    n: 5,
    title: "USDA Agricultural Marketing Service, Hemp Production",
    href: "https://www.ams.usda.gov/rules-regulations/hemp",
    detail: "Who is allowed to produce hemp in the United States.",
    bears: "“To produce hemp, you first need to be licensed or authorized under a state hemp program, a tribal hemp program, or the USDA hemp program.” This guide does not turn that sentence into a how-to for getting a license.",
  },
  {
    n: 6,
    title: "Wang et al., the authors’ morphology account, same paper as source 1",
    href: "https://doi.org/10.1021/nn400731g",
    detail: "Cited separately so a proposed mechanism is not mistaken for a measurement.",
    bears: "The layered-wall story — S1 and S3 leaving, S2 loosening, molten KOH separating microfibrils into sheets — is the authors’ proposed route from bast fiber to nanosheets. The paper does not test woody hurd, and it does not prove that hurd cannot make a carbon sheet. This guide does not treat that proposal as settled, and it does not add later hurd papers the 2013 work does not contain.",
  },
  {
    n: 7,
    title: "Congressional Research Service, IN focus IF13136",
    href: "https://www.congress.gov/crs-product/IF13136",
    detail: "Changes to the Statutory Definition of Hemp.",
    bears: "CRS reports that Public Law 119-103 delayed the plant-threshold change — total THC, including THCA — until December 11, 2026. The Code page’s own note still says 365 days after November 12, 2025. This guide uses CRS for the delayed date. It does not turn the product rules in the same amendment into advice about growing fiber.",
  },
];
