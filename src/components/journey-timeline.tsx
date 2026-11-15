"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";

export type JourneyStop = {
  when: string;
  logo: string;
  organization: string;
  title: string;
  detail: string;
  href: string;
  current?: boolean;
};

export function JourneyTimeline({ stops }: { stops: readonly JourneyStop[] }) {
  const listRef = useRef<HTMLOListElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Draw the line and reveal the stops once the timeline scrolls into view.
  useEffect(() => {
    const list = listRef.current;

    if (!list) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(list);

    return () => observer.disconnect();
  }, []);

  return (
    <ol
      ref={listRef}
      className="journey-timeline relative grid gap-7 lg:grid-cols-5 lg:gap-5"
      data-visible={isVisible}
    >
      <span aria-hidden="true" className="journey-line" />
      {stops.map((stop, index) => (
        <li
          key={`${stop.when}-${stop.organization}`}
          className="journey-stop relative min-w-0"
          style={{ "--stop-index": index } as CSSProperties}
        >
          <Link
            href={stop.href}
            className="journey-stop-link focus-ring block rounded-[1rem] pl-10 lg:pl-0 lg:pt-10"
          >
            <span
              aria-hidden="true"
              className={`journey-dot ${stop.current ? "journey-dot-current" : ""}`}
            />
            <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
              {stop.when}
            </span>
            <span className="mt-3 flex items-center gap-3 lg:block">
              <span className="journey-logo flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-[0.85rem] border border-[color:var(--border)] bg-white p-1.5 lg:h-12 lg:w-12">
                <Image
                  src={stop.logo}
                  alt={`${stop.organization} logo`}
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="block min-w-0 lg:mt-3">
                <span className="journey-title flex items-center gap-1 text-sm font-semibold leading-snug text-[color:var(--foreground)]">
                  {stop.title}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="journey-arrow h-3.5 w-3.5 shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M8 16 16 8M9 8h7v7" />
                  </svg>
                </span>
                <span className="mt-1 block text-xs leading-5 text-[color:var(--muted)] md:text-[0.8rem]">
                  {stop.detail}
                </span>
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
