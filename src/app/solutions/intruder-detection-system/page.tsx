"use client";
import React, { Suspense } from 'react';
import { IntruderDetectionCategories } from "@/components/IntruderDetectionCategories";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ArrowLeft, Filter, ArrowRight, Bell, CheckCircle, Building2, Settings, Users2, HelpCircle } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const intruderDetectionCategories = [
  "Perimeter Security",
  "Intrusion Alarms",
  "Smart Sensors",
  "ANIDERS",
  "KyNet Net Gun",
  "Smart Stick & Drone"
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

function IntruderDetectionSystemPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const category = searchParams.get('category');
  const selectedCategory = category ? decodeURIComponent(category) : 'all';

  // Filter products for intruder detection
  const intruderProducts = products.filter(product => {
    const matchesQuery = query
      ? product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
        product.longDescription.toLowerCase().includes(query.toLowerCase())
      : true;

    // Check if product matches the selected category
    const matchesSelectedCategory = selectedCategory === 'all'
      ? intruderDetectionCategories.includes(product.category)
      : product.category === selectedCategory;

    return matchesQuery && matchesSelectedCategory;
  });

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-gradient-to-b from-[#FFF2EB] to-[#F2F2F2] z-0" />
      <div className="relative z-10">
        {/* Hero Banner Section */}
        <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden group">
          {/* Background Images with Transition */}
          <div className="absolute inset-0">
            <Image
              src="/Solutions/Intruder/banner.jpg"
              alt="Intruder Detection System Solutions"
              fill
              className="object-cover brightness-[0.7] transition-opacity duration-2000 animate-carousel-1"
              priority
            />
            <Image
              src="/Solutions/Intruder/banner2.jpg"
              alt="Intruder Detection System Solutions"
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
              {selectedCategory === 'all' ? 'Intruder Detection System' : selectedCategory}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 animate-fade-up animation-delay-200">
              {selectedCategory === 'all' 
                ? "Advanced security solutions that detect, deter, and protect against unauthorized access and intrusions."
                : `Browse our selection of ${selectedCategory.toLowerCase()} products and solutions designed to meet your security requirements.`}
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-red-600/90 hover:bg-red-600 text-white group animate-fade-up animation-delay-300 transition-all duration-300 hover:scale-105"
            >
              <Link href="#products" className="flex items-center">
                Explore Our Products
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Intruder Detection Description Section */}
        <section className="relative py-20 bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-sm">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent font-heading">
                  Comprehensive Intrusion Protection
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-400 mx-auto rounded-full"></div>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-12 text-center font-light leading-relaxed">
                  Our state-of-the-art intruder detection systems combine multiple layers of security to provide 
                  early warning and immediate response capabilities, ensuring your premises remain secure 24/7.
                </p>
                <div className="grid md:grid-cols-2 gap-10 mt-12">
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-6 text-red-600 font-heading flex items-center">
                      <span className="bg-red-100 p-3 rounded-lg mr-4">
                        <Bell className="h-6 w-6 text-red-600" />
                      </span>
                      Detection Features
                    </h3>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Motion detection sensors</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Glass break detection</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Perimeter protection</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">24/7 monitoring capability</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Instant alert notifications</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-6 text-red-600 font-heading flex items-center">
                      <span className="bg-red-100 p-3 rounded-lg mr-4">
                        <Building2 className="h-6 w-6 text-red-600" />
                      </span>
                      Applications
                    </h3>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Commercial buildings and offices</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Industrial facilities and warehouses</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Residential complexes</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Educational institutions</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Government facilities</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-16 bg-red-50 rounded-2xl p-8 border border-red-100">
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    Our intruder detection systems are customized to your specific security requirements and come with comprehensive support:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="flex items-center space-x-3 text-red-700">
                      <Settings className="h-5 w-5" />
                      <span className="font-semibold">Expert Installation</span>
                    </div>
                    <div className="flex items-center space-x-3 text-red-700">
                      <Users2 className="h-5 w-5" />
                      <span className="font-semibold">Staff Training</span>
                    </div>
                    <div className="flex items-center space-x-3 text-red-700">
                      <HelpCircle className="h-5 w-5" />
                      <span className="font-semibold">Emergency Support</span>
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

          {/* Categories Section - Only show when no category is selected */}
          {selectedCategory === 'all' && (
            <div className="mb-12">
              <IntruderDetectionCategories />
            </div>
          )}

          {/* Products Section */}
          {intruderProducts.length > 0 ? (
            <div className={cn(
              selectedCategory === 'all' ? "border-t border-border/50 pt-12" : ""
            )}>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-6 text-center">
                {selectedCategory === 'all' ? 'Available Intruder Detection Products' : `Available ${selectedCategory} Products`}
              </h2>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {intruderProducts.map((product) => {
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
                <Link href="/solutions/intruder-detection-system">Clear Filters</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function IntruderDetectionSystemPage() {
  return (
    <Suspense>
      <IntruderDetectionSystemPageInner />
    </Suspense>
  );
} 