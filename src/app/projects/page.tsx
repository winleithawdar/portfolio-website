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
          title="Ideas Brought to Life"
          description="A visual collection of projects shaped through design, development, experimentation, and collaboration."
          titleId="projects-title"
        />
      </ScrollReveal>

      <Suspense fallback={<p role="status" className="text-sm text-[color:var(--muted)]">Loading projects…</p>}>
        <ProjectCategoryTabs />
      </Suspense>
    </section>
  );
}
