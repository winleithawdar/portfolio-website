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
    ? "focus-ring inline-flex w-full min-h-[2.9rem] items-center justify-center gap-1.5 rounded-[0.95rem] border border-[color:var(--accent)] bg-[color:var(--accent-strong)] px-3 py-2 text-[0.88rem] font-semibold tracking-[-0.01em] text-[color:var(--surface)] shadow-[0_10px_18px_rgba(75,63,110,0.12)] transition hover:-translate-y-0.5 hover:bg-[color:var(--accent)] md:min-h-[3.75rem] md:w-auto md:gap-3 md:rounded-[1.15rem] md:px-6 md:text-base md:shadow-[0_18px_34px_rgba(75,63,110,0.16)]"
    : "focus-ring inline-flex w-full min-h-[2.9rem] items-center justify-center gap-1.5 rounded-[0.95rem] border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-[0.88rem] font-semibold tracking-[-0.01em] text-[color:var(--foreground)] shadow-[0_6px_14px_rgba(75,63,110,0.05)] transition hover:-translate-y-0.5 hover:border-[color:var(--accent)]/45 hover:bg-[color:var(--surface-soft)] hover:text-[color:var(--accent-strong)] md:min-h-[3.75rem] md:w-auto md:gap-3 md:rounded-[1.15rem] md:px-6 md:text-base md:shadow-[0_10px_24px_rgba(75,63,110,0.06)]";

  const content = (
    <>
      {Icon ? <Icon className="h-4.5 w-4.5 shrink-0 md:h-5.5 md:w-5.5" /> : null}
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
  const heroActions = (
    <>
      <HeroAction href="/projects" primary icon={ProjectsIcon}>
        View Projects
      </HeroAction>
      <HeroAction href={`mailto:${heroEmail}`} icon={MailIcon}>
        Get In Touch
      </HeroAction>
    </>
  );

  const heroSocialIcons = (
    <>
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
    </>
  );

  return (
    <section
      aria-labelledby="home-title"
      className="relative left-1/2 -mt-4 w-screen -translate-x-1/2 md:-mt-11 md:min-h-[calc(100svh-5.25rem)]"
    >
      <div className="relative overflow-hidden md:flex md:min-h-[calc(100svh-5.25rem)] md:items-center">
        <div className="page-shell relative grid w-full gap-8 py-4 md:min-h-[calc(100svh-5.25rem)] md:items-center md:py-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)] lg:grid-rows-[auto_auto] lg:gap-x-12 lg:gap-y-10">
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

            <div className="mt-10 hidden items-center gap-3.5 md:flex md:flex-wrap">
              {heroActions}
            </div>

            <div className="mt-8 grid grid-cols-[minmax(0,1fr)_11rem] items-end gap-3 md:hidden">
              <div className="space-y-4">
                <div className="grid w-[13rem] gap-2.5">
                  {heroActions}
                </div>

                <div className="space-y-3 border-t border-[color:var(--border)] pt-4">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">
                    Connect with me
                  </p>
                  <div className="flex flex-wrap items-center gap-2.5">
                    {heroSocialIcons}
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="relative flex h-[15.5rem] w-full max-w-[11rem] items-center justify-center overflow-visible">
                  <div className="relative h-full w-full overflow-hidden rounded-[999px] border border-[color:var(--accent)]/38 bg-[color:var(--surface-strong)] shadow-[0_22px_40px_rgba(75,63,110,0.14)]">
                    <div className="pointer-events-none absolute inset-[0.5rem] z-10 rounded-[999px] border border-white/65 dark:border-white/28" />
                    <Image
                      src="/images/profile/my-profile.png"
                      alt="Portrait of Win Lei Thawdar"
                      fill
                      className="scale-[1.05] object-cover [object-position:center_18%]"
                      sizes="176px"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="hidden justify-center pt-1 sm:pt-2 md:flex lg:row-span-2 lg:justify-end">
            <div className="relative flex h-[20rem] w-full max-w-[18rem] items-center justify-center overflow-visible sm:h-[24rem] sm:max-w-[20rem] md:-translate-y-8 md:h-[41rem] md:max-w-[31rem] lg:-translate-y-10 lg:h-[50rem] lg:max-w-[37rem] lg:translate-x-8">
              <div className="relative h-[82%] w-[70%] overflow-hidden rounded-[999px] border border-[color:var(--accent)]/38 bg-[color:var(--surface-strong)] shadow-[0_30px_58px_rgba(75,63,110,0.15)] sm:h-[76%] sm:w-[64%] md:h-[68%] md:w-[58%]">
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

          <div className="hidden max-w-2xl border-t border-[color:var(--border)] pt-6 md:block lg:pr-6">
            <div className="space-y-3">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">
                Connect with me
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {heroSocialIcons}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
