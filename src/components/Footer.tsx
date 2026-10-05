import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import {
    FiMail,
} from "react-icons/fi";
import { profile } from "../Data";

interface NavItem {
    id: string;
    label: string;
}

interface SocialLink {
    label: string;
    href: string;
    Icon: IconType;
}

const NAV: NavItem[] = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
];

const SOCIALS: SocialLink[] = [
    { label: "GitHub", href: profile.socials.github, Icon: FaGithub },
    { label: "LeetCode", href: profile.socials.leetcode, Icon: SiLeetcode },
    { label: "LinkedIn", href: profile.socials.linkedin, Icon: FaLinkedinIn },
];

export default function Footer() {
    return (
        <footer className="border-t border-line">
            <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
                <div>
                    <p className="font-display text-xl font-extrabold">{profile.name}</p>
                    <p className="mt-2 max-w-[38ch] text-muted">{profile.tagline}</p>
                </div>

                <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
                    {NAV.map(({ id, label }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className="text-muted transition-colors hover:text-accent"
                        >
                            {label}
                        </a>
                    ))}
                </nav>

                <ul className="flex gap-4 text-xl text-muted">
                    <li>
                        <a
                            href={`mailto:${profile.email}`}
                            aria-label="Email"
                            className="transition-colors hover:text-accent"
                        >
                            <FiMail />
                        </a>
                    </li>
                    {SOCIALS.map(({ label, href, Icon }) => (
                        <li key={label}>
                            <a
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={label}
                                className="transition-colors hover:text-accent"
                            >
                                <Icon />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <p className="pb-8 text-center text-sm text-muted">
                &copy; {new Date().getFullYear()} {profile.name}
            </p>
        </footer>
    );
}