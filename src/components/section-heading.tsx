type SectionHeadingProps = { title: string; id?: string; label?: string; description?: string };

export function SectionHeading({ title, id, label, description }: SectionHeadingProps) {
  return (
    <header className="section-heading">
      {label ? <div className="eyebrow mb-3">{label}</div> : null}
      <h2 id={id} className="section-title">{title}</h2>
      {description ? <p>{description}</p> : null}
    </header>
  );
}
