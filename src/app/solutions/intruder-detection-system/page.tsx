"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, Bell, Lock, CheckCircle, Settings, Rss, HelpCircle, Shield, Radio, Radar, Target, Plane, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { products } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';
import type { Product as FullProductType } from '@/types';
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

const intruderDetectionSubCategoryNames = [
  "Perimeter Security",
  "Intrusion Alarms",
  "Smart Sensors",
  "ANIDERS",
  "KyNet Net Gun",
  "Smart Stick & Drone"
];

export default function IntruderDetectionSystemPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const category = searchParams.get('category');
  const selectedCategory = category ? decodeURIComponent(category) : 'all';

  // Filter products for intruder detection
  const productsToDisplay: FullProductType[] = products.filter(product => {
    const matchesQuery = query
      ? product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
        product.longDescription.toLowerCase().includes(query.toLowerCase())
      : true;

    // Check if product matches the selected category
    const matchesSelectedCategory = selectedCategory === 'all'
      ? intruderDetectionSubCategoryNames.includes(product.category)
      : product.category === selectedCategory;

    return matchesQuery && matchesSelectedCategory;
  });

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-gradient-to-b from-[#FFF2EB] to-[#F2F2F2] z-0" />
      <div className="relative z-10">
        <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden group">
          <div className="absolute inset-0">
            <Image
              src="/Solutions/Surveillance/banner.jpg"
              alt="Intruder Detection System Banner"
              fill
              className="object-cover brightness-[0.6] transition-transform duration-1000 group-hover:scale-105"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-transparent" />
          <div className="relative h-full container mx-auto px-4 md:px-6 flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 animate-fade-up">
              Intruder Detection System
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 animate-fade-up animation-delay-200">
              Advanced security solutions that detect, deter, and protect against unauthorized access and intrusions.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-red-600/90 hover:bg-red-600 text-white group animate-fade-up animation-delay-300 transition-all duration-300 hover:scale-105"
            >
              <Link href="#products" className="flex items-center">
                Explore Our Solutions
                <AlertTriangle className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
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
                      <span className="bg-red-50 p-3 rounded-lg mr-4">
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
                      <span className="bg-red-50 p-3 rounded-lg mr-4">
                        <Lock className="h-6 w-6 text-red-600" />
                      </span>
                      Security Benefits
                    </h3>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Early threat detection</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Reduced false alarms</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Remote system management</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Integration with other systems</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Emergency response coordination</span>
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
                      <Rss className="h-5 w-5" />
                      <span className="font-semibold">24/7 Monitoring</span>
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
        {/* Product Categories Grid */}
        <div className="container mx-auto px-4 md:px-6 py-12">
          <Button variant="outline" asChild className="mb-8 group hover:bg-primary/10 hover:border-primary">
            <Link href="/solutions">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
              <span className="group-hover:text-primary transition-colors">Back to Solutions</span>
            </Link>
          </Button>

          {/* Search and Filter Section */}
          <div id="products" className="mb-12">
            <form className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6" action="/solutions/intruder-detection-system">
              <div className="lg:col-span-2">
                <label htmlFor="searchQuery" className="block text-sm font-medium text-foreground mb-1.5">Search Products</label>
                <Input
                  type="text"
                  id="searchQuery"
                  name="query"
                  placeholder="Search intruder detection products..."
                  defaultValue={query}
                  className="w-full h-11 text-base"
                />
              </div>

              <div className="lg:col-span-1">
                <label htmlFor="categoryFilter" className="block text-sm font-medium text-foreground mb-1.5">Filter by Category</label>
                <Select 
                  name="category" 
                  defaultValue={selectedCategory}
                  onValueChange={(value) => {
                    const paramsObj = new URLSearchParams(searchParams.toString());
                    if (value === 'all') {
                      paramsObj.delete('category');
                    } else {
                      paramsObj.set('category', value);
                    }
                    router.push(`/solutions/intruder-detection-system?${paramsObj.toString()}`);
                  }}
                >
                  <SelectTrigger id="categoryFilter" className="w-full h-11 text-base">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {intruderDetectionSubCategoryNames.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="lg:col-span-1 flex items-end">
                <Button type="submit" className="w-full h-11 text-base bg-red-600 hover:bg-red-700 text-white">
                  Search Products
                </Button>
              </div>
            </form>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {productsToDisplay.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            {productsToDisplay.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-lg text-gray-600">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 