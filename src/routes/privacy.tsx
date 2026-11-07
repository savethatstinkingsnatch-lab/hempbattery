import { createFileRoute } from "@tanstack/react-router";
import { Page, Shell } from "@/components/shell";

export const Route = createFileRoute("/privacy")({ component: Privacy });

function Privacy() {
  return (
    <Shell>
      <Page
        kicker="Your device only"
        title="Privacy"
        lede="This guide does not collect your name, email, or any personal information."
      >
        <p>Station marks and check answers are saved only on your own device, in its local storage. They are not sent to us. Clearing the site data in your browser removes them.</p>
        <p>The guide does not ask you to sign in. It does not run a form. Links to the papers and to the statute leave this volume for those sites, which have their own practices.</p>
      </Page>
    </Shell>
  );
}
