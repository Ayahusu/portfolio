import { useEffect, useState } from "react";
import {
    FiMoon,
    FiSun,
} from "react-icons/fi";


interface NavItem {
    id: string;
    label: string;
}
const NAV: NavItem[] = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
];

const NAV_IDS: string[] = NAV.map((n) => n.id);
interface NavbarProps {
    dark: boolean;
    onToggleTheme: () => void;
}

function useActiveSection(ids: readonly string[]): string {
    const [active, setActive] = useState<string>(ids[0]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive(e.target.id);
                });
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [ids]);

    return active;
}

export default function Navbar({ dark, onToggleTheme }: NavbarProps) {
    const active = useActiveSection(NAV_IDS);

    return (
        <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-4">
            <nav
                aria-label="Main"
                className="pointer-events-auto flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-line bg-surface/80 p-1.5 shadow-lg shadow-black/5 backdrop-blur-md"
            >
                {NAV.map(({ id, label }) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        aria-current={active === id ? "page" : undefined}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors sm:px-5 ${active === id
                            ? "bg-accent text-accent-ink"
                            : "text-muted hover:bg-accent-soft hover:text-ink"
                            }`}
                    >
                        {label}
                    </a>
                ))}
                <span className="mx-1 h-5 w-px shrink-0 bg-line" aria-hidden="true" />
                <button
                    type="button"
                    onClick={onToggleTheme}
                    aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
                    className="grid size-9 shrink-0 place-items-center rounded-full text-muted transition-colors hover:bg-accent-soft hover:text-ink"
                >
                    {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
                </button>
            </nav>
        </header>
    );
}