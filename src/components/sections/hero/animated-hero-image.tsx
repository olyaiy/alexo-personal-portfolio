'use client'

import { motion } from "framer-motion"
import Image from "next/image"

export function AnimatedHeroImage() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="relative group cursor-pointer"
    >
      {/* Decorative Elements */}
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
        className="absolute -bottom-8 -left-8 h-48 w-48 rounded-full bg-primary/20 blur-[32px] group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-500 -z-10" 
      />
      
      <div className="relative w-full aspect-square max-w-[500px] mx-auto transform transition-all duration-500 group-hover:translate-y-[-8px] group-hover:rotate-[-1deg]">
        <Image
          src="/alex.webp"
          alt="Alex Olyaiy"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 500px"
          className="object-cover rounded-3xl shadow-2xl shadow-primary/20 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-500 cursor-pointer"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-background/20 to-transparent group-hover:from-background/30 transition-colors duration-500" />
      </div>
    </motion.div>
  )
} 