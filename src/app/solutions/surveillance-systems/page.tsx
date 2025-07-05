import React from 'react';
import { SurveillanceCategories } from "@/components/SurveillanceCategories";
import { SurveillanceSearch } from "@/components/SurveillanceSearch";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Video, CheckCircle, Building2, Settings, Users2, HelpCircle } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Metadata } from 'next';

const surveillanceCategories = [
  "CCTV Cameras",
  "Voice Logger",
  "HPC"
];

// Add main categories array
const mainCategoryNames = [
  "Surveillance Systems",
  "Fire & Emergency System",
  "Access Control",
  "Office & Home Automations",
  "Intruder Detection System",
  "Command Control Room"
];

export const metadata: Metadata = {
  title: 'Surveillance Systems | GenX Security',
  description: 'Advanced surveillance solutions including CCTV cameras, voice loggers, and HPC systems for comprehensive security monitoring.',
};

interface SurveillanceSystemsPageProps {
  searchParams: { query?: string; category?: string };
}

export default function SurveillanceSystemsPage({ searchParams }: SurveillanceSystemsPageProps) {
  const query = searchParams.query ?? '';
  const category = searchParams.category;
  const selectedCategory = category ? decodeURIComponent(category) : 'all';

  // Filter products for surveillance systems
  const surveillanceProducts = products.filter(product => {
    const matchesQuery = query
      ? product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
        product.longDescription.toLowerCase().includes(query.toLowerCase())
      : true;

    // Check if product matches the selected category
    const matchesSelectedCategory = selectedCategory === 'all'
      ? surveillanceCategories.includes(product.category)
      : product.category === selectedCategory;

    return matchesQuery && matchesSelectedCategory;
  });

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-gradient-to-b from-[#FFF8E1] to-[#F2F2F2] z-0" />
      <div className="relative z-10">
        {/* Hero Banner Section */}
        <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden group">
          {/* Background Images with Transition */}
          <div className="absolute inset-0">
            <Image
              src="/Solutions/Surveillance/banner.jpg"
              alt="Surveillance Systems Solutions"
              fill
              className="object-cover brightness-[0.7] transition-opacity duration-2000 animate-carousel-1"
              priority
            />
            <Image
              src="/Solutions/Surveillance/banner10.jpg"
              alt="Surveillance Systems Solutions"
              fill
              className="object-cover brightness-[0.7] transition-opacity duration-2000 animate-carousel-2"
              priority
            />
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent" />
          
          {/* Content */}
          <div className="relative h-full container mx-auto px-4 md:px-6 flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 animate-fade-up">
              {selectedCategory === 'all' ? 'Surveillance Systems Solutions' : selectedCategory}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 animate-fade-up animation-delay-200">
              {selectedCategory === 'all' 
                ? "Advanced monitoring solutions for comprehensive security. From CCTV to voice logging, we ensure complete surveillance coverage."
                : `Browse our selection of ${selectedCategory.toLowerCase()} products and solutions designed to meet your security requirements.`}
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-primary/90 hover:bg-primary text-white group animate-fade-up animation-delay-300 transition-all duration-300 hover:scale-105"
            >
              <Link href="#products" className="flex items-center">
                Explore Our Products
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Surveillance Systems Description Section */}
        <section className="relative py-20 bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-sm">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 bg-clip-text text-transparent font-heading">
                  Advanced Surveillance Solutions
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-400 mx-auto rounded-full"></div>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-12 text-center font-light leading-relaxed">
                  Our comprehensive surveillance systems are designed to provide complete security monitoring with state-of-the-art 
                  cameras, recording systems, and analytics. We provide end-to-end surveillance solutions that meet 
                  and exceed industry standards and security requirements.
                </p>
                <div className="grid md:grid-cols-2 gap-10 mt-12">
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-6 text-yellow-600 font-heading flex items-center">
                      <span className="bg-yellow-100 p-3 rounded-lg mr-4">
                        <Video className="h-6 w-6 text-yellow-600" />
                      </span>
                      Key Features
                    </h3>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">High-definition video recording</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">24/7 monitoring capabilities</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Remote access and control</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Advanced analytics and AI</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Integration with security systems</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-6 text-yellow-600 font-heading flex items-center">
                      <span className="bg-yellow-100 p-3 rounded-lg mr-4">
                        <Building2 className="h-6 w-6 text-yellow-600" />
                      </span>
                      Applications
                    </h3>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Commercial buildings and offices</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Industrial facilities and warehouses</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Retail stores and shopping centers</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Educational institutions</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Residential complexes</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-16 bg-yellow-50 rounded-2xl p-8 border border-yellow-100">
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    Our surveillance solutions are designed to provide comprehensive monitoring while being easy to use and maintain. 
                    Every system we install comes with:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="flex items-center space-x-3 text-yellow-700">
                      <Settings className="h-5 w-5" />
                      <span className="font-semibold">Expert Installation</span>
                    </div>
                    <div className="flex items-center space-x-3 text-yellow-700">
                      <Users2 className="h-5 w-5" />
                      <span className="font-semibold">Staff Training</span>
                    </div>
                    <div className="flex items-center space-x-3 text-yellow-700">
                      <HelpCircle className="h-5 w-5" />
                      <span className="font-semibold">Technical Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-6 py-12">
          <Button variant="outline" asChild className="mb-8 group hover:bg-primary/10 hover:border-primary">
            <Link href="/solutions">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
              <span className="group-hover:text-primary transition-colors">Back to Solutions</span>
            </Link>
          </Button>

          {/* Search Component */}
          <SurveillanceSearch />

          {/* Categories Section - Only show when no category is selected */}
          {selectedCategory === 'all' && (
            <div className="mb-12">
              <SurveillanceCategories />
            </div>
          )}

          {/* Products Section */}
          {surveillanceProducts.length > 0 ? (
            <div className={cn(
              selectedCategory === 'all' ? "border-t border-border/50 pt-12" : ""
            )}>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-6 text-center">
                {selectedCategory === 'all' ? 'Available Surveillance Products' : `Available ${selectedCategory} Products`}
              </h2>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {surveillanceProducts.map((product) => {
                  const { icon, ...productFieldsForCard } = product;
                  return (
                    <div key={productFieldsForCard.id} className="w-full max-w-xs">
                      <ProductCard 
                        product={productFieldsForCard} 
                        isVisible={true} 
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="text-center py-12 bg-card rounded-lg shadow border mt-12">
              <p className="text-xl text-muted-foreground mb-2">No products found matching your criteria.</p>
              <p className="text-sm text-muted-foreground mb-4">Try adjusting your search or filters.</p>
              <Button variant="link" asChild className="text-primary">
                <Link href="/solutions/surveillance-systems">Clear Filters</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


 