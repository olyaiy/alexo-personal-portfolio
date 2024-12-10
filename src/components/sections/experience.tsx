'use client'

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { experiences } from "@/lib/data/experiences";

import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { filterCategories } from "@/lib/types";
import Image from "next/image";

export function Experience() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["All"]);

  const filteredItems = experiences.filter(item => {
    if (selectedFilters.includes("All")) return true;
    if (selectedFilters.includes("Work Experience")) return item.type === "experience";
    if (selectedFilters.includes("Personal Projects")) return item.type === "project";
    // Check if item has ALL selected tags
    return selectedFilters.every(filter => item.tags.includes(filter));
  });

  const handleFilterClick = (category: string) => {
    setSelectedFilters(prev => {
      if (category === "All") return ["All"];
      
      const newFilters = prev.filter(f => f !== "All");
      if (newFilters.includes(category)) {
        // Remove the category if it's already selected
        const filtered = newFilters.filter(f => f !== category);
        // If no filters left, default to "All"
        return filtered.length === 0 ? ["All"] : filtered;
      } else {
        // Add the new category
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
        {/* Filter Tags */}
        <div className="flex flex-wrap gap-3 justify-center"></div>
          {filterCategories.map((category) => (
            <Button
              key={category}
              variant={selectedFilters.includes(category) ? "default" : "outline"}
              onClick={() => handleFilterClick(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="group transition-all duration-300 bg-background/50 backdrop-blur-xl h-full flex flex-col relative shadow-lg hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 cursor-pointer">
                {item.badge && (
                  <Badge 
                    className="absolute -top-2 -right-2 z-10 bg-primary/90 text-primary-foreground shadow-glow"
                  >
                    {item.badge}
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold">
                        {item.title}
                        {item.link && (
                          <Link href={item.link} target="_blank" className="inline-flex items-center ml-2 text-muted-foreground hover:text-primary">
                            <ExternalLinkIcon className="h-4 w-4" />
                          </Link>
                        )}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {item.company} • {item.period}
                      </CardDescription>
                    </div>
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <Image
                        src={item.image || "/github.svg"}
                        alt={item.company}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground flex-1">
                    {item.description.map((desc, i) => (
                      <li key={i} className="text-sm">{desc}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {item.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-secondary/30 hover:bg-secondary/40"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 