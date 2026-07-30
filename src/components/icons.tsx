import type { SVGProps } from "react";

export function MoonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function SunIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <circle cx="12" cy="12" r="4" strokeWidth="1.8" />
      <path
        d="M12 2.5v2.2M12 19.3v2.2M4.93 4.93l1.55 1.55M17.52 17.52l1.55 1.55M2.5 12h2.2M19.3 12h2.2M4.93 19.07l1.55-1.55M17.52 6.48l1.55-1.55"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56a1.98 1.98 0 0 0-2.02-1.94 1.96 1.96 0 0 0-2.04 1.94c0 1.08.86 1.95 2 1.95h.02c1.18 0 2.04-.87 2.04-1.95ZM20.44 13.02c0-3.49-1.86-5.12-4.34-5.12-2 0-2.9 1.1-3.4 1.87V8.5H9.33c.04.84 0 11.5 0 11.5h3.37v-6.42c0-.34.02-.67.12-.91.27-.67.9-1.37 1.95-1.37 1.38 0 1.94 1.04 1.94 2.56V20H20V13.02h.44Z" />
    </svg>
  );
}

export function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.25a9.75 9.75 0 0 0-3.08 19c.5.09.68-.22.68-.48 0-.24-.01-1.04-.01-1.88-2.76.6-3.34-1.17-3.34-1.17-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.52 1.02 1.52 1.02.88 1.5 2.31 1.07 2.88.82.09-.64.35-1.07.63-1.31-2.2-.25-4.5-1.08-4.5-4.83 0-1.07.39-1.95 1.02-2.63-.1-.25-.45-1.26.1-2.61 0 0 .83-.27 2.72 1a9.54 9.54 0 0 1 4.95 0c1.88-1.27 2.71-1 2.71-1 .56 1.35.21 2.36.1 2.61.64.68 1.02 1.56 1.02 2.63 0 3.76-2.3 4.57-4.5 4.82.36.3.68.9.68 1.82 0 1.31-.01 2.37-.01 2.69 0 .26.18.58.69.48A9.75 9.75 0 0 0 12 2.25Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect
        x="3.25"
        y="3.25"
        width="17.5"
        height="17.5"
        rx="5"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4.1" strokeWidth="1.8" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect
        x="3.25"
        y="5.25"
        width="17.5"
        height="13.5"
        rx="2.75"
        strokeWidth="1.8"
      />
      <path
        d="m4.5 7 7.5 6 7.5-6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.62 3.75H20.9l-7.16 8.19L22.2 20.25h-6.62l-5.18-5.56-4.87 5.56H2.25l7.65-8.74L1.8 3.75h6.79l4.68 5.04 4.35-5.04Zm-1.16 14.49h1.82L7.59 5.66H5.64l10.82 12.58Z" />
    </svg>
  );
}

export function SpotifyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.25a9.75 9.75 0 1 0 9.75 9.75A9.76 9.76 0 0 0 12 2.25Zm4.49 14.11a.94.94 0 0 1-1.29.32 9.93 9.93 0 0 0-7.42-1.14.94.94 0 1 1-.49-1.81 11.8 11.8 0 0 1 8.87 1.34.94.94 0 0 1 .33 1.29Zm1.33-2.95a1.17 1.17 0 0 1-1.61.39 12.23 12.23 0 0 0-9.18-1.41 1.17 1.17 0 1 1-.61-2.26 14.57 14.57 0 0 1 10.93 1.69 1.17 1.17 0 0 1 .47 1.59Zm.16-3.07A14.66 14.66 0 0 0 7.31 8.53a1.41 1.41 0 0 1-.74-2.72 17.51 17.51 0 0 1 12.75 2.13 1.41 1.41 0 1 1-1.34 2.4Z" />
    </svg>
  );
}

export function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.03 7.19a2.97 2.97 0 0 0-2.09-2.1C17.09 4.5 12 4.5 12 4.5s-5.09 0-6.94.59a2.97 2.97 0 0 0-2.09 2.1A31.3 31.3 0 0 0 2.5 12a31.3 31.3 0 0 0 .47 4.81 2.97 2.97 0 0 0 2.09 2.1c1.85.59 6.94.59 6.94.59s5.09 0 6.94-.59a2.97 2.97 0 0 0 2.09-2.1A31.3 31.3 0 0 0 21.5 12a31.3 31.3 0 0 0-.47-4.81ZM10.25 15.09V8.91L15.68 12l-5.43 3.09Z" />
    </svg>
  );
}

export function DevpostIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M6 5.25h8.4l4.35 6.75-4.35 6.75H6V5.25Z"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M9.1 9.1h3a2.9 2.9 0 0 1 0 5.8h-3V9.1Z"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function EducationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M12 5 3.25 9 12 13 20.75 9 12 5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M6.25 10.36V14c0 1.94 2.57 3.5 5.75 3.5s5.75-1.56 5.75-3.5v-3.64"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function ExperienceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect
        x="4"
        y="7"
        width="16"
        height="11"
        rx="2.5"
        strokeWidth="1.8"
      />
      <path
        d="M9 7V5.75A1.75 1.75 0 0 1 10.75 4h2.5A1.75 1.75 0 0 1 15 5.75V7"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M4 11.25h16"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function ProjectsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="m9 7-4 5 4 5M15 7l4 5-4 5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path d="m13.5 5-3 14" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

export function LinktreeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M10.96 2.25h2.08v5.16h4.94v2.08h-4.94v5.16h-2.08V9.49H6.02V7.41h4.94V2.25Z" />
      <path d="m6.11 4.65 1.47-1.47 3.66 3.66-1.47 1.47-3.66-3.66ZM17.89 4.65l-3.66 3.66-1.47-1.47 3.66-3.66 1.47 1.47Z" />
      <path d="m7.58 13.81-1.47-1.47 3.66-3.66 1.47 1.47-3.66 3.66ZM17.89 12.34l-1.47 1.47-3.66-3.66 1.47-1.47 3.66 3.66Z" />
      <path d="M10.96 14.97h2.08V18l2.86-2.86 1.47 1.47L12 21.98l-5.37-5.37 1.47-1.47L10.96 18v-3.03Z" />
    </svg>
  );
}
