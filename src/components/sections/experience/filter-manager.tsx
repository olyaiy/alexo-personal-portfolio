'use client'

import { useState } from "react";
import { experiences } from "@/lib/data/experiences";
import { FilterTagsClient } from "./filter-tags-client";

export function FilterManager() {
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
    <FilterTagsClient 
      selectedFilters={selectedFilters}
      onFilterClick={handleFilterClick}
      searchQuery={searchQuery}
      onSearchChange={(value) => setSearchQuery(value)}
    />
  );
} 