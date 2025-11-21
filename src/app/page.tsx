"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO, SHOWCASE_PROJECTS } from "@/lib/data/personal-info";
import { ProjectCard } from "@/components/project-card";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,100,0,0.05),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24">
        {/* Header / Nav */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-between items-center mb-24 md:mb-32"
        >
          <div className="text-xl font-bold tracking-tighter">
            ALEX<span className="text-primary">.</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <Link href="#about" className="hover:text-primary transition-colors">ABOUT</Link>
            <Link href="#work" className="hover:text-primary transition-colors">WORK</Link>
            <Link href="#contact" className="hover:text-primary transition-colors">CONTACT</Link>
          </nav>
          <Link
            href="mailto:hello@alexolyaiy.com"
            className="md:hidden p-2 hover:bg-secondary rounded-full transition-colors"
          >
            <Mail className="w-5 h-5" />
          </Link>
        </motion.header>

        {/* Hero Section */}
        {/* Hero Section - Bento Grid */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-32 md:mb-48"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {/* Name Card - Top Left */}
            <motion.div
              variants={item}
              className="col-span-1 md:col-span-8 bg-secondary/20 rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[300px] md:min-h-[400px] border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Available for work</span>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">
                  ALEX <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">OLYAIY</span>
                </h1>
              </div>

              <div className="relative z-10 max-w-md mt-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Building digital products & sharing the journey.
                  Co-founder of <span className="text-foreground font-medium">High Tide Digital</span>.
                </p>
              </div>
            </motion.div>

            {/* Image Card - Right Column */}
            <motion.div
              variants={item}
              className="col-span-1 md:col-span-4 md:row-span-2 bg-secondary/20 rounded-3xl relative overflow-hidden min-h-[400px] md:min-h-full border border-white/5 group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />

              {/* Placeholder for Image */}
              <div className="absolute inset-0 bg-secondary/50 flex items-center justify-center">
                <div className="text-center space-y-2 opacity-50">
                  <div className="w-16 h-16 border-2 border-dashed border-foreground/20 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl">📸</span>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-widest">Your Image Here</p>
                </div>
              </div>

              {/* Floating Label */}
              <div className="absolute bottom-6 left-6 z-20">
                <div className="bg-background/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <span className="font-mono text-xs font-bold">VANCOUVER, BC</span>
                </div>
              </div>
            </motion.div>

            {/* Stats/Bio Card - Bottom Left */}
            <motion.div
              variants={item}
              className="col-span-1 md:col-span-5 bg-secondary/20 rounded-3xl p-8 border border-white/5 flex flex-col justify-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex justify-between items-end">
                <div className="space-y-1">
                  <span className="text-4xl md:text-5xl font-bold tabular-nums">1.5M+</span>
                  <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Monthly Views</p>
                </div>
                <div className="flex gap-2">
                  <Link href="https://tiktok.com" target="_blank" className="p-3 bg-background/50 rounded-full hover:bg-background hover:text-primary transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Action Card - Bottom Center */}
            <motion.div
              variants={item}
              className="col-span-1 md:col-span-3"
            >
              <Link
                href="#work"
                className="block h-full bg-primary text-primary-foreground rounded-3xl p-8 flex flex-col justify-between group hover:bg-primary/90 transition-colors relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                  <ArrowUpRight className="w-8 h-8" />
                </div>
                <div className="mt-auto">
                  <span className="font-mono text-xs uppercase tracking-widest opacity-80">Portfolio</span>
                  <p className="text-2xl font-bold">View Work</p>
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* About / Stack */}
        <section id="about" className="mb-32 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-bold mb-6 sticky top-24">ABOUT ME</h2>
          </div>
          <div className="md:col-span-8 space-y-12">
            <div className="prose prose-invert prose-lg">
              <p className="text-2xl md:text-3xl leading-relaxed font-light text-muted-foreground">
                I'm a <span className="text-foreground font-medium">Full Stack Developer</span> and <span className="text-foreground font-medium">Content Creator</span> based in Vancouver.
                I combine technical expertise with creative storytelling to build digital products that stand out.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-border">
              <div className="space-y-4">
                <h4 className="font-mono text-sm text-primary uppercase tracking-wider">Education</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>{PERSONAL_INFO.school}</li>
                  <li>Computer Science</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-mono text-sm text-primary uppercase tracking-wider">Current</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>{PERSONAL_INFO.company}</li>
                  <li>Co-Founder</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-mono text-sm text-primary uppercase tracking-wider">Socials</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><Link href="https://tiktok.com" className="hover:text-primary transition-colors">TikTok</Link></li>
                  <li><Link href="https://instagram.com" className="hover:text-primary transition-colors">Instagram</Link></li>
                  <li><Link href="https://youtube.com" className="hover:text-primary transition-colors">YouTube</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section id="work" className="mb-32 md:mb-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-24 border-b border-border/40 pb-6"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">SELECTED WORK</h2>
            <span className="hidden md:block font-mono text-primary/60">01 — 04</span>
          </motion.div>

          <div className="flex flex-col gap-24 md:gap-40">
            {SHOWCASE_PROJECTS.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="border-t border-border pt-24 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
                LET'S WORK <br />
                <span className="text-primary">TOGETHER</span>
              </h2>
              <Link
                href="mailto:hello@alexolyaiy.com"
                className="inline-flex items-center gap-3 text-xl hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
                hello@alexolyaiy.com
              </Link>
            </div>
            <div className="flex gap-6">
              <span className="text-muted-foreground text-sm">© {new Date().getFullYear()} Alex Olyaiy</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
