import { useEffect, useState } from "react";

/** Dark/light mode. Returns [isDark, toggle]. The saved choice is applied in index.html. */
export default function useTheme(): [boolean, () => void] {
    const [dark, setDark] = useState<boolean>(() => {
        // 1. Check saved manual preference
        try {
            const saved = localStorage.getItem('theme');
            if (saved === 'dark') return true;
            if (saved === 'light') return false;
        } catch (error) {
            console.warn("Could not read theme from localStorage:", error);
        }

        // 2. Fallback to system preference
        if (typeof window !== 'undefined') {
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }

        return false;
    });

    // Sync DOM root class whenever state updates
    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark);
    }, [dark]);

    // Listen for live OS/browser theme preference changes
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (e: MediaQueryListEvent) => {
            // Only switch automatically if user hasn't set a manual override
            try {
                if (!localStorage.getItem('theme')) {
                    setDark(e.matches);
                }
            } catch (error) {
                console.warn("Could not check localStorage on media query change:", error);
                setDark(e.matches);
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const toggle = () => {
        setDark((prev) => {
            const next = !prev;
            try {
                localStorage.setItem('theme', next ? 'dark' : 'light');
            } catch (error) {
                console.error("Could not save theme to localStorage:", error);
            }
            return next;
        });
    };

    return [dark, toggle];
}