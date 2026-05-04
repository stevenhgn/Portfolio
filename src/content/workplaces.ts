export type Workplace = {
  company: string;
  role: string;
  start: string;
  end: string;
  blurb: string;
  highlights: string[];
};

export const WORKPLACES: Workplace[] = [
  {
    company: "Placeholder Labs",
    role: "Senior Software Engineer",
    start: "Jan 2024",
    end: "Present",
    blurb:
      "Leading the platform team building developer tooling for distributed systems.",
    highlights: [
      "Shipped a CLI used by 200+ internal engineers daily",
      "Reduced CI build times by 38% with smarter caching",
      "Mentored three junior engineers through promotion",
    ],
  },
  {
    company: "Acme Tech Co.",
    role: "Software Engineer",
    start: "Jun 2021",
    end: "Dec 2023",
    blurb:
      "Built core backend services for a high-traffic consumer product.",
    highlights: [
      "Owned the payments integration through two pricing pivots",
      "Designed event-driven architecture handling 10k req/s peak",
      "Drove the team's adoption of TypeScript across legacy services",
    ],
  },
  {
    company: "Initech Solutions",
    role: "Junior Developer",
    start: "Aug 2019",
    end: "May 2021",
    blurb:
      "Full-stack web work on internal dashboards and customer-facing portals.",
    highlights: [
      "Rewrote a critical reporting tool saving 6 engineer-hours/week",
      "First exposure to production on-call and incident response",
    ],
  },
];
