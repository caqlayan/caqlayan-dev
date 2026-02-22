export const person = {
  name: "Arda Caglayan Ercan",
  title: "Next.js & Mobile App Developer",
  tagline: "Building web apps and mobile products that people actually use.",
  bio: "I'm a full-stack engineer specializing in Next.js web apps and Flutter mobile apps. I've built and shipped apps downloaded by 110,000+ people, and I bring that same indie founder energy to every freelance project. Currently freelancing and building my own products — one feature at a time.",
  github: "https://github.com/caqlayan",
  upwork: "https://www.upwork.com/freelancers/caqlayan",
  email: "hello@caqlayan.dev",
};

export const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Flutter",
  "Dart",
  "Node.js",
  "NestJS",
  "Express",
  "REST APIs",
  "PostgreSQL",
  "Firebase",
  "Supabase",
  "Git",
  "Vercel",
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
    name: "TasteeBridge",
    description: "Food-based social connection and discovery platform.",
    longDescription:
      "A social platform connecting people through shared food tastes and restaurant recommendations. Built as a companion product to TasteLog, focusing on community and discovery features.",
    status: "in-progress",
    tags: ["Flutter", "Next.js", "PostgreSQL"],
  },
];
