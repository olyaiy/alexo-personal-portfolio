'use client'

import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { filterCategories } from "@/lib/types";
import { motion } from "framer-motion";

interface FilterTagsClientProps {
  selectedFilters: string[];
  onFilterClick: (category: string) => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export function FilterTagsClient({ 
  selectedFilters, 
  onFilterClick, 
  searchQuery, 
  onSearchChange 
}: FilterTagsClientProps) {
  // ... rest of the existing FilterTags component code ...
} 