import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-kjoUljAS.js
var import_jsx_runtime = require_jsx_runtime();
var EDITION = {
	series: "The Education Revolution Pocket Guide",
	volume: `Volume 30`,
	title: "Bast",
	author: "Blue and the Awesome Dudes",
	year: "2026"
};
var VOLUME_LINE = `${EDITION.series}, ${EDITION.volume}: ${EDITION.title}`;
var pages = [
	{
		href: "/start",
		label: "Start here"
	},
	{
		href: "/safe",
		label: "Stay safe"
	},
	{
		href: "/",
		label: "Guide"
	},
	{
		href: "/glossary",
		label: "Glossary"
	},
	{
		href: "/disclaimer",
		label: "Disclaimer"
	},
	{
		href: "/privacy",
		label: "Privacy"
	}
];
function Shell({ children, sections }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#content",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-fiber focus:px-4 focus:py-2 focus:text-fiber-ink",
				children: "Skip to the guide"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 md:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "/",
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-xl leading-none tracking-tight",
							children: EDITION.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate text-xs text-muted",
							children: EDITION.volume
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": "Series pages",
						className: "flex min-w-0 gap-1 overflow-x-auto",
						children: pages.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							className: "inline-flex min-h-11 items-center px-2.5 text-sm text-muted hover:text-ink sm:px-3",
							children: item.label
						}, item.href))
					})]
				}), sections ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Guide sections",
					className: "mx-auto flex max-w-6xl gap-1 overflow-x-auto px-3 pb-2 md:px-6",
					children: sections.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "inline-flex min-h-11 items-center px-2.5 text-sm text-fiber",
						children: item.label
					}, item.href))
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "content",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 py-8 text-sm leading-relaxed text-muted md:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: VOLUME_LINE }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1",
							children: ["by ", EDITION.author]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "text-fiber underline decoration-line underline-offset-4",
									href: "/privacy",
									children: "Privacy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									children: " · "
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "text-fiber underline decoration-line underline-offset-4",
									href: "/disclaimer",
									children: "Disclaimer"
								})
							]
						})
					]
				})
			})
		]
	});
}
function Page({ kicker, title, lede, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-widest text-fiber",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl tracking-tight md:text-5xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg leading-relaxed text-muted",
				children: lede
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-4 text-base leading-relaxed",
				children
			})
		]
	});
}
//#endregion
export { VOLUME_LINE as i, Page as n, Shell as r, EDITION as t };
