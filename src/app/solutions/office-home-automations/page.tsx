import React from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Home, CheckCircle, Building2, Settings, Users2, HelpCircle, Wifi, Phone, Video } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Metadata } from 'next';
import { OfficeAutomationCategories } from "@/components/OfficeAutomationCategories";

const automationCategories = [
  "Wifi solutions",
  "Conference room solutions",
  "PA system"
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
  title: 'Office & Home Automation Solutions | GenX Security',
  description: 'Smart automation solutions including WiFi systems, conference room solutions, and PA systems for modern offices and homes.',
};

interface OfficeHomeAutomationsPageProps {
  searchParams: { query?: string; category?: string };
}

export default function OfficeHomeAutomationsPage({ searchParams }: OfficeHomeAutomationsPageProps) {
  const query = searchParams.query ?? '';
  const category = searchParams.category;
  const selectedCategory = category ? decodeURIComponent(category) : 'all';

  // Filter products for office and home automation
  const automationProducts = products.filter(product => 
    automationCategories.includes(product.category)
  );

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-gradient-to-b from-[#E0F7FA] to-[#F2F2F2] z-0" />
      <div className="relative z-10">
        {/* Hero Banner Section */}
        <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden group">
          {/* Background Images with Transition */}
          <div className="absolute inset-0">
            <Image
              src="/Solutions/Automation/banner.png"
              alt="Office & Home Automation Solutions"
              fill
              className="object-cover brightness-[0.7] transition-opacity duration-2000 animate-carousel-1"
              priority
            />
            <Image
              src="/Solutions/Automation/banner10.png"
              alt="Office & Home Automation Solutions"
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
              Office & Home Automation Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 animate-fade-up animation-delay-200">
              Smart automation solutions for modern offices and homes. From WiFi systems to conference rooms, we bring intelligent technology to your space.
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

        {/* Office & Home Automation Description Section */}
        <section className="relative py-20 bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-sm">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-400 bg-clip-text text-transparent font-heading">
                  Smart Automation Solutions
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto rounded-full"></div>
              </div>
              <div className="prose prose-lg max-w-none">
                {/* Desktop long description only */}
                <p className="text-xl text-gray-700 mb-12 text-center font-light leading-relaxed hidden md:block">
                  Our comprehensive office and home automation solutions are designed to enhance productivity, 
                  comfort, and efficiency. From smart WiFi systems to advanced conference room setups and 
                  public address systems, we provide cutting-edge automation technology that transforms 
                  your space into a connected, intelligent environment.
                </p>
              </div>
                <div className="grid md:grid-cols-2 gap-10 mt-12">
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-6 text-cyan-600 font-heading flex items-center">
                      <span className="bg-cyan-100 p-3 rounded-lg mr-4">
                        <Home className="h-6 w-6 text-cyan-600" />
                      </span>
                      Key Features
                    </h3>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Smart WiFi connectivity and management</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Advanced conference room solutions</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Integrated PA and communication systems</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Remote control and automation</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Energy-efficient smart solutions</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-6 text-cyan-600 font-heading flex items-center">
                      <span className="bg-cyan-100 p-3 rounded-lg mr-4">
                        <Building2 className="h-6 w-6 text-cyan-600" />
                      </span>
                      Applications
                    </h3>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Modern office buildings and workspaces</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Smart homes and residential complexes</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Conference centers and meeting rooms</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Educational institutions</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Retail and commercial spaces</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-16 bg-cyan-50 rounded-2xl p-8 border border-cyan-100">
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    Our automation solutions are designed to provide seamless integration while being easy to use and maintain. 
                    Every system we install comes with:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="flex items-center space-x-3 text-cyan-700">
                      <Settings className="h-5 w-5" />
                      <span className="font-semibold">Expert Installation</span>
                    </div>
                    <div className="flex items-center space-x-3 text-cyan-700">
                      <Users2 className="h-5 w-5" />
                      <span className="font-semibold">Staff Training</span>
                    </div>
                    <div className="flex items-center space-x-3 text-cyan-700">
                      <HelpCircle className="h-5 w-5" />
                      <span className="font-semibold">Technical Support</span>
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

          {/* Categories Section */}
          <div className="mb-12">
            <OfficeAutomationCategories />
          </div>

          {/* Products Section */}
          <div className="border-t border-border/50 pt-12">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-6 text-center">
              Available Automation Products
            </h2>
            <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 md:gap-6">
              {automationProducts.map((product) => {
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
        </div>
      </div>
    </div>
  );
}

 