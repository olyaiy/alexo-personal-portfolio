export interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    description: string[];
    tags: string[];
    type: 'experience' | 'project';
    link?: string;
    image?: string;
    badge?: string;
  }
  
  export const filterCategories = [
    "All",
    "Work Experience",
    "Personal Projects",
    "Full Stack",
    "Frontend",
    "Large Language Models",
    "Machine Learning",
    "Next.js",
    "AWS",
    "REST APIs",
    "React",
    "Data Analysis",
    "Javascript",
    "Python",
    "Authentication",
    "Supabase",
    "PostgreSQL"
  ] as const;