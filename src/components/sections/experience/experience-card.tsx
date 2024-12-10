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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      {item.link ? (
        <Link href={item.link} target="_blank">
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
                      <span className="inline-flex items-center ml-2 text-muted-foreground hover:text-primary">
                        <ExternalLinkIcon className="h-4 w-4" />
                      </span>
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
                    className="bg-primary/10 text-primary"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </Link>
      ) : (
        <Card className="group transition-all duration-300 bg-background/50 backdrop-blur-xl h-full flex flex-col relative shadow-lg">
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
                    <span className="inline-flex items-center ml-2 text-muted-foreground hover:text-primary">
                      <ExternalLinkIcon className="h-4 w-4" />
                    </span>
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
                  className="bg-primary/10 text-primary"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </motion.div>
  );
} 