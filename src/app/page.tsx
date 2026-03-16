import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { PERSONAL_INFO, SHOWCASE_PROJECTS } from "@/lib/data/personal-info"
import { SOCIAL_LINKS, EMAIL, RESUME_PATH } from "@/lib/data/social-links"
import { ContactForm } from "@/components/contact-form"

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.28-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  )
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  twitter: XIcon,
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <div className="mx-auto max-w-xl px-6 py-20 md:py-32">

        {/* Hero */}
        <section className="mb-14">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#f5f5f7] mb-4">
            hi 👋🏽 I&apos;m alex
          </h1>
          <p className="text-lg md:text-xl text-[#86868b] leading-relaxed">
            Engineer &amp; AI Educator.{" "}
            <span className="text-[#a1a1a6]">Building software and teaching AI to 1.5M people.</span>
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-8">
            {Object.entries(SOCIAL_LINKS).map(([key, { href, label }]) => {
              const Icon = ICON_MAP[key]
              if (!Icon) return null
              return (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-[#86868b] hover:text-[#f5f5f7] hover:bg-[#1c1c1e] transition-all duration-200"
                  aria-label={label}
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              )
            })}
          </div>
        </section>

        {/* Photos */}
        <section className="mb-16">
          <div className="flex items-end justify-center -space-x-4 -mx-6">
            {[
              { rotate: -4 },
              { rotate: -1 },
              { rotate:  2 },
              { rotate:  5 },
            ].map(({ rotate }, i) => (
              <div
                key={i}
                className="photo-card w-[30%] flex-shrink-0"
                style={{ "--rotate": `${rotate}deg` } as React.CSSProperties}
              >
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                  <Image
                    src={PERSONAL_INFO.profileImage}
                    alt={`${PERSONAL_INFO.name} photo ${i + 1}`}
                    fill
                    priority={i < 2}
                    sizes="30vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-[13px] font-medium text-[#86868b] uppercase tracking-wider mb-6">
            Projects
          </h2>

          <div className="rounded-2xl bg-[#1c1c1e] overflow-hidden divide-y divide-[#38383a]">
            {SHOWCASE_PROJECTS.map(({ title, description, href, metrics }) => (
              <Link
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 px-5 py-4 hover:bg-[#2c2c2e] transition-colors duration-150"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] font-medium text-[#f5f5f7] group-hover:text-white transition-colors duration-150">
                    {title}
                  </h3>
                  <p className="text-[13px] text-[#86868b] mt-0.5 leading-relaxed">
                    {description}
                  </p>
                  {metrics && (
                    <p className="text-[12px] text-[#48484a] mt-1">
                      {metrics}
                    </p>
                  )}
                </div>
                <ArrowUpRight className="h-4 w-4 text-[#48484a] group-hover:text-[#86868b] transition-colors duration-150 flex-shrink-0" />
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-16">
          <h2 className="text-[13px] font-medium text-[#86868b] uppercase tracking-wider mb-6">
            Connect
          </h2>

          <div className="rounded-2xl bg-[#1c1c1e] overflow-hidden divide-y divide-[#38383a]">
            {/* Email */}
            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-center justify-between gap-4 px-5 py-4 hover:bg-[#2c2c2e] transition-colors duration-150"
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-[15px] font-medium text-[#f5f5f7]">
                  Email
                </h3>
                <p className="text-[13px] text-[#86868b] mt-0.5">{EMAIL}</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-[#48484a] group-hover:text-[#86868b] transition-colors duration-150 flex-shrink-0" />
            </a>

            {/* Resume */}
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 px-5 py-4 hover:bg-[#2c2c2e] transition-colors duration-150"
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-[15px] font-medium text-[#f5f5f7]">
                  Resume
                </h3>
                <p className="text-[13px] text-[#86868b] mt-0.5">View my experience &amp; skills</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-[#48484a] group-hover:text-[#86868b] transition-colors duration-150 flex-shrink-0" />
            </a>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-16">
          <h2 className="text-[13px] font-medium text-[#86868b] uppercase tracking-wider mb-6">
            Send a message
          </h2>

          <div className="rounded-2xl bg-[#1c1c1e] p-5">
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pb-8">
          <p className="text-[12px] text-[#48484a]">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}
          </p>
        </footer>

      </div>
    </main>
  )
}
