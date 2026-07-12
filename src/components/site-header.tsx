"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems, socialLinks } from "@/lib/navigation";

function HeaderActions() {
  return (
    <div className="flex items-center gap-2">
      <ThemeToggle />
      {socialLinks.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          title={`${label} placeholder link`}
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface-soft)] text-[color:var(--foreground)] hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-strong)]"
        >
          <Icon className="h-4.5 w-4.5" />
        </a>
      ))}
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="page-shell pt-4 md:pt-7">
      <div className="floating-panel rounded-[2rem] px-4 py-4 md:px-5">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center">
          <div className="flex items-center justify-between gap-4 md:justify-self-start">
            <Link
              href="/"
              className="focus-ring rounded-full px-1 py-1 font-[family-name:var(--font-display)] text-xl tracking-[-0.03em] text-[color:var(--foreground)] hover:text-[color:var(--accent-strong)]"
            >
              Win Lei Thawdar
            </Link>
            <div className="md:hidden">
              <HeaderActions />
            </div>
          </div>

          <nav
            aria-label="Primary"
            className="no-scrollbar overflow-x-auto md:justify-self-center"
          >
            <ul className="inline-flex min-w-max items-center gap-1 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-2 py-2">
              {navItems.map(({ href, label }) => {
                const isActive = pathname === href;

                return (
                  <li key={href}>
                    <Link
                      href={href}
                      aria-current={isActive ? "page" : undefined}
                      className={`focus-ring inline-flex rounded-full px-4 py-2 text-sm font-medium ${
                        isActive
                          ? "bg-[color:var(--accent-strong)] text-[color:var(--surface)] shadow-sm"
                          : "text-[color:var(--muted)] hover:bg-[color:var(--surface)] hover:text-[color:var(--foreground)]"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden md:flex md:justify-self-end">
            <HeaderActions />
          </div>
        </div>
      </div>
    </header>
  );
}
