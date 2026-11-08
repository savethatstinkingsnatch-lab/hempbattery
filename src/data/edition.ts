/** Next number after Volume 29, Sheep. No series repo claims 30. */
export const VOLUME = 30;

export const EDITION = {
  series: "The Education Revolution Pocket Guide",
  seriesShort: "The Education Revolution",
  volume: `Volume ${VOLUME}`,
  title: "Hemp Batteries",
  author: "Blue and the Awesome Dudes",
  year: "2026",
} as const;

/** Visible name: header, browser title, and share card. */
export const DISPLAY_TITLE = `${EDITION.volume}: ${EDITION.title}`;

export const VOLUME_LINE = `${EDITION.series}, ${DISPLAY_TITLE}`;
