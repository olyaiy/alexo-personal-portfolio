'use client'

import { motion } from "framer-motion"

export function AnimatedAvailabilityBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className="flex items-center gap-4"
    >
      <span className="inline-flex items-center px-6 py-2.5 bg-primary/10 text-primary rounded-full text-sm font-semibold hover:bg-primary/15 transition-all duration-300 cursor-pointer shadow-lg shadow-primary/10 hover:-translate-y-0.5">
        <span className="mr-2.5 h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
        Available for Projects
      </span>
    </motion.div>
  )
} 