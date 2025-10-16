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
      {/* Hero Section - Large square image that blends into black background */}
      <div className="relative w-full aspect-square max-h-[100vh]">
        {/* Hero Image with gradient fade to black */}
        <div className="relative w-full h-full">
          <img
            src="/alex.webp"
            alt="Alex Olyaiy"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay that fades to black at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
        </div>

        {/* Name and title overlay at the bottom of the image */}
        <div className="absolute -bottom-16 left-0 right-0 z-10 p-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-white">Alex Olyaiy</h1>
            <p className="text-white/80 text-sm leading-relaxed max-w-xs mx-auto">
              Computer Science @ UBC • Co-founder @ High Tide Digital
            </p>
          </div>
        </div>
      </div>

      {/* Content Section - Black background */}
      <div className="relative bg-black px-4 pb-8 max-w-md mx-auto">

        {/* Social Media Links with enhanced design */}
        <section className="mb-8 pt-20">
          <div className="flex justify-center items-center gap-6">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group transition-all duration-300 hover:scale-110 ${color}`}
                aria-label={label}
              >
                <Icon className="h-6 w-6 text-white/60 group-hover:text-white transition-colors duration-300" />
              </a>
            ))}
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="mb-12">
          <h2 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-4 text-center">Check These Out</h2>
          <div className="space-y-3">
            {SHOWCASE_LINKS.map(({ title, description, href, icon: Icon, gradient, category, featured, metrics }) => (
              <Link
                key={title}
                href={href}
                target={href.startsWith('http') ? "_blank" : undefined}
                rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="group block"
              >
                <article className={`relative p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-white/5 hover:border-white/20 ${featured ? 'ring-1 ring-white/20' : ''}`}>
                  {/* Gradient background for featured items */}
                  {featured && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-5 rounded-2xl`}></div>
                  )}
                  
                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r ${gradient} p-[1px]`}>
                          <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
                            <Icon className="h-4 w-4 text-white" />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <h3 className="font-semibold text-white group-hover:text-white/90 transition-colors duration-300 text-sm">
                              {title}
                            </h3>
                            {featured && (
                              <span className="px-2 py-0.5 text-xs font-medium bg-white/10 text-white/90 rounded-full">
                                Featured
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-white/40 font-medium">{category}</span>
                        </div>
                      </div>
                      {href.startsWith('http') && (
                        <ExternalLink className="h-4 w-4 text-white/30 group-hover:text-white/60 transition-colors duration-300 flex-shrink-0" />
                      )}
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm text-white/60 leading-relaxed mb-2">
                      {description}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-12">
          <h2 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-4 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 gap-3">
            <a
              href="mailto:emailalexan@protonmail.com"
              className="group relative p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-white/5 hover:border-white/20"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10">
                    <span className="text-lg">✉️</span>
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">Email Me</p>
                    <p className="text-xs text-white/50">emailalexan@protonmail.com</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/30 group-hover:text-white/60 transition-colors duration-300" />
              </div>
            </a>
            
            <a
              href="/alex-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-white/5 hover:border-white/20"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10">
                    <span className="text-lg">📄</span>
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">Download Resume</p>
                    <p className="text-xs text-white/50">View my experience & skills</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/30 group-hover:text-white/60 transition-colors duration-300" />
              </div>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-white/10">
          <div className="space-y-2 pb-4">
            <p className="text-xs text-white/30">
              Built with Next.js 15, TypeScript & Tailwind CSS
            </p>
            <div className="flex items-center justify-center gap-1 text-xs text-white/30">
              <span>Made with</span>
              <span className="text-red-400 animate-pulse">♥</span>
              <span>in Vancouver</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
