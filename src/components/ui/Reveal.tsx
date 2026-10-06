import {
    useEffect,
    useRef,
    useState,
    type CSSProperties,
    type ElementType,
    type ReactNode,
} from "react";

interface RevealProps {
    children: ReactNode;
    /** Extra wait in ms, used to stagger neighbouring elements */
    delay?: number;
    className?: string;
    as?: ElementType;
}

/** Fades and lifts its children into place the first time they scroll into view. */
export default function Reveal({
    children,
    delay = 0,
    className = "",
    as: Tag = "div",
}: RevealProps) {
    const ref = useRef<HTMLElement>(null);
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShown(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <Tag
            ref={ref}
            className={`reveal ${shown ? "is-visible" : ""} ${className}`}
            style={{ "--d": `${delay}ms` } as CSSProperties}
        >
            {children}
        </Tag>
    );
}