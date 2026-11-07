import { i as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider } from "../_libs/@radix-ui/react-slider+[...].mjs";
import { a as Bar, i as CartesianGrid, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-6ayh9n1P.js
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
					}), "Cation, heads for the negative electrode"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "size-3 rounded-full bg-kiln",
						"aria-hidden": "true"
					}), "Anion, heads for the positive electrode"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: "soc-label",
				className: "mt-5 text-sm font-medium",
				children: "State of charge"
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
				children: resting ? "Discharged. Cations and anions are mixed in the electrolyte. The two carbon electrodes look the same, which is why this cell has no designated anode chemistry the way a lithium-ion cell does." : charged ? "Charged. Cations crowd the negative carbon, anions the positive. They are parked on the pore walls, not plated and not inserted into a host crystal. Reverse the current and they drift back. That is the recharge." : "Charging separates the ions. Energy goes up because you have pushed positive and negative charges apart onto a very large carbon surface. The slider does not compute a pack size."
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
		body: "The thin outer layer of the bast fiber. At 180°C in water, under pressure, it does not survive as a sheet. It is not the carbon you keep."
	},
	{
		id: "s2",
		name: "S2, the useful wall",
		range: "Microfibrils about 10–30 nm across",
		body: "The thick middle layer. It is built from cellulose microfibrils. Hydrothermal treatment loosens the ties between them. Molten potassium hydroxide then pries those fibrils apart into carbon nanosheets of roughly the same thickness."
	},
	{
		id: "s3",
		name: "S3, inner wall",
		range: "Also stripped hydrothermally",
		body: "The thin layer facing the hollow core. Like S1, it is removed when hemicellulose and part of the lignin dissolve. What remains to be split is S2."
	},
	{
		id: "lumen",
		name: "Lumen",
		range: "The hollow core",
		body: "A bast fiber is a tube, about 10–30 micrometers across. The lumen is the empty middle. It is not a reservoir of charge. The charge, later, sits on the pore walls of the carbon made from S2."
	}
];
var stations = [
	{
		id: "bast",
		n: "01",
		title: "Separate the bast",
		summary: "The precursor is the long fiber in the stalk bark — not the flower, the seed, or the woody core.",
		hazard: "Dust. This is the only ordinary step.",
		changes: "Industrial hemp is retted and the bast is pulled from the hurd. Bast has the layered, hollow-fiber architecture the rest of the process exploits. Hurd can be charred into ordinary carbon. It does not split into these nanosheets.",
		conditions: "The 2013 work starts from hemp bast fiber. Nothing in the paper depends on flowers, resin, or oil.",
		equipment: "A fiber mill, or hand separation of retted stalk. No chemistry yet.",
		notHome: "Growing hemp is agriculture, and legality depends on where you are. Growing it does not produce a cell. It produces a precursor for a furnace."
	},
	{
		id: "hydro",
		n: "02",
		title: "Loosen the wall in hot water",
		summary: "A sealed vessel holds the fiber at 180°C for 24 hours. The yarn breaks into small pieces of hydrochar.",
		hazard: "Pressurized hot liquid. A failed seal is a steam explosion.",
		changes: "Most of the hemicellulose, and part of the lignin, dissolve. Crystalline cellulose is only partly carbonized. S1 and S3 come away. In S2, the connections between microfibrils loosen, which is the entire point of this step.",
		conditions: "Hydrothermal carbonization at 180°C for 24 hours, as reported for this precursor.",
		equipment: "A hydrothermal autoclave rated for the vapor pressure of water at that temperature, with a chemically compatible liner, in a lab that can vent and contain a failure.",
		notHome: "A kitchen pressure cooker is the wrong vessel. It is not rated for this, it is not meant to hold plant slurry against a failed gasket, and it will contaminate anything you eat from afterwards. There is no safe substitute."
	},
	{
		id: "activate",
		n: "03",
		title: "Split the fibrils with potassium hydroxide",
		summary: "The hydrochar is heated with KOH to 700–800°C. Layers separate into sheets 10–30 nm thick.",
		hazard: "Molten caustic at furnace temperature. Severe burns even before it is hot.",
		changes: "The KOH melt wicks into the loosened gaps and peels S2 into interconnected, partly graphitic nanosheets. It also etches micropores and mesopores. Reported peaks: surface area up to 2,287 m² per gram, mesoporosity up to 58 percent, conductivity about 211–226 S/m. The samples are named by activation temperature — CNS-700, CNS-800, and so on.",
		conditions: "Potassium hydroxide activation between 700°C and 800°C.",
		equipment: "A furnace that can hold that temperature, an inert or controlled atmosphere, a boat that KOH will not destroy, and a fume hood. KOH attacks skin, eyes, aluminum, and glass.",
		notHome: "Do not substitute drain cleaner. Do not use a pottery kiln, a grill, or an oven. The melt is caustic, the off-gas is not something to breathe, and a household scale-up is how people lose eyes and start fires. This step has no domestic version."
	},
	{
		id: "wash",
		n: "04",
		title: "Wash the alkali out",
		summary: "Residual KOH has to leave the carbon, or the electrode and the electrolyte are both ruined.",
		hazard: "Caustic wastewater. It is chemical waste, not sink water.",
		changes: "Washing neutralizes and removes leftover potassium salts so the pores stay open and the surface is carbon, not caustic. Drying leaves a fine black powder of nanosheets. That powder is the active material.",
		conditions: "A laboratory wash to neutral, then drying. The paper’s performance figures are for cleaned carbon.",
		equipment: "Filtration, plenty of rinse water, pH checks, and a waste container rated for alkali.",
		notHome: "Pouring this wash down a drain dumps caustic into plumbing and the watershed. The powder is also a fine dust you do not want in your lungs."
	},
	{
		id: "electrode",
		n: "05",
		title: "Make an electrode, not a lump of carbon",
		summary: "Sheets only store charge if they are bound to a current collector, with a path for electrons.",
		hazard: "Solvents and powders, handled in a hood.",
		changes: "The carbon is blended with a conductive additive and a binder, spread as a film on a metal current collector, dried, and pressed. Two films, matched in mass, become the two electrodes. This page does not give a slurry recipe. A guessed ratio will not reproduce the paper, and it is not the dangerous-looking step — the furnace was.",
		conditions: "Standard electrode fabrication. The published capacitance is per gram of this active carbon, measured on a potentiostat, not on a multimeter at the kitchen table.",
		equipment: "A coater or a lab draw-down, a vacuum oven, a calender or press, a balance.",
		notHome: "Smearing charcoal onto foil does not make these nanosheets, and it does not make a stable rechargeable cell. Solvents used in electrode slurries are often flammable and toxic."
	},
	{
		id: "cell",
		n: "06",
		title: "Assemble a two-electrode test cell",
		summary: "Two carbon electrodes, a separator, and an ionic liquid. That stack is the rechargeable device.",
		hazard: "A sealed energy-storage cell. Short it, and the energy leaves as heat.",
		changes: "Ions from the electrolyte move to opposite electrodes when you charge the cell, and move back when you discharge it. Nothing is burned. In this device the ions sit on the carbon surface — an electric double layer — rather than inserting into a crystal the way lithium does in a lithium-ion battery. The paper’s full device stored up to about 12 Wh per kilogram.",
		conditions: "Ionic-liquid electrolyte. The headline results span roughly 0°C to 100°C. That temperature window is a property of the electrolyte and the carbon, not an invitation to heat a homemade cell.",
		equipment: "A separator, ionic liquid handled dry, a coin-cell or pouch crimp inside a dry environment, and a potentiostat to charge and measure it.",
		notHome: "Do not invent an electrolyte. Water with table salt is a different, low-voltage experiment, and sealing it between random metals makes hydrogen, corrosion, and a mess — not this device. Buy a commercial cell if you need a rechargeable battery. Study this one in a lab."
	}
];
var myths = [
	{
		claim: "Hemp beats graphene, so it replaces a lithium battery.",
		fact: "The 2013 carbons matched graphene electrodes of that era on a supercapacitor Ragone plot. They are partly graphitic nanosheets, not graphene, and the full device stored about 12 Wh/kg. A modern lithium-ion cell is often 150–250 Wh/kg. Different job."
	},
	{
		claim: "You can grow a battery.",
		fact: "You can grow a precursor, where that crop is legal. The cell is a product of a pressure vessel and an 800°C furnace. The plant does not arrive charged."
	},
	{
		claim: "It is a lithium battery made of hemp.",
		fact: "The device in the paper contains no lithium. Two hemp-carbon electrodes, a separator, an ionic liquid. Rechargeable, yes. A lithium-ion cell, no."
	},
	{
		claim: "Any part of the plant works the same.",
		fact: "The sheet morphology comes from the bast fiber’s layered wall. Flower, leaf, and hurd do not follow the same path, even if they can be burned into some other carbon."
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
		why: "The hollow, layered bast fiber is what splits into nanosheets. The flower is irrelevant to the chemistry."
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
		why: "Hydrothermal treatment only partly carbonizes the cellulose. The furnace and the KOH still have to finish the job."
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
		why: "Charge sits on the carbon surface in an electric double layer. It is rechargeable storage. It is not a lithium-ion battery."
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
		why: "After washing, the KOH is gone. What remains is carbon area for the double layer. That is also why the cell can dump its energy quickly — the ions never have to push inside a crystal."
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
					children: layer.body
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
							children: split ? "Show the bound fibrils" : "Pry them into sheets"
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
						children: split ? "Molten KOH at 700–800°C finishes the separation. Each bar stands for a sheet on the order of 10–30 nanometers thick, now full of pores." : "Hydrothermal treatment only loosens the ties. The microfibrils are still a wall, not a stack of free sheets."
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
			note: "Farads per gram of active carbon. The 0°C point is not on this chart: at a milder 10 A/g the electrode held 106 F/g. Mixing that point in would make the cold result look weaker than the test it was given.",
			data: capacitance,
			dataKey: "farads",
			unit: "F/g"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
			kicker: "Energy at 20 kW/kg",
			title: "Active mass, not the whole device",
			note: "Watt-hours per kilogram of active material, at 20, 60, and 100°C. The sealed device — both electrodes, electrolyte, separator — reached about 12 Wh/kg. Use 12, not these bars, if you are comparing with a commercial cell.",
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
				children: note
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
						children: [picked === item.answer ? "Yes. " : "Not that one. ", item.why]
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
			children: body
		})]
	});
}
var nav = [
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#content",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-fiber focus:px-4 focus:py-2 focus:text-fiber-ink",
				children: "Skip to the guide"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "content",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Caution, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Devices, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						id: "fiber",
						kicker: "01 — The precursor",
						title: "A hollow fiber, not a leaf.",
						lede: "The carbon in this cell starts as bast, the long fiber in hemp bark. Its wall is three layers around an empty core. The process is a way of peeling the middle layer into sheets.",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiberFigure, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-2xl text-base leading-relaxed text-muted",
							children: "Hemp here means industrial fiber hemp. The flowers are not an electrode. The woody hurd inside the stalk can be turned into charcoal, but it does not have this layered wall, so it does not become these nanosheets."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						id: "process",
						kicker: "02 — The laboratory path",
						title: "Six stations, from stalk to stack.",
						lede: "This is how the 2013 cell was made: hydrothermal carbonization, then potassium hydroxide at furnace temperature, then a washed carbon powder built into a supercapacitor. Read it as a map of the paper. It is not a procedure, and it has no safe home version.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stations, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						id: "cell",
						kicker: "03 — How it charges",
						title: "Ions park on the carbon. They do not go inside it.",
						lede: "A supercapacitor is rechargeable because the ions can be sent back. Drag the charge and watch them separate. That separation, spread over thousands of square meters of pore wall in a single gram, is the stored energy.",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CellSim, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-4 md:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
									title: "Recharge",
									body: "Reverse the current and the ions drift back into the liquid. You are not regenerating a chemical fuel."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
									title: "Speed",
									body: "Nothing has to squeeze into a crystal lattice, so the cell can take and give current that would stress a lithium-ion electrode."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
									title: "The limit",
									body: "Surface storage holds less energy per kilogram than insertion chemistry. That is the trade the paper actually made."
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						id: "numbers",
						kicker: "04 — What was measured",
						title: "The figures people round off.",
						lede: "Wang, Mitlin, and colleagues, ACS Nano, 2013. Ionic-liquid cells, carbon from hemp bast. The bars below are the paper’s points, not a projection of a product you could buy.",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublishedFigures, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-card border border-line bg-surface p-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-6xl tabular-nums tracking-tight text-fiber",
											children: "12"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 font-medium",
											children: "Wh/kg, the full device"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm leading-relaxed text-muted",
											children: "Maximum energy density of the assembled supercapacitor. Higher than commercial supercapacitors they compared against in 2013. This is the honest “battery” number."
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-card border border-line bg-surface p-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-6xl tabular-nums tracking-tight",
											children: "150–250"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 font-medium",
											children: "Wh/kg, a modern lithium-ion cell"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm leading-relaxed text-muted",
											children: "A typical range, for scale only — not a result from this paper. Hemp carbon did not catch a lithium-ion cell on energy. It was never trying to be one."
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-2xl text-sm leading-relaxed text-muted",
								children: "Power is the other half. At 20 kW per kilogram of active material the electrode still held 19, 34, and 40 Wh/kg at 20°C, 60°C, and 100°C. A 2013 ASME account of the same work quotes about 49 kW/kg against about 17 kW/kg for commercial electrodes. Those are press figures; the paper’s Ragone point used here is 20 kW/kg. Conductivity of the sheets was about 211–226 S/m."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						id: "limits",
						kicker: "05 — What it is not",
						title: "Four claims that outran the paper.",
						lede: "The popular version collapsed a supercapacitor, a biomass precursor, and a lithium battery into one story. These are the seams.",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "grid gap-4",
							children: myths.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-card border border-line bg-surface p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xl tracking-tight",
									children: item.claim
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 max-w-2xl leading-relaxed text-muted",
									children: item.fact
								})]
							}, item.claim))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 rounded-card border border-kiln/50 bg-paper p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: "If you need a rechargeable battery"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
								children: "Buy a certified cell. Hemp-derived hard carbon has been studied separately as an anode, including in sodium-ion work, where ions do insert into the carbon. That is a different experiment, with different electrolytes and different ways to fail. It is not this guide, and it is not a weekend build either."
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						id: "check",
						kicker: "06 — Hold the distinctions",
						title: "Four questions. No scoreboard beyond the page.",
						lede: "They ask whether the precursor, the hydrothermal step, the device, and the surface area stayed separate in your head.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadingCheck, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
						className: "border-t border-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-5 py-12 md:px-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-2xl tracking-tight",
									children: "Sources"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-4 max-w-2xl space-y-3 text-sm leading-relaxed text-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										"Wang et al., “Interconnected carbon nanosheets derived from hemp for ultrafast supercapacitors with high energy,”",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											className: "text-fiber underline decoration-line underline-offset-4",
											href: "https://doi.org/10.1021/nn400731g",
											children: "ACS Nano 2013, 7, 5131–5141"
										}),
										". The temperatures, the nanosheet thickness, the surface area, the capacitance, and the device energy on this page come from that paper."
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										"ASME,",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											className: "text-fiber underline decoration-line underline-offset-4",
											href: "https://www.asme.org/topics-resources/content/hemp-carbon-makes-supercapacitors-superfast",
											children: "“Hemp Carbon Makes Supercapacitors Superfast”"
										}),
										", a popular account of the same work. The 49 kW/kg comparison is theirs, and it is labeled as such above."
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-8 max-w-2xl text-sm leading-relaxed text-muted",
									children: "Bast is an explanation. It is not instructions, not engineering advice, and not a claim that a cell built outside that lab will match these figures. Potassium hydroxide, pressurized hot water, and an 800°C furnace are how people get hurt."
								})
							]
						})
					})
				]
			})
		]
	});
}
function SiteHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#content",
				className: "flex items-baseline gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-xl tracking-tight",
					children: "Bast"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden text-sm text-muted sm:inline",
					children: "Field guide"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Guide",
				className: "flex min-w-0 gap-1 overflow-x-auto",
				children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					className: "inline-flex min-h-11 items-center px-2.5 text-sm text-muted hover:text-ink sm:px-3",
					children: item.label
				}, item.href))
			})]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-12 md:px-8 md:pb-20 md:pt-16 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-end",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-widest text-fiber",
				children: "Hemp bast carbon · a rechargeable cell"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight md:text-7xl",
				children: "The charge lives in the stalk’s fiber."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl",
				children: "What people call a hemp battery is a laboratory supercapacitor. Its electrodes are carbon sheets, ten to thirty nanometers thick, split out of bast fiber. It recharges. It is not a lithium-ion cell, and it is not something you cook."
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
				children: "Not a procedure. A reading of a lab paper."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-3xl text-sm leading-relaxed text-muted md:text-base",
				children: "Reproducing it takes a hydrothermal autoclave, molten potassium hydroxide, and a furnace near 800°C. Those injure people. Drain cleaner, a pressure cooker, and a kiln are not stand-ins. If you want a rechargeable battery, buy one that was certified. Use this page to understand the one that was published."
			})]
		})
	});
}
function Devices() {
	const [mode, setMode] = (0, import_react.useState)("capacitor");
	const capacitor = mode === "capacitor";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16",
		"aria-labelledby": "devices-title",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-sm italic text-fiber",
				children: "Before the steps"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "devices-title",
				className: "mt-3 max-w-3xl font-display text-4xl tracking-tight md:text-5xl",
				children: "Two devices share one plant, and almost nothing else."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-2",
				role: "group",
				"aria-label": "Device type",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeButton, {
					on: capacitor,
					onClick: () => setMode("capacitor"),
					children: "Supercapacitor"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeButton, {
					on: !capacitor,
					onClick: () => setMode("battery"),
					children: "Battery"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 rounded-card border border-line bg-surface p-5 md:p-8",
				children: capacitor ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-wider text-kiln",
					children: "This guide"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-lg leading-relaxed",
					children: "The 2013 device stores charge by parking ions on carbon. Both electrodes are the same hemp-derived sheets. The electrolyte in the headline results is an ionic liquid, so the cell still works from about freezing to 100°C. It is rechargeable in the plain sense: reverse the current, the ions go home."
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-wider text-kiln",
					children: "A different literature"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-lg leading-relaxed",
					children: "A battery stores charge by moving ions into a host material. Researchers have since carbonized hemp into hard carbon and tested it as an anode, including for sodium-ion cells. That chemistry can hold more energy, and it can fail in the ways batteries fail — heat, flammable solvent, plating. It is not what Wang and Mitlin assembled, and this page will not walk through it."
				})] })
			})
		]
	});
}
function ModeButton({ on, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-pressed": on,
		onClick,
		className: "min-h-11 rounded-full px-5 text-sm font-medium " + (on ? "bg-fiber text-fiber-ink" : "border border-line bg-surface text-ink"),
		children
	});
}
function Section({ id, kicker, title, lede, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: "scroll-mt-20 border-t border-line py-14 md:py-20",
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
					children: lede
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
			children: body
		})]
	});
}
//#endregion
export { Home as component };
