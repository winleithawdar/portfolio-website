import Link from "next/link";
import {
  CompassIcon,
  EducationIcon,
  ExperienceIcon,
  LeafIcon,
  MoonIcon,
  PeopleIcon,
  ProjectsIcon,
  SparkIcon,
} from "@/components/icons";
import { HomeHero } from "@/components/home-hero";
import { SkillsIconCloud } from "@/components/skills-icon-cloud";
import { ScrollReveal } from "@/components/scroll-reveal";

const homeJourneyParagraphs = [
  "Growing up in Myanmar, I never imagined that I would one day study Computer Science overseas. My original plans looked very different, and for a long time, technology was not part of the picture I had in mind for myself.",
  "A period of uncertainty pushed me to reconsider where I wanted to grow and what kind of future I wanted to build. That process eventually brought me to Singapore and to SMU, where I discovered an interest in technology not only as a technical discipline, but as a way to turn ideas into practical solutions.",
  "Today, I am pursuing Computer Science alongside Strategic Management, and I find myself most interested in the space where technology, business, and human needs come together.",
] as const;

const beyondResumePillars = [
  {
    icon: CompassIcon,
    symbol: "Contribution",
    title: "Meaningful contribution",
    description:
      "I care about work that leaves something better than before.",
  },
  {
    icon: PeopleIcon,
    symbol: "Community",
    title: "People and community",
    description:
      "I value spaces where people feel supported and heard.",
  },
  {
    icon: LeafIcon,
    symbol: "Curiosity",
    title: "Quietly curious",
    description:
      "I like understanding the why behind people, products, and decisions.",
  },
  {
    icon: SparkIcon,
    symbol: "Life",
    title: "Life away from the screen",
    description:
      "Pilates, ukulele, and quiet cafes help me slow down and reset.",
  },
] as const;

const homeSections = [
  {
    href: "/education",
    title: "Education",
    icon: EducationIcon,
    description: "Where the academic side of my story comes together.",
    cues: ["SMU", "Computer Science", "Qualifications"],
  },
  {
    href: "/experience",
    title: "Experience",
    icon: ExperienceIcon,
    description: "The teams, roles, and communities that shaped how I work.",
    cues: ["AI", "Leadership", "Community"],
  },
  {
    href: "/projects",
    title: "Projects",
    icon: ProjectsIcon,
    description: "A mix of builds, experiments, and creative problem-solving.",
    cues: ["Builds", "Design", "Hackathons"],
  },
] as const;

const skillCloudItems = [
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

const skillCloudImages = [
  { label: "Codex", src: codexIcon },
  ...skillCloudItems.map(({ label, slug }) => ({
    label,
    src: `https://cdn.simpleicons.org/${slug}`,
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
              className="font-[family-name:var(--font-display)] text-4xl leading-tight tracking-[-0.05em] text-[color:var(--foreground)] md:text-5xl"
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
              <p className="text-sm leading-7 text-[color:var(--muted)] md:text-base md:leading-8">
                My path into tech was not something I planned early on, but it
                gradually became the space where curiosity, problem-solving, and
                purpose came together.
              </p>

              <div className="flex flex-wrap gap-2.5">
                <span className="editorial-chip px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em]">
                  Myanmar to Singapore
                </span>
                <span className="editorial-chip px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em]">
                  Computer Science + Strategic Management
                </span>
              </div>

              <div className="space-y-4">
                {homeJourneyParagraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-7 text-[color:var(--muted)] md:text-base md:leading-8"
                  >
                    {paragraph}
                  </p>
                ))}

                <p className="pt-1 font-[family-name:var(--font-display)] text-[1.45rem] leading-tight tracking-[-0.035em] text-[color:var(--foreground)] md:text-[1.65rem]">
                  My path was never perfectly planned, but it taught me how to adapt.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </ScrollReveal>
      </section>

      <HomeSectionDivider />

      <section
        id="home-beyond-resume"
        aria-labelledby="home-beyond-resume-title"
        className="relative pb-7 pt-7 md:pb-9 md:pt-8"
      >
        <ScrollReveal className="space-y-6 md:space-y-7">
          <div className="space-y-5">
            <div className="paper-tag px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em]">
              Beyond
            </div>

            <h2
              id="home-beyond-resume-title"
              className="max-w-2xl font-[family-name:var(--font-display)] text-4xl leading-tight tracking-[-0.05em] text-[color:var(--foreground)] md:max-w-none md:text-5xl"
            >
              The person behind the work.
            </h2>

            <p className="max-w-xl text-sm leading-7 text-[color:var(--muted)] md:text-base md:leading-8">
              The way I work is shaped by what I value and what keeps me grounded.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {beyondResumePillars.map(({ icon: Icon, symbol, title, description }, index) => (
              <ScrollReveal
                key={symbol}
                className="home-mini-block flex flex-col gap-3 rounded-[1.25rem] px-3.5 py-3.5 md:flex-row md:gap-5 md:rounded-[1.45rem] md:px-5 md:py-5"
                delayMs={index * 70}
                y={22}
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.95rem] border border-[color:var(--border)] bg-[color:var(--surface-soft)] text-[color:var(--accent-strong)] md:h-11 md:w-11 md:rounded-[1rem]">
                  <Icon className="h-4.5 w-4.5 md:h-5 md:w-5" />
                </span>

                <div className="min-w-0 space-y-2">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)] md:text-[0.68rem] md:tracking-[0.22em]">
                    {symbol}
                  </p>
                  <h3 className="font-[family-name:var(--font-display)] text-[1.18rem] leading-tight tracking-[-0.04em] text-[color:var(--foreground)] md:text-[1.7rem]">
                    {title}
                  </h3>
                  <p className="text-[0.82rem] leading-6 text-[color:var(--muted)] md:max-w-2xl md:text-base md:leading-8">
                    {description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

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
              className="max-w-4xl font-[family-name:var(--font-display)] text-4xl leading-tight tracking-[-0.05em] text-[color:var(--foreground)] md:text-5xl"
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
                className="max-w-5xl font-[family-name:var(--font-display)] text-4xl leading-tight tracking-[-0.05em] text-[color:var(--foreground)] md:text-5xl"
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
