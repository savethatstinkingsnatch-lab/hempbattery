import { checks } from "@/data/guide";
import { useAnswers } from "@/lib/memory";

export function ReadingCheck() {
  const { answers, choose } = useAnswers("bast-check");
  const answered = checks.filter((item) => answers[item.id]);
  const correct = answered.filter((item) => answers[item.id] === item.answer).length;

  return (
    <div>
      <ol className="flex flex-col gap-6">
        {checks.map((item, index) => {
          const picked = answers[item.id];
          return (
            <li key={item.id} className="rounded-card border border-line bg-surface p-4 sm:p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-muted">
                Check {index + 1} of {checks.length}
              </p>
              <p className="mt-2 font-display text-2xl tracking-tight">{item.prompt}</p>
              <div className="mt-4 grid gap-2" role="group" aria-label={item.prompt}>
                {item.choices.map((choice) => {
                  const on = picked === choice.id;
                  const right = picked !== undefined && choice.id === item.answer;
                  const wrong = on && choice.id !== item.answer;
                  return (
                    <button
                      key={choice.id}
                      type="button"
                      aria-pressed={on}
                      onClick={() => choose(item.id, choice.id)}
                      className={
                        "min-h-11 rounded-xl border px-4 py-3 text-left text-sm leading-snug sm:text-base " +
                        (right
                          ? "border-fiber bg-fiber text-fiber-ink"
                          : wrong
                            ? "border-kiln bg-paper text-ink"
                            : on
                              ? "border-fiber bg-paper"
                              : "border-line bg-paper hover:border-fiber")
                      }
                    >
                      {choice.label}
                    </button>
                  );
                })}
              </div>
              {picked ? (
                <p className="mt-3 text-sm leading-relaxed text-muted" aria-live="polite">
                  {picked === item.answer ? "Yes. " : "Not that one. "}
                  {item.why}
                </p>
              ) : null}
            </li>
          );
        })}
      </ol>
      {answered.length === checks.length ? (
        <p className="mt-6 font-display text-2xl tracking-tight" aria-live="polite">
          {correct} of {checks.length} match the paper.
          {correct < checks.length ? " The notes under the misses are the part worth rereading." : " The distinctions held."}
        </p>
      ) : (
        <p className="mt-6 text-sm text-muted">Answer all four. Your picks stay on this browser.</p>
      )}
    </div>
  );
}
