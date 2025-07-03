'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { Video, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const surveillanceSubCategories = [
  {
    id: 'cctv-cameras',
    title: "CCTV Cameras",
    description: "High-definition surveillance cameras for comprehensive monitoring. From dome cameras to bullet cameras, we offer solutions for every surveillance need.",
    slug: "cctv-cameras",
    dataAiHint: "cctv cameras category"
  },
  {
    id: 'voice-logger',
    title: "Voice Logger",
    description: "Advanced voice recording and logging systems for communication monitoring. Ideal for call centers, security operations, and compliance requirements.",
    slug: "voice-logger",
    dataAiHint: "voice logger category"
  },
  {
    id: 'hpc',
    title: "HPC Systems",
    description: "High-performance computing solutions for video analytics, AI processing, and data management. Power your surveillance system with advanced computing capabilities.",
    slug: "hpc",
    dataAiHint: "hpc systems category"
  }
];

export function SurveillanceCategories() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {surveillanceSubCategories.map((category) => (
        <Link
          key={category.id}
          href={`/solutions/surveillance-systems/${category.slug}`}
          className="group block h-full transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl"
          aria-label={`Explore ${category.title} solutions`}
        >
          <Card
            className={cn(
              "relative flex flex-col h-full overflow-hidden shadow-lg border border-border/60 bg-card",
              "transition-all duration-300 ease-in-out transform",
              "group-hover:scale-[1.03] group-hover:shadow-2xl group-hover:shadow-primary/25 group-hover:border-primary/70"
            )}
          >
            {/* Decorative background gradient */}
            <div className={cn(
              "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out",
              "bg-gradient-to-tr from-primary/5 via-transparent to-yellow-500/5 z-0"
            )}></div>

            <CardHeader className="relative z-10 items-center text-center p-6 pb-4 border-b border-border/30 bg-card/50 backdrop-blur-sm">
              <div className={cn(
                "p-4 bg-gradient-to-br from-primary/15 to-primary/15 rounded-full mb-4 transition-all duration-300 ease-out",
                "group-hover:scale-110 group-hover:shadow-lg group-hover:from-yellow-500/20 group-hover:to-yellow-600/20"
              )}>
                <Video className={cn(
                  "h-12 w-12 md:h-14 md:w-14 text-primary transition-all duration-300 ease-out",
                  "group-hover:text-yellow-600 group-hover:rotate-[-5deg] group-hover:scale-105"
                )} />
              </div>
              <CardTitle className={cn(
                "text-xl md:text-2xl font-bold text-foreground transition-colors duration-300",
                "group-hover:text-yellow-600"
              )}>
                {category.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="relative z-10 flex-grow text-center px-6 py-6 bg-card">
              <CardDescription className="text-base text-muted-foreground line-clamp-3 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                {category.description}
              </CardDescription>
            </CardContent>

            <CardFooter className="relative z-10 justify-center p-6 border-t border-border/30 bg-card/50 backdrop-blur-sm mt-auto">
              <div className={cn(
                "inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ease-in-out transform",
                "bg-primary text-primary-foreground shadow-md",
                "group-hover:bg-yellow-600 group-hover:text-white group-hover:shadow-lg group-hover:scale-105"
              )}>
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:rotate-[360deg]" />
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
} 