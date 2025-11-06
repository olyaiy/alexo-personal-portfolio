import { Github, Linkedin, Twitter, Instagram, Code, Briefcase, Star, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"
import Image from "next/image"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Alex Olyaiy - Links",
  description: "Connect with Alex Olyaiy - Computer Science student at UBC and co-founder of High Tide Digital. Links to my projects, social media, and professional work.",
  keywords: ["Alex Olyaiy", "links", "portfolio", "web developer", "computer science", "UBC", "High Tide Digital"],
  openGraph: {
    title: "Alex Olyaiy - Links",
    description: "Connect with Alex Olyaiy - Computer Science student at UBC and co-founder of High Tide Digital",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Olyaiy - Links",
    description: "Connect with Alex Olyaiy - Computer Science student at UBC and co-founder of High Tide Digital",
  }
}

// Custom TikTok icon component with better styling
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.341-1.849-1.341-2.849V1h-3.073v13.57c0 2.006-1.635 3.641-3.641 3.641s-3.641-1.635-3.641-3.641 1.635-3.641 3.641-3.641c.378 0 .742.058 1.083.164V7.759a7.673 7.673 0 0 0-1.083-.076c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8V8.921a9.46 9.46 0 0 0 5.126 1.5v-3.073a5.997 5.997 0 0 1-3.49-1.786z"/>
    </svg>
  )
}

// Social media data with enhanced styling
const SOCIAL_LINKS = [
  { 
    icon: Github, 
    href: "https://github.com/olyaiy", 
    label: "GitHub",
    username: "@olyaiy",
    color: "hover:text-slate-300",
    bgColor: "hover:bg-slate-900/50"
  },
  { 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/olyaiy/", 
    label: "LinkedIn",
    username: "Alex Olyaiy",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-900/30"
  },
  { 
    icon: Twitter, 
    href: "https://x.com/alexfromvan", 
    label: "Twitter",
    username: "@alexfromvan",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-900/30"
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/alex_intelligence_/",
    label: "Instagram",
    username: "@alex_intelligence_",
    color: "hover:text-pink-400",
    bgColor: "hover:bg-pink-900/30"
  },
  {
    icon: TikTokIcon,
    href: "https://www.tiktok.com/@ai_with_alexan",
    label: "TikTok",
    username: "@ai_with_alexan",
    color: "hover:text-red-400",
    bgColor: "hover:bg-red-900/30"
  },
] as const

// Enhanced showcase links with better categorization
const SHOWCASE_LINKS = [
  {
    title: "AI Educator",
    description: "Teaching AI concepts and tools to over 1.5 million monthly viewers across TikTok and Instagram",
    href: "https://www.instagram.com/alex_intelligence_/",
    icon: Star,
    gradient: "from-pink-500 to-purple-500",
    category: "Content Creation",
    featured: true,
    metrics: "1.5M+ Monthly Views"
  },
  {
    title: "High Tide Digital",
    description: "My full-stack web development agency",
    href: "https://www.hightidedigital.ca",
    icon: Briefcase,
    gradient: "from-primary to-primary/70",
    category: "Business",
    featured: true,
    metrics: "Founded 2024"
  },
  {
    title: "Agent Vendor",
    description: "I built a marketplace to discover and sell your AI agents",
    href: "https://agentvendor.ca/",
    icon: Code,
    gradient: "from-purple-500 to-indigo-500",
    category: "AI Project",
    featured: false,
    metrics: "React • Next.js"
  },
  {
    title: "ResumeLM",
    description: "Check out the AI-powered resume builder I built which landed me my internship",
    href: "https://resumelm.ca/",
    icon: Star,
    gradient: "from-emerald-500 to-teal-500",
    category: "AI Tool",
    featured: false,
    metrics: "TypeScript • AI"
  },
] as const

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section - Editorial style with larger image */}
      <div className="relative w-full aspect-[4/5] max-h-[85vh] -mt-[env(safe-area-inset-top)] pt-[env(safe-area-inset-top)]">
        <div className="relative w-full h-full">
          <Image
            src="/alex.webp"
            alt="Alex Olyaiy"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black"></div>
        </div>

        {/* Editorial-style name overlay - positioned lower with magazine-style typography */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-0 -mb-8">
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              {/* Large editorial headline */}
              <h1 className="text-5xl md:text-6xl font-light text-white tracking-tight leading-[0.95]">
                Alex<br/>Olyaiy
              </h1>
              
              {/* Subheading with editorial styling */}
              <div className="text-sm font-light tracking-wide space-y-1 text-white/70">
                <p>Computer Science @ UBC</p>
                <p>AI Educator</p>
                <p>Founder @ High Tide Digital</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section - Editorial layout with wider container */}
      <div className="relative bg-black px-6 pb-16 max-w-2xl mx-auto">

        {/* Social Media - Minimal editorial placement */}
        <section className="mb-8 pt-8">
          <div className="flex items-center justify-center  border-white/10 pt-6">
            <div className="flex items-center gap-8">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group transition-all duration-300 ${color}`}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 text-white/40 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* My Projects - Magazine-style layout with varied card sizes */}
        <section className="mb-20">
          {/* Section header with editorial styling */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-3">
              <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
              <h2 className="text-[10px] font-medium text-white/50 uppercase tracking-[0.3em]">
                My Projects
              </h2>
              <div className="h-px flex-1 bg-gradient-to-l from-white/20 to-transparent"></div>
            </div>
          </div>

          <div className="space-y-3">
            {SHOWCASE_LINKS.map(({ title, description, href, metrics }) => (
              <Link
                key={title}
                href={href}
                target={href.startsWith('http') ? "_blank" : undefined}
                rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="group block py-4 border-b border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-normal text-white mb-1 group-hover:text-white/80 transition-colors">
                      {title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed">
                      {description}
                    </p>
                    {metrics && (
                      <p className="text-xs text-white/30 mt-1.5">
                        {metrics}
                      </p>
                    )}
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/30 group-hover:text-white/50 transition-colors flex-shrink-0 mt-1" />
                </div>
              </Link>
            ))}

            <a
              href="mailto:emailalexan@protonmail.com"
              className="group block py-4 border-b border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-normal text-white mb-1 group-hover:text-white/80 transition-colors">
                    Email
                  </h3>
                  <p className="text-sm text-white/40">
                    emailalexan@protonmail.com
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/30 group-hover:text-white/50 transition-colors flex-shrink-0 mt-1" />
              </div>
            </a>

            <a
              href="/alex-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-4 border-b border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-normal text-white mb-1 group-hover:text-white/80 transition-colors">
                    Resume
                  </h3>
                  <p className="text-sm text-white/40">
                    View my experience & skills
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/30 group-hover:text-white/50 transition-colors flex-shrink-0 mt-1" />
              </div>
            </a>
          </div>
        </section>

        {/* Contact Form */}
        <div className="mt-12">
          <ContactForm />
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-white/30">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </footer>
      </div>
    </main>
  )
}
