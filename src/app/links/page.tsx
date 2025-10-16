import { ExternalLink, Github, Linkedin, Twitter, Instagram, Code, Briefcase, Star, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

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
    href: "https://www.instagram.com/ai_with_alexan/",
    label: "Instagram",
    username: "@ai_with_alexan",
    color: "hover:text-pink-400",
    bgColor: "hover:bg-pink-900/30"
  },
  {
    icon: TikTokIcon,
    href: "https://www.tiktok.com/@alex.an595",
    label: "TikTok",
    username: "@alex.an595",
    color: "hover:text-red-400",
    bgColor: "hover:bg-red-900/30"
  },
] as const

// Enhanced showcase links with better categorization
const SHOWCASE_LINKS = [
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
      <div className="relative w-full aspect-[4/5] max-h-[85vh]">
        <div className="relative w-full h-full">
          <img
            src="/alex.webp"
            alt="Alex Olyaiy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black"></div>
        </div>

        {/* Editorial-style name overlay - positioned at bottom with magazine-style typography */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-8">
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              {/* Byline style tag */}
              <div className="inline-block">
                <span className="text-[10px] font-medium text-white/60 uppercase tracking-[0.2em] px-3 py-1 border border-white/20 rounded-full">
                  Portfolio
                </span>
              </div>
              
              {/* Large editorial headline */}
              <h1 className="text-5xl md:text-6xl font-light text-white tracking-tight leading-[0.95]">
                Alex<br/>Olyaiy
              </h1>
              
              {/* Subheading with editorial styling */}
              <div className="flex items-center gap-3 text-white/70">
                <div className="h-px w-8 bg-white/30"></div>
                <p className="text-sm font-light tracking-wide">
                  Computer Science @ UBC • Co-founder @ High Tide Digital
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section - Editorial layout with wider container */}
      <div className="relative bg-black px-6 pb-16 max-w-2xl mx-auto">

        {/* Social Media - Minimal editorial placement */}
        <section className="mb-16 pt-12">
          <div className="flex items-center justify-center border-y border-white/10 py-6">
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

        {/* Featured Work - Magazine-style layout with varied card sizes */}
        <section className="mb-20">
          {/* Section header with editorial styling */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-3">
              <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
              <h2 className="text-[10px] font-medium text-white/50 uppercase tracking-[0.3em]">
                Featured Work
              </h2>
              <div className="h-px flex-1 bg-gradient-to-l from-white/20 to-transparent"></div>
            </div>
          </div>

          <div className="space-y-8">
            {SHOWCASE_LINKS.map(({ title, description, href, icon: Icon, gradient, category, featured, metrics }, index) => (
              <Link
                key={title}
                href={href}
                target={href.startsWith('http') ? "_blank" : undefined}
                rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="group block"
              >
                <article className={`relative border-b border-white/10 pb-8 transition-all duration-500 hover:border-white/30 ${
                  featured ? 'mb-4' : ''
                }`}>
                  
                  {/* Editorial card layout */}
                  <div className="space-y-4">
                    {/* Category and icon */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <span className="text-[10px] font-medium text-white/40 uppercase tracking-[0.2em] block mb-1">
                            {category}
                          </span>
                          {featured && (
                            <span className="text-[9px] font-medium text-white/60 uppercase tracking-wider px-2 py-0.5 border border-white/20 rounded-full">
                              Editor's Pick
                            </span>
                          )}
                        </div>
                      </div>
                      {href.startsWith('http') && (
                        <ArrowUpRight className="h-5 w-5 text-white/20 group-hover:text-white/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                      )}
                    </div>
                    
                    {/* Title - Large editorial headline style */}
                    <h3 className={`font-light text-white group-hover:text-white/90 transition-colors duration-300 ${
                      featured ? 'text-3xl' : 'text-2xl'
                    } tracking-tight leading-tight`}>
                      {title}
                    </h3>
                    
                    {/* Description - Editorial body text */}
                    <p className="text-base text-white/60 leading-relaxed font-light max-w-xl">
                      {description}
                    </p>

                    {/* Metrics - Small editorial detail */}
                    {metrics && (
                      <div className="flex items-center gap-2 text-[11px] text-white/40 font-light tracking-wide">
                        <div className="h-px w-4 bg-white/20"></div>
                        <span>{metrics}</span>
                      </div>
                    )}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact Section - Editorial cards */}
        <section className="mb-16">
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-3">
              <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
              <h2 className="text-[10px] font-medium text-white/50 uppercase tracking-[0.3em]">
                Get in Touch
              </h2>
              <div className="h-px flex-1 bg-gradient-to-l from-white/20 to-transparent"></div>
            </div>
          </div>

          <div className="space-y-6">
            <a
              href="mailto:emailalexan@protonmail.com"
              className="group block border-l-2 border-white/20 pl-6 py-4 hover:border-white/60 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✉️</span>
                    <div>
                      <p className="font-light text-white text-lg">Email</p>
                      <p className="text-sm text-white/50 font-light tracking-wide">emailalexan@protonmail.com</p>
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-white/20 group-hover:text-white/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 mt-1" />
              </div>
            </a>
            
            <a
              href="/alex-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-l-2 border-white/20 pl-6 py-4 hover:border-white/60 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📄</span>
                    <div>
                      <p className="font-light text-white text-lg">Resume</p>
                      <p className="text-sm text-white/50 font-light tracking-wide">View my experience & skills</p>
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-white/20 group-hover:text-white/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 mt-1" />
              </div>
            </a>
          </div>
        </section>

        {/* Footer - Editorial colophon style */}
        <footer className="pt-12 border-t border-white/10">
          <div className="space-y-6 pb-8">
            {/* Editorial separator */}
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-white/10"></div>
              <div className="w-1 h-1 rounded-full bg-white/20"></div>
              <div className="h-px w-12 bg-white/10"></div>
            </div>
            
            <div className="text-center space-y-3">
              <p className="text-[10px] text-white/30 uppercase tracking-[0.25em] font-light">
                Built with Next.js 15, TypeScript & Tailwind CSS
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-white/40 font-light">
                <span>Crafted with</span>
                <span className="text-red-400/60">♥</span>
                <span>in Vancouver</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
