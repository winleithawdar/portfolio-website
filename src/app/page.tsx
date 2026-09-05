import Link from "next/link";
import {
  EducationIcon,
  ExperienceIcon,
  MoonIcon,
  ProjectsIcon,
} from "@/components/icons";
import { HomeHero } from "@/components/home-hero";
import { SkillsIconCloud } from "@/components/skills-icon-cloud";
import { ScrollReveal } from "@/components/scroll-reveal";

const homeJourneyMoments = [
  {
    label: "Before tech",
    title: "A very different plan",
    description:
      "Growing up in Myanmar, I never expected Computer Science to become the path I would choose.",
  },
  {
    label: "Turning point",
    title: "A route I had to rethink",
    description:
      "Moving to Singapore pushed me to think harder about where I wanted to grow and what kind of future I wanted to build.",
  },
  {
    label: "Now",
    title: "Technology with purpose",
    description:
      "At SMU, I am most drawn to work where engineering, business, and human needs meet in practical ways.",
  },
] as const;

const homeSections = [
  {
    href: "/education",
    title: "Education",
    icon: EducationIcon,
    description: "The academic path, qualifications, and certifications behind the work.",
    cues: ["SMU", "Computer Science", "Qualifications"],
  },
  {
    href: "/experience",
    title: "Experience",
    icon: ExperienceIcon,
    description: "The internships, leadership roles, and communities that shaped how I build and lead.",
    cues: ["AI", "Leadership", "Community"],
  },
  {
    href: "/projects",
    title: "Projects",
    icon: ProjectsIcon,
    description: "The products, experiments, and design work where ideas became something real.",
    cues: ["Builds", "Design", "Hackathons"],
  },
] as const;

const skillCloudItems: ReadonlyArray<{
  label: string;
  slug: string;
  src?: string;
}> = [
  { label: "Python", slug: "python" },
  { label: "Java", slug: "java" },
  { label: "C", slug: "c" },
  { label: "TypeScript", slug: "typescript" },
  { label: "JavaScript", slug: "javascript" },
  { label: "HTML5", slug: "html5" },
  { label: "CSS3", slug: "css3" },
  { label: "React", slug: "react" },
  { label: "Next.js", slug: "nextdotjs" },
  { label: "Tailwind CSS", slug: "tailwindcss" },
  { label: "Node.js", slug: "nodedotjs" },
  { label: "GitHub", slug: "github" },
  { label: "Expo", slug: "expo" },
  { label: "FastAPI", slug: "fastapi" },
  { label: "Supabase", slug: "supabase" },
  { label: "PostgreSQL", slug: "postgresql" },
  { label: "MySQL", slug: "mysql" },
  { label: "Linux", slug: "linux" },
  { label: "macOS", slug: "macos" },
  { label: "AWS", slug: "amazonaws" },
  { label: "Docker", slug: "docker" },
  { label: "Spring Boot", slug: "springboot" },
  { label: "Socket.io", slug: "socketdotio" },
  { label: "PyTorch", slug: "pytorch" },
  { label: "scikit-learn", slug: "scikitlearn" },
  { label: "Jupyter Notebook", slug: "jupyter" },
  { label: "Git", slug: "git" },
  { label: "VS Code", slug: "visualstudiocode" },
  { label: "Canva", slug: "canva" },
  { label: "Photoshop", slug: "adobephotoshop" },
  { label: "Illustrator", slug: "adobeillustrator" },
  { label: "Figma", slug: "figma" },
  { label: "Vercel", slug: "vercel" },
  { label: "Cursor", slug: "cursor" },
] as const;

const codexIcon = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#4b3f6e" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m8 7-4 5 4 5"/><path d="m16 7 4 5-4 5"/><path d="m13.5 5-3 14"/></svg>`,
)}`;

const javaIcon = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#4b3f6e" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round"><path d="M10.2 4.6c1 1-.2 1.7-.9 2.3-.6.5-.8 1.2 0 1.8"/><path d="M13.2 3.8c1.2 1.1-.2 2-.9 2.7-.7.7-1 1.6-.1 2.3"/><path d="M8.2 10.6c1.4.7 3 .9 4.6.9 1.7 0 3.2-.3 4.6-.9"/><path d="M7.5 13.2h10.2a2.3 2.3 0 0 1-2.3 2.3H9.8a2.3 2.3 0 0 1-2.3-2.3Z"/><path d="M17.7 13.6h.7a1.6 1.6 0 1 1 0 3.2h-.9"/><path d="M8.8 18.2c1.2.4 2.5.6 4 .6 2.2 0 4.1-.5 5.4-1.2"/><path d="M7.6 17.5c.6.2 1.2.5 1.9.7"/></svg>`,
)}`;

const skillCloudImages = [
  { label: "Codex", src: codexIcon },
  ...skillCloudItems.map(({ label, slug, src }) => ({
    label,
    src: src || (label === "Java" ? javaIcon : `https://cdn.simpleicons.org/${slug}`),
  })),
];

const skillCategoryList = [
  {
    title: "Frontend Development",
  },
  {
    title: "Backend Development",
  },
  {
    title: "Machine Learning",
  },
  {
    title: "Data & Tooling",
  },
  {
    title: "Product & Design",
  },
  {
    title: "Cloud & Deployment",
  },
] as const;

function ArrowUpRightIcon({ className }: { className?: string }) {
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
      <path d="M8 16 16 8" />
      <path d="M9 8h7v7" />
    </svg>
  );
}

function HomeSectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="flex items-center justify-center gap-3 py-1.5 md:gap-4 md:py-2"
    >
      <span className="block h-px w-full bg-[color:var(--border)]/72" />
      <span className="shrink-0 text-[color:var(--accent-strong)]/78">
        <MoonIcon className="h-4 w-4" />
      </span>
      <span className="block h-px w-full bg-[color:var(--border)]/72" />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <div className="md:hidden">
        <HomeSectionDivider />
      </div>

      <section
        id="home-story"
        aria-labelledby="home-story-title"
        className="relative pb-7 pt-7 md:pb-9 md:pt-8"
      >
        <ScrollReveal className="space-y-5 md:space-y-6">
          <div className="space-y-5">
            <div className="paper-tag px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em]">
              Journey
            </div>

            <h2
              id="home-story-title"
              className="font-[family-name:var(--font-display)] text-[1.95rem] leading-tight tracking-[-0.05em] text-[color:var(--foreground)] md:text-5xl"
            >
              An unexpected path into technology.
            </h2>
          </div>

          <ScrollReveal
            className="home-feature-block rounded-[2rem] px-5 py-6 md:px-7 md:py-7"
            delayMs={90}
            y={22}
          >
            <div className="space-y-6">
              <div className="max-w-3xl space-y-3">
                <p className="text-sm leading-7 text-[color:var(--muted)] md:text-base md:leading-8">
                  I did not plan on ending up in tech. It became the place where
                  curiosity, adaptability, and practical problem-solving came together.
                </p>
                <p className="font-[family-name:var(--font-display)] text-[1.28rem] leading-tight tracking-[-0.035em] text-[color:var(--foreground)] md:text-[1.65rem]">
                  Not a straight line, but the right one.
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {homeJourneyMoments.map((moment) => (
                  <div
                    key={moment.label}
                    className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--surface-soft)]/78 px-4 py-4"
                  >
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                      {moment.label}
                    </p>
                    <h3 className="mt-2 font-[family-name:var(--font-display)] text-[1.08rem] leading-tight tracking-[-0.03em] text-[color:var(--foreground)] md:text-[1.22rem]">
                      {moment.title}
                    </h3>
                    <p className="mt-2 text-[0.82rem] leading-6 text-[color:var(--muted)] md:text-[0.94rem] md:leading-7">
                      {moment.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2.5">
                <span className="editorial-chip px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em]">
                  Myanmar to Singapore
                </span>
                <span className="editorial-chip px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em]">
                  Computer Science + Strategic Management
                </span>
              </div>
            </div>
          </ScrollReveal>
        </ScrollReveal>
      </section>

      <HomeSectionDivider />

      <section
        id="home-skills"
        aria-labelledby="home-skills-title"
        className="relative pb-6 pt-6 md:pb-8 md:pt-8"
      >
        <ScrollReveal className="space-y-5 md:space-y-6">
          <div className="space-y-5">
            <div className="paper-tag px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em]">
              Skills
            </div>

            <h2
              id="home-skills-title"
              className="max-w-4xl font-[family-name:var(--font-display)] text-[1.95rem] leading-tight tracking-[-0.05em] text-[color:var(--foreground)] md:text-5xl"
            >
              Tools I build with.
            </h2>
          </div>

          <ScrollReveal
            className="home-feature-block overflow-hidden rounded-[2rem] px-5 py-5 md:px-7 md:py-5.5"
            delayMs={90}
            y={22}
          >
            <div className="grid gap-5 lg:grid-cols-[minmax(17rem,1.08fr)_minmax(0,0.92fr)] lg:items-center lg:gap-6">
              <div className="order-1">
                <div className="mx-auto w-full max-w-[19rem] sm:max-w-[21rem] md:max-w-[24rem] lg:max-w-[34rem]">
                  <SkillsIconCloud
                    items={skillCloudImages}
                    className="max-w-[18rem] sm:max-w-[20rem] md:max-w-[23rem] lg:max-w-[29rem]"
                  />
                </div>
              </div>

              <div className="order-2 space-y-4 lg:order-2">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                  Core Categories
                </p>

                <div className="space-y-3">
                  {skillCategoryList.map((category) => (
                    <div key={category.title} className="pb-1">
                      <p className="font-[family-name:var(--font-display)] text-[1.2rem] leading-tight tracking-[-0.04em] text-[color:var(--foreground)] md:text-[1.45rem]">
                        {category.title}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-1.5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                    Projects
                  </p>
                  <Link
                    href="/projects"
                    className="focus-ring mt-3 inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-4 py-2.5 text-sm font-semibold text-[color:var(--foreground)] shadow-[0_10px_22px_rgba(75,63,110,0.06)] transition hover:-translate-y-0.5 hover:border-[color:var(--border-strong)] hover:text-[color:var(--accent-strong)]"
                  >
                    <span>See what I&apos;ve built</span>
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </ScrollReveal>
      </section>

      <HomeSectionDivider />

      <section
        id="home-overview"
        aria-labelledby="home-overview-title"
        className="relative pb-6 pt-7 md:pb-8 md:pt-8"
      >
        <ScrollReveal className="space-y-5 md:space-y-6">
          <div className="space-y-4">
              <div className="paper-tag px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em]">
                Explore
              </div>

              <h2
                id="home-overview-title"
                className="max-w-5xl font-[family-name:var(--font-display)] text-[1.95rem] leading-tight tracking-[-0.05em] text-[color:var(--foreground)] md:text-5xl"
              >
                Start with the chapter you want to know first.
              </h2>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {homeSections.map(({ href, title, description, icon: Icon, cues }, index) => (
              <ScrollReveal
                key={href}
                className="home-overview-card group min-h-[9.5rem] rounded-[1.25rem] px-3 py-3.5 md:min-h-[17rem] md:rounded-[1.9rem] md:px-6 md:py-6"
                delayMs={index * 80}
                y={24}
              >
                <Link href={href} className="focus-ring block h-full rounded-[inherit]">
                  <div className="relative flex h-full flex-col justify-between gap-4 md:gap-8">
                    <div className="flex items-start justify-between gap-2 md:gap-4">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-[0.9rem] border border-[color:var(--border)] bg-[color:var(--surface)]/82 text-[color:var(--accent-strong)] shadow-[0_10px_22px_rgba(75,63,110,0.06)] md:h-11 md:w-11 md:rounded-[1rem]">
                        <Icon className="h-4.5 w-4.5 md:h-5 md:w-5" />
                      </span>
                      <span className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)] md:text-[0.68rem] md:tracking-[0.2em]">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="space-y-2 md:space-y-4">
                      <div className="space-y-1.5 md:space-y-2">
                        <h3 className="font-[family-name:var(--font-display)] text-[1.15rem] leading-tight tracking-[-0.04em] text-[color:var(--foreground)] md:text-3xl md:tracking-[-0.045em]">
                          {title}
                        </h3>

                        <p className="hidden max-w-sm text-sm leading-7 text-[color:var(--muted)] md:block md:text-base md:leading-8">
                          {description}
                        </p>
                      </div>

                      <div className="hidden flex-wrap gap-2 md:flex">
                        {cues.map((cue) => (
                          <span
                            key={cue}
                            className="editorial-chip px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em]"
                          >
                            {cue}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <span className="hidden text-sm font-medium text-[color:var(--foreground)]/84 md:inline">
                        Open page
                      </span>
                      <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]/82 px-2 text-[color:var(--foreground)] transition group-hover:border-[color:var(--border-strong)] group-hover:text-[color:var(--accent-strong)] md:h-9 md:min-w-9 md:px-3">
                        <ArrowUpRightIcon className="h-3.5 w-3.5 md:h-4 md:w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
