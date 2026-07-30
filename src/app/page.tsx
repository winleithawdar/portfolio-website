import Link from "next/link";
import {
  EducationIcon,
  ExperienceIcon,
  ProjectsIcon,
} from "@/components/icons";
import { HomeHero } from "@/components/home-hero";

const homeSections = [
  {
    href: "/education",
    title: "Education",
    icon: EducationIcon,
    description: "Academic milestones, qualifications, and the subjects shaping my path.",
  },
  {
    href: "/experience",
    title: "Experience",
    icon: ExperienceIcon,
    description: "Roles, responsibilities, and the work I have contributed across different teams.",
  },
  {
    href: "/projects",
    title: "Projects",
    icon: ProjectsIcon,
    description: "Selected work spanning design, development, research, and creative building.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section
        id="home-overview"
        aria-labelledby="home-overview-title"
        className="relative pb-6 pt-8 md:pb-10 md:pt-12"
      >
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="paper-tag px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em]">
              Overview
            </div>

            <h2
              id="home-overview-title"
              className="max-w-3xl font-[family-name:var(--font-display)] text-4xl leading-tight tracking-[-0.05em] text-[color:var(--foreground)] md:text-5xl"
            >
              Explore the main sections of the site.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {homeSections.map(({ href, title, description, icon: Icon }, index) => (
              <Link
                key={href}
                href={href}
                className="focus-ring group min-h-[15rem] rounded-[1.85rem] border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-5 shadow-[0_16px_34px_rgba(75,63,110,0.06)] transition hover:-translate-y-1 hover:border-[color:var(--border-strong)] hover:shadow-[0_22px_44px_rgba(75,63,110,0.1)] md:px-6 md:py-6"
              >
                <div className="flex h-full flex-col justify-between gap-8">
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-[1rem] border border-[color:var(--border)] bg-[color:var(--surface-soft)] text-[color:var(--accent-strong)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-3xl tracking-[-0.045em] text-[color:var(--foreground)]">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                      {description}
                    </p>

                    <p className="mt-5 text-sm text-[color:var(--muted)] transition group-hover:text-[color:var(--accent-strong)]">
                      Open
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
