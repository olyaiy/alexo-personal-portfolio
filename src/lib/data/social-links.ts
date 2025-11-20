// Social media links configuration
export interface SocialLink {
  href: string
  label: string
}

export const SOCIAL_LINKS: Record<string, SocialLink> = {
  github: {
    href: "https://github.com/olyaiy",
    label: "GitHub"
  },
  linkedin: {
    href: "https://www.linkedin.com/in/olyaiy/",
    label: "LinkedIn"
  },
  twitter: {
    href: "https://x.com/alexfromvan",
    label: "Twitter"
  },
  instagram: {
    href: "https://www.instagram.com/alex_intelligence_/",
    label: "Instagram"
  },
  tiktok: {
    href: "https://www.tiktok.com/@ai_with_alexan",
    label: "TikTok"
  }
} as const

export const EMAIL = "hi@alexo.ca"
export const RESUME_PATH = "/alex-resume.pdf"
