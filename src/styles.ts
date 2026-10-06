// Tailwind class strings reused across components.

const btnBase =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold transition active:translate-y-px";

export const btnSolid = `${btnBase} bg-accent text-accent-ink hover:brightness-110`;
export const btnGhost = `${btnBase} border-[1.5px] border-ink text-ink hover:bg-ink hover:text-bg`;

export const field =
    "w-full rounded-xl border border-line bg-bg px-4 py-3 text-base text-ink placeholder:text-muted/70 transition focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/20";