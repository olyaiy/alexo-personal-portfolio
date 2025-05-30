import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import RetroGrid from "@/components/ui/retro-grid"
import { AnimatedAvailabilityBadge } from "./hero/animated-availability-badge"
import { AnimatedHeroImage } from "./hero/animated-hero-image"

// Add this custom GitHub icon component
function GitHubFilledIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

function LinkedInFilledIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  )
}

function InstagramFilledIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

function TwitterFilledIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
    </svg>
  )
}

function TikTokFilledIcon({ className }: { className?: string }) {
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

export const SOCIAL_LINKS = [
  { icon: GitHubFilledIcon, href: "https://github.com/olyaiy", label: "GitHub" },
  { icon: LinkedInFilledIcon, href: "https://www.linkedin.com/in/olyaiy/", label: "LinkedIn" },
  { icon: TwitterFilledIcon, href: "https://x.com/alexfromvan", label: "Twitter" },
  { icon: InstagramFilledIcon, href: "https://www.instagram.com/m.alex_2002/", label: "Instagram" },
  { icon: TikTokFilledIcon, href: "https://www.tiktok.com/@alexanfromvan", label: "TikTok" },
] as const

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      <div className="absolute inset-0 min-h-screen">
        <RetroGrid className="opacity-40" angle={290} />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-6 sm:py-8 lg:py-12 sm:px-6 lg:px-8 flex items-center min-h-[calc(100vh-4rem)]">
        <div className="grid gap-6 sm:gap-8 lg:gap-16 lg:grid-cols-2 items-center w-full">
          {/* Left Content - centered on mobile */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              {/* Top badges - more compact on mobile */}
              <div className="flex flex-row items-center justify-center lg:justify-start gap-2 sm:gap-3 lg:gap-4 flex-wrap order-2 sm:order-first mb-3 sm:mb-4">
                <AnimatedAvailabilityBadge />
                <Link 
                  href="https://www.hightidedigital.ca"
                  className="inline-flex items-center px-2.5 py-1.5 sm:px-3 sm:py-2 lg:px-6 lg:py-2.5 bg-[#011025] text-[#60A5FA] rounded-full text-xs sm:text-sm font-semibold transition-transform duration-300 hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-1 sm:mr-1.5 lg:mr-2 h-3 w-3 sm:h-3 sm:w-3 lg:h-4 lg:w-4" />
                  <span className="hidden sm:inline">High Tide Digital</span>
                  <span className="sm:hidden">HTD</span>
                </Link>
              </div>
              
              {/* Heading - more compact on mobile */}
              <div className="order-1 sm:order-none">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold tracking-tight">
                  <span className="block bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text leading-tight">
                    Alex Olyaiy
                  </span>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center lg:justify-start items-center gap-1 sm:gap-2 lg:gap-3 text-xs sm:text-sm lg:text-lg xl:text-xl mt-2 sm:mt-3 lg:mt-4 text-gradient font-normal">
                    {["Full Stack Developer", "Agency Owner", "AI/ML Enthusiast"].map((text, index) => (
                      <span key={index} className="flex items-center whitespace-nowrap">
                        {index > 0 && <span className="hidden sm:inline mx-1 lg:mx-2 text-muted-foreground/30">•</span>}
                        <span className="text-white hover:text-primary transition-colors duration-300 font-bold">
                          {text}
                        </span>
                      </span>
                    ))}
                  </div>
                </h1>
              </div>
              
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground/80 leading-relaxed max-w-sm sm:max-w-md lg:max-w-xl mx-auto lg:mx-0">
                Computer Science student at UBC and co-founder of High Tide Digital. 
                Building modern web experiences with cutting-edge technologies.
              </p>
            </div>
            
            {/* Buttons - responsive sizing */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-5">
              <Link href="#projects" className="w-full sm:w-auto">
                <Button size="default" className="w-full sm:w-auto shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300">
                  View Projects
                </Button>
              </Link>
              <a href="mailto:emailalexan@protonmail.com" className="w-full sm:w-auto">
                <Button 
                  size="default" 
                  variant="secondary"
                  className="w-full sm:w-auto hover:bg-secondary/90 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Get in Touch
                </Button>
              </a>
            </div>

            {/* Social Links - more compact on mobile */}
            <div className="flex flex-row flex-wrap justify-center lg:justify-start items-center gap-1 sm:gap-2 lg:gap-4">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1 sm:gap-1.5 lg:gap-2 p-1 sm:p-1.5 lg:p-2 rounded-full transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-muted-foreground group-hover:text-primary group-hover:drop-shadow-[0_0_6px_rgba(var(--primary),0.4)] transition-all duration-300" />
                  <span className="text-xs lg:text-sm text-muted-foreground group-hover:text-primary transition-colors hidden sm:inline">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - better aspect ratio on mobile */}
          <div className="order-first lg:order-last w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-square max-w-sm sm:max-w-md lg:max-w-none mx-auto">
            <AnimatedHeroImage />
          </div>
        </div>
      </div>
    </section>
  )
} 