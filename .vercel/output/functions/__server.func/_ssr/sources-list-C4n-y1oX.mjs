import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sources-list-C4n-y1oX.js
var import_jsx_runtime = require_jsx_runtime();
var sources = [
	{
		n: 1,
		title: "Wang et al., ACS Nano 2013, 7, 5131–5141",
		href: "https://doi.org/10.1021/nn400731g",
		detail: "Interconnected carbon nanosheets derived from hemp for ultrafast supercapacitors with high energy.",
		bears: "The paper’s abstract reports hemp-bast carbon nanosheets 10–30 nm thick, surface area up to 2,287 m²/g, mesoporosity up to 58 percent, conductivity 211–226 S/m, and an ionic-liquid supercapacitor. At 0°C and 10 A/g it reports 106 F/g. At 100 A/g it reports 113, 144, and 142 F/g at 20, 60, and 100°C. At 20 kW/kg, on an active-mass-normalized basis, it reports 19, 34, and 40 Wh/kg at those three temperatures. It reports 12 Wh/kg as the assembled device’s maximum energy density, and it does not itemize what that kilogram includes. In the paper body, the authors propose that hydrothermal treatment at 180°C removes the S1 and S3 layers and loosens S2, and that KOH activation at 700–800°C separates those layers into sheets. That morphology story is their explanation."
	},
	{
		n: 2,
		title: "PubMed 23651213",
		href: "https://pubmed.ncbi.nlm.nih.gov/23651213/",
		detail: "Open record of the same ACS Nano abstract.",
		bears: "The same abstract as source 1, without the paywall. It does not add the 24-hour hold, the 49 kW/kg press figure, or a lithium-ion comparison. It does not describe sodium-ion cells."
	},
	{
		n: 3,
		title: "ASME, “Hemp Carbon Makes Supercapacitors Superfast,” 31 July 2013",
		href: "https://www.asme.org/topics-resources/content/hemp-carbon-makes-supercapacitors-superfast",
		detail: "A magazine account of the University of Alberta / NINT work led by David Mitlin.",
		bears: "It says the fiber was pressure-cooked at 180°C for 24 hours, then treated with potassium hydroxide and heated as high as 800°C. It gives 49 kW/kg against 17 kW/kg for commercial electrodes, and it repeats the paper’s 12 Wh/kg device figure. It also says the material outperforms graphene. That graphene sentence is the magazine’s, and this guide does not adopt it. The University of Alberta attribution is this article’s, not a line in the abstract."
	},
	{
		n: 4,
		title: "7 U.S. Code § 1639o",
		href: "https://www.law.cornell.edu/uscode/text/7/1639o",
		detail: "Definition of hemp from the Agriculture Improvement Act of 2018.",
		bears: "Hemp means Cannabis sativa L. and any part of that plant, “with a delta-9 tetrahydrocannabinol concentration of not more than 0.3 percent on a dry weight basis.” The statute says “not more than,” which includes 0.3 percent. It does not say “under 0.3 percent.” This section does not itself issue a growing license."
	},
	{
		n: 5,
		title: "USDA Agricultural Marketing Service, Hemp Production",
		href: "https://www.ams.usda.gov/rules-regulations/hemp",
		detail: "Who is allowed to produce hemp in the United States.",
		bears: "“To produce hemp, you first need to be licensed or authorized under a state hemp program, a tribal hemp program, or the USDA hemp program.” This guide does not turn that sentence into a how-to for getting a license."
	},
	{
		n: 6,
		title: "Wang et al., the authors’ morphology account, same paper as source 1",
		href: "https://doi.org/10.1021/nn400731g",
		detail: "Cited separately so a proposed mechanism is not mistaken for a measurement.",
		bears: "The layered-wall story — S1 and S3 leaving, S2 loosening, molten KOH prying microfibrils into sheets — is the authors’ proposed route from bast fiber to nanosheets. The paper does not test woody hurd, and it does not prove that hurd cannot make a carbon sheet. This guide does not treat that proposal as settled, and it does not add later hurd papers the 2013 work does not contain."
	}
];
function SourcesList() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-labelledby": "sources-title",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "sources-title",
				className: "font-display text-2xl tracking-tight",
				children: "Sources"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted",
				children: "Each number is a source that was read for the sentence it is attached to. A marker means that source says that part. It does not mean the source says everything else on the page."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-6 max-w-2xl space-y-5",
				children: sources.map((source) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					id: `source-${source.n}`,
					className: "scroll-mt-28 text-sm leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-medium text-ink",
							children: [
								"[",
								source.n,
								"]",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "text-fiber underline decoration-line underline-offset-4",
									href: source.href,
									children: source.title
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-muted",
							children: source.detail
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted",
							children: source.bears
						})
					]
				}, source.n))
			})
		]
	});
}
//#endregion
export { SourcesList as t };
