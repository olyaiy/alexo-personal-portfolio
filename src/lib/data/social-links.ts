// Social media links configuration
export interface SocialLink {
  href: string
  label: string
  username: string
}

export const SOCIAL_LINKS: Record<string, SocialLink> = {
  github: {
    href: "https://github.com/olyaiy",
    label: "GitHub",
    username: "@olyaiy"
  },
  linkedin: {
    href: "https://www.linkedin.com/in/olyaiy/",
    label: "LinkedIn",
    username: "olyaiy"
  },
  twitter: {
    href: "https://x.com/alexfromvan",
    label: "Twitter",
    username: "@alexfromvan"
  },
  instagram: {
    href: "https://www.instagram.com/alex_intelligence_/",
    label: "Instagram",
    username: "@alex_intelligence_ (21.3k+)"
  },
  tiktok: {
    href: "https://www.tiktok.com/@alex_intelligence",
    label: "TikTok",
    username: "@alex_intelligence (21.3k+)"
  }
} as const

export const EMAIL = "hi@alexo.ca"
export const RESUME_PATH = "/alex-resume.pdf"
