import { ExternalLink, Github, Linkedin, Twitter, Instagram, Code, Briefcase, Star, ArrowUpRight, Globe, MapPin, ArrowLeft } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
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
    href: "https://www.instagram.com/m.alex_2002/", 
    label: "Instagram",
    username: "@m.alex_2002",
    color: "hover:text-pink-400",
    bgColor: "hover:bg-pink-900/30"
  },
  { 
    icon: TikTokIcon, 
    href: "https://www.tiktok.com/@alexanfromvan", 
    label: "TikTok",
    username: "@alexanfromvan",
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
    <main className="min-h-screen bg-background">
      {/* Ambient background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-4 w-96 h-96 bg-secondary/3 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/2 rounded-full blur-2xl animate-float" />
      </div>

      <div className="relative container mx-auto px-4 py-8 max-w-md">
        {/* Back to Full Site Button */}
        <div className="absolute top-4 left-4">
          <Link
            href="/"
            className="group flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground/60 hover:text-foreground transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform duration-300" />
            <span className="font-medium">Full Site</span>
          </Link>
        </div>

        {/* Header Section */}
        <header className="text-center mb-6">
          {/* Avatar with enhanced styling */}
          <div className="relative w-24 h-24 mx-auto mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70 rounded-full blur-sm opacity-50 animate-pulse" />
            <Avatar className="relative z-10 w-24 h-24 ring-2 ring-primary/20 ring-offset-4 ring-offset-background">
              <AvatarImage 
                src="/alex.webp" 
                alt="Alex Olyaiy"
                className="object-cover"
              />
              <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">AO</AvatarFallback>
            </Avatar>
          </div>
          
          {/* Enhanced header content */}
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-foreground">Alex Olyaiy</h1>
            <p className="text-muted-foreground/80 text-sm leading-relaxed max-w-xs mx-auto">
              Computer Science @ UBC • Co-founder @ High Tide Digital • I get really excited about AI
            </p>
          </div>
        </header>

        {/* Social Media Links with enhanced design */}
        <section className="mb-8">
          <div className="flex justify-center items-center gap-4">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center w-12 h-12 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/10 ${color}`}
                aria-label={label}
              >
                <Icon className="h-5 w-5 text-muted-foreground group-hover:text-current transition-colors duration-300" />
              </a>
            ))}
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="mb-12">
          <h2 className="text-sm font-semibold text-muted-foreground/60 uppercase tracking-wider mb-4 text-center">Check These Out</h2>
          <div className="space-y-4">
            {SHOWCASE_LINKS.map(({ title, description, href, icon: Icon, gradient, category, featured, metrics }) => (
              <Link
                key={title}
                href={href}
                target={href.startsWith('http') ? "_blank" : undefined}
                rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="group block"
              >
                <article className={`relative p-4 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 ${featured ? 'ring-1 ring-primary/20' : ''}`}>
                  {/* Gradient background for featured items */}
                  {featured && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-5 rounded-2xl`}></div>
                  )}
                  
                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r ${gradient} p-[1px]`}>
                          <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                            <Icon className="h-4 w-4 text-foreground" />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-sm">
                              {title}
                            </h3>
                            {featured && (
                              <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                                Featured
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-muted-foreground/60 font-medium">{category}</span>
                        </div>
                      </div>
                      {href.startsWith('http') && (
                        <ExternalLink className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary transition-colors duration-300 flex-shrink-0" />
                      )}
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground/80 leading-relaxed mb-2">
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
          <h2 className="text-sm font-semibold text-muted-foreground/60 uppercase tracking-wider mb-4 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 gap-3">
            <a
              href="mailto:emailalexan@protonmail.com"
              className="group relative p-4 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 hover:bg-primary/5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                    <span className="text-lg">✉️</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Email Me</p>
                    <p className="text-xs text-muted-foreground/70">emailalexan@protonmail.com</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary transition-colors duration-300" />
              </div>
            </a>
            
            <a
              href="/alex-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 hover:bg-primary/5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                    <span className="text-lg">📄</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Download Resume</p>
                    <p className="text-xs text-muted-foreground/70">View my experience & skills</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary transition-colors duration-300" />
              </div>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-border/20">
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground/40">
              Built with Next.js 15, TypeScript & Tailwind CSS
            </p>
            <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground/40">
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
