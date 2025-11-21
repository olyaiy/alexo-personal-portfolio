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
        <div className="grain-overlay opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24">
        {/* Header / Nav */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-between items-center mb-24 md:mb-32"
        >
          <div className="text-xl font-bold tracking-tighter font-serif italic">
            ALEX<span className="text-primary not-italic">.</span>
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

        {/* Hero Section - Editorial Split */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-32 md:mb-48 flex flex-col md:flex-row gap-12 md:gap-24 items-center"
        >
          {/* Text Content */}
          <div className="flex-1 space-y-8 md:space-y-12 relative z-10">
            <motion.div variants={item}>
              <h1 className="text-8xl md:text-[10rem] leading-[0.8] font-serif italic text-muted-foreground/20 select-none absolute -top-20 -left-10 -z-10 blur-sm">
                Hello
              </h1>
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
                I'm <span className="font-serif italic text-primary">Alex</span>. <br />
                <span className="text-4xl md:text-6xl font-light text-muted-foreground">
                  I build for the web.
                </span>
              </h2>
            </motion.div>

            <motion.div variants={item} className="space-y-6 max-w-lg">
              <p className="text-xl md:text-2xl leading-relaxed font-light">
                A <span className="font-medium text-foreground">Full Stack Developer</span> and <span className="font-medium text-foreground">Content Creator</span> based in Vancouver, BC.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I combine technical expertise with storytelling to build digital products that connect with people. Currently studying CS at UBC and building High Tide Digital.
              </p>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-8">
              <Link href="#work" className="group flex items-center gap-2 text-lg font-medium hover:text-primary transition-colors">
                View Projects
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <div className="h-px w-12 bg-border" />
              <div className="flex gap-4">
                <Link href="https://github.com" target="_blank" className="hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href="https://linkedin.com" target="_blank" className="hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div variants={item} className="flex-1 w-full relative">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto md:ml-auto">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl" />

              {/* Image Container */}
              <div className="relative h-full w-full overflow-hidden rounded-sm border border-white/5 bg-secondary/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent" />

                {/* Placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/30">
                  <div className="w-20 h-20 border border-dashed border-current rounded-full flex items-center justify-center mb-4">
                    <span className="text-3xl">📸</span>
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest">Portrait</span>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-8 -left-8 bg-background/80 backdrop-blur-md border border-white/10 p-6 rounded-sm shadow-2xl max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Community</span>
                </div>
                <p className="text-3xl font-serif italic font-bold text-foreground">1.5M+</p>
                <p className="text-xs text-muted-foreground mt-1">Monthly views across social platforms</p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* About / Stack */}
        <section id="about" className="mb-32 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-bold mb-6 sticky top-24 font-serif italic">About Me</h2>
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
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter font-serif italic">Selected Work</h2>
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
