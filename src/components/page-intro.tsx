import { PageIntroAccent } from "@/components/page-intro-accent";

type PageIntroProps = {
  label: string;
  title: string;
  description: string;
  titleId: string;
  accent: "education" | "experience" | "projects";
};

export function PageIntro({
  label,
  title,
  description,
  titleId,
  accent,
}: PageIntroProps) {
  return (
    <div className="soft-panel overflow-hidden rounded-[2.25rem] px-6 py-8 md:px-9 md:py-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-8">
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-4">
            <div className="paper-tag px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.24em]">
              {label}
            </div>
            <span
              aria-hidden="true"
              className="mt-4 h-px flex-1 bg-[color:var(--border)] md:hidden"
            />
          </div>

          <h1
            id={titleId}
            className="mt-6 font-[family-name:var(--font-display)] text-4xl leading-tight tracking-[-0.05em] md:text-5xl"
          >
            {title}
          </h1>
          <p className="mt-4 max-w-full text-sm leading-7 text-[color:var(--muted)] md:text-base md:leading-8">
            {description}
          </p>
        </div>

        <div className="hidden shrink-0 md:flex md:items-start md:justify-end">
          <PageIntroAccent kind={accent} />
        </div>
      </div>
    </div>
  );
}
