'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { Shield, ArrowRight, Users, DoorOpen, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const accessControlSubCategories = [
  {
    id: 'attendance-system',
    title: "Attendance System",
    description: "Advanced biometric attendance systems with fingerprint, face recognition, and card-based solutions for employee management.",
    slug: "attendance-system",
    icon: Clock,
    dataAiHint: "attendance system category"
  },
  {
    id: 'turnstiles',
    title: "Turnstiles",
    description: "High-security turnstile systems for controlled pedestrian access with anti-tailgating technology.",
    slug: "turnstiles",
    icon: Users,
    dataAiHint: "turnstiles category"
  },
  {
    id: 'door-automation',
    title: "Door Automation",
    description: "Intelligent door control systems with automatic sliding doors, swing doors, and barrier gates for seamless access.",
    slug: "door-automation",
    icon: DoorOpen,
    dataAiHint: "door automation category"
  }
];

export function AccessControlCategories() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Access Control Categories
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our comprehensive range of access control solutions designed to secure your premises
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {accessControlSubCategories.map((category) => {
          const IconComponent = category.icon;
          return (
            <Link
              key={category.id}
              href={`/solutions/access-control/${category.slug}`}
              className="group block h-full transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl"
              aria-label={`Explore ${category.title} solutions`}
            >
              <Card
                className={cn(
                  "relative flex flex-col h-full overflow-hidden shadow-lg border border-border/60 bg-card",
                  "transition-all duration-300 ease-in-out transform",
                  "group-hover:scale-[1.03] group-hover:shadow-2xl group-hover:shadow-purple-500/25 group-hover:border-purple-500/70"
                )}
              >
                {/* Decorative background gradient */}
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out",
                  "bg-gradient-to-tr from-purple-500/5 via-transparent to-purple-600/5 z-0"
                )}></div>

                <CardHeader className="relative z-10 items-center text-center p-6 pb-4 border-b border-border/30 bg-card/50 backdrop-blur-sm">
                  <div className={cn(
                    "p-4 bg-gradient-to-br from-purple-500/15 to-purple-600/15 rounded-full mb-4 transition-all duration-300 ease-out",
                    "group-hover:scale-110 group-hover:shadow-lg group-hover:from-purple-500/20 group-hover:to-purple-600/20"
                  )}>
                    <IconComponent className={cn(
                      "h-12 w-12 md:h-14 md:w-14 text-purple-600 transition-all duration-300 ease-out",
                      "group-hover:text-purple-700 group-hover:rotate-[-5deg] group-hover:scale-105"
                    )} />
                  </div>
                  <CardTitle className={cn(
                    "text-xl md:text-2xl font-bold text-foreground transition-colors duration-300",
                    "group-hover:text-purple-600"
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
                    "bg-purple-600 text-white shadow-md",
                    "group-hover:bg-purple-700 group-hover:text-white group-hover:shadow-lg group-hover:scale-105"
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