"use client";

import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { products, caseStudies, whyChooseUsItems, testimonials, clientLogos, coreOfferings } from '@/lib/data';
import { ArrowRight, Users2, Quote, Lightbulb, Settings, ShieldCheck, Camera, KeyRound } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';
import { ProductCard } from '@/components/ProductCard';
import type { Product as FullProductType } from '@/types';


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
        // Ensure we don't go out of bounds if the array length is odd
        const nextProductIndex = (currentIndex + 1) < products.length ? currentIndex + 1 : 0;
        
        const newProducts = [
          products[currentIndex],
          products[nextProductIndex]
        ].filter(Boolean) as FullProductType[]; // filter(Boolean) to handle odd length array case

        setFeaturedProducts(newProducts);
        setIsFading(false);
      }, 500); // This should match the fade out duration
    }, 5000); // Change products every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const coreOfferingsRef = useRef<HTMLDivElement>(null);
  const whyChooseUsRef = useRef<HTMLDivElement>(null);
  const featuredSolutionsRef = useRef<HTMLDivElement>(null);
  const successStoryRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const trustedByRef = useRef<HTMLDivElement>(null);

  const observerOptions = { threshold: 0.1, triggerOnce: true };
  const isCoreOfferingsVisible = useIntersectionObserver(coreOfferingsRef, observerOptions);
  const isWhyChooseUsVisible = useIntersectionObserver(whyChooseUsRef, observerOptions);
  const isFeaturedSolutionsVisible = useIntersectionObserver(featuredSolutionsRef, observerOptions);
  const isSuccessStoryVisible = useIntersectionObserver(successStoryRef, observerOptions);
  const isTestimonialsVisible = useIntersectionObserver(testimonialsRef, observerOptions);
  const isTrustedByVisible = useIntersectionObserver(trustedByRef, observerOptions);

  return (
    <div className="relative min-h-screen">
      {/* Single gradient background for entire page */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#578FCA] via-[#3674B5] to-[#F5F0CD] z-0"></div>
      
      {/* Content wrapper */}
      <div className="relative z-10">
        <HeroSection />

        <section ref={coreOfferingsRef} className="py-16 lg:py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className={cn(
              "text-center mb-12 transition-all duration-700 ease-out",
              isCoreOfferingsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            )}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Core Offerings</h2>
              <p className="mt-4 text-lg text-foreground font-semibold max-w-2xl mx-auto">
                Discover robust security solutions designed for reliability and peace of mind.
              </p>
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

        <section ref={whyChooseUsRef} className="relative py-16 lg:py-24 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            poster="https://placehold.co/1920x1080.png"
            data-ai-hint="abstract technology moving"
          >
            <source src="/videos/why-choose-us-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className={cn(
              "text-center mb-16 transition-all duration-700 ease-out",
              isWhyChooseUsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            )} style={{ transitionDelay: isWhyChooseUsVisible ? '0ms' : '0ms' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Why Choose GenX Secure?</h2>
              <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                Experience the GenX Secure difference with our commitment to excellence and innovation.
              </p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {whyChooseUsItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className={cn(
                      "group bg-card/90 p-8 rounded-xl border shadow-xl transition-all duration-300 ease-out text-center",
                      "hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-1.5",
                      isWhyChooseUsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                    )}
                    style={{ transitionDelay: isWhyChooseUsVisible ? `${index * 150 + 150}ms` : '0ms' }}
                  >
                    <div className="flex items-center justify-center mb-6">
                      <div className={cn(
                          "flex items-center justify-center h-20 w-20 rounded-full bg-accent/15 transition-all duration-300 ease-out",
                          "group-hover:bg-accent/25 group-hover:scale-110 group-hover:ring-4 group-hover:ring-accent/30"
                        )}>
                        <IconComponent className="h-10 w-10 text-accent transition-all duration-300 group-hover:scale-125 group-hover:rotate-[10deg]" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section ref={featuredSolutionsRef} className="py-16 lg:py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className={cn(
              "text-center mb-12 transition-all duration-700 ease-out",
              isFeaturedSolutionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            )} style={{ transitionDelay: isFeaturedSolutionsVisible ? '0ms' : '0ms' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Solutions</h2>
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

        {featuredCaseStudy && (
          <section ref={successStoryRef} className="pt-8 pb-16 lg:pt-12 lg:pb-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative">
              <div className={cn(
                "text-center mb-12 transition-all duration-700 ease-out",
                isSuccessStoryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              )}>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Success in Action</h2>
                <p className="mt-4 text-lg text-foreground font-semibold max-w-2xl mx-auto">
                  See how our solutions have transformed security for businesses like yours.
                </p>
              </div>
              <Card className={cn(
                "group grid md:grid-cols-2 items-center gap-8 p-6 md:p-8 shadow-xl overflow-hidden border hover:border-primary/50 hover:shadow-primary/20 transition-all duration-300 ease-out",
                isSuccessStoryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                )} style={{ transitionDelay: isSuccessStoryVisible ? '150ms' : '0ms' }}>
                <div className={cn(
                  "relative aspect-video rounded-lg overflow-hidden transition-opacity duration-1000 ease-in-out",
                  isSuccessStoryVisible ? 'opacity-100' : 'opacity-0'
                  )} style={{ transitionDelay: isSuccessStoryVisible ? '300ms' : '0ms' }}>
                   <Image
                      src={featuredCaseStudy.image || 'https://placehold.co/800x450.png'}
                      alt={featuredCaseStudy.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:filter group-hover:saturate-125"
                      data-ai-hint={featuredCaseStudy.dataAiHint || "business success team"}
                    />
                </div>
                <div className={cn(
                  "transition-all duration-700 ease-out",
                  isSuccessStoryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  )} style={{ transitionDelay: isSuccessStoryVisible ? '450ms' : '0ms' }}>
                  <h3 className="text-2xl font-semibold text-primary mb-2">{featuredCaseStudy.industry} Spotlight</h3>
                  <h4 className="text-xl font-bold text-foreground mb-3">{featuredCaseStudy.title}</h4>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{featuredCaseStudy.challenge}</p>
                  <Button asChild className="bg-primary hover:bg-primary/80 text-primary-foreground transition-all duration-300 ease-out group-hover:gap-3">
                    <Link href={`/success-stories#${featuredCaseStudy.slug}`}>Read Full Story <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></Link>
                  </Button>
                </div>
              </Card>
            </div>
          </section>
        )}

        <section ref={testimonialsRef} className="py-16 lg:py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className={cn(
              "text-center mb-12 transition-all duration-700 ease-out",
              isTestimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            )}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">What Our Clients Say</h2>
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
                        <Image src={testimonial.avatar} alt={testimonial.authorName} layout="fill" objectFit="cover" data-ai-hint={testimonial.dataAiHint || "person satisfied client"}/>
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

         <section ref={trustedByRef} className="py-16 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className={cn(
              "text-center mb-12 lg:mb-16 transition-all duration-700 ease-out",
              isTrustedByVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            )} style={{ transitionDelay: isTrustedByVisible ? '0ms' : '0ms' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Trusted By Leading Companies</h2>
              <p className="mt-4 text-lg text-foreground font-semibold max-w-2xl mx-auto">
                We are proud to partner with organizations of all sizes to enhance their security.
              </p>
            </div>
            {clientLogos.length > 0 ? (
              <div className={cn(
                "group relative w-full overflow-hidden mask-image-linear-gradient-to-r from-transparent via-black to-transparent transition-all duration-700 ease-out", // Mask for fade effect on edges
                isTrustedByVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              )} style={{ transitionDelay: isTrustedByVisible ? '150ms' : '0ms' }}>
                <div className="flex animate-scroll group-hover:pause whitespace-nowrap">
                  {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((client, index) => ( // Duplicate for seamless loop
                    <div
                      key={`${client.id}-${index}`}
                      className="mx-6 shrink-0"
                    >
                      <div
                        className="relative w-32 h-32 md:w-36 md:h-36 rounded-full bg-card shadow-md border flex items-center justify-center p-4 transition-transform duration-300 ease-out hover:scale-110 hover:shadow-lg"
                      >
                        <Image
                          src={client.logoUrl}
                          alt={client.name}
                          width={90}
                          height={90}
                          className="object-contain filter grayscale transition-all duration-300 ease-out hover:filter-none"
                          data-ai-hint={client.dataAiHint || 'company logo'}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-center text-muted-foreground">Client information coming soon.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

