import {
    type CSSProperties,
    type ReactNode,
} from "react";
import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import {
    FiDownload,
    FiSend,
} from "react-icons/fi";
import { profile } from "../Data";

interface SocialLink {
    label: string;
    href: string;
    Icon: IconType;
}

const SOCIALS: SocialLink[] = [
    { label: "GitHub", href: profile.socials.github, Icon: FaGithub },
    { label: "LeetCode", href: profile.socials.leetcode, Icon: SiLeetcode },
    { label: "LinkedIn", href: profile.socials.linkedin, Icon: FaLinkedinIn },
];

const btnBase =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold transition active:translate-y-px";
const btnSolid = `${btnBase} bg-accent text-accent-ink hover:brightness-110`;
const btnGhost = `${btnBase} border-[1.5px] border-ink text-ink hover:bg-ink hover:text-bg`;

function ResponseCard() {
    const { name, role, card } = profile;
    const k = "text-[#8fb0ff]";
    const s = "text-[#9be3c0]";
    const b = "text-[#ffc680]";

    const lines: ReactNode[] = [
        <>{"{"}</>,
        <>
            {"  "}
            <span className={k}>"name"</span>: <span className={s}>"{name}"</span>,
        </>,
        <>
            {"  "}
            <span className={k}>"role"</span>: <span className={s}>"{role}"</span>,
        </>,
        <>
            {"  "}
            <span className={k}>"stack"</span>: [
            {card.stack.map((item, i) => (
                <span key={item}>
                    <span className={s}>"{item}"</span>
                    {i < card.stack.length - 1 ? ", " : ""}
                </span>
            ))}
            ],
        </>,
        <>
            {"  "}
            <span className={k}>"open_to_work"</span>:{" "}
            <span className={b}>{String(card.openToWork)}</span>
        </>,
        <>{"}"}</>,
    ];

    return (
        <figure
            aria-label="Profile summary shown as an API response"
            className="m-0 overflow-hidden rounded-2xl border border-white/10 bg-code text-[#d6e0f7] shadow-2xl shadow-[#0e1a33]/30 dark:shadow-black/50"
        >
            <figcaption className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4 font-mono text-[13px]">
                <span>
                    <b className={`mr-1.5 font-medium ${k}`}>GET</b>
                    /api/developers/ayahusu
                </span>
                <span className={`inline-flex items-center gap-2 ${s}`}>
                    <i className="size-2 rounded-full bg-ok" aria-hidden="true" />
                    200 OK
                </span>
            </figcaption>
            <pre className="m-0 overflow-x-auto px-5 pb-8 pt-6 font-mono text-[clamp(0.8rem,1.5vw,0.98rem)] leading-[1.9]">
                {lines.map((line, i) => (
                    <code
                        key={i}
                        className="print-line block whitespace-pre"
                        style={{ "--i": i } as CSSProperties}
                    >
                        {line}
                    </code>
                ))}
            </pre>
        </figure>
    );
}

export default function Hero() {
    return (
        <main id="home" className="relative isolate overflow-hidden">
            {/* background decoration */}
            <div className="hero-grid absolute inset-0 -z-10" aria-hidden="true" />
            <div
                className="hero-glow absolute -right-40 top-10 -z-10 size-160"
                aria-hidden="true"
            />

            <div className="mx-auto grid min-h-screen max-w-6xl items-center gap-14 px-6 pb-20 pt-32 lg:grid-cols-[0.9fr_0.9fr] lg:gap-10">
                <div>
                    <p className="mb-4 text-lg font-semibold text-accent">{profile.role}</p>
                    <h1 className="font-display text-6xl font-extrabold leading-[0.95] tracking-tighter sm:text-7xl lg:text-8xl">
                        Ayahusu
                        <br />
                        Thami
                    </h1>
                    <p className="mt-7 max-w-[34ch] text-xl leading-relaxed text-muted">
                        {profile.lead}
                    </p>

                    <div className="mt-9 flex flex-wrap gap-3">
                        <a href="#contact" className={btnSolid}>
                            <FiSend aria-hidden="true" /> Contact me
                        </a>
                        <a href={profile.cv} download className={btnGhost}>
                            <FiDownload aria-hidden="true" /> Download CV
                        </a>
                    </div>

                    <ul className="mt-8 flex gap-2.5">
                        {SOCIALS.map(({ label, href, Icon }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={label}
                                    className="grid size-11 place-items-center rounded-xl border border-line bg-surface text-xl text-ink transition hover:border-accent hover:bg-accent-soft hover:text-accent"
                                >
                                    <Icon aria-hidden="true" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <ResponseCard />
            </div>
        </main>
    );
}