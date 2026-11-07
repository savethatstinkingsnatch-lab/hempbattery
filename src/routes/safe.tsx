import { createFileRoute } from "@tanstack/react-router";
import { Cited } from "@/components/cited";
import { Page, Shell } from "@/components/shell";

export const Route = createFileRoute("/safe")({ component: Safe });

function Safe() {
  return (
    <Shell>
      <Page
        kicker="Before any station"
        title="Stay safe"
        lede="This volume explains a published lab cell. It is not permission to make one."
      >
        <p>Do not mix electrolytes. Do not combine salts, solvents, water, or an ionic liquid to imitate the 2013 cell. This guide gives no recipe for that liquid.</p>
        <p>Do not neutralize chemicals at home. Do not add an acid to a base, a base to a drain, or a “wash” to potassium hydroxide because a lab once rinsed its carbon. Residual alkali is laboratory waste. This page does not describe how to treat it.</p>
        <p>Do not heat plant fiber in a sealed kitchen pot. The hydrothermal step is a pressurized vessel at 180°C. A failed seal is a steam burn, or worse. A pressure cooker is the wrong tool, and it is not safe to eat from afterward.</p>
        <p>Do not heat potassium hydroxide in an oven, a grill, or a pottery kiln. The activation step is a furnace, hundreds of degrees hotter than a kitchen, with a melt that burns skin and eyes before it is hot.</p>
        <p>
          <Cited text="If you grow the plant in the United States, the statute’s line is “not more than 0.3 percent” delta-9 THC on a dry-weight basis, not “under 0.3 percent.” Growing it still requires a license or authorization under a state hemp program, a tribal hemp program, or the USDA hemp program. This page is not that license, and it is not legal advice for your state. [4] [5]" />
        </p>
        <p>If you need a rechargeable cell, buy one that was certified. Studying this paper does not require owning potassium hydroxide.</p>
      </Page>
    </Shell>
  );
}
