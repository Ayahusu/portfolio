import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { profile } from "../Data";
import { NAV, NAV_IDS } from "../constants";
import useActiveSection from "../hooks/useActiveSection";

interface NavbarProps {
    dark: boolean;
    onToggleTheme: () => void;
}

function ThemeButton({ dark, onToggleTheme }: NavbarProps) {
    return (
        <button
            type="button"
            onClick={onToggleTheme}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="grid size-9 shrink-0 place-items-center rounded-full text-muted transition-colors hover:bg-accent-soft hover:text-ink"
        >
            {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>
    );
}

/** Three bars that morph into an X when `open` is true. */
function HamburgerIcon({ open }: { open: boolean }) {
    const bar =
        "absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-out";
    return (
        <span className="relative block size-5" aria-hidden="true">
            <span className={`${bar} ${open ? "top-2.25 rotate-45" : "top-0.75"}`} />
            <span className={`${bar} top-2.25 ${open ? "scale-x-0 opacity-0" : "opacity-100"}`} />
            <span className={`${bar} ${open ? "top-2.25 -rotate-45" : "top-3.75"}`} />
        </span>
    );
}

/** Floating pill on desktop, hamburger + dropdown on mobile and tablet. */
export default function Navbar({ dark, onToggleTheme }: NavbarProps) {
    const active = useActiveSection(NAV_IDS);
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    // While the menu is open: Esc closes it, the page behind can't scroll,
    // and growing the window to desktop width closes it.
    useEffect(() => {
        if (!open) return;

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        const desktop = window.matchMedia("(min-width: 1024px)");
        const onChange = () => {
            if (desktop.matches) setOpen(false);
        };
        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", onKey);
        desktop.addEventListener("change", onChange);
        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", onKey);
            desktop.removeEventListener("change", onChange);
        };
    }, [open]);

    return (
        <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-4 lg:flex lg:justify-center">
            {/* Dim the page behind the open mobile menu; tap to close */}
            <div
                onClick={close}
                aria-hidden="true"
                className={`fixed inset-0 -z-10 bg-bg/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                    }`}
            />

            {/* Desktop: floating pill */}
            <nav
                aria-label="Main"
                className="pointer-events-auto hidden max-w-full items-center gap-1 rounded-full border border-line bg-surface/80 p-1.5 shadow-lg shadow-black/5 backdrop-blur-md lg:flex"
            >
                {NAV.map(({ id, label }) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        aria-current={active === id ? "page" : undefined}
                        className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${active === id
                            ? "bg-accent text-accent-ink"
                            : "text-muted hover:bg-accent-soft hover:text-ink"
                            }`}
                    >
                        {label}
                    </a>
                ))}
                <span className="mx-1 h-5 w-px shrink-0 bg-line" aria-hidden="true" />
                <ThemeButton dark={dark} onToggleTheme={onToggleTheme} />
            </nav>

            {/* Mobile and tablet: bar with hamburger + dropdown menu */}
            <div className="relative lg:hidden">
                <div className="pointer-events-auto flex items-center justify-between rounded-full border border-line bg-surface/80 p-1.5 pl-5 shadow-lg shadow-black/5 backdrop-blur-md">
                    <a
                        href="#home"
                        onClick={close}
                        className="font-display text-lg font-extrabold tracking-tight"
                    >
                        {profile.name.split(" ")[0]}
                    </a>
                    <div className="flex items-center gap-1">
                        <ThemeButton dark={dark} onToggleTheme={onToggleTheme} />
                        <button
                            type="button"
                            onClick={() => setOpen((o) => !o)}
                            aria-label={open ? "Close menu" : "Open menu"}
                            aria-expanded={open}
                            aria-controls="mobile-menu"
                            className="grid size-9 shrink-0 place-items-center rounded-full text-ink transition-colors hover:bg-accent-soft"
                        >
                            <HamburgerIcon open={open} />
                        </button>
                    </div>
                </div>

                <div
                    id="mobile-menu"
                    aria-hidden={!open}
                    className={`pointer-events-auto grid transition-[grid-template-rows,opacity] duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                >
                    <div className="min-h-0 overflow-hidden">
                        <nav
                            aria-label="Mobile"
                            className="mt-2 rounded-3xl border border-line bg-surface/95 p-3 shadow-xl shadow-black/10 backdrop-blur-md"
                        >
                            <ul className="flex flex-col gap-1">
                                {NAV.map(({ id, label }, i) => (
                                    <li key={id}>
                                        <a
                                            href={`#${id}`}
                                            onClick={close}
                                            tabIndex={open ? 0 : -1}
                                            aria-current={active === id ? "page" : undefined}
                                            style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
                                            className={`block rounded-2xl px-4 py-3.5 text-lg font-medium transition-[opacity,transform] duration-300 ${open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                                                } ${active === id
                                                    ? "bg-accent-soft text-accent"
                                                    : "text-ink hover:bg-accent-soft"
                                                }`}
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}