
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { caseStudies } from '@/lib/data';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { CalendarDays } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Success Stories',
  description: 'Read case studies about how GenX Secure has helped businesses enhance their security with our advanced solutions.',
};

export default function SuccessStoriesPage() {
  return (
    <div className="bg-gradient-to-b from-background to-secondary/30 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">Success Stories</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how GenX Secure delivers real-world security results for various industries.
          </p>
        </header>

        {caseStudies.length > 0 ? (
          <div className="space-y-12">
            {caseStudies.map((study) => (
              <Card key={study.id} id={study.slug} className="overflow-hidden shadow-xl border md:grid md:grid-cols-12 md:gap-8 items-center p-2 md:p-0 hover:border-primary/50 transition-all">
                {study.image && (
                  <div className="md:col-span-5 relative aspect-video md:aspect-auto md:h-full w-full rounded-md md:rounded-none md:rounded-l-md overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                      data-ai-hint={study.dataAiHint || 'business security case study'}
                    />
                  </div>
                )}
                <div className={`p-6 ${study.image ? 'md:col-span-7' : 'md:col-span-12'}`}>
                  <div className="flex flex-wrap gap-2 items-center mb-3">
                    <span className="text-sm font-medium text-primary py-1 px-2.5 rounded-full bg-primary/10">{study.industry}</span>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <CalendarDays className="h-3.5 w-3.5 mr-1.5" />
                      {format(parseISO(study.date), "MMMM d, yyyy")}
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground mb-2">{study.title}</h2>
                  <p className="text-sm text-muted-foreground mb-3">Customer: <span className="font-medium">{study.customer}</span></p>
                  
                  <div className="space-y-3 text-foreground/90 text-sm">
                    <p><strong>Challenge:</strong> {study.challenge}</p>
                    <p><strong>Solution:</strong> {study.solutionProvided}</p>
                    <p><strong>Results:</strong> {study.results}</p>
                  </div>

                  <Button variant="outline" asChild className="mt-6 border-primary text-primary hover:bg-primary/10">
                    <Link href="/contact">Discuss Your Project</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No success stories available yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
