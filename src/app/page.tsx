import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { PERSONAL_INFO, SHOWCASE_PROJECTS } from "@/lib/data/personal-info"
import { EMAIL, RESUME_PATH } from "@/lib/data/social-links"
import { ContactForm } from "@/components/contact-form"
import { SocialIcons } from "@/components/social-icons"

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
