import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionProps {
    id: string;
    title: string;
    intro?: string;
    children: ReactNode;
}

export default function Section({ id, title, intro, children }: SectionProps) {
    return (
        <section id={id} className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <Reveal className="mb-12 max-w-2xl">
                <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
                    {title}
                </h2>
                {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
            </Reveal>
            {children}
        </section>
    );
}