import {
    type ReactNode,
} from "react";
import { education } from "../Data";

interface SectionProps {
    id: string;
    title: string;
    intro?: string;
    children: ReactNode;
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

export default function About() {
    const strong = "font-semibold text-ink";
    return (
        <Section id="about" title="About me">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="max-w-[60ch] space-y-6 text-lg leading-[1.8] text-muted">
                    <p>
                        I am a <span className={strong}>full-stack developer</span> who enjoys
                        building scalable, high-performance web applications. My strength is
                        robust backends in <span className={strong}>Django and Node.js</span>,
                        paired with dynamic frontends in <span className={strong}>React</span>.
                    </p>
                    <p>
                        Beyond writing code, I care about{" "}
                        <span className={strong}>system architecture</span> and{" "}
                        <span className={strong}>algorithmic efficiency</span>. I enjoy designing
                        real-time systems and tuning database performance so applications are
                        ready for production.
                    </p>
                    <blockquote className="border-l-4 border-accent pl-5 italic text-ink">
                        I am working towards becoming a software engineer who builds tools that
                        are as reliable as they are impactful.
                    </blockquote>
                </div>

                <div className="h-fit rounded-3xl border border-line bg-surface p-7">
                    <h3 className="font-display text-2xl font-semibold">Education</h3>
                    <ol className="mt-6 space-y-8 border-l-4 border-line pl-6">
                        {education.map((e) => (
                            <li key={e.title} className="relative">
                                <span
                                    aria-hidden="true"
                                    className={`absolute -left-8.25 top-1 size-3 rounded-full ring-4 ring-surface ${e.current ? "bg-accent" : "bg-line"
                                        }`}
                                />
                                <p
                                    className={`text-sm font-semibold ${e.current ? "text-accent" : "text-muted"
                                        }`}
                                >
                                    {e.when}
                                </p>
                                <p className="mt-1 text-lg font-semibold">{e.title}</p>
                                <p className="text-muted">{e.place}</p>
                                {e.note && (
                                    <span className="mt-2 inline-block rounded-md bg-accent-soft px-2.5 py-1 text-sm font-medium text-accent">
                                        {e.note}
                                    </span>
                                )}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </Section>
    );
}