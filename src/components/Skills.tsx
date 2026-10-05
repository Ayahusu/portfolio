import {
    type ReactNode,
} from "react";
import { skills } from "../Data";

interface SectionProps {
    id: string;
    title: string;
    intro?: string;
    children: ReactNode;
}

function Chip({ children }: { children: ReactNode }) {
    return (
        <span className="rounded-lg border border-line bg-surface px-3 py-1.5 text-sm font-medium text-ink">
            {children}
        </span>
    );
}

function Section({ id, title, intro, children }: SectionProps) {
    return (
        <section id={id} className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <div className="mb-12 max-w-2xl">
                <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
                    {title}
                </h2>
                {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
            </div>
            {children}
        </section>
    );
}

export default function Skills() {
    return (
        <Section
            id="skills"
            title="Technical toolkit"
            intro="The languages, frameworks and tools I use day to day."
        >
            <div className="divide-y divide-line border-y border-line">
                {skills.map(({ group, items }) => (
                    <div
                        key={group}
                        className="grid gap-4 py-8 md:grid-cols-[220px_1fr] md:items-start md:gap-10"
                    >
                        <h3 className="font-display text-2xl font-semibold">{group}</h3>
                        <ul className="flex flex-wrap gap-2.5">
                            {items.map((item) => (
                                <li key={item}>
                                    <Chip>{item}</Chip>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}