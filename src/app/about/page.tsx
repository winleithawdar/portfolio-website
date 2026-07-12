import { PageIntro } from "@/components/page-intro";

export default function AboutPage() {
  return (
    <section aria-labelledby="about-title" className="max-w-3xl">
      <PageIntro
        label="About"
        title="About"
        description="A short introduction and background details will be added here later."
        titleId="about-title"
      />
    </section>
  );
}
