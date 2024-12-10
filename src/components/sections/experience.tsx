'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { experiences } from "@/lib/data/experiences";
import { FilterTags } from "@/components/sections/experience/filter-tags";
import { ExperienceCard } from "@/components/sections/experience/experience-card";

export function Experience() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["All"]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = experiences.filter(item => {
    const matchesFilter = selectedFilters.includes("All") ||
      (selectedFilters.includes("Work Experience") && item.type === "experience") ||
      (selectedFilters.includes("Personal Projects") && item.type === "project") ||
      selectedFilters.every(filter => item.tags.includes(filter));

    const matchesSearch = searchQuery === "" || [
      item.title,
      item.company,
      ...item.description,
      ...item.tags
    ].some(text => 
      text.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return matchesFilter && matchesSearch;
  });

  const handleFilterClick = (category: string) => {
    setSelectedFilters(prev => {
      if (category === "All") return ["All"];
      
      const newFilters = prev.filter(f => f !== "All");
      if (newFilters.includes(category)) {
        const filtered = newFilters.filter(f => f !== category);
        return filtered.length === 0 ? ["All"] : filtered;
      } else {
        return [...newFilters, category];
      }
    });
  };

  return (
    <section className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-16"
      >
        <FilterTags 
          selectedFilters={selectedFilters} 
          onFilterClick={handleFilterClick}
          searchQuery={searchQuery}
          onSearchChange={(value) => setSearchQuery(value)}
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <ExperienceCard 
              key={`${item.title}-${index}`}
              item={item}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
} 