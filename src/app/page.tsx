import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { PERSONAL_INFO, SHOWCASE_PROJECTS } from "@/lib/data/personal-info"
import { EMAIL, RESUME_PATH } from "@/lib/data/social-links"
import { ContactForm } from "@/components/contact-form"
import { SocialIcons } from "@/components/social-icons"



const PARTNER_LOGOS: Record<string, React.ReactNode> = {
  "Cursor": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-[#636366]">
      <path d="M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23" />
    </svg>
  ),
  "Replit": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-[#636366]">
      <path d="M2 1.5A1.5 1.5 0 0 1 3.5 0h7A1.5 1.5 0 0 1 12 1.5V8H3.5A1.5 1.5 0 0 1 2 6.5ZM12 8h8.5A1.5 1.5 0 0 1 22 9.5v5a1.5 1.5 0 0 1-1.5 1.5H12ZM2 17.5A1.5 1.5 0 0 1 3.5 16H12v6.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 2 22.5Z" />
    </svg>
  ),
  "Kimi AI": (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="https://statics.moonshot.cn/kimi-web-seo/favicon.ico"
      alt="Kimi AI"
      width={16}
      height={16}
      className="h-4 w-4 rounded-sm opacity-70"
    />
  ),
  "TestSprite": (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="https://www.testsprite.com/image/favicon-dark.png"
      alt="TestSprite"
      width={16}
      height={16}
      className="h-4 w-4 rounded-sm opacity-70"
    />
  ),
  "Vibe Code": (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="https://pub-67eda34f2fee48b4bf83b0147e740c6b.r2.dev/vibe-icon-transparent.png"
      alt="Vibe Code"
      width={16}
      height={16}
      className="h-4 w-4 rounded-sm opacity-70"
    />
  ),
}

function PartnerLogo({ name }: { name: string }) {
  const logo = PARTNER_LOGOS[name]
  return (
    <span className="flex items-center gap-1.5">
      {logo}
      <span className="text-[13px] text-[#636366]">{name}</span>
    </span>
  )
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
            Software Engineer. Content Creator. AI Educator.
          </p>
          <p className="text-base text-[#48484a] mt-2">
            Building software and teaching AI to 1.5M people.
          </p>

          <SocialIcons />
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
        <section className="mb-20">
          <h2 className="text-[13px] font-medium text-[#86868b] uppercase tracking-wider mb-8">
            Projects
          </h2>

          <div>
            {SHOWCASE_PROJECTS.map(({ title, description, href, metrics, partners, featured }) => (
              <Link
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between gap-4 border-b border-[#222] transition-colors duration-150 ${
                  featured ? "py-6" : "py-5"
                }`}
              >
                <div className="flex-1 min-w-0">
                  <h3 className={`font-medium text-[#f5f5f7] ${
                    featured ? "text-[19px]" : "text-[15px]"
                  }`}>
                    {title}
                  </h3>
                  <p className={`text-[#86868b] leading-relaxed ${
                    featured ? "text-[14px] mt-1.5" : "text-[13px] mt-1"
                  }`}>
                    {description}
                  </p>
                  {partners && partners.length > 0 && (
                    <div className="mt-4">
                      <p className="text-[10px] text-[#3a3a3c] uppercase tracking-widest mb-2">
                        Brands I&apos;ve worked with
                      </p>
                      <div className="flex items-center gap-4">
                        {partners.map((partner) => (
                          <PartnerLogo key={partner} name={partner} />
                        ))}
                      </div>
                    </div>
                  )}
                  {(!partners || partners.length === 0) && metrics && (
                    <p className={`text-[#48484a] ${
                      featured ? "text-[13px] mt-2" : "text-[12px] mt-1.5"
                    }`}>
                      {metrics}
                    </p>
                  )}
                </div>
                <ChevronRight className="h-4 w-4 text-[#48484a] flex-shrink-0" />
              </Link>
            ))}
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-3 mt-8">
            <a
              href={`mailto:${EMAIL}`}
              className="text-[13px] text-[#86868b] hover:text-[#f5f5f7] transition-colors duration-150"
            >
              {EMAIL}
            </a>
            <span className="text-[#38383a]">/</span>
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-[#86868b] hover:text-[#f5f5f7] transition-colors duration-150"
            >
              Resume
            </a>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-20">
          <h2 className="text-[13px] font-medium text-[#86868b] uppercase tracking-wider mb-8">
            Send a message
          </h2>

          <ContactForm />
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
