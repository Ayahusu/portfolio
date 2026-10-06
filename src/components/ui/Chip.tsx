import type { ReactNode } from "react";

export default function Chip({ children }: { children: ReactNode }) {
    return (
        <span className="rounded-lg border border-line bg-surface px-3 py-1.5 text-sm font-medium text-ink">
            {children}
        </span>
    );
}