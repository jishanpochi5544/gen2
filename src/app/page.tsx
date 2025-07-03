"use client";

import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { products, caseStudies, whyChooseUsItems, testimonials, clientLogos, coreOfferings } from '@/lib/data';
import { ArrowRight, Users2, Quote, Lightbulb, Settings, ShieldCheck, Camera, KeyRound } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import React, { useRef, useState, useEffect, Suspense } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';
import { ProductCard } from '@/components/ProductCard';
import type { Product as FullProductType } from '@/types';
import { StatsBanner } from '@/components/StatsBanner';
import { FAQSection } from '@/components/FAQSection';
import { PartnersCarousel } from '@/components/PartnersCarousel';
import { SolutionsFilter } from '@/components/SolutionsFilter';

const mainCategoryNames = [
  "Surveillance Systems",
  "Fire & Emergency System",
  "Access Control",
  "Office & Home Automations",
  "Intruder Detection System",
  "Command Control Room"
];

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState(products.slice(0, 2) as FullProductType[]);
  const [isFading, setIsFading] = useState(false);
  const featuredCaseStudy = caseStudies[0];

  useEffect(() => {
    if (products.length <= 2) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      setIsFading(true);
      
      setTimeout(() => {
        currentIndex = (currentIndex + 2) % products.length;
        const nextProductIndex = (currentIndex + 1) < products.length ? currentIndex + 1 : 0;
        
        const newProducts = [
          products[currentIndex],
          products[nextProductIndex]
        ].filter(Boolean) as FullProductType[];

        setFeaturedProducts(newProducts);
        setIsFading(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const coreOfferingsRef = useRef<HTMLDivElement>(null);
  const whyChooseUsRef = useRef<HTMLDivElement>(null);
  const featuredSolutionsRef = useRef<HTMLDivElement>(null);
  const successStoryRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const trustedByRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const observerOptions = { threshold: 0.1, triggerOnce: true };
  const isCoreOfferingsVisible = useIntersectionObserver(coreOfferingsRef, observerOptions);
  const isWhyChooseUsVisible = useIntersectionObserver(whyChooseUsRef, observerOptions);
  const isFeaturedSolutionsVisible = useIntersectionObserver(featuredSolutionsRef, observerOptions);
  const isSuccessStoryVisible = useIntersectionObserver(successStoryRef, observerOptions);
  const isTestimonialsVisible = useIntersectionObserver(testimonialsRef, observerOptions);
  const isTrustedByVisible = useIntersectionObserver(trustedByRef, observerOptions);
  const isFAQVisible = useIntersectionObserver(faqRef, observerOptions);

  return (
    <div className="relative min-h-screen">
      {/* Fixed gradient background that covers the entire page */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#9EC6F3] to-[#F2F2F2] z-0" />
      
      <div className="relative z-10">
        <HeroSection />

        <section ref={coreOfferingsRef} className="py-16 lg:py-24 relative overflow-hidden bg-white/50">
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className={cn(
              "text-center mb-12 transition-all duration-700 ease-out",
              isCoreOfferingsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            )}>
              <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-3 drop-shadow-lg">
                Our Core Offerings
              </h2>
              <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full mb-4"></div>
              <p className="mt-4 text-lg text-foreground font-semibold max-w-2xl mx-auto">
                Discover robust security solutions designed for reliability and peace of mind.
              </p>
              <div className="mt-10">
                <Suspense fallback={<div>Loading filters...</div>}>
                <SolutionsFilter 
                  query="" 
                  selectedCategory="all" 
                  mainCategories={mainCategoryNames} 
                  subCategories={[]} 
                  allCategories={mainCategoryNames} 
                  themeColor="bg-cyan-600 hover:bg-cyan-700" 
                />
                </Suspense>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreOfferings.map((offering, index) => {
                return (
                  <Card
                    key={offering.title}
                    className={cn(
                      "group shadow-lg transition-all duration-300 ease-out border border-border",
                      "bg-white/80 backdrop-blur-sm hover:bg-white/90",
                      "hover:shadow-2xl hover:border-2 hover:border-[#BB3E00] hover:-translate-y-1",
                      isCoreOfferingsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                    )}
                    style={{ transitionDelay: isCoreOfferingsVisible ? `${index * 150}ms` : '0ms' }}
                  >
                    <CardHeader>
                      <div className={cn(
                          "h-16 w-16 relative mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-3deg]"
                      )}>
                          <Image
                              src={offering.gifSrc}
                              alt={`Animation for ${offering.title}`}
                              width={64}
                              height={64}
                              unoptimized // Important for GIFs if they are animated
                              className="object-contain"
                              data-ai-hint={offering.dataAiHint || 'offering animation'}
                          />
                      </div>
                      <CardTitle className="text-2xl">{offering.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{offering.description}</CardDescription>
                      <Button variant="link" asChild className="mt-4 px-0 text-primary group-hover:text-primary/90 transition-colors duration-300">
                        <Link href={offering.link}>{offering.linkText} <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:scale-110" /></Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section ref={featuredSolutionsRef} className="py-16 lg:py-24 relative overflow-hidden bg-white/30">
          <div className="container mx-auto px-4 md:px-6 relative">
          <div className={cn(
            "text-center mb-12 transition-all duration-700 ease-out",
            isFeaturedSolutionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          )} style={{ transitionDelay: isFeaturedSolutionsVisible ? '0ms' : '0ms' }}>
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-3 drop-shadow-lg">
              Featured Solutions
            </h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full mb-4"></div>
              <p className="mt-4 text-lg text-foreground font-semibold">Explore some of our cutting-edge security products.</p>
          </div>
            <div className={cn(
                "grid md:grid-cols-2 gap-8 transition-all duration-500 ease-in-out",
                isFading ? 'opacity-0 translate-y-5' : 'opacity-100 translate-y-0'
              )}>
            {featuredProducts.map((productData, index) => {
                const { icon, ...productFieldsForCard } = productData;
              return (
                <ProductCard
                  key={productFieldsForCard.id}
                  product={productFieldsForCard}
                  isVisible={isFeaturedSolutionsVisible}
                  animationDelay={`${index * 150 + 150}ms`}
                />
              );
            })}
          </div>
           <div className={cn(
            "text-center mt-12 transition-all duration-700 ease-out",
            isFeaturedSolutionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            )} style={{ transitionDelay: isFeaturedSolutionsVisible ? '300ms' : '0ms' }}>
              <Button asChild variant="outline" size="lg" className="border-[#8E7DBE] text-[#8E7DBE] hover:bg-[#8E7DBE]/10 hover:text-[#8E7DBE] transition-all duration-300 ease-out">
              <Link href="/solutions">
                See All Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

        <StatsBanner />

        <section ref={testimonialsRef} className="py-16 lg:py-24 relative overflow-hidden bg-white/30">
          <div className="container mx-auto px-4 md:px-6 relative">
          <div className={cn(
            "text-center mb-12 transition-all duration-700 ease-out",
            isTestimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            )}>
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-3 drop-shadow-lg">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full mb-4"></div>
              <p className="mt-4 text-lg text-foreground font-semibold max-w-2xl mx-auto">
                Hear from businesses who have experienced the GenX Secure difference.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0,3).map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className={cn(
                  "group flex flex-col shadow-lg hover:shadow-xl hover:border-accent/60 transition-all duration-300 ease-out border hover:-translate-y-1.5",
                  isTestimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                )}
                style={{ transitionDelay: isTestimonialsVisible ? `${index * 150 + 150}ms` : '0ms' }}
              >
                <CardHeader className="pb-4">
                  <Quote className="h-8 w-8 text-accent mb-2 transition-all duration-300 group-hover:scale-125 group-hover:rotate-[-5deg] group-hover:text-accent/80" />
                  <CardDescription className="italic text-foreground/90 text-base">{testimonial.quote}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow pt-0">
                  {/* Optional: Star rating can be added here later */}
                </CardContent>
                <CardFooter className="flex items-center pt-4 border-t mt-auto">
                  {testimonial.avatar && (
                    <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 border-2 border-primary/20 transition-all duration-300 group-hover:ring-2 group-hover:ring-primary group-hover:scale-105">
                      <Image 
                        src={testimonial.avatar} 
                        alt={testimonial.authorName} 
                        fill
                        className="object-cover"
                        data-ai-hint={testimonial.dataAiHint || "person satisfied client"}
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-sm text-foreground">{testimonial.authorName}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.authorRole}{testimonial.company && `, ${testimonial.company}`}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <PartnersCarousel />

      {/* FAQ Section */}
      <section ref={faqRef} className="py-16 lg:py-24 relative overflow-hidden bg-white/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-3 drop-shadow-lg">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full mb-4"></div>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our security solutions, services, and support.
            </p>
          </div>
          <FAQSection isVisible={isFAQVisible} />
        </div>
      </section>
      </div>
    </div>
  );
}

