import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, Camera, Users2, CheckCircle, Settings, Rss, HelpCircle, Building2, Radar } from "lucide-react";
import { cn } from "@/lib/utils";
import { products, solutionCategoriesData } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';
import type { Product as FullProductType } from '@/types';
import { SolutionCategoryCard } from '@/components/SolutionCategoryCard';
import React from 'react';
import { Metadata } from 'next';

const commandControlRoomSubCategoryNames = [
  "Remote Surveillance and Monitoring Solutions",
  "AI Powered Analytics for Proactive Threat Detection",
  "Centralized Control Room Setup"
];

// Get all main solution categories (top-level only, not sub-categories)
const mainCategoryNames = solutionCategoriesData
  .filter(cat => !commandControlRoomSubCategoryNames.includes(cat.name) && !cat.name.includes('CCTV') && !cat.name.includes('DVR') && !cat.name.includes('Voice Logger') && !cat.name.includes('HPC'))
  .map(cat => cat.name);

export const metadata: Metadata = {
  title: 'Command Control Room Solutions | GenX Security',
  description: 'Centralized, intelligent, and proactive security management solutions with AI-powered analytics and remote monitoring.',
};

interface CommandControlRoomPageProps {
  searchParams: { query?: string; category?: string };
}

export default function CommandControlRoomPage({ searchParams }: CommandControlRoomPageProps) {
  const query = searchParams.query ?? '';
  const category = searchParams.category;
  const selectedCategory = category ? decodeURIComponent(category) : 'all';

  // Filter products for command control room
  const productsToDisplay: FullProductType[] = products.filter(product => 
    commandControlRoomSubCategoryNames.includes(product.category)
  );

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-gradient-to-b from-[#578FCA] to-[#F2F2F2] z-0" />
      <div className="relative z-10">
        <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden group">
          <div className="absolute inset-0">
            <Image
              src="/Solutions/Command/banner.jpg"
              // src="/Solutions/Command/banner2.jpg" // Alternate banner, uncomment to use
              alt="Command Control Room Banner"
              fill
              className="object-cover brightness-[0.7] transition-transform duration-1000 group-hover:scale-105"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 via-blue-700/70 to-transparent" />
          <div className="relative h-full container mx-auto px-4 md:px-6 flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 animate-fade-up">
              Command Control Room Solutions
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8 animate-fade-up animation-delay-200">
              Centralized, intelligent, and proactive security management for modern organizations.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-blue-600/90 hover:bg-blue-600 text-white group animate-fade-up animation-delay-300 transition-all duration-300 hover:scale-105"
            >
              <Link href="#products" className="flex items-center">
                Explore Our Solutions
                <Building2 className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
        <section className="relative py-20 bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-sm">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent font-heading">
                  Next-Gen Command & Control
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto rounded-full"></div>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-12 text-center font-light leading-relaxed">
                  Our Command Control Room solutions empower organizations with real-time situational awareness, AI-driven analytics, and seamless coordination for rapid response and operational excellence.
                </p>
                <div className="grid md:grid-cols-2 gap-10 mt-12">
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-6 text-blue-600 font-heading flex items-center">
                      <span className="bg-blue-50 p-3 rounded-lg mr-4">
                        <Camera className="h-6 w-6 text-blue-600" />
                      </span>
                      Monitoring & Surveillance
                    </h3>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Remote video monitoring</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Multi-site integration</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Incident recording & playback</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Live dashboards</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-6 text-blue-600 font-heading flex items-center">
                      <span className="bg-blue-50 p-3 rounded-lg mr-4">
                        <Users2 className="h-6 w-6 text-blue-600" />
                      </span>
                      Centralized Operations
                    </h3>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Unified command interface</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Real-time alerts & notifications</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Role-based access control</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Collaboration tools</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-16 bg-blue-50 rounded-2xl p-8 border border-blue-100">
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    Our solutions are tailored for mission-critical environments and come with expert support:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="flex items-center space-x-3 text-blue-700">
                      <Settings className="h-5 w-5" />
                      <span className="font-semibold">Expert Setup</span>
                    </div>
                    <div className="flex items-center space-x-3 text-blue-700">
                      <Rss className="h-5 w-5" />
                      <span className="font-semibold">24/7 Monitoring</span>
                    </div>
                    <div className="flex items-center space-x-3 text-blue-700">
                      <HelpCircle className="h-5 w-5" />
                      <span className="font-semibold">Rapid Response</span>
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

          {/* Sub-Categories Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <SolutionCategoryCard category={{
              id: 'ai-analytics',
              name: 'AI Powered Analytics for Proactive Threat Detection',
              description: 'Leverage advanced AI analytics to identify and respond to threats before they escalate, ensuring proactive security management.',
              icon: Radar
            }} href={`/solutions/command-control-room/ai-powered-analytics-for-proactive-threat-detection`} />
            <SolutionCategoryCard category={{
              id: 'centralized-control',
              name: 'Centralized Control Room Setup',
              description: 'Integrate all your security systems into a single, centralized control room for seamless monitoring and rapid response.',
              icon: Building2
            }} href={`/solutions/command-control-room/centralized-control-room-setup`} />
            <SolutionCategoryCard category={{
              id: 'remote-surveillance',
              name: 'Remote Surveillance and Monitoring Solutions',
              description: 'Monitor your premises from anywhere with robust remote surveillance and real-time monitoring solutions.',
              icon: Camera
            }} href={`/solutions/command-control-room/remote-surveillance-and-monitoring-solutions`} />
          </div>



          {/* Products Grid */}
          {productsToDisplay.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {productsToDisplay.map((product) => {
                const { icon, ...productFieldsForCard } = product;
                return (
                  <ProductCard key={product.id} product={productFieldsForCard} />
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 bg-card rounded-lg shadow border">
              <p className="text-lg text-muted-foreground">No products found for this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

 