
import Link from 'next/link';
import type { Industry } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface IndustryCardProps {
  industry: Industry;
}

export function IndustryCard({ industry }: IndustryCardProps) {
  const IconComponent = industry.iconName;
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 h-full border hover:border-primary/50">
      <CardHeader className="items-center text-center">
        {IconComponent && <IconComponent className="h-12 w-12 text-primary mb-3" />}
        <CardTitle className="text-xl font-semibold">{industry.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow text-center">
        <CardDescription className="text-sm text-muted-foreground">{industry.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="outline" asChild className="w-full text-primary border-primary hover:bg-primary/10 hover:text-primary group">
          <Link href={`/industries/${industry.slug}`}>
            Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

