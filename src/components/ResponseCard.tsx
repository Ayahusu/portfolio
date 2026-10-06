import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { profile } from "../Data";

export interface NavItem {
    id: string;
    label: string;
}

export interface SocialLink {
    label: string;
    href: string;
    Icon: IconType;
}

export const NAV: NavItem[] = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
];

export const NAV_IDS: string[] = NAV.map((n) => n.id);

export const SOCIALS: SocialLink[] = [
    { label: "GitHub", href: profile.socials.github, Icon: FaGithub },
    { label: "LeetCode", href: profile.socials.leetcode, Icon: SiLeetcode },
    { label: "LinkedIn", href: profile.socials.linkedin, Icon: FaLinkedinIn },
];