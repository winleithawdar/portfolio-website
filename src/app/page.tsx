import { FeaturedProjects, projectCount } from "@/components/project-gallery";
import { heroEmail } from "@/lib/navigation";
import { SectionHeading } from "@/components/section-heading";
import Link from "next/link";
import { MoonIcon } from "@/components/icons";
import { HomeHero } from "@/components/home-hero";
import { JourneyAlbums, type JourneyAlbum } from "@/components/journey-albums";
import { JourneyTimeline, type JourneyStop } from "@/components/journey-timeline";
import { SkillsBoard } from "@/components/skills-board";
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

const journeyStops = [
  {
    when: "2023",
    logo: "/logos/experience/the-forward-society.jpg",
    organization: "The Forward Society",
    title: "Community work in Myanmar",
    detail: "Operations Director, The Forward Society",
    href: "/experience",
  },
  {
    when: "2024",
    logo: "/logos/education/smu.jpg",
    organization: "Singapore Management University",
    title: "Started at SMU",
    detail: "Computer Science (AI), second major in Strategic Management",
    href: "/education",
  },
  {
    when: "2025",
    logo: "/logos/experience/ai-singapore.jpg",
    organization: "AI Singapore",
    title: "AI Singapore",
    detail: "Data QA Student Assistant, evaluating LLMs",
    href: "/experience",
  },
  {
    when: "2026",
    logo: "/logos/experience/mui-robotics.jpg",
    organization: "MUI Robotics",
    title: "MUI Robotics, Thailand",
    detail: "Technology Intern (AI/ML)",
    href: "/experience",
  },
  {
    when: "Now",
    logo: "/logos/experience/smuai.jpg",
    organization: "SMU Artificial Intelligence Club",
    title: "Vice President, SMUAI",
    detail: "Leading SMU’s AI club",
    href: "/experience",
    current: true,
  },
] as const satisfies readonly JourneyStop[];

const skillCategoryList = [
  { title: "Cloud & DevOps", sketch: "cloud", skills: ["AWS", "Docker", "Kubernetes", "Terraform", "OpenTofu", "CI/CD", "GitLab", "GitHub Actions", "Playwright", "Vercel", "Linux", "Git", "GitHub"] },
  { title: "AI & Machine Learning", sketch: "data", skills: ["PyTorch", "scikit-learn", "Model evaluation", "Pandas", "Jupyter", "Google Colab", "GPU training", "LLM APIs"] },
  { title: "Languages & Backend", sketch: "code", skills: ["Python", "Java", "RabbitMQ", "Flask", "FastAPI", "Spring Boot", "REST APIs", "Node.js", "Socket.io", "PostgreSQL", "MySQL", "Supabase", "C", "VS Code"] },
  { title: "Frontend", sketch: "web", skills: ["Next.js", "TypeScript", "Tailwind CSS", "React", "JavaScript", "HTML", "CSS", "Expo"] },
  { title: "Product & Collaboration", sketch: "design", skills: ["Agile/Scrum", "Figma", "Prototyping", "Jira", "Canva", "Photoshop", "Illustrator"] },
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
          <SectionHeading id="home-projects-title" label="Selected projects" title="A few things I’ve built." description="A microservices ticketing platform on AWS, a club website I designed and built, and a mobile app with computer vision." />
          <FeaturedProjects />
          <Link href="/projects" className="focus-ring action-link mt-6">See all {projectCount} projects <ArrowUpRightIcon className="h-4 w-4" /></Link>
        </ScrollReveal>
      </section>

      <HomeSectionDivider />

      <section aria-labelledby="home-background-title" className="home-section">
        <ScrollReveal>
          <SectionHeading id="home-background-title" label="Background" title="Where I learn and contribute." />
          <div className="home-feature-block rounded-[2rem] px-5 py-6 md:px-8 md:py-8">
            <JourneyTimeline stops={journeyStops} />
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/education" className="focus-ring action-link">Education, awards &amp; certifications <ArrowUpRightIcon className="h-4 w-4" /></Link>
            <Link href="/experience" className="focus-ring action-link">Experience &amp; leadership <ArrowUpRightIcon className="h-4 w-4" /></Link>
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
          <SectionHeading id="home-skills-title" label="Skills" title="Tools I Build With" description="Tools I’ve used across my projects and coursework." />

          <ScrollReveal delayMs={90} y={22}>
            <SkillsBoard categories={skillCategoryList} />
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
          <SectionHeading id="home-story-title" label="Outside the resume" title="Campus, community, and off-screen days." />

          <ScrollReveal delayMs={90} y={22}>
            <JourneyAlbums albums={homeJourneyAlbums} />
          </ScrollReveal>
        </ScrollReveal>
      </section>

      <HomeSectionDivider />

      <section aria-labelledby="home-contact-title" className="home-section">
        <ScrollReveal className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div><h2 id="home-contact-title" className="section-title">Let’s connect.</h2><p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">Want to ask about a project or work together? Send me an email.</p></div>
          <a href={`mailto:${heroEmail}`} className="focus-ring action-link w-fit">Get in touch <ArrowUpRightIcon className="h-4 w-4" /></a>
        </ScrollReveal>
      </section>
    </>
  );
}
