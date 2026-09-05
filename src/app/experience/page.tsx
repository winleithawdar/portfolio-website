import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import { GlobeIcon, LinkedInIcon } from "@/components/icons";
import { ScrollReveal } from "@/components/scroll-reveal";

export const dynamic = "force-dynamic";

type Position = {
  role: string;
  dateRange: string;
  highlights: string[];
};

type OrganizationGroup = {
  category: "work" | "leadership";
  organization: string;
  websiteUrl?: string;
  linkedinUrl?: string;
  dateRange: string;
  logo: string;
  location?: string;
  personalNotes?: string[];
  positions: Position[];
};

const monthIndexByShortName = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
} as const;

function getMonthSpan(dateRange: string, today = new Date()) {
  const [startLabel, endLabel] = dateRange.split(" - ");
  const start = parseMonthYear(startLabel);
  const end = endLabel === "Present" ? today : parseMonthYear(endLabel);

  return (
    (end.getFullYear() - start.getFullYear()) * 12 +
    end.getMonth() -
    start.getMonth() +
    1
  );
}

function parseMonthYear(label: string) {
  const [month, year] = label.split(" ");
  const monthIndex =
    monthIndexByShortName[month as keyof typeof monthIndexByShortName];

  return new Date(Number(year), monthIndex, 1);
}

function formatDurationFromDateRange(dateRange: string) {
  const totalMonths = getMonthSpan(dateRange);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts = [];

  if (years > 0) {
    parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  }

  if (months > 0) {
    parts.push(`${months} ${months === 1 ? "mo" : "mos"}`);
  }

  return parts.join(" ") || "1 mo";
}

const organizationGroups: OrganizationGroup[] = [
  {
    category: "work",
    organization: "MUI Robotics",
    websiteUrl: "https://mui-robotics.asia/en/",
    linkedinUrl: "https://www.linkedin.com/company/mui-robotics/",
    dateRange: "May 2026 - Aug 2026",
    logo: "/logos/experience/mui-robotics.jpg",
    location: "Thailand",
    positions: [
      {
        role: "Technology Intern (AI/ML)",
        dateRange: "May 2026 - Aug 2026",
        highlights: [
          "Developed Python workflows to analyze and preprocess electronic nose and electronic tongue sensor data for sensory intelligence applications.",
          "Investigated machine learning techniques for signal preprocessing, feature engineering, model evaluation, and odor prediction using real-world sensory datasets.",
          "Researched sensor drift compensation, adaptive learning, and validation methodologies, translating findings into technical recommendations for future model development.",
        ],
      },
    ],
  },
  {
    category: "leadership",
    organization: "SMU Artificial Intelligence Club (SMUAI)",
    websiteUrl: "https://www.smuai.org/",
    linkedinUrl: "https://www.linkedin.com/company/smuai/",
    dateRange: "May 2025 - Present",
    logo: "/logos/experience/smuai.jpg",
    location: "Singapore",
    positions: [
      {
        role: "Vice President",
        dateRange: "May 2026 - Present",
        highlights: [
          "Oversee the club’s direction across departments, helping guide priorities, initiatives, and execution alongside the executive committee.",
          "Work closely with the President on strategic alignment to ensure SMUAI’s plans, operations, and public direction stay consistent with the club’s long-term vision.",
          "Built and continue to maintain the official SMUAI website, supporting the club’s digital presence and ongoing updates.",
        ],
      },
      {
        role: "Marketing Lead",
        dateRange: "May 2025 - Apr 2026",
        highlights: [
          "Led promotions and content direction across Instagram, LinkedIn, and other outreach materials.",
          "Refined SMUAI’s visual identity and Instagram aesthetics to create a stronger, more cohesive public presence.",
          "Built a marketing dashboard and handbook to improve internal organization and handover.",
          "Created board meeting decks, public-facing profile materials, and promotional visuals in close coordination with the President, HGS, and HFS.",
          "Designed stickers and merchandise to support campaigns, events, and brand visibility.",
        ],
      },
    ],
  },
  {
    category: "work",
    organization: "AI Singapore",
    websiteUrl: "https://aisingapore.org/",
    linkedinUrl: "https://www.linkedin.com/company/aisingapore",
    dateRange: "Sep 2025 - Apr 2026",
    logo: "/logos/experience/ai-singapore.jpg",
    location: "Singapore",
    positions: [
      {
        role: "Data Quality Assurance Student Assistant",
        dateRange: "Sep 2025 - Apr 2026",
        highlights: [
          "Developed and reviewed over 100 prompt-response pairs to support the training and evaluation of SEA large language models.",
          "Applied structured evaluation criteria to benchmark model performance across prompt types and use cases, including mathematical reasoning, conversational flow, and sensitive content.",
          "Performed data quality checks and cross-model comparisons on over 300 LLM responses to improve accuracy, consistency, and reliability.",
        ],
      },
    ],
  },
  {
    category: "leadership",
    organization: "SMU Red Cross",
    linkedinUrl: "https://www.linkedin.com/company/smu-red-cross/",
    dateRange: "Aug 2025 - Dec 2025",
    logo: "/logos/experience/smu-red-cross.jpg",
    location: "Singapore",
    positions: [
      {
        role: "Marketing Deputy (Project AC)",
        dateRange: "Aug 2025 - Dec 2025",
        highlights: [
          "Created promotional materials and presentation slides for Project AC (Project Advancing Community).",
          "Assisted with volunteer training sessions and elderly community sessions as part of the project’s programme support.",
          "Supported event documentation by taking photos and videos during activities and sessions.",
          "Completed 100 hours of community service through Project AC.",
          "Certified by the Singapore Red Cross Society as a CPR+AED Provider and Standard First Aid Provider, with a 100% assessment score.",
        ],
      },
    ],
  },
  {
    category: "leadership",
    organization: "SMU Ellipsis Computing Society",
    websiteUrl: "https://smuellipsis.com/",
    linkedinUrl:
      "https://sg.linkedin.com/company/ellipsis-smu-computing-and-information-systems-society",
    dateRange: "May 2024 - Apr 2025",
    logo: "/logos/experience/ellipsis.jpg",
    location: "Singapore",
    positions: [
      {
        role: "Marketing Executive",
        dateRange: "May 2024 - Apr 2025",
        highlights: [
          "Designed the SMU Tech Series 2025 website in Figma to shape the event’s digital experience and visual direction.",
          "Created Instagram visuals and handled social media content to support outreach and engagement.",
          "Designed merchandise items to support the society’s branding and promotional efforts.",
        ],
      },
    ],
  },
  {
    category: "leadership",
    organization: "SMU Myanmar Community",
    linkedinUrl: "https://www.linkedin.com/company/smumc/",
    dateRange: "May 2024 - Apr 2025",
    logo: "/logos/experience/smumc.jpg",
    location: "Singapore",
    positions: [
      {
        role: "Honorary General Secretary",
        dateRange: "May 2024 - Apr 2025",
        highlights: [
          "Managed core club administration, including email, records, and internal coordination.",
          "Handled event, membership, and recruitment matters through forms, participant tracking, and related logistics.",
          "Supported operations through facility bookings, asset coordination, meeting minutes, and post-event follow-up.",
        ],
      },
    ],
  },
  {
    category: "leadership",
    organization: "The Forward Society",
    linkedinUrl: "https://mm.linkedin.com/company/theforwardsociety",
    dateRange: "Jan 2023 - Apr 2024",
    logo: "/logos/experience/the-forward-society.jpg",
    location: "Myanmar",
    personalNotes: [
      "The Forward Society will always hold a special place in my heart. It became one of my longest and most formative community experiences, giving me the opportunity to contribute across operations, project development, student affairs, facilitation, and design while supporting young people in meaningful ways.",
      "Recognized as Volunteer of the Term three times across different roles, including Facilitator, Graphic Designer, and Project Development Officer.",
    ],
    positions: [
      {
        role: "Operations Director",
        dateRange: "Sep 2023 - Apr 2024",
        highlights: [
          "Promoted to lead the Operations Management Department, where I introduced a new Research & Development team based on my vision for stronger programme design and community support.",
          "Worked closely with the CEO, Marketing & PR Director, and HR Director to keep operations aligned with the organization’s mission and improve programme quality.",
          "Led the 10-day Lu Ngal (Youth) Asset: Empowering Voices workshop, which attracted more than 700 registrations.",
          "Expanded on systems I had started developing during my Student Affairs Officer period, including volunteer recognition, role-based KPIs, and an anonymous peer review system that later influenced broader HR practices and retention efforts.",
          "Supervised projects, set timelines, trained new team members, and improved internal systems and templates.",
        ],
      },
      {
        role: "Project Development Officer",
        dateRange: "Jul 2023 - Aug 2023",
        highlights: [
          "Led the 2-day free virtual workshop Photoshop Essentials as project leader.",
          "Created the Project Development Handbook and The Forward Society profile slides.",
          "Represented the organization as a team leader at the YOUTHnified Fair at American Center Yangon.",
        ],
      },
      {
        role: "Graphic Designer",
        dateRange: "Apr 2023 - Aug 2023",
        highlights: [
          "Designed social media graphics and branded assets including ID cards, coupons, Zoom backgrounds, pamphlets, letterheads, and bookmarks.",
        ],
      },
      {
        role: "Student Affairs Officer",
        dateRange: "Apr 2023 - Jun 2023",
        highlights: [
          "Promoted from Facilitator and refined processes by reviewing past feedback and setting up new task templates.",
          "Created the Facilitators Handbook and recorded tutorial videos for database formulas and email workflows.",
          "Trained new facilitators and supported onboarding within Student Affairs.",
        ],
      },
      {
        role: "Facilitator",
        dateRange: "Jan 2023 - Mar 2023",
        highlights: [
          "Created event forms and managed student-related records, attendance, and data tracking.",
          "Prepared class and event introduction slides and assisted as an emcee during virtual events.",
          "Supported programme delivery by coordinating communication between instructors and students.",
        ],
      },
    ],
  },
  {
    category: "leadership",
    organization: "Thate Pan Hub",
    websiteUrl: "https://thatepanhub.org/",
    linkedinUrl: "https://mm.linkedin.com/company/thatepanhub",
    dateRange: "Nov 2023 - Feb 2024",
    logo: "/logos/experience/thate-pan-hub.jpg",
    location: "Myanmar",
    personalNotes: [
      "This experience deepened my interest in pursuing computer science through education and community impact.",
    ],
    positions: [
      {
        role: "Computer Science Curriculum Development Team Member",
        dateRange: "Nov 2023 - Feb 2024",
        highlights: [
          "Analyzed and strengthened curriculum content across computer science courses offered by the organization.",
          "Represented Thate Pan Hub by teaching the Hour of Code 2023 course at Yangon Adventist Seminary.",
        ],
      },
    ],
  },
  {
    category: "leadership",
    organization: "Start Smart",
    linkedinUrl: "https://www.linkedin.com/company/start-smart-organization/",
    dateRange: "Aug 2023 - Feb 2024",
    logo: "/logos/experience/start-smart.jpg",
    location: "Myanmar",
    positions: [
      {
        role: "Graphic Designer",
        dateRange: "Aug 2023 - Feb 2024",
        highlights: [
          "Designed social media graphics for the Start Smart Facebook page and Zoom backgrounds for events.",
          "Contributed visual materials aligned with the organization’s branding and youth-focused outreach.",
        ],
      },
    ],
  },
  {
    category: "leadership",
    organization: "For The Future - Myanmar",
    linkedinUrl: "https://www.linkedin.com/company/for-the-future-myanmar/",
    dateRange: "Dec 2022 - Feb 2023",
    logo: "/logos/experience/ftf.jpg",
    location: "Myanmar",
    positions: [
      {
        role: "Media & Public Relations Team Member",
        dateRange: "Dec 2022 - Feb 2023",
        highlights: [
          "Managed the organization’s social media platforms and contributed to a structured content calendar with other teams.",
          "Coordinated communication with guest speakers and audiences to support smoother event delivery.",
          "Supported outreach by moderating virtual events and strengthening the team’s public-facing communications.",
        ],
      },
    ],
  },
  {
    category: "leadership",
    organization: "Galaxy Free Education Centre",
    dateRange: "May 2022 - Sep 2022",
    logo: "/logos/experience/gfec.jpg",
    location: "Myanmar",
    positions: [
      {
        role: "General English Instructor",
        dateRange: "May 2022 - Sep 2022",
        highlights: [
          "Planned and prepared lessons with presentation slides to support structured English learning.",
          "Evaluated student progress, adapted lesson plans accordingly, and provided feedback on assignments and performance.",
          "Offered one-on-one consultations to support individual students and strengthen their learning outcomes.",
        ],
      },
    ],
    personalNotes: [
      "An early volunteering experience that shaped my longer journey in teaching and community work.",
    ],
  },
] as const;

const experienceSections = [
  {
    title: "Work Experience",
    items: organizationGroups.filter((group) => group.category === "work"),
  },
  {
    title: "Leadership & Community",
    items: organizationGroups.filter((group) => group.category === "leadership"),
  },
] as const;

export default function ExperiencePage() {
  return (
    <section aria-labelledby="experience-title" className="w-full space-y-6">
      <ScrollReveal y={20}>
        <PageIntro
          label="Experience"
          title="Work & Leadership Journey"
          description="A chronological timeline of organizations, roles, and resume-style highlights."
          titleId="experience-title"
        />
      </ScrollReveal>

      <div className="space-y-4 md:space-y-5">
        {experienceSections.map((section, sectionIndex) => (
          <ScrollReveal
            key={section.title}
            delayMs={sectionIndex * 70}
            y={22}
          >
            <section
              aria-labelledby={section.title}
              className="elevated-card rounded-[1.85rem] px-4 py-5 md:rounded-[2.2rem] md:px-8 md:py-8"
            >
              <div className="mb-4 md:mb-6">
                <h2
                  id={section.title}
                  className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]"
                >
                  {section.title}
                </h2>
              </div>

              <div className="space-y-0">
                  {section.items.map((group, index) => (
                    <article
                      key={`${group.organization}-${group.dateRange}`}
                      className={`relative pl-8 md:pl-10 ${
                        index === section.items.length - 1 ? "" : "pb-7 md:pb-10"
                      }`}
                    >
                    {index !== section.items.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className="absolute left-[0.55rem] top-6 bottom-0 w-px bg-[color:var(--border)] md:left-[0.7rem] md:top-7"
                      />
                    ) : null}

                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-1 flex h-5 w-5 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] md:h-6 md:w-6"
                    >
                      <span className="h-2 w-2 rounded-full bg-[color:var(--accent-strong)] md:h-2.5 md:w-2.5" />
                    </span>

                    <div className="space-y-3.5 md:space-y-5">
                      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                        <div className="min-w-0 flex-1">
                          <div className="flex min-w-0 gap-3 md:gap-4">
                            {group.logo ? (
                              <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[0.95rem] border border-[color:var(--border)] bg-white p-2 md:h-14 md:w-14 md:rounded-[1.1rem]">
                                <Image
                                  src={group.logo}
                                  alt={`${group.organization} logo`}
                                  width={56}
                                  height={56}
                                  className="h-full w-full object-contain"
                                />
                              </div>
                            ) : null}

                            <div className="min-w-0 flex-1">
                              <div className="flex flex-wrap items-center gap-1.5 md:gap-2">
                                <h3 className="font-[family-name:var(--font-display)] text-[1.26rem] leading-tight tracking-[-0.04em] text-[color:var(--foreground)] md:text-[2rem]">
                                  {group.organization}
                                </h3>
                                {group.linkedinUrl ? (
                                  <a
                                    href={group.linkedinUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={`${group.organization} LinkedIn`}
                                    title={`${group.organization} LinkedIn`}
                                    className="focus-ring inline-flex h-7 w-7 items-center justify-center rounded-[0.8rem] border border-[color:var(--border)] bg-[color:var(--surface-soft)] text-[color:var(--muted)] transition hover:-translate-y-0.5 hover:border-[color:var(--border-strong)] hover:text-[color:var(--accent-strong)] md:h-8 md:w-8 md:rounded-[0.9rem]"
                                  >
                                    <LinkedInIcon className="h-4 w-4" />
                                  </a>
                                ) : null}
                                {group.websiteUrl ? (
                                  <a
                                    href={group.websiteUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={`${group.organization} website`}
                                    title={`${group.organization} website`}
                                    className="focus-ring inline-flex h-7 w-7 items-center justify-center rounded-[0.8rem] border border-[color:var(--border)] bg-[color:var(--surface-soft)] text-[color:var(--muted)] transition hover:-translate-y-0.5 hover:border-[color:var(--border-strong)] hover:text-[color:var(--accent-strong)] md:h-8 md:w-8 md:rounded-[0.9rem]"
                                  >
                                    <GlobeIcon className="h-4 w-4" />
                                  </a>
                                ) : null}
                              </div>
                              {group.location ? (
                                <p className="mt-0.5 text-[0.78rem] text-[color:var(--foreground)]/72 md:mt-1 md:text-sm">
                                  {group.location}
                                </p>
                              ) : null}
                            </div>
                          </div>

                          <div className="mt-2 space-y-1 text-[0.78rem] md:hidden">
                            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-0.5 text-[color:var(--muted)]">
                              <p>{group.dateRange}</p>
                              <span
                                aria-hidden="true"
                                className="h-1 w-1 rounded-full bg-[color:var(--border-strong)]"
                              />
                              <p>{formatDurationFromDateRange(group.dateRange)}</p>
                            </div>
                          </div>
                        </div>

                        <div className="hidden shrink-0 space-y-1 text-sm text-[color:var(--muted)] md:block md:pl-4">
                          <p>{group.dateRange}</p>
                          <p>{formatDurationFromDateRange(group.dateRange)}</p>
                        </div>
                      </div>

                      <div className="space-y-3 md:space-y-4">
                        {group.positions.map((position) => (
                          <section
                            key={`${position.role}-${position.dateRange}`}
                            className="w-full rounded-[1.25rem] border border-[color:var(--border)] bg-[color:var(--surface-soft)]/55 px-3.5 py-3 md:rounded-[1.6rem] md:px-5 md:py-5"
                          >
                            <div className="flex gap-2.5 md:gap-3">
                              <span
                                aria-hidden="true"
                                className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[0.9rem] border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--accent-strong)] md:h-9 md:w-9 md:rounded-[1rem]"
                              >
                                <svg
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  stroke="currentColor"
                                  className="h-5 w-5"
                                >
                                  <path
                                    d="M6.25 6.5V5.75A1.75 1.75 0 0 1 8 4h4a1.75 1.75 0 0 1 1.75 1.75v.75"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.6"
                                  />
                                  <rect
                                    x="3.5"
                                    y="6.5"
                                    width="13"
                                    height="9.5"
                                    rx="2"
                                    strokeWidth="1.6"
                                  />
                                  <path
                                    d="M3.5 10.25h13"
                                    strokeLinecap="round"
                                    strokeWidth="1.6"
                                  />
                                </svg>
                              </span>
                              <div className="min-w-0 flex-1">
                                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                                  <div>
                                    <h4 className="text-[0.92rem] font-semibold leading-snug tracking-[-0.02em] text-[color:var(--foreground)] md:text-base">
                                      {position.role}
                                    </h4>
                                    <div className="mt-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-0.5 text-[0.78rem] text-[color:var(--muted)] md:mt-2 md:gap-x-3 md:gap-y-1 md:text-sm">
                                      <p>{position.dateRange}</p>
                                      <span
                                        aria-hidden="true"
                                        className="h-1 w-1 rounded-full bg-[color:var(--border-strong)]"
                                      />
                                      <p>{formatDurationFromDateRange(position.dateRange)}</p>
                                    </div>
                                  </div>
                                </div>

                                <ul className="mt-4 hidden space-y-2 md:block">
                                  {position.highlights.map((highlight) => (
                                    <li
                                      key={highlight}
                                      className="flex gap-3 text-sm leading-6 text-[color:var(--foreground)]/78"
                                    >
                                      <span
                                        aria-hidden="true"
                                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent-strong)]"
                                      />
                                      <span>{highlight}</span>
                                    </li>
                                  ))}
                                </ul>

                                <details className="group mt-3 md:hidden">
                                  <summary className="focus-ring inline-flex cursor-pointer list-none items-center gap-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--muted)] transition hover:text-[color:var(--accent-strong)] [&::-webkit-details-marker]:hidden">
                                    <span className="group-open:hidden">View highlights</span>
                                    <span className="hidden group-open:inline">Hide highlights</span>
                                    <span
                                      aria-hidden="true"
                                      className="inline-flex h-4 w-4 items-center justify-center text-[0.65rem] transition group-open:rotate-180"
                                    >
                                      <svg
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        stroke="currentColor"
                                        className="h-3 w-3"
                                      >
                                        <path
                                          d="m5.5 7.5 4.5 5 4.5-5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="1.7"
                                        />
                                      </svg>
                                    </span>
                                  </summary>
                                  <div className="mt-2.5 rounded-[0.95rem] border border-[color:var(--border)] bg-[color:var(--surface-soft)]/72 px-3.5 py-3.5">
                                    <ul className="space-y-1.5">
                                      {position.highlights.map((highlight) => (
                                        <li
                                          key={highlight}
                                          className="flex gap-2.5 text-[0.78rem] leading-5 text-[color:var(--foreground)]/78"
                                        >
                                          <span
                                            aria-hidden="true"
                                            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent-strong)]"
                                          />
                                          <span>{highlight}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </details>
                              </div>
                            </div>
                          </section>
                        ))}

                        {group.personalNotes ? (
                          <div className="hidden w-full rounded-[1.5rem] bg-[color:var(--accent-soft)]/65 px-4 py-4 md:block md:px-5">
                            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
                              Personal Note
                            </p>
                            <div className="mt-3 space-y-2">
                              {group.personalNotes.map((note) => (
                                <p
                                  key={note}
                                  className="text-sm leading-6 text-[color:var(--muted)]"
                                >
                                  {note}
                                </p>
                              ))}
                            </div>
                          </div>
                        ) : null}
                      </div>

                      {group.personalNotes ? (
                        <details className="group md:hidden">
                          <summary className="focus-ring inline-flex cursor-pointer list-none items-center gap-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--muted)] transition hover:text-[color:var(--accent-strong)] [&::-webkit-details-marker]:hidden">
                            <span className="group-open:hidden">Personal note</span>
                            <span className="hidden group-open:inline">Hide personal note</span>
                            <span
                              aria-hidden="true"
                              className="inline-flex h-4 w-4 items-center justify-center text-[0.65rem] transition group-open:rotate-180"
                            >
                              <svg
                                viewBox="0 0 20 20"
                                fill="none"
                                stroke="currentColor"
                                className="h-3 w-3"
                              >
                                <path
                                  d="m5.5 7.5 4.5 5 4.5-5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.7"
                                />
                              </svg>
                            </span>
                          </summary>
                          <div className="mt-2.5 rounded-[1rem] bg-[color:var(--accent-soft)]/65 px-3.5 py-3.5">
                            <div className="space-y-1.5">
                              {group.personalNotes.map((note) => (
                                <p
                                  key={note}
                                  className="text-[0.78rem] leading-5 text-[color:var(--muted)]"
                                >
                                  {note}
                                </p>
                              ))}
                            </div>
                          </div>
                        </details>
                      ) : null}
                    </div>
                    </article>
                  ))}
                </div>
            </section>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
