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

// Add solution names for typewriter effect
const solutionNames = [
  "Access Control",
  "Surveillance Systems",
  "Fire Safety",
  "Office Automation",
  "Intruder Detection System",
  "Command Control Room"
];

function useTypewriter(words: string[], typingSpeed = 80, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentWord = words[index];
    if (!deleting && displayed.length < currentWord.length) {
      timeout = setTimeout(() => setDisplayed(currentWord.slice(0, displayed.length + 1)), typingSpeed);
    } else if (!deleting && displayed.length === currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(currentWord.slice(0, displayed.length - 1)), typingSpeed / 2);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, words, typingSpeed, pause]);

  return displayed;
}

export function HeroSection() {
  // State to track if the component has mounted on the client-side.
  // This is used to delay animations until client-side hydration is complete, preventing mismatches.
  const [mounted, setMounted] = useState(false);
  // State to keep track of the current image index for both slideshows.
  // Both slideshows advance based on this single index, but pick images from their respective arrays.
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showHeading, setShowHeading] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

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

  useEffect(() => {
    setShowHeading(false);
    setShowDescription(false);
    setShowButtons(false);
    if (mounted) {
      setShowHeading(true);
      const descTimeout = setTimeout(() => setShowDescription(true), 700);
      const btnTimeout = setTimeout(() => setShowButtons(true), 1200);
      return () => {
        clearTimeout(descTimeout);
        clearTimeout(btnTimeout);
      };
    }
  }, [mounted]);

  // Determine the current image for the main background slideshow.
  // Uses modulo operator to loop through the 'mainHeroBackgroundImages' array.
  const currentMainBgImage = mainHeroBackgroundImages[currentImageIndex % mainHeroBackgroundImages.length];
  // Determine the current image for the foreground frame slideshow.
  // Uses modulo operator to loop through the 'foregroundFrameImages' array.
  const currentForegroundImage = foregroundFrameImages[currentImageIndex % foregroundFrameImages.length];

  const typewriterText = useTypewriter(solutionNames, 80, 1200);

  return (
    <section className={cn(
      "relative bg-background py-16 md:py-24 lg:py-32 overflow-hidden transition-all duration-[2000ms] ease-out",
      mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    )}>
      {/* Background Image Slideshow Container */}
      <div className="absolute inset-0 z-0">
        {mainHeroBackgroundImages.map((image, index) => (
          <Image
            key={`bg-${image.src}`}
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            priority={index === 0}
            className={cn(
              "absolute inset-0 transition-opacity ease-in-out",
              FADE_DURATION,
              image.src === currentMainBgImage.src ? 'opacity-15' : 'opacity-0'
            )}
            data-ai-hint={image.dataAiHint}
          />
        ))}
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#9EC6F3]/40 via-[#9EC6F3]/20 to-[#F2F2F2]/10"></div>

      {/* Main content container with entrance animation. */}
      <div className={cn(
        "container mx-auto px-4 md:px-6 relative z-20 flex flex-col items-start text-left",
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}>
        <div className="w-full flex flex-col items-start">
          <ShieldCheck className={cn(
            "h-16 w-16 text-accent mb-2 transition-all duration-[2000ms] ease-out transform",
            mounted ? 'opacity-100 translate-y-0 scale-100 rotate-0' : 'opacity-0 translate-y-5 scale-90 -rotate-12'
          )} />
          <h1 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-2 transition-all duration-[2000ms] ease-out delay-200 w-full text-left",
            showHeading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}>
            Discover Excellence in <span className="text-primary">{typewriterText || '\u00A0'}</span>
            <span className="border-r-2 border-primary ml-1 animate-pulse" style={{height: '1em', display: 'inline-block', verticalAlign: 'middle'}}></span>
          </h1>
          <p className={cn(
            "mt-4 text-base md:text-lg lg:text-xl font-serif text-muted-foreground w-full mx-auto leading-relaxed text-left hero-description-animate",
            showDescription ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}>
            At Gen X Secure, we specialize in delivering tailored, cutting-edge solutions for modern security and automation needs. Our expertise spans a wide range of domains, including access control, surveillance, fire safety, and intelligent automation—each designed to protect, empower, and streamline your environment. <br className="hidden md:block" />
            With a commitment to innovation and reliability, we ensure every client receives not just technology, but a partnership built on trust, support, and a deep understanding of your unique requirements. Experience the future of security and automation, crafted for your peace of mind and operational excellence. <br className="hidden md:block" />
            From initial consultation to ongoing support, our dedicated team works closely with you to design, implement, and maintain solutions that evolve with your needs. We leverage the latest advancements in technology to deliver seamless integration, intuitive control, and robust protection—so you can focus on what matters most, knowing your assets and people are secure. Join the growing community of businesses and homeowners who trust Gen-X Secure to deliver excellence, every step of the way.
          </p>
          <div className={cn(
            "flex flex-col sm:flex-row gap-4 justify-start mt-10 w-full hero-buttons-animate",
            showButtons ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'
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
      </div>
    </section>
  );
}
