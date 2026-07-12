type PageIntroProps = {
  label: string;
  title: string;
  description: string;
  titleId: string;
};

export function PageIntro({
  label,
  title,
  description,
  titleId,
}: PageIntroProps) {
  return (
    <div className="soft-panel rounded-[2rem] px-6 py-8 md:px-9 md:py-10">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">
        {label}
      </p>
      <h1
        id={titleId}
        className="mt-4 font-[family-name:var(--font-display)] text-4xl leading-tight tracking-[-0.04em] md:text-5xl"
      >
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--muted)]">
        {description}
      </p>
    </div>
  );
}
