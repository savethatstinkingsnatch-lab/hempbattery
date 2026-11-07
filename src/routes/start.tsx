import { createFileRoute } from "@tanstack/react-router";
import { Page, Shell } from "@/components/shell";
import { EDITION, VOLUME_LINE } from "@/data/edition";

export const Route = createFileRoute("/start")({ component: Start });

function Start() {
  return (
    <Shell>
      <Page
        kicker={EDITION.series}
        title="Start here"
        lede={`${VOLUME_LINE}, by ${EDITION.author}. A reading of one 2013 laboratory supercapacitor. Not a shop class.`}
      >
        <p>Read Stay safe before the six stations. The stations name temperatures a lab reported. They do not give amounts, and they are not steps to follow.</p>
        <p>
          Then the fiber drawing, the charge slider, and the numbers. Raising the slider is charging, and that takes an
          outside source. Ions flowing back while the cell is used are discharge.
        </p>
        <p>
          A marker such as [1] sits on the sentence it supports. It means that source says that sentence, not every line
          in the paragraph. What each source does not say is listed with the sources at the bottom of the guide.
        </p>
        <p>
          <a className="text-fiber underline decoration-line underline-offset-4" href="/safe">
            Stay safe
          </a>
          <span aria-hidden="true"> · </span>
          <a className="text-fiber underline decoration-line underline-offset-4" href="/">
            The guide
          </a>
          <span aria-hidden="true"> · </span>
          <a className="text-fiber underline decoration-line underline-offset-4" href="/glossary">
            Glossary
          </a>
        </p>
      </Page>
    </Shell>
  );
}
