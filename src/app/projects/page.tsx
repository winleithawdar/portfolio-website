import Image from "next/image";
import { PageIntro } from "@/components/page-intro";

type ProjectLink = {
  label: string;
  href: string;
};

type PreviewStyle =
  | "browser"
  | "dashboard"
  | "housing"
  | "figma"
  | "mobile"
  | "cards"
  | "portfolio";

type ProjectItem = {
  title: string;
  year: string;
  format: string;
  domain: string;
  description: string;
  highlightLabel?: string;
  highlights: string[];
  technologies: string[];
  links: ProjectLink[];
  note?: string;
  credit?: string;
  previewStyle: PreviewStyle;
  previewLabel: string;
  screenshotSrc?: string;
};

const projectItems: ProjectItem[] = [
  {
    title: "SMUAI Website",
    year: "2026",
    format: "SMU CCA Development Project",
    domain: "Tech",
    description:
      "Official website for SMU Artificial Intelligence Club, designed and developed end-to-end for the club’s public presence and information needs.",
    highlights: [
      "Independently designed and developed the official SMUAI website using Next.js, TypeScript, and Tailwind CSS, covering information architecture, UI/UX, and responsive development.",
      "Integrated an AI-powered chatbot using an LLM API to answer questions about membership, events, and club activities.",
      "Deployed and maintained the production website through GitHub and Vercel at smuai.org.",
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
    note: "Developer | SMU Artificial Intelligence Club | Feb 2026 - Jul 2026",
    credit: "Solo Project",
    previewStyle: "browser",
    previewLabel: "Website preview",
    screenshotSrc: "/images/projects/smuai.png",
  },
  {
    title: "OpenEval",
    year: "2026",
    format: "OpenAI Codex Hackathon - Singapore",
    domain: "Tech",
    description:
      "Hackathon project built for the OpenAI Codex Hackathon - Singapore in February 2026, developed and shipped in a fast-paced build setting.",
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
    note: "OpenAI Codex Hackathon - Singapore | Saturday, February 28, 2026",
    credit:
      "Team: Anson Koh, Darrius Ng, Htet Shwe Win Than, Win Lei Thawdar",
    previewStyle: "dashboard",
    previewLabel: "Hackathon project preview",
    screenshotSrc: "/images/projects/openeval.png",
  },
  {
    title: "TariffEase",
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
        label: "Source Code",
        href: "https://github.com/Sprou-t/cs203",
      },
    ],
    note: "CS203: Collaborative Software Development",
    credit:
      "Team: Chai Yi Khuen, Htet Shwe Win Than, Lau Wei Bin, Tai Wei Sin, Win Lei Thawdar",
    previewStyle: "dashboard",
    previewLabel: "TariffEase project preview",
    screenshotSrc: "/images/projects/tariffease.png",
  },
  {
    title: "Pawsitive",
    year: "2025",
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
    previewStyle: "mobile",
    previewLabel: "Pet healthcare app preview",
    screenshotSrc: "/images/projects/pawsitive.png",
  },
  {
    title: "Portfolio Website V1",
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
    credit: "Solo Project",
    previewStyle: "portfolio",
    previewLabel: "Portfolio preview",
    screenshotSrc: "/images/projects/portfolio.png",
  },
  {
    title: "AutoGreen.sg",
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
      "Next.js 15",
      "React 19",
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
    previewStyle: "dashboard",
    previewLabel: "Product preview",
    screenshotSrc: "/images/projects/autogreen.png",
    note: "Ellipsis Tech Series Hackathon | Top 10 Team",
    credit:
      "Team: Aung Ye Thant Hein, Chue Myat Sandy, Htet Shwe Win Than, Win Lei Thawdar, Wunna Aung",
  },
  {
    title: "RentLah!",
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
    previewStyle: "housing",
    previewLabel: "Housing app preview",
    screenshotSrc: "/images/projects/rentlah.png",
    note: "HEAP Program",
    credit:
      "Team: Aung Ye Thant Hein, Chue Myat Sandy, Htet Shwe Win Than, Lin Khant Pe Thein, Win Lei Thawdar",
  },
  {
    title: "Ellipsis Tech Series 2025 Website Design",
    year: "2025",
    format: "Personal Project",
    domain: "Creative",
    description:
      "Individual Figma prototype for the Ellipsis Tech Series website, focused on information hierarchy, mobile flows, and interaction details.",
    highlights: [
      "Explored a modular event website system with clearer navigation and event discovery.",
      "Focused on mobile responsiveness, hierarchy, and interaction flow inside the prototype.",
    ],
    technologies: ["Figma", "UI Design", "Prototyping", "Design Systems"],
    links: [
      {
        label: "Figma",
        href: "https://www.figma.com/proto/B8xQeuv59qQjf3CX5nNfwm/TechSeries2025?node-id=0-1&t=2LwEM4QBOwiweyFx-1",
      },
    ],
    credit: "Solo Project",
    previewStyle: "figma",
    previewLabel: "Design preview",
    screenshotSrc: "/images/projects/ellipsis-tech-series.png",
  },
  {
    title: "SMU Nest",
    year: "2025",
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
    ],
    note: "IS211: Interaction Design & Prototyping",
    credit:
      "Team: Ho Xin Yu, Htet Shwe Win Than, Kaitlin Gardner, Sierra Colvin, Win Lei Thawdar",
    previewStyle: "mobile",
    previewLabel: "Mobile preview",
    screenshotSrc: "/images/projects/smu-nest.png",
  },
  {
    title: "AfterClass UI Competition",
    year: "2025",
    format: "Team Project",
    domain: "Creative",
    description:
      "Module submission emphasizing clean layout systems and user-centric flows across screens and states.",
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
    previewStyle: "figma",
    previewLabel: "Interface preview",
    screenshotSrc: "/images/projects/afterclass-ui.png",
  },
  {
    title: "Parade Card Game",
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
        label: "Source Code",
        href: "https://github.com/wltdwinnie/ParadeCardGame",
      },
    ],
    note: "CS102: Java Fundamentals",
    credit:
      "Team: Aum Jiwoo, Brandon Boo, Chua Qihan, Darrius Ng, Rayner Sim, Win Lei Thawdar",
    previewStyle: "cards",
    previewLabel: "Game preview",
    screenshotSrc: "/images/projects/parade-card-game.png",
  },
  {
    title: "Graphic Design Portfolio",
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
    credit: "Solo Project",
    previewStyle: "portfolio",
    previewLabel: "Design portfolio preview",
    screenshotSrc: "/images/projects/graphic-design-portfolio.png",
  },
];

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

function mixColor(variable: string, opacity: number) {
  return `color-mix(in srgb, var(${variable}) ${opacity}%, transparent)`;
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

function getPrimaryLink(project: ProjectItem) {
  return project.links[0] ?? null;
}

function ProjectLinksRow({ project }: { project: ProjectItem }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {project.links.map((link) => {
        const LinkIcon = getLinkIcon(link.label);

        return (
          <a
            key={`${project.title}-${link.label}`}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            title={link.label}
            aria-label={`${project.title}: ${link.label}`}
            className="focus-ring inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm shadow-[0_12px_24px_rgba(75,63,110,0.06)] transition hover:-translate-y-0.5"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--surface-soft)",
              color: "var(--foreground)",
            }}
          >
            <LinkIcon className="h-4 w-4 shrink-0" />
            <span>{link.label}</span>
          </a>
        );
      })}
    </div>
  );
}

function ProjectPreview({ project }: { project: ProjectItem }) {
  const primaryLink = getPrimaryLink(project);

  const previewInner = (() => {
    switch (project.previewStyle) {
      case "browser":
        return (
          <div
            className="grid h-full grid-rows-[auto_1fr] rounded-[1.7rem] border p-4"
            style={{ borderColor: "var(--border)", backgroundColor: mixColor("--surface", 92) }}
          >
            <div className="flex items-center gap-2 pb-3">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: mixColor("--accent-strong", 25) }} />
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: mixColor("--accent", 28) }} />
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: mixColor("--accent", 16) }} />
            </div>
            <div className="grid grid-cols-[0.7fr_1.3fr] gap-3">
              <div className="rounded-[1.2rem] p-3" style={{ backgroundColor: mixColor("--accent-soft", 85) }}>
                <div className="h-8 rounded-full" style={{ backgroundColor: mixColor("--surface", 80) }} />
                <div className="mt-3 space-y-2">
                  <div className="h-2 rounded-full" style={{ backgroundColor: mixColor("--surface", 70) }} />
                  <div className="h-2 rounded-full" style={{ backgroundColor: mixColor("--surface", 58) }} />
                  <div className="h-2 w-4/5 rounded-full" style={{ backgroundColor: mixColor("--surface", 48) }} />
                </div>
              </div>
              <div
                className="space-y-3 rounded-[1.2rem] border p-3"
                style={{ borderColor: "var(--border)", backgroundColor: mixColor("--surface-soft", 78) }}
              >
                <div className="h-20 rounded-2xl" style={{ backgroundColor: mixColor("--accent-soft", 68) }} />
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-14 rounded-[0.95rem]" style={{ backgroundColor: "var(--surface)" }} />
                  <div className="h-14 rounded-[0.95rem]" style={{ backgroundColor: "var(--surface)" }} />
                </div>
              </div>
            </div>
          </div>
        );
      case "dashboard":
        return (
          <div
            className="grid h-full grid-rows-[auto_1fr] rounded-[1.7rem] border p-4"
            style={{ borderColor: "var(--border)", backgroundColor: mixColor("--surface", 92) }}
          >
            <div className="flex items-center justify-between pb-3">
              <div className="h-3 w-20 rounded-full" style={{ backgroundColor: "var(--accent-soft)" }} />
              <div
                className="h-9 w-9 rounded-full border"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--surface-soft)" }}
              />
            </div>
            <div className="grid gap-3">
              <div className="grid grid-cols-[1.2fr_0.8fr] gap-3">
                <div className="rounded-[1.2rem] p-4" style={{ backgroundColor: mixColor("--accent-soft", 84) }}>
                  <div className="h-2 w-20 rounded-full" style={{ backgroundColor: mixColor("--accent", 35) }} />
                  <div className="mt-3 h-16 rounded-2xl" style={{ backgroundColor: mixColor("--surface", 76) }} />
                </div>
                <div
                  className="rounded-[1.2rem] border p-4"
                  style={{ borderColor: "var(--border)", backgroundColor: "var(--surface-soft)" }}
                >
                  <div className="h-10 rounded-[0.9rem]" style={{ backgroundColor: "var(--surface)" }} />
                  <div className="mt-3 h-2 rounded-full" style={{ backgroundColor: mixColor("--accent", 24) }} />
                  <div className="mt-2 h-2 w-3/4 rounded-full" style={{ backgroundColor: mixColor("--accent", 18) }} />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="h-16 rounded-2xl" style={{ backgroundColor: "var(--surface)" }} />
                <div className="h-16 rounded-2xl" style={{ backgroundColor: mixColor("--accent-soft", 72) }} />
                <div className="h-16 rounded-2xl" style={{ backgroundColor: "var(--surface)" }} />
              </div>
            </div>
          </div>
        );
      case "housing":
        return (
          <div
            className="grid h-full grid-cols-[0.95fr_1.05fr] gap-3 rounded-[1.7rem] border p-4"
            style={{ borderColor: "var(--border)", backgroundColor: mixColor("--surface", 92) }}
          >
            <div className="rounded-[1.2rem] p-3" style={{ backgroundColor: mixColor("--accent-soft", 8) }}>
              <div
                className="h-full rounded-2xl border border-dashed p-3"
                style={{ borderColor: "var(--border-strong)", backgroundColor: mixColor("--surface-soft", 72) }}
              >
                <div className="flex h-full items-end justify-between">
                  <div className="h-16 w-10 rounded-t-2xl" style={{ backgroundColor: mixColor("--accent", 20) }} />
                  <div className="h-24 w-12 rounded-t-2xl" style={{ backgroundColor: mixColor("--accent-strong", 22) }} />
                  <div className="h-12 w-9 rounded-t-[0.85rem]" style={{ backgroundColor: mixColor("--accent", 20) }} />
                </div>
              </div>
            </div>
            <div
              className="space-y-3 rounded-[1.2rem] border p-3"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--surface-soft)" }}
            >
              <div className="h-24 rounded-2xl" style={{ backgroundColor: "var(--surface)" }} />
              <div className="grid grid-cols-2 gap-3">
                <div className="h-16 rounded-[0.95rem]" style={{ backgroundColor: "var(--surface)" }} />
                <div className="h-16 rounded-[0.95rem]" style={{ backgroundColor: mixColor("--accent-soft", 75) }} />
              </div>
              <div className="h-2 w-4/5 rounded-full" style={{ backgroundColor: mixColor("--accent", 20) }} />
            </div>
          </div>
        );
      case "figma":
        return (
          <div
            className="grid h-full grid-cols-3 gap-3 rounded-[1.7rem] border p-4"
            style={{ borderColor: "var(--border)", backgroundColor: mixColor("--surface", 92) }}
          >
            <div
              className="rounded-[1.1rem] border p-3"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--surface-soft)" }}
            >
              <div className="h-24 rounded-[0.95rem]" style={{ backgroundColor: mixColor("--accent-soft", 82) }} />
              <div className="mt-3 h-2 rounded-full" style={{ backgroundColor: mixColor("--accent", 22) }} />
            </div>
            <div
              className="rounded-[1.1rem] border p-3"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}
            >
              <div className="h-16 rounded-[0.95rem]" style={{ backgroundColor: mixColor("--accent-soft", 65) }} />
              <div className="mt-3 h-16 rounded-[0.95rem]" style={{ backgroundColor: "var(--surface-soft)" }} />
            </div>
            <div
              className="rounded-[1.1rem] border p-3"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--surface-soft)" }}
            >
              <div className="h-full rounded-[0.95rem]" style={{ backgroundColor: "var(--surface)" }} />
            </div>
          </div>
        );
      case "mobile":
        return (
          <div
            className="flex h-full items-center justify-center rounded-[1.7rem] border p-4"
            style={{ borderColor: "var(--border)", backgroundColor: mixColor("--surface", 92) }}
          >
            <div
              className="w-36 rounded-[1.9rem] border p-3 shadow-[0_16px_30px_rgba(75,63,110,0.08)]"
              style={{ borderColor: "var(--border-strong)", backgroundColor: "var(--surface-soft)" }}
            >
              <div className="mx-auto h-1.5 w-12 rounded-full" style={{ backgroundColor: mixColor("--accent", 25) }} />
              <div className="mt-4 h-24 rounded-2xl p-3" style={{ backgroundColor: mixColor("--accent-soft", 8) }}>
                <div className="h-full rounded-[0.95rem] border border-dashed" style={{ borderColor: "var(--border-strong)" }} />
              </div>
              <div className="mt-4 space-y-3">
                <div className="h-12 rounded-[0.95rem]" style={{ backgroundColor: "var(--surface)" }} />
                <div className="h-12 rounded-[0.95rem]" style={{ backgroundColor: "var(--surface)" }} />
              </div>
            </div>
          </div>
        );
      case "cards":
        return (
          <div
            className="relative h-full rounded-[1.7rem] border p-4"
            style={{ borderColor: "var(--border)", backgroundColor: mixColor("--surface", 92) }}
          >
            <div
              className="absolute left-[18%] top-[18%] h-32 w-24 rotate-[-8deg] rounded-[1.2rem] border shadow-[0_14px_24px_rgba(75,63,110,0.08)]"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--surface-soft)" }}
            />
            <div
              className="absolute left-[36%] top-[12%] h-32 w-24 rounded-[1.2rem] border shadow-[0_14px_24px_rgba(75,63,110,0.08)]"
              style={{
                borderColor: "var(--border)",
                backgroundColor: mixColor("--accent-soft", 78),
                transform: "rotate(6deg)",
              }}
            />
            <div
              className="absolute left-[53%] top-[22%] h-32 w-24 rounded-[1.2rem] border shadow-[0_14px_24px_rgba(75,63,110,0.08)]"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--surface)",
                transform: "rotate(14deg)",
              }}
            />
          </div>
        );
      case "portfolio":
        return (
          <div
            className="grid h-full grid-cols-[1.05fr_0.95fr] gap-3 rounded-[1.7rem] border p-4"
            style={{ borderColor: "var(--border)", backgroundColor: mixColor("--surface", 92) }}
          >
            <div className="space-y-3">
              <div className="h-24 rounded-[1.1rem]" style={{ backgroundColor: mixColor("--accent-soft", 84) }} />
              <div className="grid grid-cols-2 gap-3">
                <div className="h-16 rounded-[0.95rem]" style={{ backgroundColor: "var(--surface-soft)" }} />
                <div className="h-16 rounded-[0.95rem]" style={{ backgroundColor: "var(--surface)" }} />
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-14 rounded-[0.95rem]" style={{ backgroundColor: "var(--surface)" }} />
              <div
                className="h-28 rounded-[1.15rem] border"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--surface-soft)" }}
              />
            </div>
          </div>
        );
    }
  })();

  const screenContent = project.screenshotSrc ? (
    <div
      className="relative h-full w-full overflow-hidden rounded-2xl"
      style={{ backgroundColor: "var(--surface)" }}
    >
      <Image
        src={project.screenshotSrc}
        alt={`${project.title} preview`}
        fill
        className="object-cover object-top"
        sizes="(max-width: 1024px) 100vw, 460px"
      />
    </div>
  ) : (
    <div
      className="h-full w-full overflow-hidden rounded-2xl"
      style={{ backgroundColor: "var(--surface)" }}
    >
      {previewInner}
    </div>
  );

  const baseClassName =
    "group relative block overflow-hidden rounded-[2rem] bg-transparent p-0 transition hover:-translate-y-1 focus-ring";

  const laptopFrame = (
    <div
      className="rounded-[1.6rem] border p-2.5 shadow-[0_18px_36px_rgba(75,63,110,0.1)] transition group-hover:shadow-[0_22px_42px_rgba(75,63,110,0.12)]"
      style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}
    >
      <div
        className="relative overflow-hidden rounded-[1.05rem] p-1.5"
        style={{ aspectRatio: "16 / 10", backgroundColor: "#111019" }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-[0.8rem]">
          {screenContent}
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center transition"
            style={{ backgroundColor: "rgba(17, 16, 25, 0.05)" }}
          >
            <span
              className="inline-flex h-14 w-14 items-center justify-center rounded-full border text-white shadow-[0_16px_28px_rgba(0,0,0,0.14)] transition group-hover:scale-105"
              style={{
                borderColor: "rgba(255, 255, 255, 0.14)",
                backgroundColor: "rgba(251, 248, 244, 0.08)",
              }}
            >
              <ArrowUpRightIcon className="h-5 w-5" />
            </span>
          </div>
        </div>
      </div>
      <div className="mt-2 flex justify-center">
        <div className="h-1.5 w-20 rounded-full" style={{ backgroundColor: mixColor("--border-strong", 90) }} />
      </div>
    </div>
  );

  return primaryLink ? (
    <div className="space-y-3">
      <a
        href={primaryLink.href}
        target="_blank"
        rel="noreferrer"
        className={baseClassName}
        aria-label={`${project.previewLabel}: open ${project.title}`}
      >
        {laptopFrame}
      </a>
      <ProjectLinksRow project={project} />
    </div>
  ) : (
    <div className="space-y-3">
      <div className={baseClassName}>{laptopFrame}</div>
      <ProjectLinksRow project={project} />
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <section aria-labelledby="projects-title" className="w-full space-y-6">
      <PageIntro
        accent="projects"
        label="Projects"
        title="Ideas Brought to Life"
        description="A visual collection of projects shaped through design, development, experimentation, and collaboration."
        titleId="projects-title"
      />

      <section className="space-y-5">
        {projectItems.map((project) => (
          <article
            key={`${project.title}-${project.year}`}
            className="elevated-card overflow-hidden rounded-[2.2rem] px-5 py-5 md:px-6 md:py-6"
          >
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,27rem)] lg:items-start lg:gap-8">
              <div className="min-w-0">
                <div
                  className="flex flex-wrap items-center gap-2 text-sm"
                  style={{ color: "var(--muted)" }}
                >
                  <span className="paper-tag project-meta-tag px-3 py-1 font-semibold uppercase">
                    {project.year}
                  </span>
                  <span className="paper-tag project-meta-tag px-3 py-1 font-semibold uppercase">
                    {project.format}
                  </span>
                  <span className="paper-tag project-meta-tag px-3 py-1 font-semibold uppercase">
                    {project.domain}
                  </span>
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h2 className="project-title">
                      {project.title}
                    </h2>
                    <p
                      className="mt-3 max-w-3xl text-sm leading-7 md:text-base"
                      style={{ color: mixColor("--foreground", 78) }}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>

                {project.note ? (
                  <p
                    className="mt-4 text-sm leading-7"
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
                    className="mt-2 text-sm leading-7"
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

                <section className="mt-6">
                  <h3 className="project-section-label text-sm font-semibold uppercase">
                    {project.highlightLabel ?? "Highlights"}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-7"
                        style={{ color: mixColor("--foreground", 78) }}
                      >
                        <span
                          aria-hidden="true"
                          className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: "var(--accent-strong)" }}
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <ProjectPreview project={project} />
            </div>

            <section className="mt-7">
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
          </article>
        ))}
      </section>
    </section>
  );
}
