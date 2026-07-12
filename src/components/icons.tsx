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
