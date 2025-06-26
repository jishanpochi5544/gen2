import { getIndustryBySlug, industries, products } from '@/lib/data';
import type { Industry, Product } from '@/types';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react'; // Added ArrowRight
import type { Metadata } from 'next';
import { ProductCard } from '@/components/ProductCard';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface IndustryPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) {
    return {
      title: 'Industry Not Found',
    };
  }
  return {
    title: `Security Solutions for ${industry.name}`,
    description: `Learn how GenX Secure provides tailored security solutions for the ${industry.name.toLowerCase()} industry. ${industry.description}`,
  };
}

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

// Helper function to get relevant products for an industry
const getRelevantProducts = (industryName: string): Product[] => {
  const lowerIndustryName = industryName.toLowerCase();
  let filtered: Product[] = [];
  const maxProductsToShow = 5; // Show up to 5 products

  if (lowerIndustryName.includes('retail')) {
    filtered = products.filter(p => p.category === 'CCTV Cameras' || p.category === 'DVRs/NVRs').slice(0, maxProductsToShow);
  } else if (lowerIndustryName.includes('government')) {
    filtered = products.filter(p => p.category === 'Access Control' || p.name.includes('Enterprise NVR')).slice(0, maxProductsToShow);
  } else if (lowerIndustryName.includes('factor') || lowerIndustryName.includes('manufacturing')) {
    filtered = products.filter(p => p.category === 'DVRs/NVRs' || p.name.includes('PTZ') || p.category === 'Access Control').slice(0, maxProductsToShow);
  } else if (lowerIndustryName.includes('corporate') || lowerIndustryName.includes('office')) {
    filtered = products.filter(p => p.category === 'Access Control' || p.name.includes('Dome CCTV')).slice(0, maxProductsToShow);
  }
  
  // Fallback if no specific products found or for other industries
  if (filtered.length === 0) {
    filtered = products.slice(0, maxProductsToShow); // Show some general products
  }
  return filtered.map(({icon, ...rest}) => rest); // Remove icon before passing to ProductCard
};

export default async function IndustryPage({ params }: IndustryPageProps) {
  const industry = getIndustryBySlug(params.slug);

  if (!industry) {
    notFound();
  }

  const relevantProducts = getRelevantProducts(industry.name);

  return (
    <div className="bg-gradient-to-b from-background to-secondary/30 min-h-screen">
      {/* Hero Section for the Industry */}
      <section className="relative py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <Image
            src={industry.representativeImage || 'https://placehold.co/1920x1080.png'}
            alt={`Solutions for ${industry.name}`}
            fill
            className="object-cover opacity-20"
            priority
            data-ai-hint={industry.dataAiHint || 'industry specific banner'}
          />
           <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          {industry.iconName && <industry.iconName className="h-16 w-16 mx-auto mb-4 text-accent" />}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{industry.name} Security Solutions</h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Tailored strategies and technologies to protect your assets in the {industry.name.toLowerCase()} sector.
          </p>
        </div>
      </section>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <Button variant="outline" asChild className="mb-8 group hover:bg-primary/10 hover:border-primary">
          <Link href="/industries">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
            <span className="group-hover:text-primary transition-colors">Back to Industries</span>
          </Link>
        </Button>

        <Card className="mb-12 shadow-xl border">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-primary">Understanding Your Industry's Needs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground leading-relaxed">{industry.description}</p>
            <p className="mt-4 text-foreground/90">
              At GenX Secure, we delve deep into the specific security challenges and regulatory requirements faced by the {industry.name.toLowerCase()} sector. Our goal is to provide not just products, but comprehensive solutions that integrate seamlessly into your operations, enhancing safety, efficiency, and peace of mind.
            </p>
          </CardContent>
        </Card>
        
        {relevantProducts.length > 0 && (
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">Example Solutions for {industry.name}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {relevantProducts.map((product) => (
                <ProductCard key={product.id} product={product} isVisible={true} />
              ))}
            </div>
            <div className="text-center mt-10">
                <Button asChild variant="link" className="text-lg text-primary hover:text-primary/80">
                  <Link href="/solutions">
                    Explore All Solutions <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
            </div>
          </section>
        )}

        <section className="text-center py-10 bg-card rounded-lg shadow-xl border">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">Ready to Secure Your {industry.name} Operations?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Our experts are ready to discuss your specific requirements and design a security plan that fits your needs and budget.
          </p>
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md transition-transform hover:scale-105">
            <Link href={`/contact?industry=${industry.slug}&subject=Consultation for ${industry.name}`}>
              <MessageSquare className="mr-2 h-5 w-5" />
              Request a Consultation
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
