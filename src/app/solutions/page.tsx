import { ProductCard } from '@/components/ProductCard';
import { products, solutionCategoriesData } from '@/lib/data';
import type { Metadata } from 'next';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import Link from 'next/link';
import { redirect } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Product as FullProductType, SolutionCategory } from '@/types';
import { SolutionCategoryCard } from '@/components/SolutionCategoryCard';
import Image from "next/image";
import { AccessControlCategories } from "@/components/AccessControlCategories";
import { OfficeAutomationCategories } from "@/components/OfficeAutomationCategories";

export const metadata: Metadata = {
  title: 'Our Security Solutions',
  description: 'Explore a wide range of security solutions including CCTV cameras, DVRs, NVRs, access control systems, fire safety, intruder detection, and more from GenX Secure.',
};

export default function SolutionsPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    category?: string;
  };
}) {
  const query = searchParams?.query || '';
  const selectedCategoryForFilter = (searchParams?.category && searchParams.category !== '') ? decodeURIComponent(searchParams.category) : 'all';

  const surveillanceSubCategoryNames = ["CCTV Cameras", "Voice Logger", "HPC"];
  const fireSafetySubCategoryNames = ["Fire Extinguisher", "Fire Hydrant System", "Fire Alarm System", "Fire Suppression System"];
  const mainDisplayCategoryNames = [
    "Surveillance Systems",
    "Fire & Emergency System",
    "Access Control",
    "Office & Home Automations",
    "Intruder Detection System",
    "Command Control Room"
  ];

  const accessControlSubCategoryNames = [
    "Attendance System",
    "Turnstiles",
    "Door Automation"
  ];

  const officeAutomationSubCategoryNames = [
    "Wifi solutions",
    "Conference room solutions",
    "PA system"
  ];

  const isSurveillanceSystemView = selectedCategoryForFilter === "Surveillance Systems" && !query;
  const isFireSafetyView = selectedCategoryForFilter === "Fire & Emergency System" && !query;
  const isAllCategoriesView = selectedCategoryForFilter === 'all' && !query;
  const isAccessControlSubCategoryView = accessControlSubCategoryNames.includes(selectedCategoryForFilter);
  const isAccessControlView = selectedCategoryForFilter === 'Access Control' && !query;
  const isOfficeAutomationView = selectedCategoryForFilter === 'Office & Home Automations' && !query;

  if (isFireSafetyView) {
    redirect('/solutions/fire-safety');
  }

  let productsToDisplay: FullProductType[] = [];
  let topLevelCategoryCardsToDisplay: SolutionCategory[] = [];
  let subCategoryCardsForSurveillance: SolutionCategory[] = [];

  if (isSurveillanceSystemView) {
    subCategoryCardsForSurveillance = solutionCategoriesData.filter(cat =>
      surveillanceSubCategoryNames.includes(cat.name)
    ).sort((a,b) => surveillanceSubCategoryNames.indexOf(a.name) - surveillanceSubCategoryNames.indexOf(b.name)); 

    productsToDisplay = products.filter(product =>
      surveillanceSubCategoryNames.includes(product.category)
    );
  } else if (isAllCategoriesView) {
    topLevelCategoryCardsToDisplay = solutionCategoriesData.filter(cat =>
      mainDisplayCategoryNames.includes(cat.name)
    ).sort((a,b) => mainDisplayCategoryNames.indexOf(a.name) - mainDisplayCategoryNames.indexOf(b.name)); 
  } else { 
    productsToDisplay = products.filter(product => {
      const matchesQuery = query
        ? product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
          product.longDescription.toLowerCase().includes(query.toLowerCase())
        : true;

      let matchesCategory = false;
      if (selectedCategoryForFilter === 'all') {
        matchesCategory = true;
      } else if (selectedCategoryForFilter === "Surveillance Systems") { 
        matchesCategory = surveillanceSubCategoryNames.includes(product.category);
      } else {
        matchesCategory = product.category === selectedCategoryForFilter;
      }
      return matchesQuery && matchesCategory;
    });
  }

  if (selectedCategoryForFilter === "Access Control" && !query) {
    productsToDisplay = products.filter(product =>
      [
        "Attendance System",
        "Turnstiles",
        "Door Automation"
      ].includes(product.category)
    );
  }

  if (selectedCategoryForFilter === "Office & Home Automations" && !query) {
    productsToDisplay = products.filter(product =>
      officeAutomationSubCategoryNames.includes(product.category)
    );
  }

  const filterDropdownCategories = Array.from(new Set(products.map(p => p.category)));
  
  const showNoProductsMessage = 
    !isAllCategoriesView && 
    productsToDisplay.length === 0 &&
    (!isSurveillanceSystemView || (isSurveillanceSystemView && subCategoryCardsForSurveillance.length === 0 && productsToDisplay.length === 0));

  return (
    <div className="relative min-h-screen">
      {/* Conditionally apply the gradient background */}
      {(isAccessControlView || isSurveillanceSystemView || isOfficeAutomationView) ? (
        <div className="fixed inset-0 bg-gradient-to-b from-[#EAE4D5] to-[#F2F2F2] z-0" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30 z-0" />
      )}

      {/* Main content container */}
      <div className="relative z-10">
        {/* Surveillance Systems Hero Banner */}
        {isSurveillanceSystemView && (
          <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden group">
            {/* Background Images with Transition */}
            <div className="absolute inset-0">
              <Image
                src="/Solutions/Surveillance/banner.jpg"
                alt="Surveillance Systems Banner"
                fill
                className="object-cover brightness-[0.7] transition-opacity duration-2000 animate-carousel-1"
                priority
              />
              <Image
                src="/Solutions/Surveillance/banner2.jpg"
                alt="Surveillance Systems Banner 2"
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
                Surveillance Systems
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 animate-fade-up animation-delay-200">
                Advanced monitoring and security solutions for every environment. Protect your assets with cutting-edge surveillance technology.
              </p>
              <Button 
                asChild
                size="lg"
                className="bg-primary/90 hover:bg-primary text-white group animate-fade-up animation-delay-300 transition-all duration-300 hover:scale-105"
              >
                <Link href="#products" className="flex items-center">
                  Explore Our Products
                  <Filter className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        )}

        {/* Access Control Hero Banner */}
        {isAccessControlView && (
          <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden group">
            {/* Background Images with Transition */}
            <div className="absolute inset-0">
              <Image
                src="/Solutions/Access Control/banner.png"
                alt="Access Control Banner"
                fill
                className="object-cover brightness-[0.7] transition-opacity duration-2000 animate-carousel-1"
                priority
              />
              <Image
                src="/Solutions/Access Control/banner2.png"
                alt="Access Control Banner 2"
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
                Access Control
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 animate-fade-up animation-delay-200">
                Secure your premises with advanced access control solutions for every environment.
              </p>
              <Button 
                asChild
                size="lg"
                className="bg-primary/90 hover:bg-primary text-white group animate-fade-up animation-delay-300 transition-all duration-300 hover:scale-105"
              >
                <Link href="#products" className="flex items-center">
                  Explore Our Products
                  <Filter className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        )}

        {/* Office & Home Automations Hero Banner */}
        {isOfficeAutomationView && (
          <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden group">
            {/* Background Images with Transition */}
            <div className="absolute inset-0">
              <Image
                src="/Solutions/Automation/banner.png"
                alt="Office & Home Automations Banner"
                fill
                className="object-cover brightness-[0.7] transition-opacity duration-2000 animate-carousel-1"
                priority
              />
              <Image
                src="/Solutions/Automation/banner2.png"
                alt="Office & Home Automations Banner 2"
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
                Office & Home Automations
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 animate-fade-up animation-delay-200">
                Smart automation solutions for offices and homes, enhancing comfort, security, and efficiency.
              </p>
              <Button 
                asChild
                size="lg"
                className="bg-primary/90 hover:bg-primary text-white group animate-fade-up animation-delay-300 transition-all duration-300 hover:scale-105"
              >
                <Link href="#products" className="flex items-center">
                  Explore Our Products
                  <Filter className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        )}

        <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="bg-card rounded-xl shadow-lg border p-4 md:p-6 mb-8 md:mb-12">
            <form className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6" action="/solutions">
              <div className="lg:col-span-2">
                <label htmlFor="searchQuery" className="block text-sm font-medium text-foreground mb-1.5">Search Products</label>
                <Input
                  type="text"
                  id="searchQuery"
                  name="query"
                  placeholder="e.g., Advanced CCTV, Smoke Detector"
                  defaultValue={query}
                  className="w-full h-11 text-base"
                />
              </div>

              <div className="lg:col-span-1">
                <label htmlFor="categoryFilter" className="block text-sm font-medium text-foreground mb-1.5">Filter by Category</label>
                <Select 
                  name="category" 
                  defaultValue={selectedCategoryForFilter}
                >
                  <SelectTrigger id="categoryFilter" className="w-full h-11 text-base">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    { !filterDropdownCategories.includes("Surveillance Systems") && 
                      solutionCategoriesData.find(cat => cat.name === "Surveillance Systems") && (
                      <SelectItem value="Surveillance Systems">Surveillance Systems (All)</SelectItem>
                    )}
                    {filterDropdownCategories.sort().map(cat => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
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
          {isAccessControlView && (
            <div className="mb-12">
              <AccessControlCategories />
            </div>
          )}

          {isOfficeAutomationView && (
            <div className="mb-12">
              <OfficeAutomationCategories />
            </div>
          )}

          {isSurveillanceSystemView && subCategoryCardsForSurveillance.length > 0 && (
            <div className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 md:mb-8 text-center">
                Explore {selectedCategoryForFilter}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {subCategoryCardsForSurveillance.map((category) => (
                  <SolutionCategoryCard key={category.id} category={category} />
                ))}
              </div>
            </div>
          )}

          {isAllCategoriesView && topLevelCategoryCardsToDisplay.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 mb-12">
              {topLevelCategoryCardsToDisplay.map((category) => (
                <SolutionCategoryCard key={category.id} category={category} />
              ))}
            </div>
          )}
          
          {productsToDisplay.length > 0 && (
            <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 ${isSurveillanceSystemView ? 'mt-8 border-t border-border/50 pt-8' : ''}`}>
               {isSurveillanceSystemView && productsToDisplay.length > 0 && (
                  <h3 className="col-span-full text-xl md:text-2xl font-semibold text-foreground mb-2 text-center">
                      All Products under Surveillance Systems
                  </h3>
              )}
              {productsToDisplay.map((productData) => { 
                const { icon, ...productFieldsForCard } = productData; 
                return (
                  <ProductCard key={productFieldsForCard.id} product={productFieldsForCard} isVisible={true} />
                );
              })}
            </div>
          )}

          {showNoProductsMessage && (
            <div className="text-center py-12 bg-card rounded-lg shadow border">
              <p className="text-xl text-muted-foreground mb-2">No products found matching your criteria.</p>
              <p className="text-sm text-muted-foreground mb-4">Try adjusting your search or filters.</p>
              <Button variant="link" asChild className="text-primary">
                <Link href="/solutions">Clear Filters & View Categories</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
