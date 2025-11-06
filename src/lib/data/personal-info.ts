// Personal information and bio data
export const PERSONAL_INFO = {
  name: "Alex Olyaiy",
  titles: [
    "Full Stack Developer",
    "Agency Owner",
    "AI/ML Enthusiast"
  ],
  bio: "Computer Science student at UBC and co-founder of High Tide Digital. Building modern web experiences with cutting-edge technologies.",
  school: "UBC",
  company: "High Tide Digital",
  companyUrl: "https://www.hightidedigital.ca",
  location: "Vancouver, BC",
  profileImage: "/alex.webp"
} as const

export const SHOWCASE_PROJECTS = [
  {
    title: "AI Educator",
    description: "Teaching AI concepts and tools to over 1.5 million monthly viewers across TikTok and Instagram",
    href: "https://www.tiktok.com/@ai_with_alexan",
    category: "Content Creation",
    metrics: "1.5M+ Monthly Views",
    featured: true
  },
  {
    title: "High Tide Digital",
    description: "My full-stack web development agency",
    href: "https://www.hightidedigital.ca",
    category: "Business",
    metrics: "Founded 2024",
    featured: true
  },
  {
    title: "Agent Vendor",
    description: "I built a marketplace to discover and sell your AI agents",
    href: "https://agentvendor.ca/",
    category: "AI Project",
    metrics: "React • Next.js",
    featured: false
  },
  {
    title: "ResumeLM",
    description: "Check out the AI-powered resume builder I built which landed me my internship",
    href: "https://resumelm.ca/",
    category: "AI Tool",
    metrics: "TypeScript • AI",
    featured: false
  }
] as const
