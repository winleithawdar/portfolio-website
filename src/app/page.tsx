import { FeaturedProjects } from "@/components/project-gallery";
import { heroEmail } from "@/lib/navigation";
import { SectionHeading } from "@/components/section-heading";
import Link from "next/link";
import {
  EducationIcon,
  ExperienceIcon,
  LearningOutlineIcon,
  CommunityOutlineIcon,
  MoonIcon,
} from "@/components/icons";
import { HomeHero } from "@/components/home-hero";
import { JourneyAlbums, type JourneyAlbum } from "@/components/journey-albums";
import { SkillsIconCloud } from "@/components/skills-icon-cloud";
import { ScrollReveal } from "@/components/scroll-reveal";

const homeJourneyAlbums = [
  {
    label: "Myanmar",
    title: "Home, community, first steps",
    caption: "where a lot of my community work started",
    images: [
      {
        src: "/images/journey/myanmar-01.jpg",
        alt: "Teaching a coding session in Myanmar",
        objectPosition: "50% 45%",
      },
      {
        src: "/images/journey/myanmar-02.jpg",
        alt: "The Forward Society event team in Myanmar",
        objectPosition: "center",
      },
      {
        src: "/images/journey/myanmar-03.jpg",
        alt: "A Myanmar community milestone",
        objectPosition: "50% 42%",
      },
      {
        src: "/images/journey/myanmar-04.jpg",
        alt: "A group moment from Myanmar",
        objectPosition: "50% 42%",
      },
    ],
  },
  {
    label: "Singapore",
    title: "City, campus, community",
    caption: "the everyday chapter I am still growing through",
    images: [
      {
        src: "/images/journey/singapore-01.jpg",
        label: "SMU",
        alt: "Singapore campus photo",
        objectPosition: "50% 42%",
      },
      {
        src: "/images/journey/singapore-02.jpg",
        label: "Clubs",
        alt: "Singapore club photo",
        objectPosition: "50% 42%",
      },
      {
        src: "/images/journey/singapore-03.jpg",
        label: "Friends",
        alt: "Singapore friends photo",
        objectPosition: "50% 42%",
      },
      {
        src: "/images/journey/singapore-04.jpg",
        label: "City",
        alt: "Singapore city photo",
        objectPosition: "50% 42%",
      },
    ],
  },
  {
    label: "Global",
    title: "Places that shaped me",
    caption: "home, study, travel, and the little memories in between",
    images: [
      {
        src: "/images/journey/global-01.jpg",
        label: "Myanmar",
        alt: "Myanmar memory photo",
        objectPosition: "50% 42%",
      },
      {
        src: "/images/journey/global-02.jpg",
        label: "Singapore",
        alt: "Singapore memory photo",
        objectPosition: "50% 42%",
      },
      {
        src: "/images/journey/global-03.jpg",
        label: "Korea",
        alt: "Korea memory photo",
        objectPosition: "50% 38%",
      },
      {
        src: "/images/journey/global-04.jpg",
        label: "Thailand",
        alt: "Thailand memory photo",
        objectPosition: "50% 38%",
      },
    ],
  },
  {
    label: "Hobbies",
    title: "Off-screen things",
    caption: "drawing, music, quiet days, and whatever keeps me grounded",
    images: [
      {
        src: "/images/journey/hobbies-01.jpg",
        label: "Drawing",
        alt: "Drawing photo",
        objectPosition: "50% 42%",
      },
      {
        src: "/images/journey/hobbies-02.jpg",
        label: "Sketchbook",
        alt: "Sketchbook photo",
        objectPosition: "50% 42%",
      },
      {
        src: "/images/journey/hobbies-03.jpg",
        label: "Music",
        alt: "Music photo",
        objectPosition: "50% 42%",
      },
      {
        src: "/images/journey/hobbies-04.jpg",
        label: "Quiet days",
        alt: "Quiet day photo",
        objectPosition: "50% 42%",
      },
    ],
  },
] satisfies readonly JourneyAlbum[];

const homeBackground = [
  { href: "/education", title: "Learning at SMU", icon: EducationIcon, watermark: LearningOutlineIcon, description: "Computer Science, specialising in Artificial Intelligence, with a second major in Strategic Management.", link: "Education & certifications" },
  { href: "/experience", title: "Building with teams & communities", icon: ExperienceIcon, watermark: CommunityOutlineIcon, description: "From an AI/ML internship at MUI Robotics to leadership at SMUAI and community work in Myanmar.", link: "Experience & leadership" },
] as const;

const skillCloudItems: ReadonlyArray<{
  label: string;
  slug: string;
  src?: string;
}> = [
  { label: "Python", slug: "python" },
  { label: "Java", slug: "java" },
  { label: "C", slug: "c" },
  { label: "TypeScript", slug: "typescript" },
  { label: "JavaScript", slug: "javascript" },
  { label: "HTML5", slug: "html5" },
  { label: "CSS3", slug: "css3" },
  { label: "React", slug: "react" },
  { label: "Next.js", slug: "nextdotjs" },
  { label: "Tailwind CSS", slug: "tailwindcss" },
  { label: "Node.js", slug: "nodedotjs" },
  { label: "GitHub", slug: "github" },
  { label: "Expo", slug: "expo" },
  { label: "FastAPI", slug: "fastapi" },
  { label: "Supabase", slug: "supabase" },
  { label: "PostgreSQL", slug: "postgresql" },
  { label: "MySQL", slug: "mysql" },
  { label: "Linux", slug: "linux" },
  { label: "macOS", slug: "macos" },
  { label: "AWS", slug: "amazonaws" },
  { label: "Docker", slug: "docker" },
  { label: "Spring Boot", slug: "springboot" },
  { label: "Socket.io", slug: "socketdotio" },
  { label: "PyTorch", slug: "pytorch" },
  { label: "scikit-learn", slug: "scikitlearn" },
  { label: "Jupyter Notebook", slug: "jupyter" },
  { label: "Git", slug: "git" },
  { label: "VS Code", slug: "visualstudiocode" },
  { label: "Canva", slug: "canva" },
  { label: "Photoshop", slug: "adobephotoshop" },
  { label: "Illustrator", slug: "adobeillustrator" },
  { label: "Figma", slug: "figma" },
  { label: "Vercel", slug: "vercel" },
  { label: "Cursor", slug: "cursor" },
] as const;

const codexIcon = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#4b3f6e" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m8 7-4 5 4 5"/><path d="m16 7 4 5-4 5"/><path d="m13.5 5-3 14"/></svg>`,
)}`;

const javaIcon = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#4b3f6e" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round"><path d="M10.2 4.6c1 1-.2 1.7-.9 2.3-.6.5-.8 1.2 0 1.8"/><path d="M13.2 3.8c1.2 1.1-.2 2-.9 2.7-.7.7-1 1.6-.1 2.3"/><path d="M8.2 10.6c1.4.7 3 .9 4.6.9 1.7 0 3.2-.3 4.6-.9"/><path d="M7.5 13.2h10.2a2.3 2.3 0 0 1-2.3 2.3H9.8a2.3 2.3 0 0 1-2.3-2.3Z"/><path d="M17.7 13.6h.7a1.6 1.6 0 1 1 0 3.2h-.9"/><path d="M8.8 18.2c1.2.4 2.5.6 4 .6 2.2 0 4.1-.5 5.4-1.2"/><path d="M7.6 17.5c.6.2 1.2.5 1.9.7"/></svg>`,
)}`;

const skillCloudImages = [
  { label: "Codex", src: codexIcon },
  ...skillCloudItems.map(({ label, slug, src }) => ({
    label,
    src: src || (label === "Java" ? javaIcon : `https://cdn.simpleicons.org/${slug}`),
  })),
];

const skillCategoryList = [
  {
    title: "Frontend Development",
  },
  {
    title: "Backend Development",
  },
  {
    title: "Machine Learning",
  },
  {
    title: "Data & Tooling",
  },
  {
    title: "Product & Design",
  },
  {
    title: "Cloud & Deployment",
  },
] as const;

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 16 16 8" />
      <path d="M9 8h7v7" />
    </svg>
  );
}

function HomeSectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="flex items-center justify-center gap-3 py-1.5 md:gap-4 md:py-2"
    >
      <span className="block h-px w-full bg-[color:var(--border)]/72" />
      <span className="shrink-0 text-[color:var(--accent-strong)]/78">
        <MoonIcon className="h-4 w-4" />
      </span>
      <span className="block h-px w-full bg-[color:var(--border)]/72" />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <div className="md:hidden">
        <HomeSectionDivider />
      </div>

      <section id="home-projects" aria-labelledby="home-projects-title" className="home-section">
        <ScrollReveal>
          <SectionHeading id="home-projects-title" label="Selected projects" title="A few things I’ve built." description="A selection of software, product, and design work. Open a project to see the thinking and details behind it." />
          <FeaturedProjects />
          <Link href="/projects" className="focus-ring action-link mt-6">View all projects <ArrowUpRightIcon className="h-4 w-4" /></Link>
        </ScrollReveal>
      </section>

      <HomeSectionDivider />

      <section aria-labelledby="home-background-title" className="home-section">
        <ScrollReveal>
          <SectionHeading id="home-background-title" label="Background" title="What shapes my work." />
          <div className="grid gap-6 md:grid-cols-2">
            {homeBackground.map(({ href, title, icon: Icon, watermark: Watermark, description, link }) => (
              <article key={href} className="portfolio-card gallery-card relative isolate overflow-hidden p-5 md:p-6">
                <Watermark
                  aria-hidden="true"
                  focusable="false"
                  style={{ position: "absolute", right: 0, bottom: 0, transform: "translate(15%, 10%)", width: "clamp(10rem, 45%, 16rem)", height: "auto", color: "var(--accent-strong)", opacity: 0.09, pointerEvents: "none", zIndex: 0 }}
                />
                <div className="relative z-10">
                <Icon className="h-6 w-6 text-[color:var(--accent-strong)]" />
                <h3 className="card-title mt-4">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{description}</p>
                <Link href={href} className="focus-ring mt-4 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-[color:var(--accent-strong)]">{link}<ArrowUpRightIcon className="h-4 w-4" /></Link>
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <HomeSectionDivider />

      <section
        id="home-skills"
        aria-labelledby="home-skills-title"
        className="home-section"
      >
        <ScrollReveal className="space-y-5 md:space-y-6">
          <SectionHeading id="home-skills-title" label="Skills" title="Tools I build with." description="The toolkit behind the work above, from interface design and web development to machine learning." />

          <ScrollReveal
            className="home-feature-block overflow-hidden rounded-[2rem] px-5 py-5 md:px-7 md:py-5.5"
            delayMs={90}
            y={22}
          >
            <div className="grid gap-5 lg:grid-cols-[minmax(17rem,1.08fr)_minmax(0,0.92fr)] lg:items-center lg:gap-6">
              <div className="order-1">
                <div className="mx-auto w-full max-w-[16rem] md:max-w-[20rem]">
                  <SkillsIconCloud
                    items={skillCloudImages}
                    className="max-w-[16rem] md:max-w-[20rem]"
                  />
                </div>
              </div>

              <div className="order-2 space-y-4 lg:order-2">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                  Core Categories
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {skillCategoryList.map((category) => (
                    <div key={category.title} className="pb-1">
                      <p className="text-sm font-semibold leading-6 text-[color:var(--foreground)]">
                        {category.title}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-1.5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                    Projects
                  </p>
                  <Link
                    href="/projects"
                    className="focus-ring action-link mt-3"
                  >
                    <span>See what I&apos;ve built</span>
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </ScrollReveal>
      </section>

      <HomeSectionDivider />

      <section
        id="home-story"
        aria-labelledby="home-story-title"
        className="home-section"
      >
        <ScrollReveal className="space-y-5 md:space-y-6">
          <SectionHeading id="home-story-title" label="Outside the resume" title="A little life outside the resume." />

          <ScrollReveal delayMs={90} y={22}>
            <JourneyAlbums albums={homeJourneyAlbums} />
          </ScrollReveal>
        </ScrollReveal>
      </section>

      <HomeSectionDivider />

      <section aria-labelledby="home-contact-title" className="home-section">
        <ScrollReveal className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div><h2 id="home-contact-title" className="section-title">Let’s connect.</h2><p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">Have a project, an opportunity, or something you’d like to talk about?</p></div>
          <a href={`mailto:${heroEmail}`} className="focus-ring action-link w-fit">Get in touch <ArrowUpRightIcon className="h-4 w-4" /></a>
        </ScrollReveal>
      </section>
    </>
  );
}
