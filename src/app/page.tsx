"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Code2, Video, GraduationCap, ExternalLink } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const PARTNER_LOGOS = [
  { name: "Cursor", url: "https://cursor.com" },
  { name: "Replit", url: "https://replit.com" },
  { name: "Kimi AI", url: "https://kimi.moonshot.cn" },
  { name: "Cognition", url: "https://cognition.ai" },
  { name: "Perplexity", url: "https://perplexity.ai" },
  { name: "TestSprite", url: "https://testsprite.com" },
  { name: "Vibe Code", url: "https://vibecode.agency" },
];

const SOCIAL_LINKS = [
  { name: "GitHub", handle: "@olyaiy", href: "https://github.com/olyaiy" },
  { name: "LinkedIn", handle: "olyaiy", href: "https://linkedin.com/in/olyaiy" },
  { name: "Twitter", handle: "@alexfromvan", href: "https://x.com/alexfromvan" },
  { name: "Instagram", handle: "@alex_intelligence_", href: "https://instagram.com/alex_intelligence_" },
  { name: "TikTok", handle: "@alex_intelligence", href: "https://tiktok.com/@alex_intelligence" },
];

const SERVICES = [
  {
    icon: Code2,
    title: "Engineering Consulting",
    description:
      "Software engineering for AI and tech startups. React, TypeScript, mobile development, and full-stack solutions.",
  },
  {
    icon: Video,
    title: "Content & Creator Partnerships",
    description:
      "Sponsored content and brand partnerships for AI and tech companies. 1.5M+ monthly viewers across platforms.",
  },
  {
    icon: GraduationCap,
    title: "AI Education",
    description:
      "Breaking down AI tools, models, and workflows for a broad audience on TikTok and Instagram.",
  },
];

export default function Home() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="mb-6">
            <span className="text-[13px] text-[#86868b] uppercase tracking-[0.15em] font-medium">
              Software Engineering & AI Consulting
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-[#f5f5f7] mb-6"
          >
            Alex Intelligence
            <span className="text-[#86868b]">.</span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-lg md:text-xl text-[#86868b] max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            Software Engineering, Content Creation, and AI Consulting
          </motion.p>

          <motion.p
            variants={fadeIn}
            className="text-base text-[#636366] max-w-xl mx-auto mb-10"
          >
            Led by Alex Olyaiy, software engineer and AI educator based in Vancouver.
          </motion.p>

          <motion.div variants={fadeIn}>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#f5f5f7] text-black text-[15px] font-medium rounded-full hover:bg-[#e8e8ed] transition-colors duration-200"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="mt-8"
          >
            <a
              href="mailto:hi@alexo.ca"
              className="text-[13px] text-[#636366] hover:text-[#86868b] transition-colors inline-flex items-center gap-2"
            >
              <Mail className="h-3.5 w-3.5" />
              hi@alexo.ca
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div
            className="w-6 h-10 border border-[#333] rounded-full flex justify-center pt-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-1 h-1.5 bg-[#86868b] rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* What I Do Section */}
      <section className="py-24 md:py-32 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <span className="text-[13px] text-[#636366] uppercase tracking-[0.15em] font-medium">
              Services
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#f5f5f7] mt-3">
              What I Do
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl hover:border-[#2a2a2a] transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#111] border border-[#222] flex items-center justify-center mb-6 group-hover:border-[#333] transition-colors duration-300">
                  <service.icon className="h-5 w-5 text-[#86868b]" />
                </div>
                <h3 className="text-xl font-medium text-[#f5f5f7] mb-3">
                  {service.title}
                </h3>
                <p className="text-[15px] text-[#86868b] leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-[13px] text-[#636366] uppercase tracking-[0.15em] font-medium">
              Trusted By
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
          >
            {PARTNER_LOGOS.map((brand) => (
              <a
                key={brand.name}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#636366] hover:text-[#86868b] transition-colors duration-200 text-[15px] font-medium"
              >
                {brand.name}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 md:py-32 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <span className="text-[13px] text-[#636366] uppercase tracking-[0.15em] font-medium">
              Featured Work
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#f5f5f7] mt-3">
              Projects
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href="https://resumelm.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 md:p-10 bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl hover:border-[#2a2a2a] transition-colors duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#f5f5f7] mb-2 group-hover:text-white transition-colors">
                    ResumeLM
                  </h3>
                  <p className="text-[15px] text-[#636366]">
                    TypeScript / AI
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#111] border border-[#222] flex items-center justify-center group-hover:border-[#333] transition-colors duration-300">
                  <ExternalLink className="h-4 w-4 text-[#86868b]" />
                </div>
              </div>
              <p className="text-[15px] text-[#86868b] leading-relaxed max-w-2xl">
                An AI-powered resume builder that helps job seekers create optimized, professional resumes. Built with TypeScript and modern AI technologies to deliver personalized resume suggestions and formatting.
              </p>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[13px] text-[#636366] uppercase tracking-[0.15em] font-medium">
                Connect
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#f5f5f7] mt-3 mb-6">
                Get in Touch
              </h2>
              <p className="text-[15px] text-[#86868b] leading-relaxed mb-10">
                Interested in working together? Have a question about AI, engineering, or content partnerships? Drop me a line.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:hi@alexo.ca"
                  className="flex items-center gap-3 text-[15px] text-[#86868b] hover:text-[#f5f5f7] transition-colors duration-200"
                >
                  <Mail className="h-4 w-4" />
                  hi@alexo.ca
                </a>

                <div className="pt-6 border-t border-[#1a1a1a]">
                  <p className="text-[13px] text-[#636366] uppercase tracking-[0.15em] font-medium mb-4">
                    Social
                  </p>
                  <div className="space-y-3">
                    {SOCIAL_LINKS.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between text-[15px] text-[#86868b] hover:text-[#f5f5f7] transition-colors duration-200 group"
                      >
                        <span>{link.name}</span>
                        <span className="text-[#636366] group-hover:text-[#86868b]">
                          {link.handle}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-8"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-[15px] font-medium text-[#f5f5f7]">
                Alex Intelligence Inc.
              </span>
              <span className="text-[13px] text-[#636366]">
                &copy; 2026
              </span>
            </div>

            <div className="flex items-center gap-6">
              {SOCIAL_LINKS.slice(0, 3).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-[#636366] hover:text-[#86868b] transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
