"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Project {
    title: string;
    description: string;
    href: string;
    category: string;
    metrics: string;
    featured: boolean;
}

interface ProjectCardProps {
    project: Project;
    index: number;
}

// Placeholder gradients for the gallery
const PLACEHOLDERS = [
    "bg-gradient-to-br from-primary/20 via-secondary to-background",
    "bg-gradient-to-bl from-blue-500/20 via-secondary to-background",
    "bg-gradient-to-tr from-purple-500/20 via-secondary to-background",
    "bg-gradient-to-tl from-orange-500/20 via-secondary to-background",
];

export function ProjectCard({ project, index }: ProjectCardProps) {
    const [activeImage, setActiveImage] = useState(0);
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`flex flex-col md:flex-row gap-8 md:gap-16 items-start ${!isEven ? "md:flex-row-reverse" : ""
                }`}
        >
            {/* Gallery Section */}
            <div className="w-full md:w-3/5 space-y-4">
                {/* Main Image */}
                <Link
                    href={project.href}
                    target="_blank"
                    className="group relative block aspect-[16/10] overflow-hidden rounded-sm bg-secondary/20 w-full"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className={`absolute inset-0 ${PLACEHOLDERS[activeImage]}`}
                        >
                            {/* Abstract Art Overlay */}
                            <div className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-700">
                                <div
                                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,var(--primary)_0%,transparent_60%)] blur-[80px] opacity-20 group-hover:opacity-50 transition-opacity duration-700`}
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Overlay & Button */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transform scale-50 group-hover:scale-100 transition-transform duration-500">
                            <ArrowUpRight className="w-8 h-8" />
                        </div>
                    </div>
                </Link>

                {/* Thumbnails */}
                <div className="grid grid-cols-4 gap-4">
                    {PLACEHOLDERS.map((placeholder, i) => (
                        <button
                            key={i}
                            onMouseEnter={() => setActiveImage(i)}
                            className={`relative aspect-video overflow-hidden rounded-sm transition-all duration-300 ${activeImage === i
                                    ? "ring-2 ring-primary ring-offset-2 ring-offset-background opacity-100"
                                    : "opacity-50 hover:opacity-100"
                                }`}
                        >
                            <div className={`absolute inset-0 ${placeholder}`} />
                        </button>
                    ))}
                </div>
            </div>

            {/* Project Info */}
            <div className="w-full md:w-2/5 space-y-6 md:py-8">
                <div className="space-y-2">
                    <div className="flex items-center gap-4 text-primary/80 font-mono text-sm tracking-wider uppercase">
                        <span>0{index + 1}</span>
                        <span className="h-[1px] w-8 bg-primary/30" />
                        <span>{project.category}</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                        <Link
                            href={project.href}
                            target="_blank"
                            className="hover:text-primary transition-colors duration-300"
                        >
                            {project.title}
                        </Link>
                    </h3>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                </p>

                <div className="pt-4">
                    <span className="inline-block px-4 py-2 rounded-full border border-border bg-secondary/30 text-sm text-muted-foreground">
                        {project.metrics}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
