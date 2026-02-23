export const person = {
  name: "Arda Caglayan Ercan",
  title: "Next.js & Mobile App Developer",
  tagline: "Web, mobile, backend — I build the whole product and ship it fast.",
  bio: "I've been drawn to computers my whole life — not just to understand them, but to build things with them. Things I'd actually want to use. That instinct led me to ship a Flutter app that went viral: 110,000+ downloads, real scaling challenges, and a hard lesson that the only metric that matters is shipping.\n\nNow I work with early-stage startups as a full-stack developer — covering Next.js on the web and Flutter on mobile. No handoffs, no coordination overhead. If you need someone who moves fast, owns the whole stack, and has actually felt the pressure of a product taking off, that's me.",
  github: "https://github.com/caqlayan",
  upwork: "https://www.upwork.com/freelancers/caqlayan",
  email: "hello@caqlayan.dev",
};

export const skillGroups = [
  {
    category: "frontend",
    skills: ["TypeScript", "JavaScript", "React", "Next.js"],
  },
  {
    category: "mobile",
    skills: ["Flutter", "Dart"],
  },
  {
    category: "backend",
    skills: ["Node.js", "NestJS", "Express", "REST APIs"],
  },
  {
    category: "data & cloud",
    skills: ["PostgreSQL", "Firebase", "Supabase"],
  },
  {
    category: "tools",
    skills: ["Git", "Vercel"],
  },
];

export type ProjectStatus = "shipped" | "in-progress";

export interface Project {
  name: string;
  description: string;
  longDescription: string;
  status: ProjectStatus;
  tags: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    name: "AI Art App",
    description: "Viral Flutter app with 100k+ Google Play & 10k+ iOS downloads.",
    longDescription:
      "An AI-powered art generation app built with Flutter that went viral — surpassing 100,000 downloads on Google Play and 10,000 on the App Store. Handled AI API integration, real-time image rendering, and scaling to a large user base.",
    status: "shipped",
    tags: ["Flutter", "Dart", "AI APIs", "Mobile"],
  },
  {
    name: "NuVARD AI",
    description: "Full AI health & nutrition platform with personalized insights.",
    longDescription:
      "A comprehensive AI health application covering nutrition tracking, personalized meal plans, and health analytics. Built end-to-end with Flutter for mobile and a Node.js backend with AI model integrations.",
    status: "shipped",
    tags: ["Flutter", "Node.js", "AI APIs", "Health Tech"],
  },
  {
    name: "Outfit Rater",
    description: "AI-powered outfit rating and style advice mobile app.",
    longDescription:
      "A mobile app that uses AI vision models to analyze outfit photos and provide style ratings and improvement suggestions. Clean UI built in Flutter with fast turnaround from photo to feedback.",
    status: "shipped",
    tags: ["Flutter", "Dart", "AI Vision", "Mobile"],
  },
  {
    name: "Ember",
    description: "Daily affirmation & reflection app with streak tracking and premium journaling.",
    longDescription:
      "A mobile app for daily inspirational quotes, personal journaling, and streak tracking. Features anonymous accounts, Apple Sign-In, cloud backup, and an optional premium tier with unlimited browsing, AI-personalized prompts, and custom collections.",
    status: "shipped",
    tags: ["Flutter", "Dart", "Firebase", "Mobile"],
    link: "https://caqlayan.dev/ember",
  },
  {
    name: "TasteLog",
    description: "Personal food discovery & logging app.",
    longDescription:
      "A mobile-first app for logging meals, discovering new restaurants, and building a personal food journal. Currently in active development with Flutter frontend and a Next.js backend.",
    status: "in-progress",
    tags: ["Flutter", "Next.js", "Supabase"],
  },
  {
    name: "TasteBridge",
    description: "Food-based social connection and discovery platform.",
    longDescription:
      "A social platform connecting people through shared food tastes and restaurant recommendations. Built as a companion product to TasteLog, focusing on community and discovery features.",
    status: "in-progress",
    tags: ["Flutter", "Next.js", "PostgreSQL"],
  },
];
