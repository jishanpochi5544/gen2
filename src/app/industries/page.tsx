
import { IndustryCard } from '@/components/IndustryCard';
import { industries } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'GenX Secure provides specialized security solutions for various industries including retail, government, manufacturing, and more.',
};

export default function IndustriesPage() {
  return (
    <div className="bg-gradient-to-b from-background to-secondary/30 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">Industries We Serve</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We understand the unique security challenges of different sectors and offer tailored solutions.
          </p>
        </header>

        {industries.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {industries.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">Industry information coming soon. Please check back later.</p>
          </div>
        )}
      </div>
    </div>
  );
}
