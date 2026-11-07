import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as Page, r as Shell, t as EDITION } from "./shell-kjoUljAS.mjs";
import { t as SourcesList } from "./sources-list-C4n-y1oX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/disclaimer-Cwk6J1Bj.js
var import_jsx_runtime = require_jsx_runtime();
function Disclaimer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		kicker: EDITION.author,
		title: "Disclaimer",
		lede: "This pocket guide is for learning. It is not a procedure, a license, or a promise that another lab will match the 2013 numbers.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "It is not engineering advice, not legal advice, and not instructions for making a cell. Do not mix electrolytes. Do not neutralize chemicals at home." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Temperatures and measured figures are tied to the sources at the bottom of the guide. The layered-wall story is marked as the authors’ explanation. The 12 Wh/kg figure is quoted as the abstract gives it, without a guess about what the kilogram includes." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Hemp law is quoted from the statute and from the USDA page. States and tribes add their own rules. Nothing here is a license to grow." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"Copyright ",
				EDITION.year,
				", ",
				EDITION.author,
				". All rights reserved."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourcesList, {})
		]
	}) });
}
//#endregion
export { Disclaimer as component };
