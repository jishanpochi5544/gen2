
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

// Array of image objects for the main background slideshow.
// Each object contains the image source, alt text, and an AI hint for potential future use.
const mainHeroBackgroundImages = [
  { src: "/hero-background-1.png", alt: "Abstract security technology network", dataAiHint: "technology network" },
  { src: "/hero-background-2.png", alt: "Modern office surveillance system", dataAiHint: "office surveillance" },
  { src: "/hero-background-3.png", alt: "Secure data center infrastructure", dataAiHint: "data center" },
  { src: "/hero-background-4.png", alt: "Cityscape with security overlay", dataAiHint: "cityscape security" },
];

// Array of image objects for the smaller, rectangular foreground frame slideshow.
const foregroundFrameImages = [
  // { src: "/hero1.png", alt: "Featured highlight 1 - Security Camera System", dataAiHint: "product showcase one" },
  { src: "/hero2.png", alt: "Featured highlight 2 - Technology in Action", dataAiHint: "technology in action" },
  { src: "/hero3.png", alt: "Featured highlight 3 - Secure Solution Example", dataAiHint: "secure solution" },
];

// Interval time in milliseconds for advancing the slideshows.
const SLIDESHOW_INTERVAL = 6000; // 6 seconds
// Tailwind CSS class defining the duration of the fade transition for images.
const FADE_DURATION = "duration-1000";

export function HeroSection() {
  // State to track if the component has mounted on the client-side.
  // This is used to delay animations until client-side hydration is complete, preventing mismatches.
  const [mounted, setMounted] = useState(false);
  // State to keep track of the current image index for both slideshows.
  // Both slideshows advance based on this single index, but pick images from their respective arrays.
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect hook to set 'mounted' to true once the component mounts on the client.
  // This helps trigger animations that should only run client-side.
  useEffect(() => {
    setMounted(true);
  }, []); // Empty dependency array ensures this runs only once after initial render.

  // useEffect hook to manage the slideshow interval timer.
  useEffect(() => {
    // Do not start the timer until the component is mounted to ensure client-side execution.
    if (!mounted) return;

    // Set up an interval to increment the currentImageIndex.
    const timer = setInterval(() => {
      // Increment index; modulo operation will be used when accessing image arrays to loop.
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }, SLIDESHOW_INTERVAL);

    // Cleanup function: clear the interval when the component unmounts or 'mounted' changes.
    return () => clearInterval(timer);
  }, [mounted]); // Re-run effect if 'mounted' changes (though it only changes once).

  // Determine the current image for the main background slideshow.
  // Uses modulo operator to loop through the 'mainHeroBackgroundImages' array.
  const currentMainBgImage = mainHeroBackgroundImages[currentImageIndex % mainHeroBackgroundImages.length];
  // Determine the current image for the foreground frame slideshow.
  // Uses modulo operator to loop through the 'foregroundFrameImages' array.
  const currentForegroundImage = foregroundFrameImages[currentImageIndex % foregroundFrameImages.length];

  return (
    <section className="relative bg-background py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Image Slideshow Container */}
      <div className="absolute inset-0 z-0">
        {mainHeroBackgroundImages.map((image, index) => (
          <Image
            key={`bg-${image.src}`} // Unique key for each background image.
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            priority={index === 0} // Prioritize loading the first background image.
            className={cn(
              "absolute inset-0 transition-opacity ease-in-out",
              FADE_DURATION, // Apply fade transition duration.
              // Image is visible (opacity-30) if it's the current one, otherwise hidden (opacity-0).
              image.src === currentMainBgImage.src ? 'opacity-30' : 'opacity-0'
            )}
            data-ai-hint={image.dataAiHint}
          />
        ))}
      </div>
      
      {/* Gradient Overlay for visual effect and text readability. */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/20 via-background/70 to-background/90"></div>

      {/* Main content container with entrance animation. */}
      <div className={cn(
        "container mx-auto px-4 md:px-6 relative z-20 transition-all duration-700 ease-out",
        // Animation applied once mounted: fade in and slide up.
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left column: Text content and call-to-action buttons. */}
          <div className="text-center md:text-left">
            {/* ShieldCheck icon with entrance animation. */}
            <ShieldCheck className={cn(
              "h-16 w-16 text-accent mx-auto md:mx-0 mb-4 transition-all duration-700 ease-out transform",
              mounted ? 'opacity-100 translate-y-0 scale-100 rotate-0' : 'opacity-0 translate-y-5 scale-90 -rotate-12'
            )} />
            {/* Main heading with entrance animation. */}
            <h1 className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 transition-all duration-700 ease-out delay-100",
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            )}>
              Advanced Security, <span className="text-primary">Simplified</span>.
            </h1>
            {/* Sub-heading/paragraph with entrance animation. */}
            <p className={cn(
              "text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0 transition-all duration-700 ease-out delay-200",
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            )}>
              GenX Secure provides state-of-the-art security solutions tailored to your needs. From robust CCTV systems to intelligent access control, we protect what matters most.
            </p>
            {/* Call-to-action buttons container with entrance animation. */}
            <div className={cn(
              "flex flex-col sm:flex-row gap-4 justify-center md:justify-start transition-all duration-700 ease-out delay-300",
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            )}>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
                <Link href="/solutions">
                  Explore Solutions <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="shadow-lg transition-transform hover:scale-105 border-accent text-accent hover:bg-accent/10 hover:text-accent">
                <Link href="/contact">
                  Request a Quote
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Right column: Rectangular Foreground Image Frame with Slideshow. */}
          {/* This frame is hidden on mobile (md:block). */}
          <div className={cn(
            "hidden md:block relative aspect-video rounded-lg overflow-hidden shadow-2xl transition-all duration-1000 ease-in-out delay-200 transform",
            // Entrance animation for the frame itself.
            mounted ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 rotate-[-3deg]'
          )}>
            {/* Mapping through foregroundFrameImages to render the slideshow. */}
            {foregroundFrameImages.map((image, index) => (
              <Image
                key={`fg-${image.src}`} // Unique key for each foreground image.
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                priority={index === 0} // Prioritize loading the first foreground image.
                className={cn(
                  "absolute inset-0 transition-opacity ease-in-out rounded-lg", // Added rounded-lg here
                  FADE_DURATION, // Apply fade transition duration.
                  // Image is fully visible (opacity-100) if it's the current one, otherwise hidden (opacity-0).
                  image.src === currentForegroundImage.src ? 'opacity-100' : 'opacity-0'
                )}
                data-ai-hint={image.dataAiHint}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
