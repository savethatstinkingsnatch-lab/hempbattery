import { createFileRoute } from "@tanstack/react-router";
import { Page, Shell } from "@/components/shell";
import { SourcesList } from "@/components/sources-list";
import { EDITION } from "@/data/edition";

export const Route = createFileRoute("/disclaimer")({ component: Disclaimer });

function Disclaimer() {
  return (
    <Shell>
      <Page
        kicker={EDITION.author}
        title="Disclaimer"
        lede="This pocket guide is for learning. It is not a procedure, a license, or a promise that another lab will match the 2013 numbers."
      >
        <p>It is not engineering advice, not legal advice, and not instructions for making a cell. Do not mix electrolytes. Do not neutralize chemicals at home.</p>
        <p>Temperatures and measured figures are tied to the sources at the bottom of the guide. The layered-wall story is marked as the authors’ explanation. The 12 Wh/kg figure is quoted as the abstract gives it, without a guess about what the kilogram includes.</p>
        <p>Hemp law is quoted from the official U.S. Code and from the USDA page. As of November 8, 2026, the plant test in force is delta-9 THC of not more than 0.3 percent. A total-THC test, including THCA, is scheduled for December 11, 2026. States and tribes add their own rules. Nothing here is a license to grow.</p>
        <p>Copyright {EDITION.year}, {EDITION.author}. All rights reserved.</p>
        <SourcesList />
      </Page>
    </Shell>
  );
}
