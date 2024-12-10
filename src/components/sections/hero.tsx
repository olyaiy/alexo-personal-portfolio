'use client'

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import RetroGrid from "@/components/ui/retro-grid";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden ">
      {/* Add RetroGrid as background */}
      <div className="absolute inset-0 min-h-screen ">
        <RetroGrid className="opacity-40" angle={290} />
      </div>

      {/* Main content container */}
      <div className="container relative z-10 mx-auto px-4 py-12 sm:px-6 lg:px-8 flex items-center min-h-[calc(100vh-4rem)] ">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-6 py-2.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 hover:bg-primary/15 transition-all duration-300 cursor-pointer shadow-lg shadow-primary/10 hover:-translate-y-0.5"
              >
                <span className="mr-2.5 h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
                Available for Projects
              </motion.span>
              
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="block bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text leading-tight"
                >
                  Alex Olyaiy
                </motion.span>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row items-center gap-x-4 text-xl -4 text-gradient"
                >
                  <span>Full Stack Developer</span>
                  <span className="hidden sm:inline text-muted-foreground/50">|</span>
                  <span>Agency Owner</span>
                  <span className="hidden sm:inline text-muted-foreground/50">|</span>
                  <span>AI/ML Enthusiast</span>
                </motion.div>
              </h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-muted-foreground/90 leading-relaxed max-w-xl"
              >
                Computer Science student at UBC and co-founder of High Tide Digital. 
                Building modern web experiences with cutting-edge technologies.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-5"
            >
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
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-6 pt-4"
            >
              <a href="https://github.com" className="group p-2 hover:bg-primary/10 rounded-full transition-all duration-300">
                <GithubIcon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="https://linkedin.com" className="group p-2 hover:bg-primary/10 rounded-full transition-all duration-300">
                <LinkedinIcon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </motion.div>
          </motion.div>

          {/* Enhanced Right Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative group"
          >
            {/* Enhanced Decorative Elements - Moved above the image */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute -bottom-8 -left-8 h-48 w-48 rounded-full bg-primary/20 blur-[32px] group-hover:bg-primary/30 transition-colors duration-500 -z-10" 
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 9,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute -top-8 -right-8 h-56 w-56 rounded-full bg-secondary/15 blur-[40px] group-hover:bg-secondary/25 transition-colors duration-500 -z-10" 
            />

            <div className="aspect-square w-full rounded-3xl glass-card p-2 relative z-0
              before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-primary/20 before:via-transparent before:to-secondary/20 before:opacity-0 before:transition-opacity before:duration-500
              group-hover:before:opacity-100">
              <div className="relative h-full w-full rounded-2xl bg-background/95 backdrop-blur-xl overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500" />
                <Image
                  src="/alex.webp"
                  alt="Alex Olyaiy"
                  fill
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 