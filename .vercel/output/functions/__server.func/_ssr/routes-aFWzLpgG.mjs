import { i as __toESM } from "../_runtime.mjs";
import { a as require_react, o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { i as VOLUME_LINE, r as Shell, t as EDITION } from "./shell-kjoUljAS.mjs";
import { t as SourcesList } from "./sources-list-C4n-y1oX.mjs";
import { t as Cited } from "./cited-COH1AeM_.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider } from "../_libs/@radix-ui/react-slider+[...].mjs";
import { a as Bar, i as CartesianGrid, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-aFWzLpgG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var cations = [
	0,
	1,
	2,
	3,
	4,
	5
];
var anions = [
	0,
	1,
	2,
	3,
	4,
	5
];
function place(index, pole, soc) {
	const mixed = 10 + (index * 17 + (pole === "pos" ? 9 : 0)) % 78;
	return mixed + ((pole === "neg" ? 6 + index % 3 * 8 : 70 + index % 3 * 8) - mixed) * soc / 100;
}
function CellSim() {
	const [soc, setSoc] = (0, import_react.useState)(28);
	const charged = soc > 85;
	const resting = soc < 8;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-card border border-line bg-surface p-4 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-wider text-fiber",
					children: "Mechanism, not a sizing tool"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-display text-2xl tracking-tight",
					children: "Where the charge sits"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-4xl tabular-nums text-fiber",
					children: [soc, "%"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.5fr)_minmax(0,0.8fr)] gap-2 sm:gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Electrode, {
						tone: "fiber",
						title: "Negative",
						detail: "Carbon nanosheets"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative min-h-44 overflow-hidden rounded-2xl border border-line bg-paper",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "pointer-events-none absolute inset-x-0 top-2 text-center text-xs text-muted",
								children: "Ionic liquid"
							}),
							cations.map((index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ion, {
								kind: "cation",
								left: place(index, "neg", soc),
								top: 22 + index % 3 * 24
							}, "c" + index)),
							anions.map((index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ion, {
								kind: "anion",
								left: place(index, "pos", soc),
								top: 28 + index % 3 * 24
							}, "a" + index))
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Electrode, {
						tone: "kiln",
						title: "Positive",
						detail: "Carbon nanosheets"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap items-center gap-4 text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "size-3 rounded-full bg-fiber",
						"aria-hidden": "true"
					}), "Cation. An outside source drives it toward the negative electrode while charging."]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "size-3 rounded-full bg-kiln",
						"aria-hidden": "true"
					}), "Anion. Charging drives it toward the positive electrode. In use, both flow back. That return is discharge."]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: "soc-label",
				className: "mt-5 text-sm font-medium",
				children: "State of charge. Raising it is charging, and that takes an outside source. Lowering it, in a real cell, is discharge."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider, {
				value: [soc],
				max: 100,
				step: 1,
				onValueChange: ([value]) => setSoc(value ?? 0),
				className: "relative mt-2 flex h-11 w-full touch-none items-center",
				"aria-labelledby": "soc-label",
				"aria-valuetext": resting ? "Discharged, ions mixed" : charged ? "Charged, ions separated" : soc + " percent charged",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
					className: "relative h-1.5 grow rounded-full bg-paper-deep",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full rounded-full bg-fiber" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block size-6 rounded-full border-2 border-fiber bg-surface shadow-sm" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-sm leading-relaxed text-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cited, { text: resting ? "Discharged. The ions are mixed. If the cell just did work, they flowed back and energy came out. That flow is discharge, not a recharge." : charged ? "Charged. An outside source has separated the ions onto the two carbons. They use the carbon surface, including the walls inside the pores. They are not plated as a metal. Using the cell lets them flow back, and that return is discharge. Recharging means connecting a source again to push them apart." : "Partway between. Charging, from an outside source, separates the ions and puts energy in. Discharge, when the cell is used, lets the ions return and energy come out. The slider does not size a pack." })
			})
		]
	});
}
function Electrode({ tone, title, detail }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-44 flex-col justify-between rounded-2xl p-3 " + (tone === "fiber" ? "pore-fiber text-fiber-ink" : "pore-kiln text-ink"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-lg leading-tight sm:text-xl",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs leading-snug " + (tone === "fiber" ? "text-fiber-ink/80" : "text-ink/75"),
			children: detail
		})]
	});
}
function Ion({ kind, left, top }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": "true",
		className: "ion absolute size-3.5 rounded-full " + (kind === "cation" ? "bg-fiber" : "bg-kiln"),
		style: {
			left: left + "%",
			top: top + "%"
		}
	});
}
var layers = [
	{
		id: "s1",
		name: "S1, outer wall",
		range: "Comes off in the hydrothermal step",
		body: "The thin outer layer of the bast fiber. The authors’ account is that the 180°C hydrothermal step takes it off. That is their explanation of the micrographs, not a separate measurement. [6]"
	},
	{
		id: "s2",
		name: "S2, the useful wall",
		range: "Microfibrils about 10–30 nm across",
		body: "The thick middle layer, built from cellulose microfibrils about 10–30 nm across. The authors propose that hydrothermal treatment loosens it, and that molten potassium hydroxide then pries the fibrils into sheets of about that thickness. “Pries apart” is their picture of the process, not a settled fact. [1] [6]"
	},
	{
		id: "s3",
		name: "S3, inner wall",
		range: "Also stripped hydrothermally",
		body: "The thin layer facing the hollow core. In the authors’ account it leaves with S1 during the hydrothermal step, when much of the hemicellulose and part of the lignin dissolve. [6]"
	},
	{
		id: "lumen",
		name: "Lumen",
		range: "The hollow core",
		body: "A bast fiber is a hollow tube, about 10–30 micrometers across, in the authors’ description. [6] The lumen is that empty middle. It is not a reservoir of charge. In the supercapacitor, ions use the carbon surface, including the walls inside the pores. They are not stored in this hollow core, and the paper does not say they insert into the solid."
	}
];
var stations = [
	{
		id: "bast",
		n: "01",
		title: "Separate the bast",
		summary: "The precursor is the long fiber in the stalk bark — not the flower, the seed, or the woody core.",
		hazard: "Dust. This is the only ordinary step.",
		changes: "The 2013 work starts from bast, the long fiber in the stalk bark, pulled off the woody hurd. The authors’ explanation is that bast’s layered wall is what lets the later steps make nanosheets. The paper does not test hurd, so this guide does not claim hurd cannot make sheets. [1] [6]",
		conditions: "Hemp bast fiber is the precursor they report. Flowers, resin, and oil are not part of that experiment. [1]",
		equipment: "A fiber mill, or hand separation of retted stalk. No chemistry yet.",
		notHome: "Under 7 U.S.C. § 1639o, hemp is Cannabis sativa L. with a delta-9 THC concentration of not more than 0.3 percent on a dry-weight basis. “Not more than” includes 0.3 percent. It does not say “under.” Growing it still takes a license or authorization under a state hemp program, a tribal hemp program, or the USDA hemp program. This page is not that license, and it is not legal advice. [4] [5]"
	},
	{
		id: "hydro",
		n: "02",
		title: "Loosen the wall in hot water",
		summary: "A sealed vessel holds the fiber in hot water. ASME reports 180°C for 24 hours. The paper’s own account of the step is the chemistry, not a timer you should copy.",
		hazard: "Pressurized hot liquid. A failed seal is a steam explosion.",
		changes: "The authors write that most of the hemicellulose, and part of the lignin, dissolve, that crystalline cellulose is only partly carbonized, and that S1 and S3 come away while S2 loosens. That is their proposed account of why sheets can form later. [6]",
		conditions: "The paper describes hydrothermal carbonization at 180°C. The 24-hour hold is in the ASME account of the same work, not a line this guide found in the abstract. [1] [3] [6]",
		equipment: "A hydrothermal autoclave rated for the vapor pressure of water at that temperature, with a chemically compatible liner, in a lab that can vent and contain a failure.",
		notHome: "A kitchen pressure cooker is the wrong vessel. It is not rated for this, it is not meant to hold plant slurry against a failed gasket, and it will contaminate anything you eat from afterwards. There is no safe substitute."
	},
	{
		id: "activate",
		n: "03",
		title: "Split the fibrils with potassium hydroxide",
		summary: "The hydrochar is heated with potassium hydroxide. The paper discusses 700–800°C. ASME says the heat reached as high as 800°C.",
		hazard: "Molten caustic at furnace temperature. Severe burns even before it is hot.",
		changes: "The authors propose that the KOH melt gets into the loosened gaps and separates S2 into interconnected sheets, while also etching micropores and mesopores. That is their account. [6] The measurements, rather than that proposal, are a surface area up to 2,287 m²/g, mesoporosity up to 58 percent, conductivity about 211–226 S/m, and sheets about 10–30 nm thick. The sheets are partially graphitic carbon. Samples are named by activation temperature. [1]",
		conditions: "Potassium hydroxide activation. The paper’s range is 700–800°C. [6] ASME’s ceiling is 800°C. [3] Neither source is a recipe with amounts.",
		equipment: "A furnace that can hold that temperature, an inert or controlled atmosphere, a boat that KOH will not destroy, and a fume hood. KOH attacks skin, eyes, aluminum, and glass.",
		notHome: "Do not substitute drain cleaner. Do not use a pottery kiln, a grill, or an oven. The melt is caustic, the off-gas is not something to breathe, and a household scale-up is how people lose eyes and start fires. This step has no domestic version."
	},
	{
		id: "wash",
		n: "04",
		title: "Wash the alkali out",
		summary: "Residual alkali has to leave the carbon before it is an electrode. This page does not say how.",
		hazard: "Caustic waste. Do not neutralize it at home.",
		changes: "This station is here so the alkali is not forgotten. The figures belong to carbons a laboratory had already finished with. This page does not describe a wash, an acid, or a way to treat leftover potassium hydroxide.",
		conditions: "A laboratory wash, then drying. This guide does not give volumes, acids, or a neutralization method.",
		equipment: "Whatever that lab used to filter and collect alkali waste. Not a kitchen sink.",
		notHome: "Do not neutralize chemicals at home. Do not mix a homemade wash, an acid into a base, or a base into a drain. Caustic wastewater is laboratory waste. The powder is also a dust you do not want in your lungs."
	},
	{
		id: "electrode",
		n: "05",
		title: "Make an electrode, not a lump of carbon",
		summary: "Sheets only store charge if they are bound to a current collector, with a path for electrons.",
		hazard: "Solvents and powders, handled in a hood.",
		changes: "The abstract reports capacitance for the electrode and, separately, energy for an assembled device. [1] [2] It does not give a slurry, a binder ratio, or a current-collector recipe, and neither does this page. A guessed film will not reproduce the paper.",
		conditions: "Standard electrode fabrication. The published capacitance is per gram of this active carbon, measured on a potentiostat, not on a multimeter at the kitchen table.",
		equipment: "A coater or a lab draw-down, a vacuum oven, a calender or press, a balance.",
		notHome: "Smearing charcoal onto foil does not make these nanosheets. This page gives no slurry recipe. Solvents used for electrode films are often flammable."
	},
	{
		id: "cell",
		n: "06",
		title: "Assemble a two-electrode test cell",
		summary: "Two carbon electrodes, a separator, and an ionic liquid. Charging it takes an outside source. Using it is discharge.",
		hazard: "A sealed cell, and an electrolyte you do not mix.",
		changes: "When an outside source charges the cell, ions move to opposite electrodes and energy goes in. When the cell is used, those ions flow back and energy comes out. That return is discharge, not a recharge. Recharging means connecting a source again. The ions use the carbon surface, including the walls inside the pores. They are not plated as a metal, and the paper does not say they insert into the solid. The abstract reports about 12 Wh/kg for the assembled device and does not itemize that kilogram. [1] [2]",
		conditions: "Ionic-liquid electrolyte. The headline results span about 0°C to 100°C. That is a reported test window, not an invitation to heat a homemade cell. [1]",
		equipment: "A separator, ionic liquid handled dry, a test-cell stack, and a potentiostat. No amounts are given here.",
		notHome: "Do not mix electrolytes. Do not combine liquids, salts, or solvents to imitate an ionic liquid. Water with table salt is a different experiment, and this page will not turn it into one. If you need a cell, buy one that was certified."
	}
];
var myths = [
	{
		claim: "Hemp beats graphene, so it replaces a lithium battery.",
		fact: "The paper reports strong power-energy numbers for a supercapacitor, on an active-mass basis, and about 12 Wh/kg for the assembled device. The sheets are partially graphitic carbon. [1] ASME wrote that the material outperforms graphene. That sentence is the magazine’s, and this guide does not adopt it. [3]"
	},
	{
		claim: "You can grow a battery.",
		fact: "You can grow a legal precursor only if the crop is hemp under the statute and you are licensed to produce it. [4] [5] The cell is still the pressure vessel and furnace in the ASME account of this lab. [3] The plant does not arrive charged."
	},
	{
		claim: "It is a lithium battery made of hemp.",
		fact: "The device in the paper is an ionic-liquid supercapacitor made with the hemp-bast carbon. [1] The abstract does not describe a lithium-ion cell, and this guide will not compare the two on weight. An outside source can charge the supercapacitor again. That is what “rechargeable” means here."
	},
	{
		claim: "Any part of the plant works the same.",
		fact: "The 2013 route starts from bast. The authors propose that the layered wall is why sheets form. They do not test hurd, flower, or leaf, so this guide does not claim those tissues cannot make some other carbon. [1] [6]"
	}
];
var checks = [
	{
		id: "tissue",
		prompt: "Which part of the plant is the precursor in this work?",
		choices: [
			{
				id: "flower",
				label: "The flower"
			},
			{
				id: "hurd",
				label: "The woody hurd"
			},
			{
				id: "bast",
				label: "Bast fiber from the stalk"
			},
			{
				id: "oil",
				label: "The seed oil"
			}
		],
		answer: "bast",
		why: "Bast is the precursor the paper reports. The flower and the oil are not. The paper does not test hurd, so “hurd” is the wrong answer here without being a proof that hurd can never make carbon. [1] [6]"
	},
	{
		id: "hydro",
		prompt: "What is the 180°C, 24-hour step actually for?",
		choices: [
			{
				id: "graphene",
				label: "To turn the fiber into graphene"
			},
			{
				id: "loosen",
				label: "To dissolve much of the hemicellulose and loosen the S2 microfibrils"
			},
			{
				id: "charge",
				label: "To charge the cell"
			},
			{
				id: "skip",
				label: "To avoid needing a furnace"
			}
		],
		answer: "loosen",
		why: "That is the authors’ account: much of the hemicellulose leaves, and the S2 microfibrils loosen. [6] It is not a claim that the fiber has become graphene, and the furnace step is still ahead. The 24 hours are from the ASME account. [3]"
	},
	{
		id: "device",
		prompt: "What did Wang, Mitlin, and colleagues actually assemble?",
		choices: [
			{
				id: "li",
				label: "A lithium-ion cell with a hemp cathode"
			},
			{
				id: "edlc",
				label: "An ionic-liquid supercapacitor with hemp-carbon electrodes"
			},
			{
				id: "potato",
				label: "A galvanic cell in plant sap"
			},
			{
				id: "fuel",
				label: "A fuel cell that consumes the stalk"
			}
		],
		answer: "edlc",
		why: "An ionic-liquid supercapacitor. [1] Charging it means an outside source puts energy in. When the cell is used, ions flow back and energy comes out. That is discharge, not the recharge."
	},
	{
		id: "area",
		prompt: "Why does a surface area of about 2,000 m² per gram matter?",
		choices: [
			{
				id: "smell",
				label: "The pores store the plant’s oils, and the oils hold electrons"
			},
			{
				id: "double",
				label: "Ions park on the carbon surface, so more wall means more charge"
			},
			{
				id: "mass",
				label: "Extra area makes the cell heavier, and weight is energy"
			},
			{
				id: "fuel",
				label: "The pores are filled with KOH, which is the fuel"
			}
		],
		answer: "double",
		why: "The double layer of this kind of cell forms on the carbon surface. That surface includes the walls inside the pores, which is why the abstract’s surface area, up to 2,287 m²/g, is the figure that matters. [1] The ions are not a fuel, and leftover potassium hydroxide is not supposed to stay in the pores."
	}
];
var capacitance = [
	{
		temp: "20°C",
		farads: 113
	},
	{
		temp: "60°C",
		farads: 144
	},
	{
		temp: "100°C",
		farads: 142
	}
];
var energy = [
	{
		temp: "20°C",
		wh: 19
	},
	{
		temp: "60°C",
		wh: 34
	},
	{
		temp: "100°C",
		wh: 40
	}
];
var paint = {
	s1: {
		ring: "text-ink",
		label: "S1"
	},
	s2: {
		ring: "text-fiber",
		label: "S2"
	},
	s3: {
		ring: "text-kiln",
		label: "S3"
	},
	lumen: {
		ring: "text-muted",
		label: "Lumen"
	}
};
function FiberFigure() {
	const [active, setActive] = (0, import_react.useState)("s2");
	const [split, setSplit] = (0, import_react.useState)(false);
	const layer = layers.find((item) => item.id === active) ?? layers[1];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8 lg:grid-cols-[minmax(0,18rem)_1fr] lg:items-start",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 320 320",
			className: "mx-auto w-full max-w-xs",
			role: "img",
			"aria-labelledby": "fiber-title",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", {
					id: "fiber-title",
					children: "Cross-section of a hemp bast fiber, layers exaggerated"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "160",
					cy: "160",
					r: "148",
					fill: "var(--color-paper-deep)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ring, {
					id: "s1",
					active,
					r: 128,
					sw: 22,
					onPick: setActive
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ring, {
					id: "s2",
					active,
					r: 92,
					sw: 48,
					onPick: setActive
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ring, {
					id: "s3",
					active,
					r: 58,
					sw: 16,
					onPick: setActive
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "160",
					cy: "160",
					r: "46",
					fill: "var(--color-paper)",
					stroke: "var(--color-ink)",
					strokeWidth: active === "lumen" ? 3 : 1,
					className: "cursor-pointer",
					role: "button",
					tabIndex: 0,
					"aria-label": "Lumen, the hollow core",
					"aria-pressed": active === "lumen",
					onClick: () => setActive("lumen"),
					onKeyDown: (event) => {
						if (event.key === "Enter" || event.key === " ") {
							event.preventDefault();
							setActive("lumen");
						}
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "160",
					y: "164",
					textAnchor: "middle",
					fill: "var(--color-muted)",
					fontSize: "13",
					className: "pointer-events-none",
					children: "lumen"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-center text-sm text-muted",
			children: "Wall thickness is exaggerated so each layer can be selected."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2 sm:grid-cols-2",
				role: "list",
				children: layers.map((item) => {
					const on = item.id === active;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						role: "listitem",
						"aria-pressed": on,
						onClick: () => setActive(item.id),
						className: "min-h-11 rounded-card border px-4 py-3 text-left transition-colors " + (on ? "border-fiber bg-fiber text-fiber-ink" : "border-line bg-surface text-ink hover:border-fiber"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-medium",
							children: item.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-sm " + (on ? "text-fiber-ink/80" : "text-muted"),
							children: item.range
						})]
					}, item.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 rounded-card border border-line bg-surface p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm italic " + paint[layer.id].ring,
					children: paint[layer.id].label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-lg leading-relaxed",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cited, { text: layer.body })
				})]
			}),
			active === "s2" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-card border border-line bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: "S2, before and after the melt"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": split,
							onClick: () => setSplit((value) => !value),
							className: "min-h-11 rounded-full border border-fiber px-4 text-sm font-medium text-fiber",
							children: split ? "Show the bound fibrils" : "Show the authors’ split"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex flex-col " + (split ? "gap-3" : "gap-1"),
						"aria-hidden": "true",
						children: [
							"a",
							"b",
							"c",
							"d",
							"e"
						].map((bar) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 rounded-full bg-fiber transition-all" }, bar))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cited, { text: split ? "The authors propose that molten KOH at 700–800°C separates loosened S2 into sheets about 10–30 nm thick, full of pores. That picture is their explanation, not a settled fact. [1] [6]" : "Their account of the hydrothermal step is that it loosens S2. The microfibrils are still a wall. [6]" })
					})
				]
			}) : null
		] })]
	});
}
function Ring({ id, active, r, sw, onPick }) {
	const on = active === id;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: "160",
		cy: "160",
		r,
		fill: "none",
		stroke: id === "s2" ? "var(--color-fiber)" : id === "s3" ? "var(--color-kiln)" : "var(--color-ink)",
		strokeWidth: sw,
		opacity: on || active === "lumen" ? 1 : .35,
		className: "cursor-pointer",
		role: "button",
		tabIndex: 0,
		"aria-label": layers.find((item) => item.id === id)?.name,
		"aria-pressed": on,
		onClick: () => onPick(id),
		onKeyDown: (event) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				onPick(id);
			}
		}
	});
}
function PublishedFigures() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
			kicker: "Specific capacitance at 100 A/g",
			title: "Still high when the current is brutal",
			note: "Farads per gram. The abstract’s 0°C point is not on this chart: at 10 A/g the electrode held 106 F/g. These three bars are the 100 A/g points. [1] [2]",
			data: capacitance,
			dataKey: "farads",
			unit: "F/g"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
			kicker: "Energy at 20 kW/kg",
			title: "Active mass, as the abstract says",
			note: "The abstract gives 19, 34, and 40 Wh/kg at 20 kW/kg and says those power-energy figures are normalized to active mass. Separately, it reports 12 Wh/kg for the assembled device. It does not say what that device kilogram includes, so this guide does not either. [1] [2]",
			data: energy,
			dataKey: "wh",
			unit: "Wh/kg"
		})]
	});
}
function ChartCard({ kicker, title, note, data, dataKey, unit }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "rounded-card border border-line bg-surface p-4 sm:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-wider text-fiber",
				children: kicker
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-display text-2xl tracking-tight",
				children: title
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 h-56",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
					width: "100%",
					height: "100%",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
						data,
						margin: {
							top: 8,
							right: 4,
							left: 0,
							bottom: 0
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								vertical: false,
								stroke: "var(--color-line)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "temp",
								tick: {
									fill: "var(--color-muted)",
									fontSize: 12
								},
								axisLine: false,
								tickLine: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								width: 36,
								tick: {
									fill: "var(--color-muted)",
									fontSize: 12
								},
								axisLine: false,
								tickLine: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
								cursor: { fill: "color-mix(in oklab, var(--color-fiber) 8%, transparent)" },
								content: ({ active, payload, label }) => {
									if (!active || !payload?.length) return null;
									const value = payload[0]?.value;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-lg border border-line bg-paper px-3 py-2 text-sm text-ink",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted",
											children: label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-medium tabular-nums",
											children: [
												value,
												" ",
												unit
											]
										})]
									});
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
								dataKey,
								fill: "var(--color-fiber)",
								radius: [
									6,
									6,
									0,
									0
								],
								maxBarSize: 48
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cited, { text: note })
			})
		]
	});
}
function readList(key) {
	try {
		const raw = localStorage.getItem(key);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		if (Array.isArray(parsed) && parsed.every((item) => typeof item === "string")) return parsed;
	} catch {}
	return [];
}
function useSeen(key) {
	const [seen, setSeen] = (0, import_react.useState)([]);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setSeen(readList(key));
		setReady(true);
	}, [key]);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		localStorage.setItem(key, JSON.stringify(seen));
	}, [
		key,
		ready,
		seen
	]);
	return {
		seen,
		ready,
		mark(id) {
			setSeen((current) => current.includes(id) ? current : [...current, id]);
		}
	};
}
function useAnswers(key) {
	const [answers, setAnswers] = (0, import_react.useState)({});
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(key);
			if (raw) {
				const parsed = JSON.parse(raw);
				if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
					const next = {};
					for (const [id, value] of Object.entries(parsed)) if (typeof value === "string") next[id] = value;
					setAnswers(next);
				}
			}
		} catch {}
		setReady(true);
	}, [key]);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		localStorage.setItem(key, JSON.stringify(answers));
	}, [
		answers,
		key,
		ready
	]);
	return {
		answers,
		ready,
		choose(id, value) {
			setAnswers((current) => ({
				...current,
				[id]: value
			}));
		}
	};
}
function ReadingCheck() {
	const { answers, choose } = useAnswers("bast-check");
	const answered = checks.filter((item) => answers[item.id]);
	const correct = answered.filter((item) => answers[item.id] === item.answer).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "flex flex-col gap-6",
		children: checks.map((item, index) => {
			const picked = answers[item.id];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-card border border-line bg-surface p-4 sm:p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-medium uppercase tracking-wider text-muted",
						children: [
							"Check ",
							index + 1,
							" of ",
							checks.length
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-2xl tracking-tight",
						children: item.prompt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid gap-2",
						role: "group",
						"aria-label": item.prompt,
						children: item.choices.map((choice) => {
							const on = picked === choice.id;
							const right = picked !== void 0 && choice.id === item.answer;
							const wrong = on && choice.id !== item.answer;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-pressed": on,
								onClick: () => choose(item.id, choice.id),
								className: "min-h-11 rounded-xl border px-4 py-3 text-left text-sm leading-snug sm:text-base " + (right ? "border-fiber bg-fiber text-fiber-ink" : wrong ? "border-kiln bg-paper text-ink" : on ? "border-fiber bg-paper" : "border-line bg-paper hover:border-fiber"),
								children: choice.label
							}, choice.id);
						})
					}),
					picked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						"aria-live": "polite",
						children: [picked === item.answer ? "Yes. " : "Not that one. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cited, { text: item.why })]
					}) : null
				]
			}, item.id);
		})
	}), answered.length === checks.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "mt-6 font-display text-2xl tracking-tight",
		"aria-live": "polite",
		children: [
			correct,
			" of ",
			checks.length,
			" match the paper.",
			correct < checks.length ? " The notes under the misses are the part worth rereading." : " The distinctions held."
		]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-6 text-sm text-muted",
		children: "Answer all four. Your picks stay on this browser."
	})] });
}
function Stations() {
	const [open, setOpen] = (0, import_react.useState)("bast");
	const { seen, mark } = useSeen("bast-stations");
	function toggle(id) {
		setOpen((current) => current === id ? "" : id);
		mark(id);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "mb-6 text-sm text-muted tabular-nums",
		"aria-live": "polite",
		children: [
			seen.length,
			" of ",
			stations.length,
			" stations opened on this browser. Opening one does not mean performing it."
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "flex flex-col",
		children: stations.map((station, index) => {
			const expanded = open === station.id;
			const last = index === stations.length - 1;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "grid grid-cols-[3rem_1fr] gap-3 sm:grid-cols-[3.5rem_1fr] sm:gap-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-11 shrink-0 items-center justify-center rounded-full border font-display text-sm " + (expanded ? "border-fiber bg-fiber text-fiber-ink" : "border-line bg-surface text-ink"),
						"aria-hidden": "true",
						children: station.n
					}), last ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-px flex-1 bg-line" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: last ? "" : "pb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-expanded": expanded,
						onClick: () => toggle(station.id),
						className: "w-full rounded-card border border-line bg-surface px-4 py-4 text-left hover:border-fiber sm:px-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex flex-wrap items-baseline justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl tracking-tight",
								children: station.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-medium uppercase tracking-wider text-kiln",
								children: station.hazard
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 block text-base leading-relaxed text-muted",
							children: station.summary
						})]
					}), expanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid gap-3 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
								kicker: "What changes",
								body: station.changes
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
								kicker: "Reported conditions",
								body: station.conditions
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
								kicker: "Equipment class",
								body: station.equipment
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
								kicker: "Why this stays in a lab",
								body: station.notHome
							})
						]
					}) : null]
				})]
			}, station.id);
		})
	})] });
}
function Note({ kicker, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-card border border-line bg-paper px-4 py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium uppercase tracking-wider text-fiber",
			children: kicker
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm leading-relaxed",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cited, { text: body })
		})]
	});
}
var sections = [
	{
		href: "#fiber",
		label: "Fiber"
	},
	{
		href: "#process",
		label: "Process"
	},
	{
		href: "#cell",
		label: "Cell"
	},
	{
		href: "#numbers",
		label: "Numbers"
	},
	{
		href: "#limits",
		label: "Limits"
	},
	{
		href: "#check",
		label: "Check"
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
		sections,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Caution, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChargeAndUse, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "fiber",
				kicker: "01 — The precursor",
				title: "A hollow fiber, not a leaf.",
				lede: "The 2013 carbons start as bast, the long fiber in hemp bark. The authors describe a wall of three layers around an empty core, and they propose that the middle layer is what later becomes sheets. [1] [6]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiberFigure, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-2xl text-base leading-relaxed text-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cited, { text: "The woody hurd is not the tissue this paper used, and the paper does not prove hurd cannot make a carbon. [1] [6] Hemp in the statute is a crop, defined by THC, not a flower-power story. [4]" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "process",
				kicker: "02 — The laboratory path",
				title: "Six stations, from stalk to stack.",
				lede: "Read this as a map of the paper and of the ASME account of the same lab. It is not a procedure. It has no amounts, and it has no safe home version.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stations, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "cell",
				kicker: "03 — Charge and discharge",
				title: "Ions sit on the carbon, including inside the pores.",
				lede: "Charging takes an outside source and pushes the ions apart. Using the cell lets them flow back. That return is discharge. Recharging is a second visit from the outside source, not the return itself.",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CellSim, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-4 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							title: "Charge",
							body: "An outside source separates the ions and puts energy in. The slider moving up is that state, not a power supply."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							title: "Discharge",
							body: "In use, the ions flow back through the circuit and energy comes out. That return is discharge, not a recharge."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							title: "Where they sit",
							body: "On the carbon surface, including the walls inside the pores. Not plated as a metal. The paper does not say they insert into the solid."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "numbers",
				kicker: "04 — What was measured",
				title: "The figures, with the basis left where the paper left it.",
				lede: "Wang and colleagues, ACS Nano, 2013. Ionic-liquid cells, carbon from hemp bast. ASME names the lab as University of Alberta / NINT, led by David Mitlin. [1] [3]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublishedFigures, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 max-w-xl rounded-card border border-line bg-surface p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-6xl tabular-nums tracking-tight text-fiber",
								children: "12"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-medium",
								children: "Wh/kg, the assembled device"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cited, { text: "The abstract’s maximum for the assembled supercapacitor, higher than the commercial supercapacitors they compared it with. The abstract does not say which parts of the cell are inside that kilogram. This guide will not fill that in. [1] [2]" })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-sm leading-relaxed text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cited, { text: "ASME also quotes about 49 kW/kg against about 17 kW/kg for commercial electrodes. Those two numbers are the magazine’s comparison. The paper’s own Ragone point used above is 20 kW/kg. Conductivity of the sheets is reported as about 211–226 S/m. [1] [3]" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "limits",
				kicker: "05 — What it is not",
				title: "Four claims that outran the sources.",
				lede: "A supercapacitor, a proposed fiber mechanism, and a magazine line about graphene are three different sentences.",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-4",
					children: myths.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-card border border-line bg-surface p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl tracking-tight",
							children: item.claim
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-2xl leading-relaxed text-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cited, { text: item.fact })
						})]
					}, item.claim))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 rounded-card border border-kiln/50 bg-paper p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: "If you need a cell you can use"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
						children: "Buy a certified one. This volume does not compare the 2013 device with a lithium-ion cell, and it does not add later battery papers the 2013 work does not contain."
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "check",
				kicker: "06 — Hold the distinctions",
				title: "Four questions.",
				lede: "Precursor, hydrothermal step, the device, and what the surface area is for.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadingCheck, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 py-12 md:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourcesList, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-8 max-w-2xl text-sm leading-relaxed text-muted",
						children: [
							VOLUME_LINE,
							", by ",
							EDITION.author,
							". An explanation, not instructions. Potassium hydroxide, pressurized hot water, and an 800°C furnace are how people get hurt. Do not mix electrolytes, and do not neutralize chemicals at home."
						]
					})]
				})
			})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-12 md:px-8 md:pb-20 md:pt-16 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-end",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-widest text-fiber",
				children: VOLUME_LINE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight md:text-7xl",
				children: "The charge lives in the stalk’s fiber."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-muted",
				children: ["by ", EDITION.author]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cited, { text: "What people call a hemp battery is a laboratory supercapacitor from 2013. Its electrodes are carbon sheets, ten to thirty nanometers thick, made from hemp bast fiber. [1] An outside source can charge it again. Using it is discharge, which is not the same step." })
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiberMark, {})]
	});
}
function FiberMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 200 200",
		className: "mx-auto w-40 lg:w-full",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "100",
				cy: "100",
				r: "92",
				fill: "none",
				stroke: "var(--color-line)",
				strokeWidth: "10"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "100",
				cy: "100",
				r: "64",
				fill: "none",
				stroke: "var(--color-fiber)",
				strokeWidth: "18"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "100",
				cy: "100",
				r: "36",
				fill: "none",
				stroke: "var(--color-kiln)",
				strokeWidth: "6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "100",
				cy: "100",
				r: "22",
				fill: "var(--color-paper-deep)"
			})
		]
	});
}
function Caution() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		className: "border-y border-kiln/40 bg-kiln/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-5 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium",
				children: "Not a procedure. Read Stay safe before the stations."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-3xl text-sm leading-relaxed text-muted md:text-base",
				children: "Do not mix electrolytes. Do not neutralize chemicals at home. The lab path uses a hydrothermal autoclave, potassium hydroxide, and a furnace near 800°C. Drain cleaner, a pressure cooker, and a kiln are not stand-ins. If you need a cell, buy one that was certified."
			})]
		})
	});
}
function ChargeAndUse() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16",
		"aria-labelledby": "charge-title",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-sm italic text-fiber",
				children: "Before the steps"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "charge-title",
				className: "mt-3 max-w-3xl font-display text-4xl tracking-tight md:text-5xl",
				children: "Charge, discharge, and recharge are three words."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-4 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						title: "Charge",
						body: "An outside power source forces the ions apart and stores energy in the cell."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						title: "Discharge",
						body: "The cell is in use. The ions flow back through the circuit, and energy comes out. That is discharge, not a recharge."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						title: "Recharge",
						body: "Only after discharge. You connect an outside source again and put the energy back. The ions returning during use are not that."
					})
				]
			})
		]
	});
}
function Section({ id, kicker, title, lede, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: "scroll-mt-28 border-t border-line py-14 md:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm italic text-fiber",
					children: kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-3xl font-display text-4xl tracking-tight md:text-5xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-lg leading-relaxed text-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cited, { text: lede })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children
				})
			]
		})
	});
}
function Fact({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-card border border-line bg-surface p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-medium",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm leading-relaxed text-muted",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cited, { text: body })
		})]
	});
}
//#endregion
export { Home as component };
