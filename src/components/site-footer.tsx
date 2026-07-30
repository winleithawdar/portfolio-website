import Link from "next/link";
import { MailIcon } from "@/components/icons";
import { footerSocialLinks, heroEmail, navItems } from "@/lib/navigation";

const quickLinks = navItems.filter(({ href }) => href !== "/");

export function SiteFooter() {
  return (
    <footer className="page-shell pb-10 pt-6 md:pb-12 md:pt-8">
      <div className="border-t border-[color:var(--border)] pt-8">
        <div className="grid gap-8 md:grid-cols-12">
          <section className="space-y-4 md:col-span-5">
            <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-[-0.04em] text-[color:var(--foreground)]">
              Win Lei Thawdar
            </h3>
            <p className="max-w-md text-sm leading-7 text-[color:var(--muted)] md:text-[0.95rem]">
              Computer Science student at Singapore Management University,
              exploring technology, design, and meaningful digital
              experiences.
            </p>
            <p className="text-sm text-[color:var(--muted)]">Singapore</p>
          </section>

          <section className="space-y-4 md:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-3 text-sm">
              <Link
                href="/"
                className="focus-ring text-[color:var(--muted)] transition hover:text-[color:var(--accent-strong)]"
              >
                Home
              </Link>
              {quickLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="focus-ring text-[color:var(--muted)] transition hover:text-[color:var(--accent-strong)]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </section>

          <section className="space-y-4 md:col-span-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Connect
            </h4>
            <a
              href={`mailto:${heroEmail}`}
              className="focus-ring inline-flex items-center gap-3 text-sm text-[color:var(--foreground)] transition hover:text-[color:var(--accent-strong)]"
            >
              <MailIcon className="h-4.5 w-4.5 text-[color:var(--muted)]" />
              <span>{heroEmail}</span>
            </a>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {footerSocialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="focus-ring text-[color:var(--muted)] transition hover:-translate-y-0.5 hover:text-[color:var(--accent-strong)]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[color:var(--border)] pt-4 text-sm text-[color:var(--muted)] md:flex-row md:items-center md:justify-between">
          <p>© 2026 Win Lei Thawdar. Built using Next.js &amp; TypeScript.</p>
          <p className="text-xs">Last updated: July 2026</p>
        </div>
      </div>
    </footer>
  );
}
