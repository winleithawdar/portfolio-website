"use client";

import Image from "next/image";
import Link from "next/link";
import { MailIcon, ProjectsIcon } from "@/components/icons";
import { heroEmail, heroSocialLinks } from "@/lib/navigation";

function HeroAction({
  href,
  children,
  primary = false,
  icon: Icon,
}: {
  href: string;
  children: string;
  primary?: boolean;
  icon?: typeof MailIcon;
}) {
  const className = primary
    ? "focus-ring inline-flex min-h-[3.75rem] items-center justify-center gap-3 rounded-[1.15rem] border border-[color:var(--accent)] bg-[color:var(--accent-strong)] px-6 py-3 text-base font-semibold text-[color:var(--surface)] shadow-[0_18px_34px_rgba(75,63,110,0.16)] transition hover:-translate-y-0.5 hover:bg-[color:var(--accent)]"
    : "focus-ring inline-flex min-h-[3.75rem] items-center justify-center gap-3 rounded-[1.15rem] border border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-3 text-base font-semibold text-[color:var(--foreground)] shadow-[0_10px_24px_rgba(75,63,110,0.06)] transition hover:-translate-y-0.5 hover:border-[color:var(--accent)]/45 hover:bg-[color:var(--surface-soft)] hover:text-[color:var(--accent-strong)]";

  const content = (
    <>
      {Icon ? <Icon className="h-5.5 w-5.5 shrink-0" /> : null}
      <span>{children}</span>
    </>
  );

  if (href.startsWith("#")) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}

export function HomeHero() {
  return (
    <section
      aria-labelledby="home-title"
      className="relative left-1/2 -mt-8 min-h-[calc(100svh-4.5rem)] w-screen -translate-x-1/2 md:-mt-11 md:min-h-[calc(100svh-5.25rem)]"
    >
      <div className="relative flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden md:min-h-[calc(100svh-5.25rem)]">
        <div className="page-shell relative grid min-h-[calc(100svh-4.5rem)] w-full items-center gap-10 py-2 md:min-h-[calc(100svh-5.25rem)] md:py-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)] lg:gap-12">
          <div className="max-w-4xl self-center lg:-translate-y-4 lg:pr-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Hello, I&apos;m
            </p>
            <h1
              id="home-title"
              className="max-w-none text-[color:var(--accent-strong)]"
              style={{
                fontFamily:
                  '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", "Times New Roman", serif',
              }}
            >
              <span className="block whitespace-nowrap text-[clamp(2.8rem,5.5vw,5.35rem)] leading-[0.9] tracking-[-0.045em]">
                Win Lei Thawdar
              </span>
            </h1>

            <div className="mt-8 max-w-[35rem] space-y-3">
              <p className="text-lg leading-8 text-[color:var(--foreground)]/88 md:text-[1.25rem] md:leading-9 [text-wrap:balance]">
                <strong>but you can call me Winnie as well.</strong>
              </p>
              <p className="text-sm leading-7 text-[color:var(--muted)] md:text-base md:leading-8 [text-wrap:balance]">
                I&apos;m a Computer Science undergraduate at SMU and a curious
                builder exploring AI, product development, and human-centred
                design, with a strong interest in the intersection of
                technology and business.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3.5">
              <HeroAction href="/projects" primary icon={ProjectsIcon}>
                View Projects
              </HeroAction>
              <HeroAction href={`mailto:${heroEmail}`} icon={MailIcon}>
                Get In Touch
              </HeroAction>
            </div>

            <div className="mt-12 max-w-2xl border-t border-[color:var(--border)] pt-6">
              <div className="space-y-3">
                <div className="space-y-3">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">
                    Connect
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    {heroSocialLinks.map(({ href, label, icon: Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        title={label}
                        className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]/92 text-[color:var(--foreground)] shadow-[0_12px_26px_rgba(75,63,110,0.06)] hover:-translate-y-0.5 hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-soft)] hover:text-[color:var(--accent-strong)]"
                      >
                        <Icon className="h-4.5 w-4.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative flex h-[36rem] w-full max-w-[26rem] items-center justify-center overflow-visible md:-translate-y-8 md:h-[41rem] md:max-w-[31rem] lg:-translate-y-10 lg:h-[50rem] lg:max-w-[37rem] lg:translate-x-8">
              <div className="relative h-[68%] w-[58%] overflow-hidden rounded-[999px] border border-[color:var(--accent)]/38 bg-[color:var(--surface-strong)] shadow-[0_30px_58px_rgba(75,63,110,0.15)]">
                <div className="pointer-events-none absolute inset-[0.7rem] z-10 rounded-[999px] border border-white/65 dark:border-white/28" />
                <Image
                  src="/images/profile/my-profile.png"
                  alt="Portrait of Win Lei Thawdar"
                  fill
                  className="scale-[1.05] object-cover [object-position:center_18%]"
                  sizes="(max-width: 768px) 260px, (max-width: 1024px) 320px, 420px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
