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
        <p>
          <Cited text="Potassium hydroxide and sulfuric acid injure skin, eyes, and the airway. NIOSH says to prevent skin and eye contact with potassium hydroxide, and it lists sulfuric acid as a corrosive that burns and that reacts violently with water. [9] [11] Do not pour either one, or the wash water, down a drain, onto the ground, or into a storm sewer. Use an approved hazardous-waste program. EPA names pouring this kind of waste down the drain as improper disposal. [10]" />
        </p>
        <p>
          <Cited text="Do not heat plant fiber in a sealed kitchen pot, and do not acidify one. The methods use diluted sulfuric acid in a sealed stainless steel autoclave at 180°C, not plain hot water. [1] A failed seal is a chemical burn and a steam blast. A pressure cooker is the wrong tool. This page does not give the acid strength or the hold time as a procedure." />
        </p>
        <p>Do not heat potassium hydroxide in an oven, a grill, or a pottery kiln. The activation step is a furnace, hundreds of degrees hotter than a kitchen, with a melt that burns skin and eyes before it is hot.</p>
        <p>
          <Cited text="As of November 8, 2026, the statute in force defines hemp by delta-9 THC of not more than 0.3 percent on a dry-weight basis, not “under 0.3 percent.” [4] A rewrite of that plant definition, to total THC including THCA, is scheduled for December 11, 2026. [4] [7] That date is not when THCA testing begins. USDA production testing already requires a total THC result that counts THCA, because the acid can convert to delta-9 THC. [12] Growing still requires a license or authorization under a state hemp program, a tribal hemp program, or the USDA hemp program. This page is not that license, and it is not legal advice. [5]" />
        </p>
        <p>If you need a rechargeable cell, buy one that was certified. Studying this paper does not require owning potassium hydroxide.</p>
      </Page>
    </Shell>
  );
}
