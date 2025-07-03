'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { Shield, ArrowRight, Bell, Radio, Target, Plane, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

const intruderDetectionSubCategories = [
  {
    id: 'perimeter-security',
    title: "Perimeter Security",
    description: "Advanced perimeter protection systems with sensors, barriers, and detection technology for comprehensive boundary security.",
    slug: "perimeter-security",
    icon: Shield,
    dataAiHint: "perimeter security category"
  },
  {
    id: 'intrusion-alarms',
    title: "Intrusion Alarms",
    description: "High-sensitivity intrusion alarm systems with motion detection, glass break sensors, and instant alert capabilities.",
    slug: "intrusion-alarms",
    icon: Bell,
    dataAiHint: "intrusion alarms category"
  },
  {
    id: 'smart-sensors',
    title: "Smart Sensors",
    description: "Intelligent sensor systems including motion detectors, vibration sensors, and beam sensors for precise detection.",
    slug: "smart-sensors",
    icon: Radio,
    dataAiHint: "smart sensors category"
  },
  {
    id: 'aniders',
    title: "ANIDERS",
    description: "Animal intrusion detection and repellent systems for protecting premises from wildlife and unauthorized access.",
    slug: "aniders",
    icon: Target,
    dataAiHint: "aniders category"
  },
  {
    id: 'kynet-net-gun',
    title: "KyNet Net Gun",
    description: "Advanced non-lethal security systems with net deployment technology for safe intruder apprehension.",
    slug: "kynet-net-gun",
    icon: Plane,
    dataAiHint: "kynet net gun category"
  },
  {
    id: 'smart-stick-drone',
    title: "Smart Stick & Drone",
    description: "Multipurpose security tools and drone systems for surveillance, monitoring, and rapid response capabilities.",
    slug: "smart-stick-drone",
    icon: AlertTriangle,
    dataAiHint: "smart stick drone category"
  }
];

export function IntruderDetectionCategories() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Intruder Detection Categories
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our comprehensive range of intruder detection solutions designed to secure your premises
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {intruderDetectionSubCategories.map((category) => {
          const IconComponent = category.icon;
          return (
            <Link
              key={category.id}
              href={`/solutions/intruder-detection-system/${category.slug}`}
              className="group block h-full transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl"
              aria-label={`Explore ${category.title} solutions`}
            >
              <Card
                className={cn(
                  "relative flex flex-col h-full overflow-hidden shadow-lg border border-border/60 bg-card",
                  "transition-all duration-300 ease-in-out transform",
                  "group-hover:scale-[1.03] group-hover:shadow-2xl group-hover:shadow-red-500/25 group-hover:border-red-500/70"
                )}
              >
                {/* Decorative background gradient */}
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out",
                  "bg-gradient-to-tr from-red-500/5 via-transparent to-red-600/5 z-0"
                )}></div>

                <CardHeader className="relative z-10 items-center text-center p-6 pb-4 border-b border-border/30 bg-card/50 backdrop-blur-sm">
                  <div className={cn(
                    "p-4 bg-gradient-to-br from-red-500/15 to-red-600/15 rounded-full mb-4 transition-all duration-300 ease-out",
                    "group-hover:scale-110 group-hover:shadow-lg group-hover:from-red-500/20 group-hover:to-red-600/20"
                  )}>
                    <IconComponent className={cn(
                      "h-12 w-12 md:h-14 md:w-14 text-red-600 transition-all duration-300 ease-out",
                      "group-hover:text-red-700 group-hover:rotate-[-5deg] group-hover:scale-105"
                    )} />
                  </div>
                  <CardTitle className={cn(
                    "text-xl md:text-2xl font-bold text-foreground transition-colors duration-300",
                    "group-hover:text-red-600"
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
                    "bg-red-600 text-white shadow-md",
                    "group-hover:bg-red-700 group-hover:text-white group-hover:shadow-lg group-hover:scale-105"
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