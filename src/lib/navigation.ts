import type { ComponentType, SVGProps } from "react";
import {
  DevpostIcon,
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  SpotifyIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/icons";

type SocialLink = {
  href: string;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/education", label: "Education" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
] as const;

export const heroEmail = "winleithawdar2005@gmail.com";

export const heroSocialLinks: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/winleithawdar/",
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
  {
    href: "https://github.com/winleithawdar/",
    label: "GitHub",
    icon: GitHubIcon,
  },
  {
    href: "https://instagram.com/winleithawdar",
    label: "Instagram",
    icon: InstagramIcon,
  },
  {
    href: "https://www.facebook.com/winleithawdar",
    label: "Facebook",
    icon: FacebookIcon,
  },
  {
    href: "https://devpost.com/winleithawdar",
    label: "Devpost",
    icon: DevpostIcon,
  },
] as const;

export const footerSocialLinks: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/winleithawdar/",
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
  {
    href: "https://github.com/winleithawdar/",
    label: "GitHub",
    icon: GitHubIcon,
  },
  {
    href: "https://instagram.com/winleithawdar",
    label: "Instagram",
    icon: InstagramIcon,
  },
  {
    href: "https://www.facebook.com/winleithawdar",
    label: "Facebook",
    icon: FacebookIcon,
  },
  {
    href: "https://devpost.com/winleithawdar",
    label: "Devpost",
    icon: DevpostIcon,
  },
  {
    href: "https://x.com/winleithawdar",
    label: "X",
    icon: XIcon,
  },
  {
    href: "https://open.spotify.com/user/winleithawdar",
    label: "Spotify",
    icon: SpotifyIcon,
  },
  {
    href: "https://www.youtube.com/@winleithawdar",
    label: "YouTube",
    icon: YouTubeIcon,
  },
] as const;
