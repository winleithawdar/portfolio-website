import { PageIntro } from "@/components/page-intro";

export default function JournalPage() {
  return (
    <section aria-labelledby="journal-title" className="max-w-3xl">
      <PageIntro
        label="Journal"
        title="Journal"
        description="Notes, reflections, and future writing will be added here later."
        titleId="journal-title"
      />
    </section>
  );
}
