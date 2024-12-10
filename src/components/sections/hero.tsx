import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterIcon, ExternalLinkIcon } from "lucide-react"
import Link from "next/link"
import RetroGrid from "@/components/ui/retro-grid"
import { AnimatedAvailabilityBadge } from "./hero/animated-availability-badge"
import { AnimatedHeroImage } from "./hero/animated-hero-image"

const SOCIAL_LINKS = [
  { icon: GithubIcon, href: "https://github.com/olyaiy", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/olyaiy/", label: "LinkedIn" },
  { icon: TwitterIcon, href: "https://x.com/alexfromva", label: "Twitter" },
  { icon: InstagramIcon, href: "https://www.instagram.com/m.alex_2002/", label: "Instagram" },
] as const

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      <div className="absolute inset-0 min-h-screen">
        <RetroGrid className="opacity-40" angle={290} />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-12 sm:px-6 lg:px-8 flex items-center min-h-[calc(100vh-4rem)]">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <AnimatedAvailabilityBadge />
                <Link 
                  href="https://www.hightidedigital.ca"
                  className="inline-flex items-center px-6 py-2.5 bg-[#011025] text-[#60A5FA] rounded-full text-sm font-semibold transition-transform duration-300 hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLinkIcon className="mr-2 h-4 w-4" />
                  High Tide Digital
                </Link>
              </div>
              
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                <span className="block bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text leading-tight">
                  Alex Olyaiy
                </span>
                <div className="flex flex-wrap items-center gap-3 text-xl mt-4 text-gradient">
                  {["Full Stack Developer", "Agency Owner", "AI/ML Enthusiast"].map((text, index) => (
                    <span key={index} className="flex items-center">
                      {index > 0 && <span className="mr-3 text-muted-foreground/30">•</span>}
                      <span className="text-muted-foreground/90 hover:text-primary transition-colors duration-300">
                        {text}
                      </span>
                    </span>
                  ))}
                </div>
              </h1>
              
              <p className="text-xl text-muted-foreground/80 leading-relaxed max-w-xl">
                Computer Science student at UBC and co-founder of High Tide Digital. 
                Building modern web experiences with cutting-edge technologies.
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="#projects">
                <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300">
                  View Projects
                </Button>
              </Link>
              <Link href="#contact">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="w-full sm:w-auto hover:bg-secondary/90 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-4">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 p-2 hover:bg-primary/10 rounded-full transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <AnimatedHeroImage />
        </div>
      </div>
    </section>
  )
} 