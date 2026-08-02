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
    <div className="space-y-5 px-1 md:space-y-6">
      <div className="paper-tag w-fit px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.24em]">
        {label}
      </div>

      <h1
        id={titleId}
        className="max-w-5xl font-[family-name:var(--font-display)] text-[2.1rem] leading-tight tracking-[-0.05em] text-[color:var(--foreground)] md:text-[3rem] lg:text-[4.2rem]"
      >
        {title}
      </h1>
      <p className="max-w-3xl text-sm leading-7 text-[color:var(--muted)] md:text-base md:leading-8">
        {description}
      </p>
    </div>
  );
}
