import { ExternalLink, Github, Linkedin, Twitter, Instagram, Code, Briefcase } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"

// Custom TikTok icon component
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

// Social media data - using the same icons pattern from hero
const SOCIAL_LINKS = [
  { 
    icon: Github, 
    href: "https://github.com/olyaiy", 
    label: "GitHub",
    color: "hover:text-gray-400"
  },
  { 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/olyaiy/", 
    label: "LinkedIn",
    color: "hover:text-blue-400"
  },
  { 
    icon: Twitter, 
    href: "https://x.com/alexfromvan", 
    label: "Twitter",
    color: "hover:text-blue-400"
  },
  { 
    icon: Instagram, 
    href: "https://www.instagram.com/m.alex_2002/", 
    label: "Instagram",
    color: "hover:text-pink-400"
  },
  { 
    icon: TikTokIcon, 
    href: "https://www.tiktok.com/@alexanfromvan", 
    label: "TikTok",
    color: "hover:text-red-400"
  },
] as const

// Showcase links data
const SHOWCASE_LINKS = [
  {
    title: "High Tide Digital",
    description: "Full-stack web development agency",
    href: "https://www.hightidedigital.ca",
    icon: Briefcase,
    gradient: "from-blue-500 to-cyan-500",
    featured: true
  },
  {
    title: "Agent Vendor",
    description: "Marketplace to discover AI agents and get paid to make your own",
    href: "https://agentvendor.ca/",
    icon: Code,
    gradient: "from-purple-500 to-indigo-500",
    featured: false
  },
  {
    title: "ResumeLM",
    description: "AI resume builder that gets tech jobs",
    href: "https://resumelm.ca/",
    icon: Briefcase,
    gradient: "from-emerald-500 to-teal-500",
    featured: false
  },
] as const

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-lg">
        {/* Avatar Section */}
        <div className="text-center mb-8">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <Avatar className="relative z-10 w-24 h-24">
              <AvatarImage 
                src="/alex.webp" 
                alt="Alex Olyaiy"
                className="object-cover"
              />
              <AvatarFallback>AO</AvatarFallback>
            </Avatar>
          </div>
          
          <p className="text-muted-foreground/80 text-sm leading-relaxed">
            Check out my links!
          </p>
        </div>

        {/* Social Media Links Row */}
        <div className="flex justify-center items-center gap-6 mb-8">
          {SOCIAL_LINKS.map(({ icon: Icon, href, label, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-center w-12 h-12 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 ${color}`}
              aria-label={label}
            >
              <Icon className="h-5 w-5 text-muted-foreground group-hover:text-current transition-colors duration-300" />
            </a>
          ))}
        </div>

        {/* Showcase Links Column */}
        <div className="space-y-4">
          {SHOWCASE_LINKS.map(({ title, description, href, icon: Icon, gradient, featured }) => (
            <Link
              key={title}
              href={href}
              target={href.startsWith('http') ? "_blank" : undefined}
              rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
              className="group"
            >
              <div className={`relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 ${featured ? 'ring-1 ring-primary/20' : ''}`}>
                {/* Gradient background for featured items */}
                {featured && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-5 rounded-2xl`}></div>
                )}
                
                <div className="relative flex items-center gap-4">
                  {/* Icon */}
                  <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${gradient} p-[1px]`}>
                    <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                      <Icon className="h-5 w-5 text-foreground" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {title}
                      </h3>
                      {featured && (
                        <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {description}
                    </p>
                  </div>
                  
                  {/* External link icon */}
                  {href.startsWith('http') && (
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300 flex-shrink-0" />
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-border/50">
          <p className="text-xs text-muted-foreground/60">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </main>
  )
}
