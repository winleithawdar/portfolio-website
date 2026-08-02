"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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

function ScrollCue() {
  return (
    <a
      href="#home-story"
      aria-label="Scroll to story"
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
  const heroFocusAreas = ["CS", "AI", "Product", "Design"];
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
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return;
    }

    let frameId = 0;

    const updateProgress = () => {
      frameId = 0;
      const nextProgress = Math.min(window.scrollY / 280, 1);
      setScrollProgress(nextProgress);
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
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]/92 text-[color:var(--foreground)] shadow-[0_10px_20px_rgba(75,63,110,0.06)] hover:-translate-y-0.5 hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-soft)] hover:text-[color:var(--accent-strong)] md:h-11 md:w-11 md:shadow-[0_12px_26px_rgba(75,63,110,0.06)]"
        >
          <Icon className="h-4 w-4 shrink-0 md:h-4.5 md:w-4.5" />
        </a>
      ))}
    </>
  );

  const headlineStyle = {
    transform: `translateY(${scrollProgress * -70}px) scale(${1 - scrollProgress * 0.045})`,
    opacity: 1 - scrollProgress * 0.1,
  };

  const bodyStyle = {
    transform: `translateY(${scrollProgress * -42}px)`,
    opacity: 1 - scrollProgress * 0.08,
  };

  const lowerContentStyle = {
    transform: `translateY(${scrollProgress * -24}px)`,
    opacity: 1 - scrollProgress * 0.06,
  };

  const portraitStyle = {
    transform: `translateY(${scrollProgress * 58}px) scale(${1 - scrollProgress * 0.05})`,
    opacity: 1 - scrollProgress * 0.08,
  };

  const portraitGlowStyle = {
    transform: `translateY(${scrollProgress * 76}px) scale(${1.02 + scrollProgress * 0.12})`,
    opacity: 0.68 - scrollProgress * 0.12,
  };

  const leftAuraStyle = {
    transform: `translate3d(${scrollProgress * -18}px, ${scrollProgress * 30}px, 0) scale(${1 + scrollProgress * 0.06})`,
    opacity: 0.9 - scrollProgress * 0.08,
  };

  const rightAuraStyle = {
    transform: `translate3d(${scrollProgress * 24}px, ${scrollProgress * -14}px, 0) scale(${1 + scrollProgress * 0.04})`,
    opacity: 0.84 - scrollProgress * 0.06,
  };

  const scrollCueStyle = {
    opacity: 1 - scrollProgress * 0.9,
    transform: `translateY(${scrollProgress * 12}px)`,
  };

  return (
    <section
      aria-labelledby="home-title"
      className="relative left-1/2 -mt-4 w-screen -translate-x-1/2 md:-mt-5 lg:-mt-11 lg:min-h-[calc(100svh-5.25rem)]"
    >
      <div className="relative overflow-hidden lg:flex lg:min-h-[calc(100svh-5.25rem)] lg:items-center">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="hero-orb hero-orb-left"
            style={leftAuraStyle}
          />
          <div
            className="hero-orb hero-orb-right"
            style={rightAuraStyle}
          />
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
                transform: `translateY(${scrollProgress * (index % 2 === 0 ? 18 : -14)}px)`,
              }}
            />
          ))}
        </div>
        <div className="page-shell relative grid w-full gap-8 py-4 md:gap-10 md:py-8 lg:min-h-[calc(100svh-5.25rem)] lg:items-center lg:py-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)] lg:gap-x-12">
          <div className="max-w-4xl self-center lg:pr-6">
            <div className="md:hidden" style={headlineStyle}>
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
                    <div className="relative h-full w-full overflow-hidden rounded-[999px] border border-[rgba(108,95,141,0.34)] bg-[color:var(--surface-strong)] shadow-[0_22px_40px_rgba(75,63,110,0.14)] dark:border-[color:var(--accent)]/38">
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

            <div className="hidden md:block lg:hidden" style={headlineStyle}>
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
                      className="absolute inset-x-[10%] top-[16%] h-[60%] rounded-[999px] bg-[color:var(--accent)]/18 blur-[46px]"
                    />
                    <div className="relative h-full w-full overflow-hidden rounded-[999px] border border-[rgba(108,95,141,0.34)] bg-[color:var(--surface-strong)] shadow-[0_24px_46px_rgba(75,63,110,0.14)] dark:border-[color:var(--accent)]/38">
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

            <div className="hidden lg:block" style={headlineStyle}>
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

            <div className="mt-5 max-w-[35rem] space-y-3 md:mt-6 lg:mt-8" style={bodyStyle}>
              <p className="hidden text-lg leading-8 text-[color:var(--foreground)]/88 lg:block lg:text-[1.25rem] lg:leading-9 [text-wrap:balance]">
                Also known as <strong>Winnie</strong>.
              </p>
              <p className="text-sm leading-7 text-[color:var(--muted)] md:text-base md:leading-8 [text-wrap:balance]">
                I&apos;m a Computer Science undergraduate at SMU and a curious
                builder exploring AI, product development, and human-centred
                design, with a strong interest in the intersection of
                technology and business.
              </p>
            </div>

            <div style={lowerContentStyle}>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {heroFocusAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface-soft)]/88 px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)] shadow-[0_10px_22px_rgba(75,63,110,0.05)]"
                  >
                    {area}
                  </span>
                ))}
              </div>

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
              style={portraitStyle}
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-[14%] top-[18%] h-[58%] rounded-[999px] bg-[color:var(--accent)]/20 blur-[72px]"
                style={portraitGlowStyle}
              />
              <div aria-hidden="true" className="hero-portrait-ring" />
              <div className="relative h-[82%] w-[70%] overflow-hidden rounded-[999px] border border-[rgba(108,95,141,0.34)] bg-[color:var(--surface-strong)] shadow-[0_30px_58px_rgba(75,63,110,0.15)] dark:border-[color:var(--accent)]/38 sm:h-[76%] sm:w-[64%] md:h-[68%] md:w-[58%]">
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
          <div className="pointer-events-auto" style={scrollCueStyle}>
            <ScrollCue />
          </div>
        </div>
      </div>
    </section>
  );
}
