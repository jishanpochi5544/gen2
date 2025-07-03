'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { Wifi, Video, Phone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const officeAutomationSubCategories = [
  {
    id: 'wifi-solutions',
    title: "WiFi Solutions",
    description: "High-performance wireless networking solutions for seamless connectivity in offices and homes. From enterprise-grade routers to mesh networks, we provide reliable WiFi infrastructure.",
    slug: "wifi-solutions",
    icon: Wifi,
    dataAiHint: "wifi solutions category"
  },
  {
    id: 'conference-room-solutions',
    title: "Conference Room Solutions",
    description: "Advanced audio-visual and collaboration systems for modern meeting spaces. Complete setups including projectors, video conferencing, and smart room automation.",
    slug: "conference-room-solutions",
    icon: Video,
    dataAiHint: "conference room solutions category"
  },
  {
    id: 'pa-system',
    title: "PA System",
    description: "Professional public address and communication systems for clear audio distribution. From small office setups to large venue installations with advanced control features.",
    slug: "pa-system",
    icon: Phone,
    dataAiHint: "pa system category"
  }
];

export function OfficeAutomationCategories() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Office & Home Automation Categories
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our comprehensive range of office and home automation solutions designed to enhance productivity and comfort
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {officeAutomationSubCategories.map((category) => {
          const IconComponent = category.icon;
          return (
            <Link
              key={category.id}
              href={`/solutions/office-home-automations/${category.slug}`}
              className="group block h-full transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl"
              aria-label={`Explore ${category.title} solutions`}
            >
              <Card
                className={cn(
                  "relative flex flex-col h-full overflow-hidden shadow-lg border border-border/60 bg-card",
                  "transition-all duration-300 ease-in-out transform",
                  "group-hover:scale-[1.03] group-hover:shadow-2xl group-hover:shadow-cyan-500/25 group-hover:border-cyan-500/70"
                )}
              >
                {/* Decorative background gradient */}
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out",
                  "bg-gradient-to-tr from-cyan-500/5 via-transparent to-cyan-400/5 z-0"
                )}></div>

                <CardHeader className="relative z-10 items-center text-center p-6 pb-4 border-b border-border/30 bg-card/50 backdrop-blur-sm">
                  <div className={cn(
                    "p-4 bg-gradient-to-br from-cyan-500/15 to-cyan-400/15 rounded-full mb-4 transition-all duration-300 ease-out",
                    "group-hover:scale-110 group-hover:shadow-lg group-hover:from-cyan-500/20 group-hover:to-cyan-400/20"
                  )}>
                    <IconComponent className={cn(
                      "h-12 w-12 md:h-14 md:w-14 text-cyan-600 transition-all duration-300 ease-out",
                      "group-hover:text-cyan-700 group-hover:rotate-[-5deg] group-hover:scale-105"
                    )} />
                  </div>
                  <CardTitle className={cn(
                    "text-xl md:text-2xl font-bold text-foreground transition-colors duration-300",
                    "group-hover:text-cyan-600"
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
                    "bg-cyan-600 text-white shadow-md",
                    "group-hover:bg-cyan-700 group-hover:text-white group-hover:shadow-lg group-hover:scale-105"
                  )}>
                    Explore Products
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:rotate-[360deg]" />
                  </div>
                </CardFooter>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
} 