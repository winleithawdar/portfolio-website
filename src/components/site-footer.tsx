import Link from "next/link";
import { MailIcon } from "@/components/icons";
import { footerSocialLinks, heroEmail, navItems } from "@/lib/navigation";

const quickLinks = navItems;

export function SiteFooter() {
  return (
    <footer className="page-shell pb-8 pt-5 md:pb-12 md:pt-8">
      <div className="border-t border-[color:var(--border)]/72 pt-4 md:pt-6">
        <div className="flex flex-col gap-4 px-1 md:gap-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-4">
            <div className="space-y-1.5 md:space-y-2">
              <p className="font-[family-name:var(--font-display)] text-[1.12rem] tracking-[-0.04em] text-[color:var(--foreground)] md:text-[1.75rem]">
                Win Lei Thawdar
              </p>
              <p className="max-w-xl text-[0.82rem] leading-5.5 text-[color:var(--muted)] md:text-[0.95rem] md:leading-7">
                Computer Science and Strategic Management student building at the
                intersection of technology, design, and meaningful impact.
              </p>
            </div>

            <a
              href={`mailto:${heroEmail}`}
              className="focus-ring inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-3 py-2 text-[0.8rem] text-[color:var(--foreground)] transition hover:-translate-y-0.5 hover:border-[color:var(--border-strong)] hover:text-[color:var(--accent-strong)] md:gap-2.5 md:px-4 md:py-2.5 md:text-sm"
            >
              <MailIcon className="h-4 w-4 text-[color:var(--muted)] md:h-4.5 md:w-4.5" />
              <span>{heroEmail}</span>
            </a>
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-4">
            <div className="space-y-2">
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)] md:text-sm md:tracking-[0.18em]">
                Quick Links
              </p>
              <nav
                aria-label="Footer navigation"
                className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[0.82rem] md:gap-x-5 md:gap-y-2 md:text-sm"
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

            <div className="space-y-2 md:text-right">
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)] md:text-sm md:tracking-[0.18em]">
                Connect
              </p>
              <div className="flex w-full flex-nowrap items-center justify-between gap-1.5 md:flex md:w-auto md:flex-wrap md:justify-end md:gap-2.5">
                {footerSocialLinks.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    title={label}
                    className="focus-ring inline-flex h-[2.125rem] w-[2.125rem] shrink-0 items-center justify-center rounded-[0.78rem] border border-[color:var(--border)] bg-[color:var(--surface-soft)] text-[color:var(--muted)] transition hover:-translate-y-0.5 hover:border-[color:var(--border-strong)] hover:text-[color:var(--accent-strong)] md:h-10 md:w-10 md:rounded-[0.95rem]"
                  >
                    <Icon className="h-4 w-4 md:h-4.5 md:w-4.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1 border-t border-[color:var(--border)]/55 pt-3 text-[0.78rem] text-[color:var(--muted)] md:flex-row md:items-center md:justify-between md:pt-4 md:text-sm">
            <p>© 2026 Win Lei Thawdar</p>
            <div className="flex flex-col gap-1 text-[0.72rem] md:items-end md:text-xs">
              <p>Last updated: August 2026</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
