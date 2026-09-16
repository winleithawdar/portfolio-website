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
    <div className="page-intro">
      <div className="inline-flex w-fit max-w-full items-center rounded-full border border-[color:var(--border-strong)] bg-[color:var(--accent-soft)] px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase leading-5 tracking-[0.16em] text-[color:var(--accent-strong)]">
        {label}
      </div>

      <h1
        id={titleId}
        className="page-title"
      >
        {title}
      </h1>
      <p className="max-w-3xl text-sm leading-7 text-[color:var(--muted)] md:text-base md:leading-8">
        {description}
      </p>
    </div>
  );
}
