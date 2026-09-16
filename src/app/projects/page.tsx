import { Suspense } from "react";
import { PageIntro } from "@/components/page-intro";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ProjectCategoryTabs } from "@/components/project-gallery";

export default function ProjectsPage() {
  return (
    <section aria-labelledby="projects-title" className="page-stack">
      <ScrollReveal y={20}>
        <PageIntro
          label="Projects"
          title="What I’ve Been Working On"
          description="Club websites, hackathon builds, coursework, and Figma prototypes. Some are individual projects; others were built with a team."
          titleId="projects-title"
        />
      </ScrollReveal>

      <Suspense fallback={<p role="status" className="text-sm text-[color:var(--muted)]">Loading projects…</p>}>
        <ProjectCategoryTabs />
      </Suspense>
    </section>
  );
}
