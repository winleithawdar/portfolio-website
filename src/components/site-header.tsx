"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinktreeIcon } from "@/components/icons";
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
        className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface-soft)] text-[color:var(--foreground)] hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-strong)]"
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState<CSSProperties>({
    opacity: 0,
  });

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
    <header className="sticky top-0 z-40 pt-3 md:pt-5">
      <div className="page-shell backdrop-blur-[6px]">
        <div className="flex items-center justify-between gap-3 md:hidden">
          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-primary-nav"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => {
              setMobileMenuOpen((current) => !current);
            }}
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface-soft)] text-[color:var(--foreground)] hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-strong)]"
          >
            <span className="flex flex-col gap-1.5">
              <span className="h-0.5 w-4 rounded-full bg-current" />
              <span className="h-0.5 w-4 rounded-full bg-current" />
              <span className="h-0.5 w-4 rounded-full bg-current" />
            </span>
          </button>

          <HeaderActions />
        </div>

        {mobileMenuOpen ? (
          <nav
            id="mobile-primary-nav"
            aria-label="Mobile primary"
            className="mt-3 rounded-[1.6rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-2 shadow-[0_14px_28px_rgba(75,63,110,0.08)] md:hidden"
          >
            <ul className="space-y-1">
              {navItems.map(({ href, label }) => {
                const isActive = pathname === href;

                return (
                  <li key={href}>
                    <Link
                      href={href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => {
                        setMobileMenuOpen(false);
                      }}
                      className={`focus-ring flex rounded-[1rem] px-4 py-3 text-sm font-medium ${
                        isActive
                          ? "bg-[color:var(--accent-strong)] text-[color:var(--surface)]"
                          : "text-[color:var(--foreground)] hover:bg-[color:var(--surface-soft)]"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : null}

        <div className="hidden md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center md:gap-3">
          <div className="hidden md:flex md:justify-self-start">
            <Link
              href="/"
              aria-label="Win Lei Thawdar home"
              className="focus-ring inline-flex min-w-0 rounded-full px-1 py-1 transition hover:-translate-y-0.5"
            >
              <span className="font-[family-name:var(--font-script)] text-[2rem] leading-none tracking-[-0.03em] text-[color:var(--foreground)] md:text-[2.2rem]">
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
              className="nav-pill relative grid w-full grid-cols-4 items-center gap-0.5 rounded-full border border-[color:var(--border)] bg-transparent px-1 py-1 shadow-none md:inline-flex md:min-w-max md:w-auto md:gap-1 md:px-1.5 md:py-1.5"
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
                      className={`focus-ring relative z-10 inline-flex justify-center rounded-full px-1 py-2 text-[0.82rem] font-medium md:px-4 md:text-sm ${
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
    </header>
  );
}
