import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cited-COH1AeM_.js
var import_jsx_runtime = require_jsx_runtime();
function Cited({ text }) {
	const parts = text.split(/(\[\d+\])/g);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: parts.map((part, index) => {
		const match = /^\[(\d+)\]$/.exec(part);
		if (!match) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: part }, index);
		const n = match[1];
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: `/#source-${n}`,
			className: "text-fiber",
			children: [
				"[",
				n,
				"]"
			]
		}, index);
	}) });
}
//#endregion
export { Cited as t };
