import { getProductBySlug, products } from '@/lib/data';
import type { Product } from '@/types';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, ArrowLeft, MessageSquare } from 'lucide-react';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ProductGallery } from '@/components/ProductGallery';

interface ProductPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-gradient-to-b from-background to-secondary/30 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <Button variant="outline" asChild className="mb-8 group hover:bg-primary/10 hover:border-primary">
          <Link href="/solutions">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
            <span className="group-hover:text-primary transition-colors">Back to Solutions</span>
          </Link>
        </Button>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Image Gallery */}
          <ProductGallery 
            images={product.images} 
            name={product.name}
            dataAiHints={product.dataAiHints}
          />

          {/* Product Info */}
          <div className="space-y-6">
            <Badge variant="secondary" className="text-sm">{product.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">{product.name}</h1>
            <p className="text-lg text-muted-foreground">{product.longDescription}</p>
            
            <Card className="bg-card/80 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Key Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span className="text-foreground/90">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Button size="lg" asChild className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground shadow-md transition-transform hover:scale-105">
              <Link href="/contact">
                <MessageSquare className="mr-2 h-5 w-5" />
                Request a Quote or Demo
              </Link>
            </Button>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-12 md:mt-16 pt-10 border-t">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">Product Specifications</h2>
          <Card className="shadow-md">
            <CardContent className="p-0">
              <ul className="divide-y divide-border">
                {product.specifications.map((spec, index) => (
                  <li key={index} className="px-6 py-4 grid grid-cols-3 gap-4 items-center hover:bg-secondary/30 transition-colors">
                    <span className="font-medium text-foreground/90 col-span-1">{spec.key}</span>
                    <span className="text-muted-foreground col-span-2">{spec.value}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
