import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/journal", label: "Journal" },
] as const;

export const socialLinks = [
  {
    href: "https://www.linkedin.com/",
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
  {
    href: "https://github.com/",
    label: "GitHub",
    icon: GitHubIcon,
  },
] as const;
