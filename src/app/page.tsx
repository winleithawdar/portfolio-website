export default function HomePage() {
  return (
    <section
      aria-labelledby="home-title"
      className="max-w-3xl py-8 md:py-14"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[color:var(--muted)]">
        Portfolio
      </p>
      <h1
        id="home-title"
        className="mt-5 font-[family-name:var(--font-display)] text-5xl leading-none tracking-[-0.04em] text-[color:var(--foreground)] md:text-7xl"
      >
        Win Lei Thawdar
      </h1>
      <p className="mt-6 max-w-xl text-base leading-8 text-[color:var(--muted)] md:text-lg">
        Personal portfolio coming soon.
      </p>
    </section>
  );
}
