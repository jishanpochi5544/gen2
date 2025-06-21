
import Link from 'next/link';
import Image from 'next/image';
import type { CaseStudy } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { format, parseISO } from 'date-fns';


interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  isFeatured?: boolean; // To potentially adjust styling if it's a featured card
}

export function CaseStudyCard({ caseStudy, isFeatured = false }: CaseStudyCardProps) {
  const formattedDate = format(parseISO(caseStudy.date), "MMMM d, yyyy");

  return (
    <Card className="group flex flex-col overflow-hidden shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 ease-out transform hover:-translate-y-1 h-full border hover:border-primary/50">
      {caseStudy.image && (
        <div className="relative w-full h-56 overflow-hidden">
          <Image
            src={caseStudy.image}
            alt={caseStudy.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 ease-in-out group-hover:scale-105"
            data-ai-hint={caseStudy.dataAiHint || 'business success security'}
          />
        </div>
      )}
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <Badge variant="outline" className="text-primary border-primary">{caseStudy.industry}</Badge>
          <div className="flex items-center text-xs text-muted-foreground">
            <CalendarDays className="h-3 w-3 mr-1" />
            {formattedDate}
          </div>
        </div>
        <CardTitle className="text-xl font-semibold leading-tight">{caseStudy.title}</CardTitle>
        <p className="text-sm text-muted-foreground">Customer: {caseStudy.customer}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-muted-foreground line-clamp-3">
          <strong>Challenge:</strong> {caseStudy.challenge}
        </CardDescription>
         <CardDescription className="text-sm text-muted-foreground line-clamp-2 mt-2">
          <strong>Solution:</strong> {caseStudy.solutionProvided}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="link" asChild className="px-0 text-primary group transition-colors duration-300 ease-out">
          <Link href={`/success-stories#${caseStudy.slug}`}> 
            Read Full Story <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300 ease-out" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
