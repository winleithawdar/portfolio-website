import Link from "next/link";
import {
  CompassIcon,
  EducationIcon,
  ExperienceIcon,
  LeafIcon,
  PeopleIcon,
  ProjectsIcon,
  SparkIcon,
} from "@/components/icons";
import { HomeHero } from "@/components/home-hero";
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

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section
        id="home-story"
        aria-labelledby="home-story-title"
        className="relative pb-10 pt-10 md:pb-14 md:pt-12"
      >
        <ScrollReveal className="space-y-6">
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

      <section
        id="home-beyond-resume"
        aria-labelledby="home-beyond-resume-title"
        className="relative pb-10 pt-10 md:pb-14 md:pt-12"
      >
        <ScrollReveal className="space-y-8">
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

          <div className="grid gap-3 md:grid-cols-2">
            {beyondResumePillars.map(({ icon: Icon, symbol, title, description }, index) => (
              <ScrollReveal
                key={symbol}
                className="home-mini-block flex gap-4 rounded-[1.45rem] px-4 py-4 md:gap-5 md:px-5 md:py-5"
                delayMs={index * 70}
                y={22}
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[1rem] border border-[color:var(--border)] bg-[color:var(--surface-soft)] text-[color:var(--accent-strong)]">
                  <Icon className="h-5 w-5" />
                </span>

                <div className="min-w-0 space-y-2">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">
                    {symbol}
                  </p>
                  <h3 className="font-[family-name:var(--font-display)] text-[1.55rem] leading-tight tracking-[-0.04em] text-[color:var(--foreground)] md:text-[1.7rem]">
                    {title}
                  </h3>
                  <p className="max-w-2xl text-sm leading-7 text-[color:var(--muted)] md:text-base md:leading-8">
                    {description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </ScrollReveal>
      </section>

      <section
        id="home-overview"
        aria-labelledby="home-overview-title"
        className="relative pb-8 pt-10 md:pb-10 md:pt-12"
      >
        <ScrollReveal className="space-y-7">
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

          <div className="grid gap-4 md:grid-cols-3">
            {homeSections.map(({ href, title, description, icon: Icon, cues }, index) => (
              <ScrollReveal
                key={href}
                className="home-overview-card group min-h-[17rem] rounded-[1.9rem] px-5 py-5 md:px-6 md:py-6"
                delayMs={index * 80}
                y={24}
              >
                <Link href={href} className="focus-ring block h-full rounded-[inherit]">
                  <div className="relative flex h-full flex-col justify-between gap-8">
                    <div className="flex items-start justify-between gap-4">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-[1rem] border border-[color:var(--border)] bg-[color:var(--surface)]/82 text-[color:var(--accent-strong)] shadow-[0_10px_22px_rgba(75,63,110,0.06)]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-[family-name:var(--font-display)] text-3xl tracking-[-0.045em] text-[color:var(--foreground)]">
                          {title}
                        </h3>

                        <p className="max-w-sm text-sm leading-7 text-[color:var(--muted)] md:text-base md:leading-8">
                          {description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
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
                      <span className="text-sm font-medium text-[color:var(--foreground)]/84">
                        Open page
                      </span>
                      <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]/82 px-3 text-sm text-[color:var(--foreground)] transition group-hover:border-[color:var(--border-strong)] group-hover:text-[color:var(--accent-strong)]">
                        ↗
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
