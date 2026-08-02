import Link from "next/link";
import { MailIcon } from "@/components/icons";
import { footerSocialLinks, heroEmail, navItems } from "@/lib/navigation";

const quickLinks = navItems;

export function SiteFooter() {
  return (
    <footer className="page-shell pb-10 pt-6 md:pb-12 md:pt-8">
      <div className="border-t border-[color:var(--border)]/72 pt-5 md:pt-6">
        <div className="flex flex-col gap-5 px-1 md:gap-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="font-[family-name:var(--font-display)] text-[1.55rem] tracking-[-0.04em] text-[color:var(--foreground)] md:text-[1.75rem]">
              Win Lei Thawdar
            </p>
            <p className="max-w-xl text-sm leading-7 text-[color:var(--muted)] md:text-[0.95rem]">
              Computer Science and Strategic Management student building at the
              intersection of technology, design, and meaningful impact.
            </p>
          </div>

          <a
            href={`mailto:${heroEmail}`}
            className="focus-ring inline-flex w-fit items-center gap-2.5 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-4 py-2.5 text-sm text-[color:var(--foreground)] transition hover:-translate-y-0.5 hover:border-[color:var(--border-strong)] hover:text-[color:var(--accent-strong)]"
          >
            <MailIcon className="h-4.5 w-4.5 text-[color:var(--muted)]" />
            <span>{heroEmail}</span>
          </a>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="space-y-2.5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                Quick Links
              </p>
              <nav
                aria-label="Footer navigation"
                className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm"
              >
                {quickLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="focus-ring text-[color:var(--muted)] transition hover:text-[color:var(--accent-strong)]"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-2.5 md:text-right">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                Connect
              </p>
              <div className="flex flex-wrap items-center gap-2.5 md:justify-end">
                {footerSocialLinks.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    title={label}
                    className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-[0.95rem] border border-[color:var(--border)] bg-[color:var(--surface-soft)] text-[color:var(--muted)] transition hover:-translate-y-0.5 hover:border-[color:var(--border-strong)] hover:text-[color:var(--accent-strong)]"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 border-t border-[color:var(--border)]/55 pt-4 text-sm text-[color:var(--muted)] md:flex-row md:items-center md:justify-between">
            <p>© 2026 Win Lei Thawdar</p>
            <div className="flex flex-col gap-1 text-xs md:items-end">
              <p>Last updated: August 2026</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
