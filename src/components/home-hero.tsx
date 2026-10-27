"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { MailIcon, ProjectsIcon, ResumeIcon } from "@/components/icons";
import { heroEmail, heroSocialLinks, resumeHref } from "@/lib/navigation";

function HeroAction({
  href,
  children,
  primary = false,
  icon: Icon,
  className: extraClassName = "",
}: {
  href: string;
  children: string;
  primary?: boolean;
  icon?: typeof MailIcon;
  className?: string;
}) {
  const className = `focus-ring action-link w-full md:w-auto ${primary ? "action-link-primary" : ""} ${extraClassName}`;

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

  if (href.endsWith(".pdf")) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
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

// Scroll-linked effects, applied straight to the marked elements so only they restyle.
const parallaxEffects: Record<string, (progress: number) => Partial<CSSStyleDeclaration>> = {
  headline: (p) => ({ transform: `translateY(${p * -70}px) scale(${1 - p * 0.045})`, opacity: `${1 - p * 0.1}` }),
  body: (p) => ({ transform: `translateY(${p * -42}px)`, opacity: `${1 - p * 0.08}` }),
  lower: (p) => ({ transform: `translateY(${p * -24}px)`, opacity: `${1 - p * 0.06}` }),
  portrait: (p) => ({ transform: `translateY(${p * 58}px) scale(${1 - p * 0.05})`, opacity: `${1 - p * 0.08}` }),
  glow: (p) => ({ transform: `translateY(${p * 76}px) scale(${1.02 + p * 0.12})`, opacity: `${0.68 - p * 0.12}` }),
  cue: (p) => ({ transform: `translateY(${p * 12}px)`, opacity: `${1 - p * 0.9}` }),
};

function ScrollCue() {
  return (
    <a
      href="#home-projects"
      aria-label="Scroll to selected projects"
      className="focus-ring inline-flex flex-col items-center gap-2 text-[color:var(--muted)] transition hover:-translate-y-0.5 hover:text-[color:var(--accent-strong)]"
    >
      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em]">
        Scroll
      </span>
      <span className="inline-flex h-11 w-7 items-start justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-1.5 py-1.5">
        <span className="h-2.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]/75" />
      </span>
    </a>
  );
}

export function HomeHero() {
  const heroSparkles = [
    { left: "8%", top: "20%", size: "0.5rem", delay: "0s", duration: "7.2s" },
    { left: "18%", top: "72%", size: "0.38rem", delay: "1.6s", duration: "8.4s" },
    { left: "44%", top: "16%", size: "0.42rem", delay: "0.9s", duration: "6.8s" },
    { left: "58%", top: "68%", size: "0.56rem", delay: "2.3s", duration: "9.1s" },
    { left: "74%", top: "24%", size: "0.34rem", delay: "1.1s", duration: "7.8s" },
    { left: "88%", top: "60%", size: "0.46rem", delay: "2.8s", duration: "8.7s" },
    { left: "12%", top: "48%", size: "0.3rem", delay: "0.7s", duration: "6.9s" },
    { left: "28%", top: "34%", size: "0.28rem", delay: "2.1s", duration: "8.1s" },
    { left: "52%", top: "42%", size: "0.32rem", delay: "1.4s", duration: "7.5s" },
    { left: "68%", top: "14%", size: "0.26rem", delay: "3s", duration: "8.8s" },
    { left: "82%", top: "78%", size: "0.3rem", delay: "1.9s", duration: "7.1s" },
  ] as const;
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll progress is applied directly to the DOM so scrolling never re-renders the hero.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const section = sectionRef.current;

    if (mediaQuery.matches || !section) {
      return;
    }

    let frameId = 0;
    let lastProgress = -1;
    const targets = Array.from(
      section.querySelectorAll<HTMLElement>("[data-parallax]"),
    );

    const updateProgress = () => {
      frameId = 0;
      const nextProgress = Math.min(window.scrollY / 280, 1);

      if (nextProgress === lastProgress) {
        return;
      }

      lastProgress = nextProgress;
      targets.forEach((target) => {
        const effect = parallaxEffects[target.dataset.parallax ?? ""];

        if (effect) {
          Object.assign(target.style, effect(nextProgress));
        }
      });
    };

    const onScroll = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const heroActions = (
    <>
      <HeroAction href="/projects" primary icon={ProjectsIcon} className="col-span-2">
        View Projects
      </HeroAction>
      <HeroAction href={resumeHref} icon={ResumeIcon}>
        Résumé
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
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]/92 text-[color:var(--foreground)] shadow-[0_10px_20px_rgba(75,63,110,0.06)] hover:-translate-y-0.5 hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-soft)] hover:text-[color:var(--accent-strong)] md:h-11 md:w-11 md:shadow-[0_12px_26px_rgba(75,63,110,0.06)]"
        >
          <Icon className="h-4 w-4 shrink-0 md:h-4.5 md:w-4.5" />
        </a>
      ))}
    </>
  );


  return (
    <section
      ref={sectionRef}
      aria-labelledby="home-title"
      className="relative left-1/2 -mt-4 w-screen -translate-x-1/2 md:-mt-5 lg:-mt-11 lg:min-h-[calc(100svh-5.25rem)]"
    >
      <div className="relative lg:flex lg:min-h-[calc(100svh-5.25rem)] lg:items-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-28 bottom-0 overflow-hidden md:-top-32 lg:-top-40"
        >
          <div className="hero-orb hero-orb-left" />
          <div className="hero-orb hero-orb-right" />
          <div className="hero-mesh" />
          {heroSparkles.map((sparkle, index) => (
            <span
              key={`${sparkle.left}-${sparkle.top}-${index}`}
              className="hero-sparkle"
              style={{
                left: sparkle.left,
                top: sparkle.top,
                width: sparkle.size,
                height: sparkle.size,
                animationDelay: sparkle.delay,
                animationDuration: sparkle.duration,
              }}
            />
          ))}
        </div>
        <div className="page-shell relative grid w-full gap-8 py-4 md:gap-10 md:py-8 lg:min-h-[calc(100svh-5.25rem)] lg:items-center lg:py-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)] lg:gap-x-12">
          <div className="max-w-4xl self-center lg:pr-6">
            <div className="md:hidden" data-parallax="headline">
              <div className="grid grid-cols-[minmax(0,1fr)_8.8rem] items-start gap-3">
                <div className="min-w-0">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
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
                    <span className="block text-[clamp(2.45rem,11vw,3.3rem)] leading-[0.9] tracking-[-0.05em]">
                      Win Lei
                    </span>
                    <span className="block text-[clamp(2.45rem,11vw,3.3rem)] leading-[0.9] tracking-[-0.05em]">
                      Thawdar
                    </span>
                  </h1>
                  <p className="mt-4 text-[1rem] leading-7 text-[color:var(--foreground)]/88">
                    Also known as <strong>Winnie</strong>.
                  </p>
                </div>

                <div className="flex justify-end pt-1">
                  <div className="relative flex h-[11.75rem] w-full max-w-[8.8rem] items-center justify-center overflow-visible">
                    <div className="relative h-full w-full overflow-hidden rounded-[999px] border border-[rgba(108,95,141,0.34)] bg-[color:var(--surface-strong)] shadow-[0_12px_28px_rgba(75,63,110,0.07)] dark:border-[color:var(--accent)]/38">
                      <div className="pointer-events-none absolute inset-[0.5rem] z-10 rounded-[999px] border border-[rgba(108,95,141,0.22)] dark:border-white/28" />
                      <Image
                        src="/images/profile/my-profile.png"
                        alt="Portrait of Win Lei Thawdar"
                        fill
                        className="scale-[1.05] object-cover [object-position:center_18%]"
                        sizes="140px"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:block lg:hidden" data-parallax="headline">
              <div className="grid grid-cols-[minmax(0,1fr)_14rem] items-start gap-7">
                <div className="min-w-0">
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
                    <span className="block text-[clamp(3.5rem,7vw,4.55rem)] leading-[0.9] tracking-[-0.05em]">
                      Win Lei Thawdar
                    </span>
                  </h1>
                  <p className="mt-5 text-[1.1rem] leading-8 text-[color:var(--foreground)]/88">
                    Also known as <strong>Winnie</strong>.
                  </p>
                </div>

                <div className="flex justify-end pt-2">
                  <div className="relative flex h-[18rem] w-full max-w-[14rem] items-center justify-center overflow-visible">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-[10%] top-[16%] h-[60%] rounded-[999px] bg-[color:var(--accent)]/7 blur-[46px]"
                    />
                    <div className="relative h-full w-full overflow-hidden rounded-[999px] border border-[rgba(108,95,141,0.34)] bg-[color:var(--surface-strong)] shadow-[0_14px_30px_rgba(75,63,110,0.07)] dark:border-[color:var(--accent)]/38">
                      <div className="pointer-events-none absolute inset-[0.65rem] z-10 rounded-[999px] border border-[rgba(108,95,141,0.22)] dark:border-white/28" />
                      <Image
                        src="/images/profile/my-profile.png"
                        alt="Portrait of Win Lei Thawdar"
                        fill
                        className="scale-[1.05] object-cover [object-position:center_18%]"
                        sizes="224px"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block" data-parallax="headline">
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
            </div>

            <div className="mt-5 max-w-[35rem] space-y-3 md:mt-6 lg:mt-8" data-parallax="body">
              <p className="hidden text-lg leading-8 text-[color:var(--foreground)]/88 lg:block lg:text-[1.25rem] lg:leading-9 [text-wrap:balance]">
                Also known as <strong>Winnie</strong>.
              </p>
              <p className="text-sm leading-7 text-[color:var(--muted)] md:text-base md:leading-8 [text-wrap:balance]">
                I&apos;m a Computer Science student at SMU and a curious builder
                exploring AI, product development, and human-centred design, and
                how technology can solve real problems in people&apos;s daily lives.
              </p>
            </div>

            <div data-parallax="lower">
              <div className="mt-8 hidden items-center gap-3 md:flex md:flex-wrap lg:mt-10 lg:gap-3.5">
                {heroActions}
              </div>

              <div className="mt-6 hidden max-w-2xl md:block md:pt-2 lg:mt-7 lg:max-w-[34rem] lg:pt-5">
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

            <div className="mt-8 space-y-4 md:hidden">
              <div className="grid grid-cols-2 gap-2.5">
                {heroActions}
              </div>

              <div className="space-y-3 pt-2">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">
                  Connect with me
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {heroSocialIcons}
                </div>
              </div>
            </div>
          </div>

          <div className="hidden justify-center pt-1 sm:pt-2 lg:flex lg:justify-end">
            <div
              className="relative flex h-[20rem] w-full max-w-[18rem] items-center justify-center overflow-visible sm:h-[24rem] sm:max-w-[20rem] md:-translate-y-8 md:h-[41rem] md:max-w-[31rem] lg:-translate-y-10 lg:h-[50rem] lg:max-w-[37rem] lg:translate-x-8"
              data-parallax="portrait"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-[14%] top-[18%] h-[58%] rounded-[999px] bg-[color:var(--accent)]/8 blur-[72px]"
                data-parallax="glow"
                style={{ opacity: 0.68, transform: "scale(1.02)" }}
              />
              <div aria-hidden="true" className="hero-portrait-ring" />
              <div className="relative h-[82%] w-[70%] overflow-hidden rounded-[999px] border border-[rgba(108,95,141,0.34)] bg-[color:var(--surface-strong)] shadow-[0_16px_36px_rgba(75,63,110,0.08)] dark:border-[color:var(--accent)]/38 sm:h-[76%] sm:w-[64%] md:h-[68%] md:w-[58%]">
                <div className="pointer-events-none absolute inset-[0.7rem] z-10 rounded-[999px] border border-[rgba(108,95,141,0.22)] dark:border-white/28" />
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

        <div className="pointer-events-none absolute inset-x-0 bottom-5 hidden justify-center md:flex">
          <div className="pointer-events-auto" data-parallax="cue">
            <ScrollCue />
          </div>
        </div>
      </div>
    </section>
  );
}
