import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface FireSafetyPageProps {
  params: { category: string };
}

const categoryData = {
  "fire-extinguisher": {
    title: "Fire Extinguishers",
    description: "Our range of fire extinguishers includes various types suitable for different classes of fires. From ABC powder extinguishers to CO2 and foam-based solutions, we provide the right equipment for your specific needs.",
    content: `We offer a comprehensive selection of fire extinguishers designed to combat different types of fires effectively. Our range includes:

• Dry Chemical Powder (ABC) Extinguishers
• Carbon Dioxide (CO2) Extinguishers
• Foam-Based Extinguishers
• Water-Based Extinguishers
• Special Application Extinguishers

All our fire extinguishers comply with international safety standards and come with proper certification. We also provide training on proper usage and maintenance services.`
  },
  "fire-hydrant-system": {
    title: "Fire Hydrant Systems",
    description: "Complete fire hydrant systems designed to provide reliable water supply for firefighting. Our systems include internal and external hydrants, hose reels, and associated infrastructure.",
    content: `Our fire hydrant systems are engineered to deliver reliable water supply for firefighting operations. Key components include:

• External Fire Hydrants
• Internal Landing Valves
• Fire Hose Reels
• Pump Sets
• Water Storage Tanks
• Piping Network

We handle everything from system design to installation and regular maintenance, ensuring your system remains fully operational when needed.`
  },
  "fire-alarm-system": {
    title: "Fire Alarm Systems",
    description: "Advanced fire detection and alarm systems that provide early warning and help protect lives and property. From conventional to addressable systems, we offer solutions for all building types.",
    content: `Our fire alarm systems utilize cutting-edge technology to provide early detection and warning. System components include:

• Smoke Detectors
• Heat Detectors
• Manual Call Points
• Sounders and Strobes
• Fire Alarm Control Panels
• Emergency Voice Communication

We provide both conventional and addressable systems, with options for integration with building management systems.`
  },
  "fire-suppression-system": {
    title: "Fire Suppression Systems",
    description: "Automated fire suppression systems designed to detect and extinguish fires quickly. We offer various types of suppression systems suitable for different applications.",
    content: `Our fire suppression systems are designed to automatically detect and suppress fires in their early stages. We offer:

• Clean Agent Systems
• FM-200 Systems
• CO2 Systems
• Water Mist Systems
• Foam Suppression Systems
• Kitchen Fire Suppression Systems

Each system is carefully designed according to the specific requirements of your facility and the type of fire risks present.`
  }
};

export async function generateMetadata({ params }: FireSafetyPageProps): Promise<Metadata> {
  const category = categoryData[params.category as keyof typeof categoryData];
  
  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.title} | Fire Safety Solutions | GenX Security`,
    description: category.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(categoryData).map((category) => ({
    category,
  }));
}

export default function FireSafetyCategoryPage({ params }: FireSafetyPageProps) {
  const category = categoryData[params.category as keyof typeof categoryData];

  if (!category) {
    notFound();
  }

  return (
    <div className="bg-gradient-to-b from-background to-secondary/30 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <Button variant="outline" asChild className="mb-8 group hover:bg-primary/10 hover:border-primary">
          <Link href="/solutions/fire-safety">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
            <span className="group-hover:text-primary transition-colors">Back to Fire Safety</span>
          </Link>
        </Button>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">
            {category.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            {category.description}
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {category.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12">
            <Button size="lg" asChild>
              <Link href="/contact">
                Request More Information
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 