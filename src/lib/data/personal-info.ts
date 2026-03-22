// Personal information and bio data
export const PERSONAL_INFO = {
  name: "Alex Olyaiy",
  titles: [
    "Full Stack Developer",
    "Content Creator",
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
    description: "Breaking down AI tools, models, and workflows for 1.5M+ monthly viewers on TikTok and Instagram.",
    href: "https://www.tiktok.com/@alex_intelligence",
    category: "Content Creation",
    metrics: "Partnered with Cursor, Replit, Kimi AI",
    partners: ["Cursor", "Replit", "Kimi AI", "TestSprite", "Vibe Code"],
    featured: true
  },
  {
    title: "ResumeLM",
    description: "Check out the AI-powered resume builder I built which landed me my internship",
    href: "https://resumelm.ca/",
    category: "AI Tool",
    metrics: "TypeScript • AI",
    partners: [],
    featured: false
  }
] as const
