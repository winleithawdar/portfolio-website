"use client";

import { useState } from "react";

type PageIntroAccentProps = {
  kind: "education" | "experience" | "projects";
};

type AccentIconProps = {
  active: boolean;
};

function EducationAccent({ active }: AccentIconProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      className="h-24 w-24 drop-shadow-[0_10px_18px_rgba(75,63,110,0.12)] md:h-28 md:w-28"
      aria-hidden="true"
    >
      <g className={active ? "-translate-y-1 transition duration-300" : "transition duration-300"}>
        <path
          d="M10 31.5 40 19l30 12.5L40 44 10 31.5Z"
          fill="var(--accent-soft)"
          fillOpacity="0.72"
        />
        <path
          d="M10 31.5 40 19l30 12.5L40 44 10 31.5Z"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path
          d="M23 38.5v9c0 6.6 8 11 17 11s17-4.4 17-11v-9"
          fill="var(--accent-soft)"
          fillOpacity="0.34"
        />
        <path
          d="M23 38.5v9c0 6.6 8 11 17 11s17-4.4 17-11v-9"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <path
        d={active ? "M64 33v14.5" : "M64 32v14"}
        className="transition-all duration-300"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx={active ? "64.5" : "64"}
        cy={active ? "51.5" : "51"}
        r="3"
        className="transition-all duration-300"
        fill="var(--accent-soft)"
        fillOpacity="0.7"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ExperienceAccent({ active }: AccentIconProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      fill="none"
      className="h-24 w-24 drop-shadow-[0_10px_18px_rgba(75,63,110,0.12)] md:h-28 md:w-28"
      aria-hidden="true"
    >
      <rect
        x="22"
        y={active ? "35" : "37"}
        width="52"
        height="30"
        rx="10"
        className="transition-all duration-300"
        fill="var(--accent-soft)"
        fillOpacity="0.52"
      />
      <rect
        x="22"
        y={active ? "35" : "37"}
        width="52"
        height="30"
        rx="10"
        className="transition-all duration-300"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <path
        d={active ? "M38 37v-5c0-4 3-7 7-7h6c4 0 7 3 7 7v5" : "M38 39v-4c0-4 3-7 7-7h6c4 0 7 3 7 7v4"}
        className="transition-all duration-300"
        fill="var(--accent-soft)"
        fillOpacity="0.35"
      />
      <path
        d={active ? "M38 37v-5c0-4 3-7 7-7h6c4 0 7 3 7 7v5" : "M38 39v-4c0-4 3-7 7-7h6c4 0 7 3 7 7v4"}
        className="transition-all duration-300"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <rect
        x={active ? "44" : "43"}
        y={active ? "45" : "46"}
        width={active ? "8" : "10"}
        height="6"
        rx="3"
        className="transition-all duration-300"
        fill="currentColor"
      />
      <path
        d="M35 57h26"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ProjectsAccent({ active }: AccentIconProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      fill="none"
      className="h-24 w-24 drop-shadow-[0_10px_18px_rgba(75,63,110,0.12)] md:h-28 md:w-28"
      aria-hidden="true"
    >
      <rect
        x="22"
        y="22"
        width="52"
        height="40"
        rx="10"
        fill="var(--accent-soft)"
        fillOpacity="0.5"
      />
      <rect
        x="22"
        y="22"
        width="52"
        height="40"
        rx="10"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <path
        d="M22 33h52"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="30" cy="28" r="1.8" fill="currentColor" />
      <circle cx="36" cy="28" r="1.8" fill="currentColor" className="opacity-75" />
      <circle cx="42" cy="28" r="1.8" fill="currentColor" className="opacity-45" />
      <path
        d="M40 42 34 48 40 54"
        className={`origin-center transition duration-300 ${
          active ? "-translate-x-1" : ""
        }`}
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M56 42 62 48 56 54"
        className={`origin-center transition duration-300 ${
          active ? "translate-x-1" : ""
        }`}
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m51 40-6 16"
        className={`origin-center transition duration-300 ${
          active ? "rotate-[10deg]" : ""
        }`}
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const accentCopy = {
  education: "Interactive graduation cap icon",
  experience: "Interactive briefcase icon",
  projects: "Interactive projects icon",
} as const;

export function PageIntroAccent({ kind }: PageIntroAccentProps) {
  const [toggled, setToggled] = useState(false);
  const [hovered, setHovered] = useState(false);

  const active = hovered || toggled;

  return (
    <button
      type="button"
      aria-pressed={toggled}
      aria-label={accentCopy[kind]}
      onClick={() => {
        setToggled((current) => !current);
      }}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      className="focus-ring relative inline-flex h-28 w-28 items-center justify-center text-[color:var(--accent-strong)] hover:-translate-y-0.5 hover:text-[color:var(--foreground)] md:h-32 md:w-32"
    >
      <span className="sr-only">{accentCopy[kind]}</span>
      <span
        aria-hidden="true"
        className={`absolute inset-0 flex items-center justify-center transition duration-300 ${
          active ? "opacity-100" : "opacity-80"
        }`}
      >
        <span className="h-16 w-16 rounded-full bg-[color:var(--accent-soft)]/80 blur-2xl md:h-20 md:w-20 dark:bg-[color:var(--accent-soft)]/55" />
      </span>
      <span className="relative inline-flex items-center justify-center">
        {kind === "education" ? <EducationAccent active={active} /> : null}
        {kind === "experience" ? <ExperienceAccent active={active} /> : null}
        {kind === "projects" ? <ProjectsAccent active={active} /> : null}
      </span>
    </button>
  );
}
