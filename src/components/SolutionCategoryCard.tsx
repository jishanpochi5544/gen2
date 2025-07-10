import Link from 'next/link';
import type { SolutionCategory } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SolutionCategoryCardProps {
  category: SolutionCategory;
  href?: string;
  themeHoverBg?: string;
}

export function SolutionCategoryCard({ category, href, themeHoverBg }: SolutionCategoryCardProps) {
  const IconComponent = category.icon;
  return (
    <Link
      href={href || '#'}
      className={cn(
        "group block h-full transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl",
      )}
      aria-label={`Explore ${category.name} solutions`}
    >
      <Card
        className={cn(
          "relative flex flex-col h-full overflow-hidden shadow-lg border border-border/60 bg-white/60 backdrop-blur-sm rounded-2xl",
          "transition-all duration-300 ease-in-out transform",
          "group-hover:scale-[1.03] group-hover:shadow-2xl group-hover:shadow-pink-500/25 group-hover:border-pink-500/70"
        )}
      >
        {/* Decorative background gradient */}
        <div className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out",
          "bg-gradient-to-tr from-primary/5 via-transparent to-pink-500/5 z-0"
        )}></div>

        <CardHeader className="relative z-10 items-center text-center p-6 pb-4 border-b border-border/30 bg-white/50 backdrop-blur-sm">
          <div className={cn(
            "p-4 bg-gradient-to-br from-primary/15 to-primary/15 rounded-full mb-4 transition-all duration-300 ease-out",
            "group-hover:scale-110 group-hover:shadow-lg group-hover:bg-[linear-gradient(120deg,#fbc2eb_0%,#fff_50%,#a6c1ee_100%)]"
          )}>
            <IconComponent className={cn(
              "h-12 w-12 md:h-14 md:w-14 text-primary transition-all duration-300 ease-out",
              "group-hover:text-pink-600 group-hover:rotate-[-5deg] group-hover:scale-105"
            )} />
          </div>
          <CardTitle className={cn(
            "text-xl md:text-2xl font-bold text-foreground transition-colors duration-300",
            "group-hover:text-pink-600"
          )}>
            {category.name}
          </CardTitle>
        </CardHeader>

        <CardContent className="relative z-10 flex-grow text-center px-6 py-6 bg-white/60">
          <CardDescription className="text-base text-muted-foreground line-clamp-3 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
            {category.description}
          </CardDescription>
        </CardContent>

        <CardFooter className="relative z-10 justify-center p-6 border-t border-border/30 bg-white/50 backdrop-blur-sm mt-auto">
          <div className={cn(
            "inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ease-in-out transform",
            "bg-primary text-primary-foreground shadow-md",
            "group-hover:bg-[linear-gradient(120deg,#fbc2eb_0%,#fff_50%,#a6c1ee_100%)] group-hover:text-blue-700 group-hover:shadow-lg group-hover:scale-105"
          )}>
            Explore Products
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:rotate-[360deg]" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
