/** Next number after Volume 29, Sheep. No series repo claims 30. */
export const VOLUME = 30;

export const EDITION = {
  series: "The Education Revolution Pocket Guide",
  volume: `Volume ${VOLUME}`,
  title: "Bast",
  author: "Blue and the Awesome Dudes",
  year: "2026",
} as const;

export const VOLUME_LINE = `${EDITION.series}, ${EDITION.volume}: ${EDITION.title}`;
