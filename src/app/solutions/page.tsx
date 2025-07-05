"use client";
import React, { useState, Suspense, useEffect } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { products, solutionCategoriesData } from '@/lib/data';
import type { Metadata } from 'next';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Camera, Building2, CheckCircle, Settings, Users2, HelpCircle, AlertTriangle, Bell, Lock, Rss, Shield, ArrowRight, Radio, Radar, Target, Plane, Flame, ArrowLeft, Wifi, Presentation, Speaker } from "lucide-react";
import Link from 'next/link';
import { redirect, useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Product as FullProductType, SolutionCategory } from '@/types';
import { SolutionCategoryCard } from '@/components/SolutionCategoryCard';
import { AccessControlCategories } from "@/components/AccessControlCategories";
import { OfficeAutomationCategories } from "@/components/OfficeAutomationCategories";
import { SolutionsFilter } from "@/components/SolutionsFilter";

const mainCategoryNames = [
  "Surveillance Systems",
  "Fire & Emergency System",
  "Access Control",
  "Office & Home Automations",
  "Intruder Detection System",
  "Command Control Room"
];

function SolutionsPageContent() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState('');
  const [selectedCategoryForFilter, setSelectedCategoryForFilter] = useState('all');

  // Read query parameter from URL on component mount
  useEffect(() => {
    const urlQuery = searchParams.get('query');
    if (urlQuery) {
      setQuery(urlQuery);
    }
  }, [searchParams]);

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

  const intruderDetectionSubCategoryNames = [
    "Perimeter Security",
    "Intrusion Alarms",
    "Smart Sensors",
    "ANIDERS",
    "KyNet Net Gun",
    "Smart Stick & Drone"
  ];

  const commandControlRoomSubCategoryNames = [
    "Remote Surveillance and Monitoring Solutions",
    "AI Powered Analytics for Proactive Threat Detection",
    "Centralized Control Room Setup"
  ];

  const isSurveillanceSystemView = selectedCategoryForFilter === "Surveillance Systems" && !query;
  const isFireSafetyView = selectedCategoryForFilter === "Fire & Emergency System" && !query;
  const isAllCategoriesView = selectedCategoryForFilter === 'all' && !query;
  const isAccessControlSubCategoryView = accessControlSubCategoryNames.includes(selectedCategoryForFilter);
  const isAccessControlView = selectedCategoryForFilter === 'Access Control' && !query;

  if (isFireSafetyView) {
    redirect('/solutions/fire-safety');
  }
  if (isAccessControlView) {
    redirect('/solutions/access-control');
  }
  if (selectedCategoryForFilter === "Intruder Detection System") {
    redirect('/solutions/intruder-detection-system');
  }
  if (selectedCategoryForFilter === "Command Control Room") {
    redirect('/solutions/command-control-room');
  }
  if (selectedCategoryForFilter === "Office & Home Automations") {
    redirect('/solutions/office-home-automations');
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
  } else if (selectedCategoryForFilter === "Intruder Detection System") {
    productsToDisplay = products.filter(product =>
      intruderDetectionSubCategoryNames.includes(product.category)
    );
  } else if (selectedCategoryForFilter === "Command Control Room") {
    productsToDisplay = products.filter(product =>
      commandControlRoomSubCategoryNames.includes(product.category)
    );
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
  
  const showNoProductsMessage = productsToDisplay.length === 0 && !isAllCategoriesView;

  // Custom subcategory page for AI Powered Analytics for Proactive Threat Detection
  if (selectedCategoryForFilter === "AI Powered Analytics for Proactive Threat Detection") {
    // Get category data from solutionCategoriesData
    const aiCategory = solutionCategoriesData.find(cat => cat.name === "AI Powered Analytics for Proactive Threat Detection");
    const aiProducts = products.filter(product => product.category === "AI Powered Analytics for Proactive Threat Detection");
    return (
      <div className="relative min-h-screen">
        <div className="fixed inset-0 bg-gradient-to-b from-[#578FCA] to-[#F2F2F2] z-0" />
        <div className="relative z-10">
          {/* Hero Banner Section */}
          <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-blue-400/10" />
            <div className="relative h-full container mx-auto px-4 md:px-6 flex flex-col justify-center items-center text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-700 tracking-tight mb-4">
                {aiCategory?.name}
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                {aiCategory?.description}
              </p>
            </div>
          </div>

          <div className="container mx-auto px-4 md:px-6 py-12">
            <Button variant="outline" asChild className="mb-8 group hover:bg-blue-50 hover:border-blue-400">
              <Link href="/solutions/command-control-room">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:text-blue-700 transition-colors" />
                <span className="group-hover:text-blue-700 transition-colors">Back to Command Control Room</span>
              </Link>
            </Button>

            {/* Products Section */}
            {aiProducts.length > 0 ? (
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
                  Available {aiCategory?.name} Products
                </h2>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                  {aiProducts.map((product) => {
                    const { icon, ...productFieldsForCard } = product;
                    return (
                      <div key={productFieldsForCard.id} className="w-full max-w-xs">
                        <ProductCard product={productFieldsForCard} isVisible={true} />
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="text-center py-12 bg-card rounded-lg shadow border">
                <p className="text-xl text-muted-foreground mb-2">No products found in this category.</p>
                <p className="text-sm text-muted-foreground mb-4">Please check back later for new products.</p>
                <Button variant="link" asChild className="text-blue-700">
                  <Link href="/solutions/command-control-room">Back to Command Control Room</Link>
                </Button>
              </div>
            )}

            {/* Contact Section */}
            <div className="mt-16 text-center">
              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">
                  Need More Information?
                </h3>
                <p className="text-gray-700 mb-6">
                  Our team is ready to help you find the perfect AI Powered Analytics solution for your needs.
                </p>
                <Button size="lg" asChild className="bg-blue-700 hover:bg-blue-800 text-white">
                  <Link href="/contact">Request More Information</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      {/* Conditionally apply the gradient background */}
      {selectedCategoryForFilter === "Intruder Detection System" && !query ? (
        <div className="fixed inset-0 bg-gradient-to-b from-[#FFF2EB] to-[#F2F2F2] z-0" />
      ) : selectedCategoryForFilter === "Command Control Room" && !query ? (
        <div className="fixed inset-0 bg-gradient-to-b from-[#578FCA] to-[#F2F2F2] z-0" />
      ) : (isAccessControlView || isSurveillanceSystemView) ? (
        <div className="fixed inset-0 bg-gradient-to-b from-[#EAE4D5] to-[#F2F2F2] z-0" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30 z-0" />
      )}

      {/* Main content container */}
      <div className="relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-3 drop-shadow-lg">
            All Solutions
          </h1>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full mb-4"></div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium mb-2">
            Browse and filter all our security solutions by category or keyword.
          </p>
        </div>
        <Suspense fallback={<div>Loading filters...</div>}>
        <SolutionsFilter
          query={query}
          selectedCategory={selectedCategoryForFilter}
          mainCategories={mainCategoryNames}
          subCategories={[]}
          allCategories={mainCategoryNames}
          themeColor="bg-cyan-600 hover:bg-cyan-700"
          setQuery={setQuery}
          setSelectedCategory={setSelectedCategoryForFilter}
        />
        </Suspense>
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
                src="/Solutions/Surveillance/banner10.jpg"
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

        {/* Surveillance Systems Description Section */}
        {isSurveillanceSystemView && (
          <section className="relative py-20 bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-sm">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-500 bg-clip-text text-transparent font-heading">
                    Comprehensive Surveillance Solutions
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto rounded-full"></div>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-700 mb-12 text-center font-light leading-relaxed">
                    Our surveillance systems are engineered to deliver unparalleled security and monitoring capabilities 
                    for businesses, institutions, and residential properties. We offer a complete range of cutting-edge 
                    surveillance technologies that adapt to your unique security needs.
                  </p>
                  <div className="grid md:grid-cols-2 gap-10 mt-12">
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                      <h3 className="text-2xl font-bold mb-6 text-yellow-600 font-heading flex items-center">
                        <span className="bg-yellow-100 p-3 rounded-lg mr-4">
                          <Camera className="h-6 w-6 text-yellow-600" />
                        </span>
                        Key Features
                      </h3>
                      <ul className="space-y-4 text-gray-700">
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                          <span className="font-medium">High-resolution cameras with advanced night vision</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                          <span className="font-medium">Smart motion detection and tracking</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                          <span className="font-medium">Remote monitoring and mobile access</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                          <span className="font-medium">Scalable storage solutions</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                          <span className="font-medium">Integration with existing security systems</span>
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
                          <span className="font-medium">Commercial and retail security</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                          <span className="font-medium">Industrial facility monitoring</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                          <span className="font-medium">Residential surveillance</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                          <span className="font-medium">Public space security</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                          <span className="font-medium">Critical infrastructure protection</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-16 bg-yellow-50 rounded-2xl p-8 border border-yellow-100">
                    <p className="text-lg text-gray-700 leading-relaxed font-medium">
                      Whether you need basic surveillance or a sophisticated security network, our expert team will help you 
                      design and implement the perfect solution for your specific requirements. All our systems come with:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                      <div className="flex items-center space-x-3 text-yellow-700">
                        <Settings className="h-5 w-5" />
                        <span className="font-semibold">Professional Installation</span>
                      </div>
                      <div className="flex items-center space-x-3 text-yellow-700">
                        <Users2 className="h-5 w-5" />
                        <span className="font-semibold">Comprehensive Training</span>
                      </div>
                      <div className="flex items-center space-x-3 text-yellow-700">
                        <HelpCircle className="h-5 w-5" />
                        <span className="font-semibold">24/7 Support</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Access Control Hero Banner */}
        {isAccessControlView && (
          <>
          <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden group">
            {/* Background Images with Transition */}
            <div className="absolute inset-0">
              <Image
                src="/Solutions/Access Control/banner1.png"
                alt="Access Control Banner"
                fill
                className="object-cover brightness-[0.7] transition-opacity duration-2000 animate-carousel-1"
                priority
              />
              <Image
                src="/Solutions/Access Control/banner10.png"
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

            {/* Access Control Description Section */}
            <section className="relative py-20 bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-sm">
              <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 bg-clip-text text-transparent font-heading">
                      Advanced Access Control Solutions
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-400 mx-auto rounded-full"></div>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-gray-700 mb-12 text-center font-light leading-relaxed">
                      Our comprehensive access control systems are designed to protect your premises with state-of-the-art 
                      biometric, card-based, and automated solutions. We provide end-to-end security that meets 
                      the highest industry standards and compliance requirements.
                    </p>
                    <div className="grid md:grid-cols-2 gap-10 mt-12">
                      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-6 text-purple-600 font-heading flex items-center">
                          <span className="bg-purple-100 p-3 rounded-lg mr-4">
                            <Lock className="h-6 w-6 text-purple-600" />
                          </span>
                          Key Features
                        </h3>
                        <ul className="space-y-4 text-gray-700">
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                            <span className="font-medium">Advanced biometric authentication</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                            <span className="font-medium">Smart card & RFID solutions</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                            <span className="font-medium">Automated door systems</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                            <span className="font-medium">Time & attendance tracking</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                            <span className="font-medium">Centralized management system</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-6 text-purple-600 font-heading flex items-center">
                          <span className="bg-purple-100 p-3 rounded-lg mr-4">
                            <Building2 className="h-6 w-6 text-purple-600" />
                          </span>
                          Applications
                        </h3>
                        <ul className="space-y-4 text-gray-700">
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                            <span className="font-medium">Corporate offices & facilities</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                            <span className="font-medium">Industrial complexes</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                            <span className="font-medium">Healthcare institutions</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                            <span className="font-medium">Educational facilities</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                            <span className="font-medium">Government buildings</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-16 bg-purple-50 rounded-2xl p-8 border border-purple-100">
                      <p className="text-lg text-gray-700 leading-relaxed font-medium">
                        Our access control solutions are designed to provide maximum security while ensuring seamless operation. 
                        Every system comes with:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="flex items-center space-x-3 text-purple-700">
                          <Settings className="h-5 w-5" />
                          <span className="font-semibold">Professional Setup</span>
                        </div>
                        <div className="flex items-center space-x-3 text-purple-700">
                          <Users2 className="h-5 w-5" />
                          <span className="font-semibold">Staff Training</span>
                        </div>
                        <div className="flex items-center space-x-3 text-purple-700">
                          <HelpCircle className="h-5 w-5" />
                          <span className="font-semibold">24/7 Support</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Office & Home Automations Hero Banner */}
        {selectedCategoryForFilter === "Office & Home Automations" && (
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
                src="/Solutions/Automation/banner10.png"
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
                Smart automation solutions for modern offices and homes. From WiFi systems to conference rooms, we bring intelligent technology to your space.
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

        {isAccessControlView ? (
          <div className="w-full bg-gradient-to-b from-[#DAD2FF] to-[#F2F2F2] py-8 md:py-12">
            <div className="container mx-auto px-4 md:px-6">
              <div className="bg-card rounded-xl shadow-lg border border-purple-200 p-4 md:p-6 mb-8 md:mb-12">
                {/* Categories Section - Only show when no category is selected */}
                <div className="mb-12">
                  <AccessControlCategories />
                </div>
                {productsToDisplay.length > 0 && (
                  <div className={`pt-8`}>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                      {productsToDisplay.map((productData) => { 
                        const { icon, ...productFieldsForCard } = productData; 
                        return (
                          <div key={productFieldsForCard.id} className="w-full max-w-xs">
                            <ProductCard product={productFieldsForCard} isVisible={true} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                {showNoProductsMessage && (
                  <div className="text-center py-12 bg-card rounded-lg shadow border border-purple-200 mt-12">
                    <p className="text-xl text-muted-foreground mb-2">No products found matching your criteria.</p>
                    <p className="text-sm text-muted-foreground mb-4">Try adjusting your search or filters.</p>
                    <Button variant="link" asChild className="text-purple-700">
                      <Link href="/solutions">Clear Filters & View Categories</Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : selectedCategoryForFilter === "Intruder Detection System" && !query ? (
          <>
            {/* Intruder Detection System Description Section */}
            <section className="relative py-20 bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-sm">
              <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-red-600 via-red-400 to-red-300 bg-clip-text text-transparent font-heading">
                      Intruder Detection System
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-red-300 mx-auto rounded-full"></div>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-gray-700 mb-12 text-center font-light leading-relaxed">
                      Protect your premises with advanced intruder detection solutions. Our systems combine smart sensors, alarms, and rapid response technologies to keep your property secure from unauthorized access and threats.
                    </p>
                    <div className="grid md:grid-cols-2 gap-10 mt-12">
                      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-6 text-red-600 font-heading flex items-center">
                          <span className="bg-red-100 p-3 rounded-lg mr-4">
                            <Shield className="h-6 w-6 text-red-600" />
                          </span>
                          Key Features
                        </h3>
                        <ul className="space-y-4 text-gray-700">
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                            <span className="font-medium">Real-time intrusion alerts</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                            <span className="font-medium">Smart motion and perimeter sensors</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                            <span className="font-medium">Remote monitoring and control</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                            <span className="font-medium">Integration with alarms and CCTV</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                            <span className="font-medium">Tamper-proof design</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-6 text-red-600 font-heading flex items-center">
                          <span className="bg-red-100 p-3 rounded-lg mr-4">
                            <AlertTriangle className="h-6 w-6 text-red-600" />
                          </span>
                          Applications
                        </h3>
                        <ul className="space-y-4 text-gray-700">
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                            <span className="font-medium">Commercial & industrial sites</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                            <span className="font-medium">Residential complexes</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                            <span className="font-medium">Warehouses & logistics</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                            <span className="font-medium">Retail & hospitality</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                            <span className="font-medium">Critical infrastructure</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-16 bg-red-50 rounded-2xl p-8 border border-red-100">
                      <p className="text-lg text-gray-700 leading-relaxed font-medium">
                        Our intruder detection systems are built for reliability and rapid response. Every solution comes with:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="flex items-center space-x-3 text-red-700">
                          <Shield className="h-5 w-5" />
                          <span className="font-semibold">Expert Installation</span>
                        </div>
                        <div className="flex items-center space-x-3 text-red-700">
                          <AlertTriangle className="h-5 w-5" />
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
            <div className="w-full bg-gradient-to-b from-[#FEE2E2] to-[#F2F2F2] py-8 md:py-12">
              <div className="container mx-auto px-4 md:px-6">
                <div className="bg-card rounded-xl shadow-lg border border-red-200 p-4 md:p-6 mb-8 md:mb-12">
                  {/* Categories Section - Only show when no category is selected */}
                  <div className="mb-12">
                    <AccessControlCategories />
                  </div>
                  {productsToDisplay.length > 0 && (
                    <div className={`pt-8`}>
                      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        {productsToDisplay.map((productData) => { 
                          const { icon, ...productFieldsForCard } = productData; 
                          return (
                            <div key={productFieldsForCard.id} className="w-full max-w-xs">
                              <ProductCard product={productFieldsForCard} isVisible={true} />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  {showNoProductsMessage && (
                    <div className="text-center py-12 bg-card rounded-lg shadow border border-red-200 mt-12">
                      <p className="text-xl text-muted-foreground mb-2">No products found matching your criteria.</p>
                      <p className="text-sm text-muted-foreground mb-4">Try adjusting your search or filters.</p>
                      <Button variant="link" asChild className="text-red-700">
                        <Link href="/solutions">Clear Filters & View Categories</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
            {/* Categories Section - Only show when no category is selected */}
            {selectedCategoryForFilter === "Office & Home Automations" && (
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
                  <SolutionCategoryCard
                    key={category.id}
                    category={category}
                    href={
                      category.name === 'Surveillance Systems' ? '/solutions/surveillance-systems' :
                      category.name === 'Intruder Detection System' ? '/solutions/intruder-detection-system' :
                      category.name === 'Command Control Room' ? '/solutions/command-control-room' :
                      category.name === 'Fire & Emergency System' ? '/solutions/fire-safety' :
                      category.name === 'Office & Home Automations' ? '/solutions/office-home-automations' :
                      undefined
                    }
                  />
                ))}
              </div>
            </div>
          )}
          {isAllCategoriesView && topLevelCategoryCardsToDisplay.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 mb-12">
              {topLevelCategoryCardsToDisplay.map((category) => (
                <SolutionCategoryCard
                  key={category.id}
                  category={category}
                  href={`/solutions/${category.slug}`}
                />
              ))}
            </div>
          )}
          {productsToDisplay.length > 0 && (
              <div className={`pt-8 ${isSurveillanceSystemView ? 'mt-8 border-t border-border/50' : ''}`}>
               {isSurveillanceSystemView && productsToDisplay.length > 0 && (
                    <h3 className="col-span-full text-xl md:text-2xl font-semibold text-foreground mb-6 text-center">
                      All Products under Surveillance Systems
                  </h3>
              )}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {productsToDisplay.map((productData) => { 
                const { icon, ...productFieldsForCard } = productData; 
                return (
                      <div key={productFieldsForCard.id} className="w-full max-w-xs">
                        <ProductCard product={productFieldsForCard} isVisible={true} />
                      </div>
                );
              })}
                </div>
          </div>
        )}
        {showNoProductsMessage && (
              <div className="text-center py-12 bg-card rounded-lg shadow mt-8">
            <p className="text-xl text-muted-foreground mb-2">No products found matching your criteria.</p>
            <p className="text-sm text-muted-foreground mb-4">Try adjusting your search or filters.</p>
            <Button variant="link" asChild>
              <Link href="/solutions">Clear Filters & View Categories</Link>
            </Button>
          </div>
        )}
        </div>
        )}
      </div>
    </div>
  );
}

export default function SolutionsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground">Loading solutions...</p>
        </div>
      </div>
    }>
      <SolutionsPageContent />
    </Suspense>
  );
}
