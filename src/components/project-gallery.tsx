"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";

type ProjectLink = {
  label: string;
  href: string;
};

type ProjectItem = {
  title: string;
  year: string;
  format: string;
  domain: string;
  summary: string;
  description: string;
  highlightLabel?: string;
  highlights: string[];
  technologies: string[];
  links: ProjectLink[];
  note?: string;
  credit?: string;
  previewLabel: string;
  screenshotSrc?: string;
};

const projectItems: ProjectItem[] = [
  {
    title: "SMUAI Website",
    summary: "Official website for SMU’s AI club, with event information and a club chatbot.",
    year: "2026",
    format: "SMU CCA Development Project",
    domain: "Tech",
    description:
      "The official website for SMU Artificial Intelligence Club, with information about membership, events, and club activities, plus a chatbot for answering visitors’ questions.",
    highlightLabel: "My contribution",
    highlights: [
      "Rebuilt the entire site from scratch, designing the UI and implementing the responsive website with Next.js, TypeScript, and Tailwind CSS.",
      "Integrated an LLM-powered chatbot to answer questions about membership, events, and club activities.",
      "Deployed the website on Vercel through GitHub at smuai.org.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "LLM API",
      "Vercel",
      "GitHub",
    ],
    links: [
      { label: "Live Website", href: "https://smuai.org" },
      {
        label: "Source Code",
        href: "https://github.com/SMUAIClub/SMUAI-website",
      },
    ],
    credit: "Individual Project | SMUAI",
    previewLabel: "Website preview",
    screenshotSrc: "/images/projects/smuai.png",
  },
  {
    title: "OpenEval",
    summary: "A one-day team build for the OpenAI Codex Hackathon in Singapore.",
    year: "2026",
    format: "OpenAI Codex Hackathon - Singapore",
    domain: "Tech",
    description:
      "A team project built in one day at the OpenAI Codex Hackathon in Singapore, February 2026.",
    highlights: [
      "Built as part of the OpenAI Codex Hackathon - Singapore.",
      "Developed and shipped within a fast-paced one-day hackathon workflow.",
      "Source code is available on GitHub for the full project implementation.",
    ],
    technologies: ["OpenAI Codex", "GitHub", "Hackathon Build"],
    links: [
      {
        label: "Source Code",
        href: "https://github.com/darriusnjh/OpenEval",
      },
    ],
    note: "OpenAI Codex Hackathon - Singapore",
    credit:
      "Team: Anson Koh, Darrius Ng, Htet Shwe Win Than, Win Lei Thawdar",
    previewLabel: "Hackathon project preview",
    screenshotSrc: "/images/projects/openeval.png",
  },
  {
    title: "Nomi",
    summary: "A caregiver support tool that flags changes in a senior’s daily routine.",
    year: "2026",
    format: "Ellipsis Tech Series Hackathon 2026",
    domain: "Tech",
    description:
      "Caregiver support tool that helps families notice meaningful changes in an older adult's routine while preserving the senior's agency.",
    highlightLabel: "Product Highlights",
    highlights: [
      "Calculates personal baselines from response time, interaction frequency, missed check-ins, and wellbeing patterns.",
      "Detects isolated anomalies and sustained changes from each senior's recent routine.",
      "Uses senior-first verification before escalating changes into caregiver alerts.",
      "Presents live check-ins, plain-language assessments, alerts, and visual trends in a mobile-first dashboard.",
    ],
    technologies: ["FastAPI", "Next.js", "SQLite", "Telegram Bot API"],
    links: [
      {
        label: "Source Code",
        href: "https://github.com/winleithawdar/nomi",
      },
    ],
    note: "Ellipsis Tech Series Hackathon 2026 | Top 10 Team",
    credit:
      "Team: Ang Cheng Zuo, Eric Law, Julius Yeo, Su Myat Myat Htay, Su Pyae Pyae Zaw, Win Lei Thawdar",
    previewLabel: "Hackathon project preview",
    screenshotSrc: "/images/projects/nomi.png",
  },
  {
    title: "Resource-Constrained Scheduling Solver",
    summary: "A solver for scheduling tasks with limited resources.",
    year: "2026",
    format: "Team Project",
    domain: "Tech",
    description:
      "A Python scheduling solver that compares heuristic search with exact branch-and-bound solutions under resource constraints.",
    highlights: [
      "Built a heuristic RCPSP solver for scheduling under resource constraints across benchmark instances.",
      "Extended the project with an exact branch-and-bound solver to support optimality checks and solver comparison.",
      "Structured evaluation workflows for benchmark datasets, including batch runs, CSV outputs, and comparative analysis.",
    ],
    technologies: [
      "Python",
      "Heuristic Search",
      "Branch and Bound",
      "RCPSP",
      "PSPLIB",
      "Data Analysis",
    ],
    links: [
      {
        label: "Presentation",
        href: "https://canva.link/x0oetcx6cus08yq",
      },
      {
        label: "Source Code",
        href: "https://github.com/winleithawdar/CS202",
      },
    ],
    note: "CS202: Design & Analysis of Algorithms",
    credit:
      "Team: Chai Yi Khuen, Chong Wei Choon, Lau Wei Bin, Win Lei Thawdar, Yeo Ben Shin",
    previewLabel: "Scheduling solver project preview",
    screenshotSrc: "/images/projects/rcpsp.png",
  },
  {
    title: "Pawsitive",
    summary: "A pet healthcare mobile app for managing pet care.",
    year: "2026",
    format: "Team Project",
    domain: "Tech",
    description:
      "Pet health care app built with a mobile-first product setup, combining an Expo React Native frontend, FastAPI backend, and Supabase database layer.",
    highlights: [
      "Structured as a full product stack with an Expo React Native mobile app, FastAPI backend, and Supabase Postgres schema.",
      "Designed around pet care workflows, with room for health-related features, backend services, and database-driven product flows.",
      "Repository setup also supports optional AI and video call integrations for expanded healthcare and support experiences.",
    ],
    technologies: [
      "Expo React Native",
      "FastAPI",
      "Supabase",
      "Postgres",
      "Python",
      "Node.js",
    ],
    links: [
      {
        label: "Source Code",
        href: "https://github.com/Onyxxx17/Pawsitive",
      },
    ],
    note: "CS206: Software Product Management",
    credit:
      "Team: Aung Ye Thant Hein, Chue Myat Sandy, Darrius Ng, Lin Khant Pe Thein, Rayner Sim, Win Lei Thawdar",
    previewLabel: "Pet healthcare app preview",
    screenshotSrc: "/images/projects/pawsitive.png",
  },
  {
    title: "TariffEase",
    summary: "A trade-data application with secure accounts and private user records.",
    year: "2025",
    format: "Team Project",
    domain: "Tech",
    description:
      "Secure application project built for collaborative software development, combining authenticated user flows, PostgreSQL storage, and trade-data API integration.",
    highlights: [
      "Built with JWT authentication for secure user registration and login flows.",
      "Designed around user-owned data, where each user can only access their own records.",
      "Integrated external trade data through the WITS API alongside a PostgreSQL-backed backend architecture.",
    ],
    technologies: [
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "JWT",
      "AWS RDS",
      "Maven",
      "WITS API",
    ],
    links: [
      {
        label: "Pitch Video",
        href: "https://youtu.be/lD-b_ihxFCU?si=IF_Oos7mdT9C6LRo",
      },
      {
        label: "Source Code",
        href: "https://github.com/Sprou-t/cs203",
      },
    ],
    note: "CS203: Collaborative Software Development",
    credit:
      "Team: Chai Yi Khuen, Htet Shwe Win Than, Lau Wei Bin, Tai Wei Sin, Win Lei Thawdar",
    previewLabel: "TariffEase project preview",
    screenshotSrc: "/images/projects/tariffease.png",
  },
  {
    title: "AutoGreen.sg",
    summary: "A shopping platform and browser extension for greener checkout choices.",
    year: "2025",
    format: "Team Project",
    domain: "Tech",
    description:
      "Sustainability platform and Chrome extension that highlights eco products and auto-selects greener checkout defaults.",
    highlightLabel: "Key achievements",
    highlights: [
      "Aligned the concept to SG Green Plan themes across digital product and checkout decisions.",
      "Designed features such as no-cutlery, paperless receipts, and greener delivery defaults.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Chrome Extension",
      "PostgreSQL",
    ],
    links: [
      { label: "Live Demo", href: "https://autogreen-sg.vercel.app" },
      {
        label: "Demo Video",
        href: "https://youtu.be/LJVyUBTtiWI?si=Kt1CSlS3ElK2wxFL",
      },
      {
        label: "Source Code",
        href: "https://github.com/Onyxxx17/AutoGreen.sg",
      },
    ],
    previewLabel: "Product preview",
    screenshotSrc: "/images/projects/autogreen.png",
    note: "Ellipsis Tech Series Hackathon | Top 10 Team",
    credit:
      "Team: Aung Ye Thant Hein, Chue Myat Sandy, Htet Shwe Win Than, Win Lei Thawdar, Wunna Aung",
  },
  {
    title: "RentLah!",
    summary: "A student housing platform with verified listings, maps, and live chat.",
    year: "2025",
    format: "Team Project",
    domain: "Tech",
    description:
      "Student housing platform with verified listings, map search, and real-time chat optimized for campus proximity.",
    highlights: [
      "Built around verified listings, communication, and decision-making for students looking for housing.",
      "Combined product thinking with full-stack implementation for a more complete rental experience.",
    ],
    technologies: [
      "Next.js",
      "PostgreSQL",
      "Drizzle ORM",
      "Socket.io",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    links: [
      { label: "Live Demo", href: "https://rent-lah-heap.vercel.app" },
      {
        label: "Demo Video",
        href: "https://youtu.be/d-NnnbK4jHU?si=Dz6zmLtKdbUdXdpK",
      },
      {
        label: "Source Code",
        href: "https://github.com/wltdwinnie/RentLah-HEAP",
      },
    ],
    previewLabel: "Housing app preview",
    screenshotSrc: "/images/projects/rentlah.png",
    note: "HEAP Program",
    credit:
      "Team: Aung Ye Thant Hein, Chue Myat Sandy, Htet Shwe Win Than, Lin Khant Pe Thein, Win Lei Thawdar",
  },
  {
    title: "Ellipsis Tech Series 2025 Website Design",
    summary: "An event website prototype for discovering Ellipsis Tech Series activities.",
    year: "2025",
    format: "Personal Project",
    domain: "Creative",
    description:
      "I prototyped the Ellipsis Tech Series website in Figma, organising event information and designing the mobile navigation.",
    highlights: [
      "I organised the event pages and navigation in a modular website prototype.",
      "I worked through the mobile layouts and interactions in Figma.",
    ],
    technologies: ["Figma", "UI Design", "Prototyping", "Design Systems"],
    links: [
      {
        label: "Figma",
        href: "https://www.figma.com/proto/B8xQeuv59qQjf3CX5nNfwm/TechSeries2025?node-id=0-1&t=2LwEM4QBOwiweyFx-1",
      },
    ],
    credit: "Individual Project | Ellipsis",
    previewLabel: "Design preview",
    screenshotSrc: "/images/projects/ellipsis-tech-series.png",
  },
  {
    title: "AfterClass UI Competition",
    summary: "A Figma interface prototype for the AfterClass UI competition.",
    year: "2025",
    format: "Team Project",
    domain: "Creative",
    description:
      "A team Figma submission for the AfterClass UI competition, covering screen layouts, components, and interaction states.",
    highlights: [
      "Designed around consistency across screens, states, and interaction patterns.",
      "Focused on clarity, flow, and structured component thinking within the competition deliverable.",
    ],
    technologies: ["Figma", "UI Design", "Component Design"],
    links: [
      {
        label: "Figma",
        href: "https://www.figma.com/proto/rs7VSsfqqxucYFZWeYvjTW/-UI-Cubed--AfterClass-Design-Submission?node-id=3581-6207&starting-point-node-id=3581%3A6207&t=BgiVjv9y2I6nGDQp-1",
      },
    ],
    note: "UI Hackathon by SMU Product Club",
    credit:
      "Team: Htet Shwe Win Than, Tai Wei Sin, Win Lei Thawdar",
    previewLabel: "Interface preview",
    screenshotSrc: "/images/projects/afterclass-ui.png",
  },
  {
    title: "Graphic Design Portfolio",
    summary: "A collection of branding, social graphics, event materials, and artwork.",
    year: "2024",
    format: "Personal Project",
    domain: "Creative",
    description:
      "Curated collection of brand identities, social media graphics, event materials, and artwork across different visual styles and formats.",
    highlights: [
      "Includes branding, event materials, social content, and broader visual communication work.",
      "Collects a wider body of design work into one place for easier browsing and presentation.",
    ],
    technologies: [
      "Adobe Photoshop",
      "Illustrator",
      "Branding",
      "Social Media",
      "Layout Design",
    ],
    links: [
      {
        label: "Portfolio",
        href: "https://www.canva.com/design/DAGuor6sXg4/u4ZjrrmetCGemY4mpusWUg/view",
      },
    ],
    credit: "Individual Project",
    previewLabel: "Design portfolio preview",
    screenshotSrc: "/images/projects/graphic-design-portfolio.png",
  },
  {
    title: "Parade Card Game",
    summary: "A digital card game with multiplayer and human-versus-AI modes.",
    year: "2025",
    format: "Team Project",
    domain: "Tech",
    description:
      "Java implementation with Human vs AI and multiplayer architecture, including scoring, hints, and undo features.",
    highlights: [
      "Implemented structured gameplay logic with support for Human vs AI and multiplayer modes.",
      "Included quality-of-play features such as hints, undo functionality, and score handling.",
    ],
    technologies: ["Java", "Object-Oriented Programming", "Game Logic", "AI"],
    links: [
      {
        label: "Presentation",
        href: "https://canva.link/zd6ec9ckcktrilo",
      },
      {
        label: "Source Code",
        href: "https://github.com/wltdwinnie/ParadeCardGame",
      },
    ],
    note: "CS102: Java Fundamentals",
    credit:
      "Team: Aum Jiwoo, Brandon Boo, Chua Qihan, Darrius Ng, Rayner Sim, Win Lei Thawdar",
    previewLabel: "Game preview",
    screenshotSrc: "/images/projects/parade-card-game.png",
  },
  {
    title: "SMU Nest",
    summary: "A housing app prototype with student reviews and travel-time information.",
    year: "2024",
    format: "Team Project",
    domain: "Creative",
    description:
      "Mobile prototype that helps students find affordable housing with student-verified reviews and travel-time context.",
    highlights: [
      "Shaped around student-specific filters, trust signals, and more useful housing context.",
      "Grounded the prototype in clearer UX flows and practical information design decisions.",
    ],
    technologies: ["Figma", "Prototyping", "UX Research"],
    links: [
      {
        label: "Figma",
        href: "https://www.figma.com/proto/qcTJButXewYbUqDiTp5pwJ/SMU-Nest-Prototype?node-id=11-8",
      },
      {
        label: "Pitch Video",
        href: "https://youtu.be/Co_I1f2JQw0?si=omQOqLgtnMIrkxoJ",
      },
      {
        label: "Demo Video",
        href: "https://youtu.be/d-yWqSmo-Sc?si=vSoEDNOaFK-jEKjY",
      },
    ],
    note: "IS211: Interaction Design & Prototyping",
    credit:
      "Team: Ho Xin Yu, Htet Shwe Win Than, Kaitlin Gardner, Sierra Colvin, Win Lei Thawdar",
    previewLabel: "Mobile preview",
    screenshotSrc: "/images/projects/smunest.png",
  },
  {
    title: "Portfolio Website V1",
    summary: "The earlier version of my personal portfolio website.",
    year: "2025",
    format: "Personal Project",
    domain: "Tech",
    description:
      "Earlier version of my personal portfolio website, built before this current redesign and development iteration.",
    highlights: [
      "Built as a scalable personal website with reusable components and a polished responsive system.",
      "Designed to balance professionalism with a more personal and visual presentation style.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "next-themes"],
    links: [
      { label: "Live Demo", href: "https://winleithawdar.vercel.app" },
      {
        label: "Source Code",
        href: "https://github.com/winleithawdar/portfolio",
      },
    ],
    credit: "Individual Project",
    previewLabel: "Portfolio preview",
    screenshotSrc: "/images/projects/portfolio.png",
  },
];

const priorityProjectOrder = new Map([
  ["SMUAI Website", 0],
  ["Nomi", 1],
]);

const sortedProjectItems = [...projectItems].sort((left, right) => {
  const leftPriority = priorityProjectOrder.get(left.title);
  const rightPriority = priorityProjectOrder.get(right.title);

  if (leftPriority !== undefined || rightPriority !== undefined) {
    if (leftPriority === undefined) {
      return 1;
    }

    if (rightPriority === undefined) {
      return -1;
    }

    return leftPriority - rightPriority;
  }

  if (left.title === "Graphic Design Portfolio") {
    return 1;
  }

  if (right.title === "Graphic Design Portfolio") {
    return -1;
  }

  return Number(right.year) - Number(left.year);
});

const technicalProjectItems = sortedProjectItems.filter(
  (project) => project.domain === "Tech",
);

const designProjectItems = sortedProjectItems.filter(
  (project) => project.domain === "Creative",
);

const projectCategoryTabs = [
  {
    key: "all",
    label: "All",
    items: sortedProjectItems,
  },
  {
    key: "technical",
    label: "Technical",
    items: technicalProjectItems,
  },
  {
    key: "design",
    label: "Design",
    items: designProjectItems,
  },
] as const;

type ProjectCategoryTab = (typeof projectCategoryTabs)[number]["key"];

function ArrowUpRightIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M14 5h5v5" />
      <path d="M10 14 19 5" />
      <path d="M19 13v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" />
    </svg>
  );
}

function GlobeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18" />
      <path d="M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2.2A10 10 0 0 0 8.84 21.7c.5.1.69-.22.69-.49v-1.72c-2.8.61-3.39-1.19-3.39-1.19-.45-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.53 2.35 1.09 2.92.84.09-.65.35-1.09.64-1.34-2.23-.25-4.57-1.11-4.57-4.96 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.03A9.4 9.4 0 0 1 12 6.8c.85 0 1.71.12 2.51.36 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.41.1 2.66.64.7 1.03 1.59 1.03 2.69 0 3.86-2.35 4.71-4.58 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.6.69.49A10 10 0 0 0 12 2.2Z" />
    </svg>
  );
}

function VideoIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3.5" y="6.5" width="13" height="11" rx="2.5" />
      <path d="m16.5 10 4-2v8l-4-2" />
    </svg>
  );
}

function FigmaIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M9 2.75A4.25 4.25 0 0 0 9 11.25h1.5V2.75H9Zm3 0v8.5h1.75a4.25 4.25 0 0 0 0-8.5H12ZM9 12.75A4.25 4.25 0 1 0 13.25 17H12v-4.25H9Zm3 0V17a4.25 4.25 0 1 0 4.25-4.25H12Z" />
    </svg>
  );
}

function PaletteIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3a9 9 0 1 0 0 18h1.2a2.8 2.8 0 0 0 0-5.6h-.7a1.8 1.8 0 0 1-1.8-1.8V12a9 9 0 0 1 9-9Z" />
      <circle cx="7.5" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="10" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="14" cy="7.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function getLinkIcon(label: string) {
  const normalized = label.toLowerCase();

  if (normalized.includes("source")) {
    return GithubIcon;
  }

  if (normalized.includes("figma")) {
    return FigmaIcon;
  }

  if (normalized.includes("video")) {
    return VideoIcon;
  }

  if (normalized.includes("portfolio")) {
    return PaletteIcon;
  }

  return GlobeIcon;
}

function ProjectMetaDetails({
  project,
  className = "",
}: {
  project: ProjectItem;
  className?: string;
}) {
  if (!project.note && !project.credit) {
    return null;
  }

  return (
    <div className={className}>
      {project.note ? (
        <p
          className="text-sm leading-7"
          style={{ color: "var(--accent-strong)" }}
        >
          {project.note.includes("|") ? (
            <>
              <span
                className="font-semibold"
                style={{ color: "var(--foreground)" }}
              >
                {project.note.split("|")[0]?.trim()}
              </span>{" "}
              | {project.note.split("|").slice(1).join("|").trim()}
            </>
          ) : (
            <span
              className="font-semibold"
              style={{ color: "var(--foreground)" }}
            >
              {project.note}
            </span>
          )}
        </p>
      ) : null}

      {project.credit ? (
        <p
          className={project.note ? "mt-2 text-sm leading-7" : "text-sm leading-7"}
          style={{ color: "var(--muted)" }}
        >
          {project.credit.startsWith("Team:") ? (
            <>
              <span
                className="font-semibold"
                style={{ color: "var(--foreground)" }}
              >
                Team:
              </span>{" "}
              {project.credit.slice(5).trim()}
            </>
          ) : (
            <span
              className="font-semibold"
              style={{ color: "var(--foreground)" }}
            >
              {project.credit}
            </span>
          )}
        </p>
      ) : null}
    </div>
  );
}

function ProjectStackSection({
  project,
  className = "",
}: {
  project: ProjectItem;
  className?: string;
}) {
  return (
    <section className={className}>
      <h3 className="project-section-label text-sm font-semibold uppercase">
        Stack
      </h3>
      <div className="mt-4 flex flex-wrap gap-2.5">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="project-stack-chip rounded-full border px-3 py-1.5 font-medium uppercase"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--surface-soft)",
              color: "var(--muted)",
            }}
          >
            {technology}
          </span>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, onOpen }: { project: ProjectItem; onOpen: () => void }) {
  const primaryLink = project.links[0];

  return (
    <article className="gallery-card relative h-full min-w-0">
      <button
        type="button"
        onClick={onOpen}
        aria-label={`View ${project.title} details`}
        aria-haspopup="dialog"
        className="focus-ring portfolio-card group flex h-full w-full cursor-pointer flex-col overflow-hidden text-left transition-colors hover:border-[color:var(--accent-strong)]"
      >
        <span className="relative block aspect-[16/10] w-full overflow-hidden border-b border-[color:var(--border)] bg-[color:var(--surface-soft)]">
          {project.screenshotSrc ? (
            <Image src={project.screenshotSrc} alt="" fill className="object-cover object-top" sizes="(max-width: 1023px) 50vw, 33vw" />
          ) : (
            <span className="flex h-full flex-col justify-between p-6" style={{ background: "linear-gradient(135deg, var(--accent-soft), var(--surface))" }}>
              <span className="text-xs uppercase tracking-widest text-[color:var(--accent-strong)]">{project.previewLabel}</span>
              <span className="font-[family-name:var(--font-display)] text-2xl text-[color:var(--foreground)]">{project.title}</span>
            </span>
          )}
        </span>
        <span className="flex w-full min-w-0 flex-1 flex-col p-3 md:p-5">
          <span className="flex justify-between gap-3 text-xs text-[color:var(--muted)]">
            <span>{project.domain === "Tech" ? "Technical" : "Design"}</span><span>{project.year}</span>
          </span>
          <span className="mt-2 break-words text-sm font-semibold leading-snug tracking-tight text-[color:var(--foreground)] md:mt-3 md:text-xl">{project.title}</span>
          <span className="mt-2 text-xs leading-5 md:mt-3 md:text-sm md:leading-6 text-[color:var(--muted)]">{project.summary}</span>
          <span className="mt-auto flex items-center justify-between gap-2 pt-3 text-xs md:gap-3 md:pt-5 text-[color:var(--accent-strong)]">
            <span className="hidden min-w-0 truncate md:block">{project.technologies.slice(0, 2).join(" · ")}</span>
            <span className="inline-flex shrink-0 items-center gap-1.5 font-semibold">View details <ArrowUpRightIcon className="h-3.5 w-3.5" /></span>
          </span>
        </span>
      </button>
      {primaryLink ? (
        <a
          href={primaryLink.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title}: ${primaryLink.label} (opens in a new tab)`}
          className="focus-ring absolute right-1.5 top-1.5 z-10 inline-flex min-h-11 min-w-11 justify-center items-center gap-2 md:right-3 md:top-3 rounded-full border border-white/20 bg-black/80 px-2 text-xs md:px-3.5 font-semibold text-white shadow-lg backdrop-blur-md transition-colors hover:bg-black"
        >
          <span className="hidden md:inline">{primaryLink.label}</span>
          <ArrowUpRightIcon className="h-4 w-4" />
        </a>
      ) : null}
    </article>
  );
}

function ProjectDetails({ project, onClose }: { project: ProjectItem; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="project-details-title"
      onClose={(event) => {
        if (!event.currentTarget.open) onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const bounds = event.currentTarget.getBoundingClientRect();
          if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
        }
      }}
      className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%_-_2rem)] max-w-3xl overflow-y-auto overscroll-contain rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-0 text-[color:var(--foreground)] shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm"
    >
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-3">
        <span className="text-xs font-medium text-[color:var(--muted)]">{project.domain === "Tech" ? "Technical" : "Design"} · {project.year}</span>
        <button type="button" autoFocus onClick={onClose} className="focus-ring inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-2xl leading-none hover:bg-[color:var(--surface-soft)]" aria-label="Close project details"><span aria-hidden="true">×</span></button>
      </div>
      {project.screenshotSrc ? (
        <div className="relative aspect-[16/9] bg-[color:var(--surface-soft)]">
          <Image src={project.screenshotSrc} alt={`${project.title} preview`} fill sizes="(max-width: 768px) 100vw, 768px" className="object-contain" />
        </div>
      ) : null}
      <div className="p-5 sm:p-8">
        <p className="text-xs uppercase tracking-widest text-[color:var(--muted)]">{project.format}</p>
        <h2 id="project-details-title" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{project.title}</h2>
        <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {project.links.map((link) => {
            const LinkIcon = getLinkIcon(link.label);
            return <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full border border-[color:var(--border)] px-4 text-sm font-medium hover:bg-[color:var(--surface-soft)]"><LinkIcon />{link.label}<ArrowUpRightIcon /></a>;
          })}
        </div>
        <ProjectMetaDetails project={project} className="mt-6" />
        <h3 className="mt-6 text-sm font-semibold">{project.highlightLabel ?? "Highlights"}</h3>
        <ul className="mt-3 list-disc space-y-3 pl-5 text-sm leading-7 text-[color:var(--muted)]">
          {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
        <ProjectStackSection project={project} className="mt-7" />
      </div>
    </dialog>
  );
}

export function ProjectCategoryTabs() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const category = searchParams.get("category");
  const activeTab: ProjectCategoryTab = category === "design" || category === "technical" ? category : "all";

  function setActiveTab(tab: ProjectCategoryTab) {
    if (tab === activeTab) return;
    const params = new URLSearchParams(searchParams.toString());
    if (tab === "all") params.delete("category");
    else params.set("category", tab);
    const query = params.toString();
    router.push(`${pathname}${query ? `?${query}` : ""}${window.location.hash}`, { scroll: false });
  }
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeCategory = projectCategoryTabs.find(
    (tab) => tab.key === activeTab,
  ) ?? projectCategoryTabs[0];

  return (
    <section aria-label="Project categories" className="space-y-5">
      <ScrollReveal y={22}>
        <div
          role="tablist"
          aria-label="Project categories"
          className="flex w-full gap-1 border-b border-[color:var(--border)] sm:gap-6"
        >
          {projectCategoryTabs.map((tab, index) => {
            const isActive = tab.key === activeTab;

            return (
              <button
                key={tab.key}
                ref={(element) => { tabRefs.current[index] = element; }}
                type="button"
                role="tab"
                tabIndex={isActive ? 0 : -1}
                aria-selected={isActive}
                aria-controls="projects-category-panel"
                id={`projects-tab-${tab.key}`}
                onClick={() => setActiveTab(tab.key)}
                onKeyDown={(event) => {
                  let nextIndex: number;
                  switch (event.key) {
                    case "ArrowRight":
                      nextIndex = (index + 1) % projectCategoryTabs.length;
                      break;
                    case "ArrowLeft":
                      nextIndex = (index - 1 + projectCategoryTabs.length) % projectCategoryTabs.length;
                      break;
                    case "Home":
                      nextIndex = 0;
                      break;
                    case "End":
                      nextIndex = projectCategoryTabs.length - 1;
                      break;
                    default:
                      return;
                  }
                  event.preventDefault();
                  setActiveTab(projectCategoryTabs[nextIndex].key);
                  tabRefs.current[nextIndex]?.focus();
                }}
                className={`focus-ring relative -mb-px inline-flex min-h-12 flex-1 items-center justify-center gap-2 border-b-2 px-2 py-3 text-sm font-semibold transition-colors sm:flex-none sm:px-3 ${
                  isActive
                    ? "border-[color:var(--accent-strong)] text-[color:var(--accent-strong)]"
                    : "border-transparent text-[color:var(--muted)] hover:border-[color:var(--border)] hover:text-[color:var(--foreground)]"
                }`}
              >
                {tab.label}
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[0.65rem] leading-4 tabular-nums ${
                    isActive
                      ? "bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)]"
                      : "bg-[color:var(--surface-soft)] text-[color:var(--muted)]"
                  }`}
                >
                  {tab.items.length}
                </span>
              </button>
            );
          })}
        </div>

      </ScrollReveal>

      <div
        id="projects-category-panel"
        role="tabpanel"
        tabIndex={0}
        className="focus-ring rounded-lg"
        aria-labelledby={`projects-tab-${activeTab}`}
      >
        <div className="grid grid-cols-2 items-start gap-3 md:gap-6 lg:grid-cols-3">
          {activeCategory.items.map((project, index) => (
            <ScrollReveal
              key={`${activeTab}-${project.title}-${project.year}`}
              className="h-full min-w-0"
              delayMs={(index % 3) * 45}
              y={20}
            >
              <ProjectCard project={project} onOpen={() => setSelectedProject(project)} />
            </ScrollReveal>
          ))}
        </div>
      </div>
      {selectedProject ? <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} /> : null}
    </section>
  );
}

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const featuredTitles = ["SMUAI Website", "Nomi", "SMU Nest"];
  const projects = featuredTitles.flatMap((title) => {
    const project = projectItems.find((item) => item.title === title);
    return project ? [project] : [];
  });

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-3">
        {projects.map((project) => <ProjectCard key={project.title} project={project} onOpen={() => setSelectedProject(project)} />)}
      </div>
      {selectedProject ? <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} /> : null}
    </>
  );
}
