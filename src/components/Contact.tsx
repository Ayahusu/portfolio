import {
    useState,
    type ChangeEvent,
    type FormEvent,
    type ReactNode,
} from "react";
import {
    FiMail,
    FiMapPin,
    FiSend,
} from "react-icons/fi";
import { profile } from "../Data";


interface ContactForm {
    name: string;
    email: string;
    message: string;
}

const field =
    "w-full rounded-xl border border-line bg-bg px-4 py-3 text-base text-ink placeholder:text-muted/70 transition focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/20";

const btnBase = "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold transition active:translate-y-px";
const btnSolid = `${btnBase} bg-accent text-accent-ink hover:brightness-110`;

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

export default function Contact() {
    const [form, setForm] = useState<ContactForm>({ name: "", email: "", message: "" });

    const set =
        (key: keyof ContactForm) =>
            (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                setForm((prev) => ({ ...prev, [key]: e.target.value }));

    // No server needed: opens the visitor's email app with the message filled in.
    // To send from the page itself, swap this for Formspree or EmailJS.
    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
        const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
        window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    };

    return (
        <Section id="contact" title="Get in touch">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
                <div>
                    <h3 className="font-display text-2xl font-semibold">
                        Let's talk about your next project
                    </h3>
                    <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-muted">
                        I am looking for new opportunities and my inbox is always open. Whether
                        you have a question or just want to say hi, I will do my best to reply.
                    </p>

                    <ul className="mt-8 space-y-5">
                        <li className="flex items-center gap-4">
                            <span className="grid size-12 place-items-center rounded-full bg-accent-soft text-accent">
                                <FiMail aria-hidden="true" />
                            </span>
                            <div>
                                <p className="text-sm text-muted">Email</p>
                                <a href={`mailto:${profile.email}`} className="font-medium hover:text-accent">
                                    {profile.email}
                                </a>
                            </div>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="grid size-12 place-items-center rounded-full bg-accent-soft text-accent">
                                <FiMapPin aria-hidden="true" />
                            </span>
                            <div>
                                <p className="text-sm text-muted">Location</p>
                                <p className="font-medium">{profile.location}</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <form
                    onSubmit={submit}
                    className="space-y-5 rounded-3xl border border-line bg-surface p-6 md:p-8"
                >
                    <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium">
                            Your name
                        </label>
                        <input
                            id="name"
                            required
                            value={form.name}
                            onChange={set("name")}
                            placeholder="John Doe"
                            className={field}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium">
                            Email address
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={set("email")}
                            placeholder="john@example.com"
                            className={field}
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="mb-2 block text-sm font-medium">
                            Message
                        </label>
                        <textarea
                            id="message"
                            required
                            rows={5}
                            value={form.message}
                            onChange={set("message")}
                            placeholder="What's on your mind?"
                            className={`${field} resize-y`}
                        />
                    </div>
                    <button type="submit" className={`${btnSolid} w-full`}>
                        <FiSend aria-hidden="true" /> Send message
                    </button>
                </form>
            </div>
        </Section>
    );
}