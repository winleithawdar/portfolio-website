import Image from "next/image";
import { PageIntro } from "@/components/page-intro";

type Position = {
  role: string;
  dateRange: string;
  duration: string;
  highlights: string[];
};

type OrganizationGroup = {
  organization: string;
  organizationUrl?: string;
  dateRange: string;
  duration: string;
  logo: string;
  location?: string;
  personalNotes?: string[];
  positions: Position[];
};

const organizationGroups: OrganizationGroup[] = [
  {
    organization: "MUI Robotics",
    organizationUrl: "https://mui-robotics.asia/",
    dateRange: "May 2026 - Present",
    duration: "4 mos",
    logo: "/logos/experience/mui-robotics.jpg",
    location: "Thailand",
    positions: [
      {
        role: "Technology Intern (AI/ML)",
        dateRange: "May 2026 - Present",
        duration: "4 mos",
        highlights: [
          "Developed Python workflows to analyze and preprocess electronic nose and electronic tongue sensor data for sensory intelligence applications.",
          "Investigated machine learning techniques for signal preprocessing, feature engineering, model evaluation, and odor prediction using real-world sensory datasets.",
          "Researched sensor drift compensation, adaptive learning, and validation methodologies, translating findings into technical recommendations for future model development.",
        ],
      },
    ],
  },
  {
    organization: "SMU Artificial Intelligence Club (SMUAI)",
    organizationUrl: "https://smuai.org",
    dateRange: "May 2025 - Present",
    duration: "1 yr 3 mos",
    logo: "/logos/experience/smuai.jpg",
    location: "Singapore",
    positions: [
      {
        role: "Vice President",
        dateRange: "May 2026 - Present",
        duration: "3 mos",
        highlights: [
          "Oversee the club’s direction across departments, helping guide priorities, initiatives, and execution alongside the executive committee.",
          "Work closely with the President on strategic alignment to ensure SMUAI’s plans, operations, and public direction stay consistent with the club’s long-term vision.",
          "Built and continue to maintain the official SMUAI website, supporting the club’s digital presence and ongoing updates.",
        ],
      },
      {
        role: "Marketing Lead",
        dateRange: "May 2025 - Apr 2026",
        duration: "1 yr",
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
    organization: "AI Singapore",
    organizationUrl: "https://aisingapore.org/",
    dateRange: "Sep 2025 - Apr 2026",
    duration: "8 mos",
    logo: "/logos/experience/ai-singapore.jpg",
    location: "Singapore",
    positions: [
      {
        role: "Data Quality Assurance Student Assistant",
        dateRange: "Sep 2025 - Apr 2026",
        duration: "8 mos",
        highlights: [
          "Developed and reviewed over 100 prompt-response pairs to support the training and evaluation of SEA large language models.",
          "Applied structured evaluation criteria to benchmark model performance across prompt types and use cases, including mathematical reasoning, conversational flow, and sensitive content.",
          "Performed data quality checks and cross-model comparisons on over 300 LLM responses to improve accuracy, consistency, and reliability.",
        ],
      },
    ],
  },
  {
    organization: "SMU Ellipsis Computing Society",
    organizationUrl: "https://smuellipsis.com",
    dateRange: "May 2024 - Apr 2025",
    duration: "1 yr",
    logo: "/logos/experience/ellipsis.jpg",
    location: "Singapore",
    positions: [
      {
        role: "Marketing Executive",
        dateRange: "May 2024 - Apr 2025",
        duration: "1 yr",
        highlights: [
          "Designed the SMU Tech Series 2025 website in Figma to shape the event’s digital experience and visual direction.",
          "Created Instagram visuals and handled social media content to support outreach and engagement.",
          "Designed merchandise items to support the society’s branding and promotional efforts.",
        ],
      },
    ],
  },
  {
    organization: "SMU Myanmar Community",
    organizationUrl: "https://www.linkedin.com/company/smumc/",
    dateRange: "May 2024 - Apr 2025",
    duration: "1 yr",
    logo: "/logos/experience/smumc.jpg",
    location: "Singapore",
    positions: [
      {
        role: "Honorary General Secretary",
        dateRange: "May 2024 - Apr 2025",
        duration: "1 yr",
        highlights: [
          "Managed core club administration, including email, records, and internal coordination.",
          "Handled event, membership, and recruitment matters through forms, participant tracking, and related logistics.",
          "Supported operations through facility bookings, asset coordination, meeting minutes, and post-event follow-up.",
        ],
      },
    ],
  },
  {
    organization: "The Forward Society",
    organizationUrl: "https://www.linkedin.com/company/theforwardsociety/",
    dateRange: "Jan 2023 - Apr 2024",
    duration: "1 yr 4 mos",
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
        duration: "8 mos",
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
        duration: "2 mos",
        highlights: [
          "Led the 2-day free virtual workshop Photoshop Essentials as project leader.",
          "Created the Project Development Handbook and The Forward Society profile slides.",
          "Represented the organization as a team leader at the YOUTHnified Fair at American Center Yangon.",
        ],
      },
      {
        role: "Graphic Designer",
        dateRange: "Apr 2023 - Aug 2023",
        duration: "5 mos",
        highlights: [
          "Designed social media graphics and branded assets including ID cards, coupons, Zoom backgrounds, pamphlets, letterheads, and bookmarks.",
        ],
      },
      {
        role: "Student Affairs Officer",
        dateRange: "Apr 2023 - Jun 2023",
        duration: "3 mos",
        highlights: [
          "Promoted from Facilitator and refined processes by reviewing past feedback and setting up new task templates.",
          "Created the Facilitators Handbook and recorded tutorial videos for database formulas and email workflows.",
          "Trained new facilitators and supported onboarding within Student Affairs.",
        ],
      },
      {
        role: "Facilitator",
        dateRange: "Jan 2023 - Mar 2023",
        duration: "3 mos",
        highlights: [
          "Created event forms and managed student-related records, attendance, and data tracking.",
          "Prepared class and event introduction slides and assisted as an emcee during virtual events.",
          "Supported programme delivery by coordinating communication between instructors and students.",
        ],
      },
    ],
  },
  {
    organization: "Thate Pan Hub",
    organizationUrl: "https://thatepanhub.org",
    dateRange: "Nov 2023 - Feb 2024",
    duration: "4 mos",
    logo: "/logos/experience/thate-pan-hub.jpg",
    location: "Myanmar",
    personalNotes: [
      "This experience deepened my interest in pursuing computer science through education and community impact.",
    ],
    positions: [
      {
        role: "Computer Science Curriculum Development Team Member",
        dateRange: "Nov 2023 - Feb 2024",
        duration: "4 mos",
        highlights: [
          "Analyzed and strengthened curriculum content across computer science courses offered by the organization.",
          "Represented Thate Pan Hub by teaching the Hour of Code 2023 course at Yangon Adventist Seminary.",
        ],
      },
    ],
  },
  {
    organization: "Start Smart",
    organizationUrl: "https://www.linkedin.com/company/start-smart-organization/",
    dateRange: "Aug 2023 - Feb 2024",
    duration: "7 mos",
    logo: "/logos/experience/start-smart.jpg",
    location: "Myanmar",
    positions: [
      {
        role: "Graphic Designer",
        dateRange: "Aug 2023 - Feb 2024",
        duration: "7 mos",
        highlights: [
          "Designed social media graphics for the Start Smart Facebook page and Zoom backgrounds for events.",
          "Contributed visual materials aligned with the organization’s branding and youth-focused outreach.",
        ],
      },
    ],
  },
  {
    organization: "For The Future - Myanmar",
    organizationUrl: "https://www.linkedin.com/company/for-the-future-myanmar/",
    dateRange: "Dec 2022 - Feb 2023",
    duration: "3 mos",
    logo: "/logos/experience/ftf.jpg",
    location: "Myanmar",
    positions: [
      {
        role: "Media & Public Relations Team Member",
        dateRange: "Dec 2022 - Feb 2023",
        duration: "3 mos",
        highlights: [
          "Managed the organization’s social media platforms and contributed to a structured content calendar with other teams.",
          "Coordinated communication with guest speakers and audiences to support smoother event delivery.",
          "Supported outreach by moderating virtual events and strengthening the team’s public-facing communications.",
        ],
      },
    ],
  },
  {
    organization: "Galaxy Free Education Centre",
    dateRange: "May 2022 - Sep 2022",
    duration: "5 mos",
    logo: "/logos/experience/gfec.jpg",
    location: "Myanmar",
    positions: [
      {
        role: "General English Instructor",
        dateRange: "May 2022 - Sep 2022",
        duration: "5 mos",
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

export default function ExperiencePage() {
  return (
    <section aria-labelledby="experience-title" className="w-full space-y-6">
      <PageIntro
        accent="experience"
        label="Experience"
        title="Work & Leadership Journey"
        description="A chronological timeline of organizations, roles, and resume-style highlights."
        titleId="experience-title"
      />

      <section className="soft-panel rounded-[2rem] px-6 py-7 md:px-8 md:py-8">
        <div className="space-y-0">
          {organizationGroups.map((group, index) => (
            <article
              key={`${group.organization}-${group.dateRange}`}
              className={`relative pl-10 ${
                index === organizationGroups.length - 1 ? "" : "pb-10"
              }`}
            >
              {index !== organizationGroups.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute left-[0.7rem] top-7 bottom-0 w-px bg-[color:var(--border)]"
                />
              ) : null}

              <span
                aria-hidden="true"
                className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--accent-strong)]" />
              </span>

              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="min-w-0 flex-1">
                  <div className="flex min-w-0 gap-4">
                    {group.logo ? (
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-[1.1rem] border border-[color:var(--border)] bg-white p-2">
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
                      {group.organizationUrl ? (
                        <a
                          href={group.organizationUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="focus-ring inline-flex rounded-sm font-[family-name:var(--font-display)] text-2xl tracking-[-0.04em] text-[color:var(--foreground)] transition hover:-translate-y-0.5 hover:text-[color:var(--accent-strong)] md:text-[2rem]"
                        >
                          {group.organization}
                        </a>
                      ) : (
                        <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-[-0.04em] text-[color:var(--foreground)] md:text-[2rem]">
                          {group.organization}
                        </h2>
                      )}
                      {group.location ? (
                        <p className="mt-1 text-sm text-[color:var(--foreground)]/72">
                          {group.location}
                        </p>
                      ) : null}
                      <div className="mt-2 space-y-1 text-sm text-[color:var(--muted)] md:hidden">
                        <p>{group.dateRange}</p>
                        <p>{group.duration}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 space-y-4">
                    {group.positions.map((position) => (
                      <section
                        key={`${position.role}-${position.dateRange}`}
                        className="w-full rounded-[1.6rem] border border-[color:var(--border)] bg-[color:var(--surface-soft)]/55 px-4 py-4 md:px-5 md:py-5"
                      >
                        <div className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[1rem] border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--accent-strong)]"
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
                            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                              <div>
                                <h3 className="text-base font-semibold tracking-[-0.02em] text-[color:var(--foreground)]">
                                  {position.role}
                                </h3>
                                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[color:var(--muted)]">
                                  <p>{position.dateRange}</p>
                                  <span
                                    aria-hidden="true"
                                    className="h-1 w-1 rounded-full bg-[color:var(--border-strong)]"
                                  />
                                  <p>{position.duration}</p>
                                </div>
                              </div>
                            </div>

                            <ul className="mt-4 space-y-2">
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
                          </div>
                        </div>
                      </section>
                    ))}
                  </div>

                  {group.personalNotes ? (
                    <div className="mt-5 w-full rounded-[1.5rem] bg-[color:var(--accent-soft)]/65 px-4 py-4 md:px-5">
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

                <div className="hidden shrink-0 space-y-1 text-sm text-[color:var(--muted)] md:block md:pl-6 md:text-right">
                  <p>{group.dateRange}</p>
                  <p>{group.duration}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
