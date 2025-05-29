'use client'

import { motion } from "framer-motion";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ExperienceItem } from "@/lib/types";

interface ExperienceCardProps {
  item: ExperienceItem;
  index: number;
}

export function ExperienceCard({ item, index }: ExperienceCardProps) {
  const CardComponent = () => (
    <Card className="group transition-all duration-300 bg-background/50 backdrop-blur-xl h-full flex flex-col relative shadow-lg hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 cursor-pointer">
      {item.badge && (
        <Badge 
          className="absolute -top-2 -right-2 z-10 bg-primary/90 text-primary-foreground shadow-glow text-xs"
        >
          {item.badge}
        </Badge>
      )}
      <CardHeader className="p-4 sm:p-6">
        <div className="flex justify-between items-start gap-3 sm:gap-4">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-base sm:text-lg lg:text-xl font-semibold leading-tight">
              {item.title}
              {item.link && (
                <span className="inline-flex items-center ml-2 text-muted-foreground hover:text-primary">
                  <ExternalLinkIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                </span>
              )}
            </CardTitle>
            <CardDescription className="text-muted-foreground text-sm mt-1">
              {item.company} • {item.period}
            </CardDescription>
          </div>
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
            <Image
              src={item.image || "/github.svg"}
              alt={item.company}
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-4 sm:p-6 pt-0 sm:pt-0">
        <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 text-muted-foreground flex-1">
          {item.description.map((desc, i) => (
            <li key={i} className="text-xs sm:text-sm leading-relaxed">{desc}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 sm:pt-4">
          {item.tags.map((tag) => (
            <Badge
              key={tag}
              className="bg-primary/10 text-primary transition-transform hover:scale-110 text-xs px-2 py-0.5"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      {item.link ? (
        <Link href={item.link} target="_blank">
          <CardComponent />
        </Link>
      ) : (
        <CardComponent />
      )}
    </motion.div>
  );
} 