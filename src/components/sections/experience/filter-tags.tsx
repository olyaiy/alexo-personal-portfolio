'use client'

import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { filterCategories } from "@/lib/types";

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
    <div className="w-full space-y-6">
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search experiences..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-4 h-10 bg-background/50 backdrop-blur-sm border-muted 
            focus-visible:ring-primary/20 focus-visible:ring-offset-0"
        />
      </div>

      {/* Filter Tags */}
      <div className="flex flex-wrap gap-2 justify-center">
        {filterCategories.map((category) => (
          <Button
            key={category}
            variant="ghost"
            size="sm"
            onClick={() => onFilterClick(category)}
            className={`rounded-full transition-all duration-300 ${
              selectedFilters.includes(category)
                ? "bg-primary/10 text-primary hover:bg-primary/20"
                : "hover:bg-primary/5 text-muted-foreground"
            }`}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
} 