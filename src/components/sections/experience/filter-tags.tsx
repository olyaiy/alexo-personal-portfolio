'use client'

import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { filterCategories } from "@/lib/types";
import { motion } from "framer-motion";

interface FilterTagsProps {
  selectedFilters: string[];
  onFilterClick: (category: string) => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export function FilterTags({ 
  selectedFilters, 
  onFilterClick, 
  searchQuery, 
  onSearchChange 
}: FilterTagsProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full space-y-4"
    >
      {/* Search Bar - Mobile First */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative w-full max-w-md mx-auto"
      >
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search projects & experience..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-4 h-10 bg-background/50 backdrop-blur-sm border-muted rounded-full
            focus-visible:ring-primary/20 focus-visible:ring-offset-0 transition-all duration-300"
        />
      </motion.div>

      {/* Filter Tags */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap gap-2 justify-center items-center"
      >
        {filterCategories.map((category, index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + index * 0.05 }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onFilterClick(category)}
              className={`rounded-full transition-all duration-300 hover:-translate-y-0.5 text-xs sm:text-sm px-3 py-1.5 h-auto ${
                selectedFilters.includes(category)
                  ? "bg-primary/10 text-primary hover:bg-primary/20 shadow-lg shadow-primary/10"
                  : "hover:bg-primary/5 text-muted-foreground hover:shadow-lg hover:shadow-primary/5"
              }`}
            >
              {category}
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
} 