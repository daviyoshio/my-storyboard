import type { ReactNode } from "react";

/** Small rounded pill used for skill / competency tags. */
export function Tag({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "accent";
}) {
  const tones = {
    default: "bg-[var(--color-tag-bg)] text-ink-soft",
    accent: "bg-accent-soft text-accent-ink",
  } as const;

  return (
    <span
      className={`inline-flex items-center rounded-pill px-2.5 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.04em] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
