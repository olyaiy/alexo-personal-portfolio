'use client'

import { motion } from "framer-motion"

export function AnimatedAvailabilityBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className="flex flex-row items-center gap-2 sm:gap-4 overflow-x-auto"
    >
      <span className="inline-flex items-center px-3 py-2 sm:px-6 sm:py-2.5 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-semibold hover:bg-primary/15 transition-all duration-300 cursor-pointer shadow-lg shadow-primary/10 hover:-translate-y-0.5">
        <span className="mr-1.5 sm:mr-2.5 h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-primary animate-pulse" />
        Available for Projects
      </span>
    </motion.div>
  )
} 