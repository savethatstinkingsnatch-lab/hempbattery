import { useEffect, useState } from "react";

function readList(key: string): string[] {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.every((item) => typeof item === "string")) {
      return parsed;
    }
  } catch {
    /* ignore broken storage */
  }
  return [];
}

export function useSeen(key: string) {
  const [seen, setSeen] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setSeen(readList(key));
    setReady(true);
  }, [key]);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(key, JSON.stringify(seen));
  }, [key, ready, seen]);

  return {
    seen,
    ready,
    mark(id: string) {
      setSeen((current) => (current.includes(id) ? current : [...current, id]));
    },
  };
}

export function useAnswers(key: string) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw) {
        const parsed: unknown = JSON.parse(raw);
        if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
          const next: Record<string, string> = {};
          for (const [id, value] of Object.entries(parsed)) {
            if (typeof value === "string") next[id] = value;
          }
          setAnswers(next);
        }
      }
    } catch {
      /* ignore broken storage */
    }
    setReady(true);
  }, [key]);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(key, JSON.stringify(answers));
  }, [answers, key, ready]);

  return {
    answers,
    ready,
    choose(id: string, value: string) {
      setAnswers((current) => ({ ...current, [id]: value }));
    },
  };
}
