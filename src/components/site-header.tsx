"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  EducationIcon,
  ExperienceIcon,
  HomeIcon,
  LinktreeIcon,
  ProjectsIcon,
} from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems } from "@/lib/navigation";

function HeaderActions() {
  return (
    <div className="flex items-center gap-2">
      <a
        href="https://linktr.ee/winleithawdar"
        target="_blank"
        rel="noreferrer"
        aria-label="Linktree"
        title="Linktree"
        className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface-soft)] text-[color:var(--foreground)] hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-strong)] md:h-10 md:w-10"
      >
        <LinktreeIcon className="h-4.5 w-4.5" />
      </a>
      <ThemeToggle />
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const navListRef = useRef<HTMLUListElement | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicatorStyle, setIndicatorStyle] = useState<CSSProperties>({
    opacity: 0,
  });

  const mobileNavItems = [
    { href: "/", label: "Home", icon: HomeIcon },
    { href: "/education", label: "Education", icon: EducationIcon },
    { href: "/experience", label: "Experience", icon: ExperienceIcon },
    { href: "/projects", label: "Projects", icon: ProjectsIcon },
  ] as const;

  useEffect(() => {
    const navList = navListRef.current;

    if (!navList) {
      return;
    }

    const updateIndicator = () => {
      const targetLink = linkRefs.current[pathname];

      if (!targetLink) {
        setIndicatorStyle((current) =>
          current.opacity === 0 ? current : { opacity: 0 },
        );
        return;
      }

      setIndicatorStyle({
        opacity: 1,
        width: `${targetLink.offsetWidth}px`,
        height: `${targetLink.offsetHeight}px`,
        transform: `translate3d(${targetLink.offsetLeft}px, 0, 0)`,
      });
    };

    updateIndicator();

    const resizeObserver = new ResizeObserver(() => {
      updateIndicator();
    });

    resizeObserver.observe(navList);

    navItems.forEach(({ href }) => {
      const link = linkRefs.current[href];

      if (link) {
        resizeObserver.observe(link);
      }
    });

    window.addEventListener("resize", updateIndicator);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateIndicator);
    };
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 pt-3 md:pt-4 lg:pt-5">
      <div className="page-shell backdrop-blur-[6px]">
        <div className="flex items-center justify-between gap-3 md:hidden">
          <Link
            href="/"
            aria-label="Win Lei Thawdar home"
            className="focus-ring inline-flex min-w-0 rounded-full px-1 py-1 transition hover:-translate-y-0.5"
          >
            <span className="font-[family-name:var(--font-script)] text-[1.85rem] leading-none tracking-[-0.03em] text-[color:var(--foreground)]">
              Winnie
            </span>
          </Link>

          <HeaderActions />
        </div>

        <div className="hidden md:grid md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center md:gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-3">
          <div className="hidden md:flex md:justify-self-start">
            <Link
              href="/"
              aria-label="Win Lei Thawdar home"
              className="focus-ring inline-flex min-w-0 rounded-full px-1 py-1 transition hover:-translate-y-0.5"
            >
              <span className="font-[family-name:var(--font-script)] text-[1.95rem] leading-none tracking-[-0.03em] text-[color:var(--foreground)] lg:text-[2.2rem]">
                Winnie
              </span>
            </Link>
          </div>

          <nav
            aria-label="Primary"
            className="w-full md:justify-self-center"
          >
            <ul
              ref={navListRef}
              className="nav-pill relative grid w-full grid-cols-4 items-center gap-0.5 rounded-full border border-[color:var(--border)] bg-transparent px-1 py-1 shadow-none md:inline-flex md:min-w-max md:w-auto md:gap-0.5 md:px-1 md:py-1 lg:gap-1 lg:px-1.5 lg:py-1.5"
            >
              <span
                aria-hidden="true"
                className="nav-pill-indicator absolute left-0 top-1 rounded-full bg-[color:var(--accent-strong)] shadow-sm md:top-1.5"
                style={indicatorStyle}
              />
              {navItems.map(({ href, label }) => {
                const isActive = pathname === href;

                return (
                  <li key={href}>
                    <Link
                      href={href}
                      ref={(element) => {
                        linkRefs.current[href] = element;
                      }}
                      aria-current={isActive ? "page" : undefined}
                      className={`focus-ring relative z-10 inline-flex justify-center rounded-full px-1 py-2 text-[0.82rem] font-medium md:px-3 md:text-[0.88rem] lg:px-4 lg:text-sm ${
                        isActive
                          ? "text-[color:var(--surface)]"
                          : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden shrink-0 md:flex md:justify-self-end">
            <HeaderActions />
          </div>
        </div>
      </div>

      <nav
        aria-label="Mobile primary"
        className="fixed inset-x-0 bottom-4 z-50 px-4 md:hidden"
      >
        <div className="page-shell">
          <ul className="mx-auto flex w-full max-w-[22rem] items-center justify-between rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]/92 px-3 py-2 shadow-[0_18px_36px_rgba(75,63,110,0.14)] backdrop-blur-[18px]">
            {mobileNavItems.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;

              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-label={label}
                    aria-current={isActive ? "page" : undefined}
                    className={`focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full transition ${
                      isActive
                        ? "bg-[color:var(--accent-strong)] text-[color:var(--surface)] shadow-[0_10px_18px_rgba(75,63,110,0.16)]"
                        : "text-[color:var(--muted)] hover:bg-[color:var(--surface-soft)] hover:text-[color:var(--foreground)]"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
