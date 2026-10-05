export interface Socials {
    github: string;
    linkedin: string;
    leetcode: string;
}

export interface HeroCard {
    stack: string[];
    openToWork: boolean;
}

export interface Profile {
    name: string;
    role: string;
    lead: string;
    email: string;
    location: string;
    cv: string;
    socials: Socials;
    card: HeroCard;
    tagline: string;
}

export interface SkillGroup {
    group: string;
    items: string[];
}

export interface Project {
    title: string;
    description: string;
    stack: string[];
    code: string;
    image: string | null;
}

export interface EducationItem {
    when: string;
    title: string;
    place: string;
    note?: string;
    current: boolean;
}

export const profile: Profile = {
    name: "Ayahusu Thami",
    role: "Backend developer",
    lead: "I design and build APIs and data systems that are fast, well tested and easy to maintain.",
    email: "ayahusu2210@gmail.com",
    location: "Kathmandu, Nepal",
    cv: "/cv.pdf",
    socials: {
        github: "https://github.com/",
        linkedin: "https://linkedin.com/in/",
        leetcode: "https://leetcode.com/",
    },
    card: {
        stack: ["Python", "Django REST", "PostgreSQL"],
        openToWork: true,
    },
    tagline: "Building scalable backend systems and high-performance web applications.",
};

export const skills: SkillGroup[] = [
    {
        group: "Frontend",
        items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Redux Toolkit"],
    },
    {
        group: "Backend",
        items: [
            "Django",
            "Django REST Framework",
            "NodeJS",
            "SQL",
            "PostgreSQL",
            "C++ (STL)",
        ],
    },
    {
        group: "Tools & DevOps",
        items: ["Git", "Docker", "Postman", "Zsh / iTerm2", "Homebrew"],
    },
];

export const projects: Project[] = [
    {
        title: "Stock Prediction Portal",
        description:
            "A full-stack web application that uses machine learning models to predict stock trends, with a robust Django REST Framework backend.",
        stack: ["Django", "DRF", "React", "Python", "PostgreSQL"],
        code: "https://github.com/",
        image: null,
    },
    {
        title: "CollegeUnify",
        description:
            "A collaborative platform for college students with real-time notifications over WebSockets and Django Channels.",
        stack: ["Django Channels", "Redis", "WebSockets", "React"],
        code: "https://github.com/",
        image: null,
    },
    {
        title: "GreatKart",
        description:
            "A full e-commerce platform with custom user authentication, cart functionality and payment integration.",
        stack: ["Python", "Django", "JavaScript", "SQLite"],
        code: "https://github.com/",
        image: null,
    },
];

export const education: EducationItem[] = [
    {
        when: "2022 to present",
        title: "Bachelors in Computer Application",
        place: "Pashupati Multiple Campus",
        note: "Running 8th semester",
        current: true,
    },
    {
        when: "Completed 2022",
        title: "+2 Level",
        place: "KU City College",
        current: false,
    },
];