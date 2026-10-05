import {
    type ReactNode,
} from "react";
import { FaGithub } from "react-icons/fa6";
import {
    FiArrowUpRight,
} from "react-icons/fi";
import { projects, type Project } from "../Data";

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
function ProjectPreview({ project }: { project: Project }) {
    if (project.image) {
        return (
            <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="size-full object-cover"
                loading="lazy"
            />
        );
    }
    // Fallback until you add a screenshot: set `image` in Data.ts
    return (
        <div className="relative grid size-full place-items-center bg-accent-soft">
            <div className="hero-grid absolute inset-0" aria-hidden="true" />
            <span className="relative font-display text-7xl font-extrabold tracking-tighter text-accent">
                {project.title
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)}
            </span>
        </div>
    );
}

export default function Projects() {
    return (
        <Section
            id="projects"
            title="What I have built"
            intro="Projects where I owned the backend design, from the data model to the API."
        >
            <div className="flex flex-col gap-6">
                {projects.map((p) => (
                    <article
                        key={p.title}
                        className="grid gap-6 rounded-3xl border border-line bg-surface p-4 transition-colors hover:border-accent md:grid-cols-[5fr_7fr] md:p-5"
                    >
                        <div className="aspect-16/10 overflow-hidden rounded-2xl">
                            <ProjectPreview project={p} />
                        </div>

                        <div className="flex flex-col p-1 md:p-4">
                            <h3 className="font-display text-3xl font-semibold tracking-tight">
                                {p.title}
                            </h3>
                            <p className="mt-3 max-w-[56ch] text-lg leading-relaxed text-muted">
                                {p.description}
                            </p>

                            <ul className="mt-5 flex flex-wrap gap-2">
                                {p.stack.map((t) => (
                                    <li
                                        key={t}
                                        className="rounded-md bg-accent-soft px-2.5 py-1 text-sm font-medium text-accent"
                                    >
                                        {t}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={p.code}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-auto inline-flex w-fit items-center gap-2 pt-6 font-semibold text-ink transition-colors hover:text-accent"
                            >
                                <FaGithub aria-hidden="true" /> View code
                                <FiArrowUpRight aria-hidden="true" />
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    );
}