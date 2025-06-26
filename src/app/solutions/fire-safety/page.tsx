"use client"

import { FireSafetyCategories } from "@/components/FireSafetyCategories";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ArrowLeft, Filter, ArrowRight, Flame, CheckCircle, Building2, Settings, Users2, HelpCircle } from "lucide-react";
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

const fireSafetyCategories = [
  "Fire Extinguisher",
  "Fire Hydrant System",
  "Fire Alarm System",
  "Fire Suppression System"
];

export default function FireSafetyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const category = searchParams.get('category');
  const selectedCategory = category ? decodeURIComponent(category) : 'all';

  // Filter products for fire safety
  const fireSafetyProducts = products.filter(product => {
    const matchesQuery = query
      ? product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
        product.longDescription.toLowerCase().includes(query.toLowerCase())
      : true;

    // Check if product matches the selected category
    const matchesSelectedCategory = selectedCategory === 'all'
      ? fireSafetyCategories.includes(product.category)
      : product.category === selectedCategory;

    return matchesQuery && matchesSelectedCategory;
  });

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-gradient-to-b from-[#FFC785] to-[#F2F2F2] z-0" />
      <div className="relative z-10">
        {/* Hero Banner Section */}
        <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden group">
          {/* Background Images with Transition */}
          <div className="absolute inset-0">
            <Image
              src="/Solutions/FireSafety/banner.jpg"
              alt="Fire Safety Solutions"
              fill
              className="object-cover brightness-[0.7] transition-opacity duration-2000 animate-carousel-1"
              priority
            />
            <Image
              src="/Solutions/FireSafety/banner2.jpg"
              alt="Fire Safety Solutions"
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
              {selectedCategory === 'all' ? 'Fire Safety Solutions' : selectedCategory}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 animate-fade-up animation-delay-200">
              {selectedCategory === 'all' 
                ? "Protecting lives and property with comprehensive fire safety systems. From prevention to emergency response, we've got you covered."
                : `Browse our selection of ${selectedCategory.toLowerCase()} products and solutions designed to meet your safety requirements.`}
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

        {/* Fire Safety Description Section */}
        <section className="relative py-20 bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-sm">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent font-heading">
                  Advanced Fire Safety Solutions
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto rounded-full"></div>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-12 text-center font-light leading-relaxed">
                  Our comprehensive fire safety systems are designed to protect lives and property with state-of-the-art 
                  detection, alarm, and suppression technologies. We provide end-to-end fire safety solutions that meet 
                  and exceed industry standards and regulatory requirements.
                </p>
                <div className="grid md:grid-cols-2 gap-10 mt-12">
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-6 text-orange-600 font-heading flex items-center">
                      <span className="bg-orange-100 p-3 rounded-lg mr-4">
                        <Flame className="h-6 w-6 text-orange-600" />
                      </span>
                      Key Features
                    </h3>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Early fire detection systems</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Automated fire suppression</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Emergency evacuation systems</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">24/7 monitoring capabilities</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Integration with building management systems</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-6 text-orange-600 font-heading flex items-center">
                      <span className="bg-orange-100 p-3 rounded-lg mr-4">
                        <Building2 className="h-6 w-6 text-orange-600" />
                      </span>
                      Applications
                    </h3>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Commercial buildings and offices</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Industrial facilities and warehouses</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Healthcare facilities</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Educational institutions</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">Residential complexes</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-16 bg-orange-50 rounded-2xl p-8 border border-orange-100">
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    Our fire safety solutions are designed to provide comprehensive protection while being easy to use and maintain. 
                    Every system we install comes with:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="flex items-center space-x-3 text-orange-700">
                      <Settings className="h-5 w-5" />
                      <span className="font-semibold">Expert Installation</span>
                    </div>
                    <div className="flex items-center space-x-3 text-orange-700">
                      <Users2 className="h-5 w-5" />
                      <span className="font-semibold">Staff Training</span>
                    </div>
                    <div className="flex items-center space-x-3 text-orange-700">
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

          {/* Search and Filter Section */}
          <div id="products" className="mb-12">
            <form className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6" action="/solutions/fire-safety">
              <div className="lg:col-span-2">
                <label htmlFor="searchQuery" className="block text-sm font-medium text-foreground mb-1.5">Search Products</label>
                <Input
                  type="text"
                  id="searchQuery"
                  name="query"
                  placeholder="Search fire safety products..."
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
                    router.push(`/solutions/fire-safety?${paramsObj.toString()}`);
                  }}
                >
                  <SelectTrigger id="categoryFilter" className="w-full h-11 text-base">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {fireSafetyCategories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full lg:col-span-1 bg-primary hover:bg-primary/90 text-primary-foreground h-11 text-base mt-auto">
                <Filter className="mr-2 h-5 w-5" /> Apply Filters
              </Button>
            </form>
          </div>

          {/* Categories Section - Only show when no category is selected */}
          {selectedCategory === 'all' && (
            <div className="mb-12">
              <FireSafetyCategories />
            </div>
          )}

          {/* Products Section */}
          {fireSafetyProducts.length > 0 ? (
            <div className={cn(
              selectedCategory === 'all' ? "border-t border-border/50 pt-12" : ""
            )}>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-6 text-center">
                {selectedCategory === 'all' ? 'Available Fire Safety Products' : `Available ${selectedCategory} Products`}
              </h2>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {fireSafetyProducts.map((product) => {
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
                <Link href="/solutions/fire-safety">Clear Filters</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 