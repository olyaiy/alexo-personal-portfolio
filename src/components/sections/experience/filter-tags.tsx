'use client'

import { Button } from "@/components/ui/button";
import { filterCategories } from "@/lib/types";

interface FilterTagsProps {
  selectedFilters: string[];
  onFilterClick: (category: string) => void;
}

export function FilterTags({ selectedFilters, onFilterClick }: FilterTagsProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {filterCategories.map((category) => (
        <Button
          key={category}
          variant="ghost"
          onClick={() => onFilterClick(category)}
          className={`transition-all duration-300 ${
            selectedFilters.includes(category)
              ? "bg-primary/10 text-primary hover:bg-primary/20"
              : "hover:bg-primary/5 text-muted-foreground"
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
} 