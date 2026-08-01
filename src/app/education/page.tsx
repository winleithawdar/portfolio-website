import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import { FacebookIcon, GlobeIcon } from "@/components/icons";

type EducationSection = {
  heading: string;
  items: string[];
  tone?: "accent" | "muted";
};

type EducationItem = {
  institution: string;
  credential: string;
  period: string;
  location?: string;
  websiteUrl?: string;
  facebookUrl?: string;
  result?: string;
  note?: string;
  logo?: string;
  sections?: EducationSection[];
};

type CertificationItem = {
  name: string;
  issuer: string;
  issued: string;
  credentialId?: string;
  credentialUrl: string;
  previewSrc?: string;
};

const educationItems: EducationItem[] = [
  {
    institution: "Singapore Management University",
    credential:
      "Bachelor of Science (Computer Science), Specialisation in Artificial Intelligence, Second Major in Strategic Management",
    period: "Aug 2024 - Apr 2028",
    location: "Singapore",
    websiteUrl: "https://www.smu.edu.sg/",
    note: "ASEAN Undergraduate Scholarship",
    logo: "/logos/education/smu.jpg",
    sections: [
      {
        heading: "Activities & involvement",
        tone: "accent",
        items: [
          "Vice President, SMU Artificial Intelligence Club",
          "Student Ambassador, 12th Lee Kuan Yew Global Business Plan Competition",
          "Marketing Lead, SMU Artificial Intelligence Club",
          "Honorary General Secretary, SMU Myanmar Community",
          "Marketing Executive, SMU Ellipsis Computing Society",
        ],
      },
    ],
  },
  {
    institution: "Royal Academic Institute & KAI Global School",
    credential: "Ontario Secondary School Diploma (OSSD)",
    period: "Dec 2022 - Dec 2023",
    location: "Myanmar & Canada",
    websiteUrl: "https://kaiglobalschool.com/",
    result: "93%",
    note: "RAI Scholarship Award",
    logo: "/logos/education/rai.jpg",
    sections: [
      {
        heading: "Achievements",
        tone: "accent",
        items: [
          "Highest marks in Computer Science (ICS4U) at 97%",
          "Highest marks in Business Management (BOH4M) at 96%",
        ],
      },
      {
        heading: "Subjects taken",
        tone: "muted",
        items: [
          "Business Leadership: Management Fundamentals (BOH4M)",
          "English Literature (ENG4U)",
          "Computer Science (ICS4U)",
          "Calculus & Vectors (MCV4U)",
          "Advanced Functions (MHF4U)",
          "Literacy Course (OLC4O)",
          "Chemistry (SCH4U)",
          "Physics (SPH4U)",
        ],
      },
      {
        heading: "IELTS",
        tone: "accent",
        items: ["Overall Band Score: 7.5"],
      },
    ],
  },
  {
    institution: "Institute of International Professionalism",
    credential:
      "International General Certificate of Secondary Education (IGCSE), Cambridge CIE",
    period: "Jul 2021 - Nov 2023",
    location: "Myanmar",
    facebookUrl: "https://www.facebook.com/IIPInternationalSchool/",
    result: "7A*",
    logo: "/logos/education/iip.jpg",
    sections: [
      {
        heading: "Achievements",
        tone: "accent",
        items: ["Achieved the Excellent Award for getting A* in all subjects"],
      },
      {
        heading: "Subjects taken",
        tone: "muted",
        items: [
          "Chemistry (0620)",
          "Computer Science (0478)",
          "English as a Second Language (0510)",
          "Information and Communication Technology (0417)",
          "Mathematics (0580)",
          "Mathematics Additional (0606)",
          "Physics (0625)",
        ],
      },
    ],
  },
  {
    institution: "Kaung Sone High School",
    credential: "Grade 10",
    period: "Jun 2019 - Feb 2020",
    location: "Myanmar",
    facebookUrl:
      "https://www.facebook.com/p/KAUNG-SONE-Private-School-61554011201550/",
    result: "A",
    logo: "/logos/education/kaung-sone.jpg",
    sections: [
      {
        heading: "Subjects taken",
        tone: "muted",
        items: ["Biology, Chemistry, English, Mathematics, Myanmar, Physics"],
      },
    ],
  },
  {
    institution: "No.1 Basic Education Middle School, Dagon",
    credential: "Kindergarten-Grade 9",
    period: "Jun 2010 - Feb 2019",
    location: "Myanmar",
    facebookUrl: "https://www.facebook.com/BishopHome/",
    result: "A",
    logo: "/logos/education/bems1.jpg",
    sections: [
      {
        heading: "Achievements",
        tone: "accent",
        items: ["99% in Mathematics in Grade 8 and Grade 9"],
      },
      {
        heading: "Subjects taken",
        tone: "muted",
        items: [
          "English, General Science, Geography, History, Mathematics, Myanmar",
        ],
      },
    ],
  },
] as const;

const certificationItems: CertificationItem[] = [
  {
    name: "Deep Learning: Convolutional Neural Networks in Python",
    issuer: "Udemy",
    issued: "Jul 2026",
    credentialId: "UC-859f7b33-31b2-447a-98bf-04c6732cddd9",
    credentialUrl:
      "https://ude.my/UC-859f7b33-31b2-447a-98bf-04c6732cddd9",
  },
  {
    name: "The Nuts and Bolts of Machine Learning",
    issuer: "Google",
    issued: "Jun 2026",
    credentialId: "1L48WD0G6SIF",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/records/1L48WD0G6SIF",
  },
  {
    name: "Working with the OpenAI API",
    issuer: "DataCamp",
    issued: "Jun 2026",
    credentialUrl:
      "https://www.datacamp.com/completed/statement-of-accomplishment/course/1b167923683cc29287486b553fd42ff4042f813a",
  },
  {
    name: "Foundations of Data Science",
    issuer: "Google",
    issued: "Jun 2026",
    credentialId: "3F9SUEGUMAX8",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/records/3F9SUEGUMAX8",
  },
  {
    name: "AI4I® - Literacy in AI",
    issuer: "AI Singapore",
    issued: "Aug 2025",
    credentialId: "740716",
    credentialUrl:
      "https://learn.aisingapore.org/certificate-verification/8395C61F7E-812FABE2CB-156E0B7AA/",
  },
  {
    name: "AI4E® Theory (Badge)",
    issuer: "AI Singapore",
    issued: "Aug 2025",
    credentialId: "750743",
    credentialUrl:
      "https://learn.aisingapore.org/certificate-verification/839BBC014D-2D01AEE69905-156E0B7AA/",
  },
  {
    name: "SMU .Hack Enrichment Application Programme 2025",
    issuer: "SMU .Hack",
    issued: "Jul 2025",
    credentialId: "84128b41-0992-4e0f-9398-3ba25029ae7d",
    credentialUrl:
      "https://credsverse.com/credentials/84128b41-0992-4e0f-9398-3ba25029ae7d",
  },
  {
    name: "Foundations of User Experience (UX) Design",
    issuer: "Google",
    issued: "Dec 2024",
    credentialId: "83BPTQM55ITX",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/records/83BPTQM55ITX",
  },
] as const;

const primaryEducationItems = educationItems.slice(0, 2);
const additionalEducationItems = educationItems.slice(2);

function EducationTimelineItem({
  item,
  index,
  totalItems,
}: {
  item: EducationItem;
  index: number;
  totalItems: number;
}) {
  const hasDetails = item.sections && item.sections.length > 0;

  return (
    <article
      key={`${item.institution}-${item.period}`}
      className={`relative pl-10 ${
        index === totalItems - 1 ? "" : "pb-10"
      }`}
    >
      {index !== totalItems - 1 ? (
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
            {item.logo ? (
              <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-[1.1rem] border border-[color:var(--border)] bg-white p-2">
                <Image
                  src={item.logo}
                  alt={`${item.institution} logo`}
                  width={56}
                  height={56}
                  className="h-full w-full object-contain"
                />
              </div>
            ) : null}

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-[-0.04em] text-[color:var(--foreground)] md:text-[2rem]">
                  {item.institution}
                </h2>
                {item.websiteUrl ? (
                  <a
                    href={item.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${item.institution} website`}
                    title={`${item.institution} website`}
                    className="focus-ring inline-flex h-8 w-8 items-center justify-center rounded-[0.9rem] border border-[color:var(--border)] bg-[color:var(--surface-soft)] text-[color:var(--muted)] transition hover:-translate-y-0.5 hover:border-[color:var(--border-strong)] hover:text-[color:var(--accent-strong)]"
                  >
                    <GlobeIcon className="h-4 w-4" />
                  </a>
                ) : null}
                {item.facebookUrl ? (
                  <a
                    href={item.facebookUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${item.institution} Facebook`}
                    title={`${item.institution} Facebook`}
                    className="focus-ring inline-flex h-8 w-8 items-center justify-center rounded-[0.9rem] border border-[color:var(--border)] bg-[color:var(--surface-soft)] text-[color:var(--muted)] transition hover:-translate-y-0.5 hover:border-[color:var(--border-strong)] hover:text-[color:var(--accent-strong)]"
                  >
                    <FacebookIcon className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
              {item.location ? (
                <p className="mt-1 hidden text-sm text-[color:var(--foreground)]/72 md:block">
                  {item.location}
                </p>
              ) : null}
            </div>
          </div>

          <div className="space-y-1 text-sm md:hidden">
            {item.location ? (
              <p className="text-[color:var(--foreground)]/72">{item.location}</p>
            ) : null}
            <p className="text-[color:var(--muted)]">{item.period}</p>
          </div>

          <div className="min-w-0">
            <p className="mt-2 text-base leading-7 text-[color:var(--foreground)]/82">
              {item.credential}
            </p>

            {item.result || item.note ? (
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[color:var(--muted)]">
                {item.result ? <p>Result: {item.result}</p> : null}
                {item.note ? <p>{item.note}</p> : null}
              </div>
            ) : null}

            {hasDetails ? (
              <div className="mt-6 space-y-6">
                {item.sections?.map((section) => {
                  const bulletClassName =
                    section.tone === "accent"
                      ? "bg-[color:var(--accent-strong)]"
                      : "bg-[color:var(--border-strong)]";
                  const textClassName =
                    section.tone === "accent"
                      ? "text-[color:var(--foreground)]/80"
                      : "text-[color:var(--foreground)]/72";

                  return (
                    <section
                      key={`${item.institution}-${section.heading}`}
                      aria-labelledby={`education-section-${item.institution}-${section.heading}`}
                    >
                      <h3
                        id={`education-section-${item.institution}-${section.heading}`}
                        className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]"
                      >
                        {section.heading}
                      </h3>
                      {section.heading === "Subjects taken" ? (
                        <p className={`mt-4 text-sm leading-6 ${textClassName}`}>
                          {section.items.join(", ")}
                        </p>
                      ) : section.items.length === 1 ? (
                        <p className={`mt-4 text-sm leading-6 ${textClassName}`}>
                          {section.items[0]}
                        </p>
                      ) : (
                        <ul className="mt-4 space-y-2">
                          {section.items.map((entry) => (
                            <li
                              key={entry}
                              className={`flex gap-3 text-sm leading-6 ${textClassName}`}
                            >
                              <span
                                aria-hidden="true"
                                className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${bulletClassName}`}
                              />
                              <span>{entry}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </section>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>

        <p className="hidden shrink-0 text-sm text-[color:var(--muted)] md:block md:pl-6 md:text-right">
          {item.period}
        </p>
      </div>
    </article>
  );
}

export default function EducationPage() {
  return (
    <section aria-labelledby="education-title" className="w-full space-y-6">
      <PageIntro
        accent="education"
        label="Education"
        title="Academic Background"
        description="A timeline of schools, qualifications, selected subjects, and certifications."
        titleId="education-title"
      />

      <section className="soft-panel rounded-[2rem] px-6 py-7 md:px-8 md:py-8">
        <div className="mb-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
            Formal Education
          </h2>
        </div>

        <div className="space-y-0">
          {primaryEducationItems.map((item, index) => (
            <EducationTimelineItem
              key={`${item.institution}-${item.period}`}
              item={item}
              index={index}
              totalItems={primaryEducationItems.length}
            />
          ))}
        </div>

        {additionalEducationItems.length > 0 ? (
          <details className="group mt-6">
            <summary className="focus-ring inline-flex cursor-pointer list-none items-center gap-1.5 text-sm font-semibold text-[color:var(--foreground)] transition hover:text-[color:var(--accent-strong)] [&::-webkit-details-marker]:hidden">
              <span className="group-open:hidden">
                See more education history
              </span>
              <span className="hidden group-open:inline">
                Hide earlier education
              </span>
            </summary>

            <div className="mt-6 space-y-0">
              <div className="space-y-0">
                {additionalEducationItems.map((item, index) => (
                  <EducationTimelineItem
                    key={`${item.institution}-${item.period}`}
                    item={item}
                    index={index}
                    totalItems={additionalEducationItems.length}
                  />
                ))}
              </div>
            </div>
          </details>
        ) : null}
      </section>

      <section
        aria-labelledby="education-certifications-title"
        className="elevated-card rounded-[2rem] px-6 py-7 md:px-8 md:py-8"
      >
        <div className="space-y-6">
          <div className="space-y-3">
            <h2
              id="education-certifications-title"
              className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]"
            >
              Selected Certifications
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-[color:var(--muted)] md:text-base md:leading-8">
              Short courses and credentials that support my learning.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {certificationItems.map((item) => (
              <article
                key={`${item.name}-${item.issued}`}
                className="soft-panel overflow-hidden rounded-[1.7rem] px-5 py-5"
              >
                {item.previewSrc ? (
                  <div className="mb-4 overflow-hidden rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--surface-soft)]">
                    <Image
                      src={item.previewSrc}
                      alt={`${item.name} preview`}
                      width={1200}
                      height={675}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                ) : null}

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]">
                      <span>{item.issuer}</span>
                      <span
                        aria-hidden="true"
                        className="h-1 w-1 rounded-full bg-[color:var(--border-strong)]"
                      />
                      <span>{item.issued}</span>
                    </div>

                    <h3 className="font-[family-name:var(--font-display)] text-[1.65rem] leading-tight tracking-[-0.04em] text-[color:var(--foreground)]">
                      {item.name}
                    </h3>
                  </div>

                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex items-center gap-2.5 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2.5 text-sm text-[color:var(--foreground)] shadow-[0_10px_22px_rgba(75,63,110,0.04)] transition hover:-translate-y-0.5 hover:border-[color:var(--border-strong)] hover:text-[color:var(--accent-strong)]"
                  >
                    <GlobeIcon className="h-4 w-4 text-[color:var(--muted)]" />
                    <span>View Credential</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
