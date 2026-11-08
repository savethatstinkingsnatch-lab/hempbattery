import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as Page, r as Shell } from "./shell-kjoUljAS.mjs";
import { t as Cited } from "./cited-COH1AeM_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/glossary-BCV6rqYh.js
var import_jsx_runtime = require_jsx_runtime();
var terms = [
	{
		term: "Bast",
		meaning: "The long fiber in the bark of the hemp stalk. It is the precursor the 2013 paper reports. [1]"
	},
	{
		term: "Hurd",
		meaning: "The woody core inside the stalk. The 2013 paper starts from bast and does not test hurd, so this guide does not claim hurd cannot make a carbon. [1] [6]"
	},
	{
		term: "Supercapacitor",
		meaning: "The kind of cell the paper built. Ions sit at the carbon surface. It is not a lithium-ion battery."
	},
	{
		term: "Charge",
		meaning: "An outside power source forces ions apart and puts energy into the cell."
	},
	{
		term: "Discharge",
		meaning: "The cell is in use. Ions flow back and energy comes out. This is not recharging."
	},
	{
		term: "Recharge",
		meaning: "Connecting an outside source again, after discharge, to put the energy back."
	},
	{
		term: "Electric double layer",
		meaning: "The piled-up ions at the carbon surface. That surface includes the walls inside the pores."
	},
	{
		term: "Pore",
		meaning: "A tiny opening in the carbon. Ions can reach the carbon wall inside it. That is not the same as dissolving into the solid."
	},
	{
		term: "Hydrothermal carbonization",
		meaning: "Diluted sulfuric acid in a sealed stainless steel autoclave, not plain hot water. The methods report 180°C for 24 hours. [1] ASME describes that hold as pressure cooking and does not name the acid. [3]"
	},
	{
		term: "Activation",
		meaning: "The furnace step with potassium hydroxide. The paper discusses 700–800°C. The authors propose that this is when the sheets separate. That proposal is not a recipe. [6]"
	},
	{
		term: "Ionic liquid",
		meaning: "The electrolyte family in the headline tests. This guide does not say how to mix one."
	},
	{
		term: "Nanosheet",
		meaning: "The thinnest sheets the paper reports, about 10–30 nanometers, are the 800°C sample, CNS-800. Sheets from the cooler activation runs were thicker. [1]"
	}
];
function Glossary() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, {
		kicker: "Words",
		title: "Glossary",
		lede: "Short meanings for this volume. Where a word is the authors’ proposal rather than a measurement, it says so.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
			className: "divide-y divide-line border-y border-line",
			children: terms.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "font-medium",
					children: item.term
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "text-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cited, { text: item.meaning })
				})]
			}, item.term))
		})
	}) });
}
//#endregion
export { Glossary as component };
