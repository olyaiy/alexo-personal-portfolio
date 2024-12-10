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
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredItems = experiences.filter(item => {
    if (selectedFilter === "All") return true;
    if (selectedFilter === "Work Experience") return item.type === "experience";
    if (selectedFilter === "Personal Projects") return item.type === "project";
    return item.tags.includes(selectedFilter);
  });

  return (
    <section className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-16"
      >
        {/* Filter Tags */}
        <div className="flex flex-wrap gap-3">
          {filterCategories.map((category) => (
            <Button
              key={category}
              variant={selectedFilter === category ? "default" : "outline"}
              onClick={() => setSelectedFilter(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

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
              <Card className={`group hover:shadow-lg transition-all duration-300 border ${
                item.badge 
                  ? "border-primary/50 shadow-glow" 
                  : "border-border/50"
                } bg-background/50 backdrop-blur-xl h-full flex flex-col relative`}>
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