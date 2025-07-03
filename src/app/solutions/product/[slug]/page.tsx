import { getProductBySlug, products, solutionCategoriesData } from '@/lib/data';
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
  const slug = await params.slug;
  const product = getProductBySlug(slug);
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

function getBackHrefAndLabel(categoryName: string): { href: string, label: string } {
  // Map subcategories to their parent and subcategory slugs
  const subcategoryMap: Record<string, { parent: string, sub: string, label: string }> = {
    // Surveillance
    'cctv cameras': { parent: 'surveillance-systems', sub: 'cctv-cameras', label: 'CCTV Cameras' },
    'voice logger': { parent: 'surveillance-systems', sub: 'voice-logger', label: 'Voice Logger' },
    'hpc': { parent: 'surveillance-systems', sub: 'hpc', label: 'HPC' },
    // Fire Safety
    'fire extinguisher': { parent: 'fire-safety', sub: 'fire-extinguisher', label: 'Fire Extinguisher' },
    'fire hydrant system': { parent: 'fire-safety', sub: 'fire-hydrant-system', label: 'Fire Hydrant System' },
    'fire alarm system': { parent: 'fire-safety', sub: 'fire-alarm-system', label: 'Fire Alarm System' },
    'fire suppression system': { parent: 'fire-safety', sub: 'fire-suppression-system', label: 'Fire Suppression System' },
    // Access Control
    'attendance system': { parent: 'access-control', sub: 'attendance-system', label: 'Attendance System' },
    'turnstiles': { parent: 'access-control', sub: 'turnstiles', label: 'Turnstiles' },
    'door automation': { parent: 'access-control', sub: 'door-automation', label: 'Door Automation' },
    // Office & Home Automation
    'wifi solutions': { parent: 'office-home-automations', sub: 'wifi-solutions', label: 'WiFi Solutions' },
    'conference room solutions': { parent: 'office-home-automations', sub: 'conference-room-solutions', label: 'Conference Room Solutions' },
    'pa system': { parent: 'office-home-automations', sub: 'pa-system', label: 'PA System' },
    // Intruder Detection System
    'aniders': { parent: 'intruder-detection-system', sub: 'aniders', label: 'ANIDERS' },
    'smart sensors': { parent: 'intruder-detection-system', sub: 'smart-sensors', label: 'Smart Sensors' },
    'intrusion-alarms': { parent: 'intruder-detection-system', sub: 'intrusion-alarms', label: 'Intrusion Alarms' },
    'kynet net gun': { parent: 'intruder-detection-system', sub: 'kynet-net-gun', label: 'Kynet Net Gun' },
    'perimeter security': { parent: 'intruder-detection-system', sub: 'perimeter-security', label: 'Perimeter Security' },
    'smart stick drone': { parent: 'intruder-detection-system', sub: 'smart-stick-drone', label: 'Smart Stick Drone' },
    // Command Control Room
    'ai powered analytics for proactive threat detection': { parent: 'command-control-room', sub: 'ai-powered-analytics-for-proactive-threat-detection', label: 'AI Powered Analytics' },
    'centralized control room setup': { parent: 'command-control-room', sub: 'centralized-control-room-setup', label: 'Centralized Control Room Setup' },
    'remote surveillance and monitoring solutions': { parent: 'command-control-room', sub: 'remote-surveillance-and-monitoring-solutions', label: 'Remote Surveillance and Monitoring' },
  };
  const key = categoryName.toLowerCase();
  if (subcategoryMap[key]) {
    const { parent, sub, label } = subcategoryMap[key];
    return { href: `/solutions/${parent}/${sub}`, label };
  }
  // Main categories
  const cat = solutionCategoriesData.find(
    c => c.name.toLowerCase() === categoryName.toLowerCase()
  );
  if (cat) {
    const slug = cat.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
    return { href: `/solutions/${slug}`, label: cat.name };
  }
  // Fallbacks for other common types
  if (categoryName.toLowerCase().includes('fire')) return { href: '/solutions/fire-safety', label: 'Fire & Emergency System' };
  if (categoryName.toLowerCase().includes('access')) return { href: '/solutions/access-control', label: 'Access Control' };
  if (categoryName.toLowerCase().includes('intruder')) return { href: '/solutions/intruder-detection-system', label: 'Intruder Detection System' };
  if (categoryName.toLowerCase().includes('automation') || categoryName.toLowerCase().includes('wifi') || categoryName.toLowerCase().includes('conference') || categoryName.toLowerCase().includes('pa system')) return { href: '/solutions/office-home-automations', label: 'Office & Home Automations' };
  if (categoryName.toLowerCase().includes('command')) return { href: '/solutions/command-control-room', label: 'Command Control Room' };
  return { href: '/solutions', label: 'Solutions' };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const slug = await params.slug;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const { href: backHref, label: backLabel } = getBackHrefAndLabel(product.category);

  return (
    <div className="bg-gradient-to-b from-background to-secondary/30 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <Button variant="outline" asChild className="mb-8 group hover:bg-primary/10 hover:border-primary">
          <Link href={backHref}>
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
            <span className="group-hover:text-primary transition-colors">Back to {backLabel}</span>
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