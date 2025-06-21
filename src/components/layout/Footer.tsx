"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Twitter, Youtube, ArrowRight, ShieldCheck, Camera } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedItem {
  id: number;
  type: 'ring' | 'cctv';
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  isHovered?: boolean; // Optional, only for rings
}

export function Footer() {
  const solutionsLinks = [
    { href: '/solutions?category=CCTV%20Cameras', label: 'CCTV Cameras' },
    { href: '/solutions?category=DVRs%2FNVRs', label: 'DVRs/NVRs' },
    { href: '/solutions?category=Access%20Control', label: 'Access Control' },
  ];

  const companyLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const resourcesLinks = [
    { href: '/blog', label: 'Blog' },
    { href: '/industries', label: 'Industries Served' },
    { href: '/faq', label: 'FAQs' },
  ];

  const successStoriesLinks = [
    { href: '/success-stories#retail-chain-security-overhaul', label: 'Retail Security Overhaul' },
    { href: '/success-stories#government-facility-access-control', label: 'Government Facility Access' },
    { href: '/success-stories#factory-surveillance-optimization', label: 'Factory Safety Optimization' },
  ];

  const socialLinks = [
    { href: '#', label: 'LinkedIn', icon: Linkedin },
    { href: '#', label: 'Twitter', icon: Twitter },
    { href: '#', label: 'YouTube', icon: Youtube },
  ];

  const [animatedItems, setAnimatedItems] = useState<AnimatedItem[]>([]);
  const blueSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generateRandom = (min: number, max: number) => Math.random() * (max - min) + min;
    const blueSection = blueSectionRef.current;
    if (!blueSection) return;

    let timeoutId: NodeJS.Timeout;
    const initAnimation = () => {
      if (!blueSectionRef.current) return; 
      const bounds = blueSectionRef.current.getBoundingClientRect();
      if (bounds.width === 0 || bounds.height === 0) { 
        timeoutId = setTimeout(initAnimation, 100); 
        return;
      }

      const initialItems: AnimatedItem[] = [];

      for (let i = 0; i < 6; i++) { // Number of rings increased from 4 to 6
        initialItems.push({
          id: Date.now() + i,
          type: 'ring',
          x: generateRandom(0, bounds.width),
          y: generateRandom(0, bounds.height),
          vx: generateRandom(-0.4, 0.4),
          vy: generateRandom(-0.4, 0.4),
          size: generateRandom(40, 100),
          opacity: generateRandom(0.15, 0.35), // Opacity increased
          isHovered: false,
        });
      }

      for (let i = 0; i < 5; i++) { // Number of CCTV icons increased from 3 to 5
        initialItems.push({
          id: Date.now() + 100 + i,
          type: 'cctv',
          x: generateRandom(0, bounds.width),
          y: generateRandom(0, bounds.height),
          vx: generateRandom(-0.3, 0.3),
          vy: generateRandom(-0.3, 0.3),
          size: generateRandom(20, 30), 
          opacity: generateRandom(0.1, 0.2), // Opacity increased
        });
      }
      setAnimatedItems(initialItems);
    };
    
    initAnimation(); 

    return () => clearTimeout(timeoutId); 
  }, []); 

  useEffect(() => {
    const blueSection = blueSectionRef.current;
    if (!blueSection) return; // Guard if ref not ready

    let animationFrameId: number;

    const animate = () => {
      const currentBounds = blueSection?.getBoundingClientRect();
      if (!currentBounds || currentBounds.width === 0 || currentBounds.height === 0) {
        animationFrameId = requestAnimationFrame(animate); 
        return;
      }

      setAnimatedItems(prevItems =>
        prevItems.map(item => {
          let newX = item.x + item.vx;
          let newY = item.y + item.vy;
          let newVx = item.vx;
          let newVy = item.vy;

          const itemRadius = item.size / 2;
          
          if (newX - itemRadius < 0 || newX + itemRadius > currentBounds.width) {
            newVx = -newVx;
            newX = item.x + newVx; 
          }
          if (newY - itemRadius < 0 || newY + itemRadius > currentBounds.height) {
            newVy = -newVy;
            newY = item.y + newVy; 
          }
          
          if (Math.random() < 0.005) newVx += (Math.random() * 0.1 - 0.05);
          if (Math.random() < 0.005) newVy += (Math.random() * 0.1 - 0.05);

          newVx = Math.max(-0.5, Math.min(0.5, newVx));
          newVy = Math.max(-0.5, Math.min(0.5, newVy));

          return { ...item, x: newX, y: newY, vx: newVx, vy: newVy };
        })
      );
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleRingHover = (id: number, isHovered: boolean) => {
    setAnimatedItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.type === 'ring' ? { ...item, isHovered } : item
      )
    );
  };

  return (
    <footer className="mt-auto bg-background">
      <div 
        ref={blueSectionRef} 
        className="bg-primary text-primary-foreground relative overflow-hidden rounded-t-3xl lg:rounded-t-[70px]"
      >
        <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-500/25 rounded-full blur-3xl pointer-events-none z-[1]"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-60 h-60 md:w-80 md:h-80 bg-accent/15 rounded-full blur-3xl pointer-events-none z-[1]"></div>

        {animatedItems.map(item => (
          <div
            key={item.id}
            className="absolute"
            style={{
              left: `${item.x}px`,
              top: `${item.y}px`,
              transform: 'translate(-50%, -50%)', 
              opacity: item.opacity,
              zIndex: 5, 
            }}
            onMouseEnter={item.type === 'ring' ? () => handleRingHover(item.id, true) : undefined}
            onMouseLeave={item.type === 'ring' ? () => handleRingHover(item.id, false) : undefined}
          >
            {item.type === 'ring' && (
              <div
                className={cn(
                  "rounded-full border-2 transition-all duration-300 ease-out pointer-events-auto",
                  item.isHovered
                    ? "border-white/70 bg-white/20 backdrop-blur-sm shadow-xl scale-110" 
                    : "border-white/30" 
                )}
                style={{
                  width: `${item.size}px`,
                  height: `${item.size}px`,
                }}
              />
            )}
            {item.type === 'cctv' && (
              <Camera // Using Camera icon for CCTV representation
                className="text-accent pointer-events-none" 
                style={{
                  width: `${item.size}px`,
                  height: `${item.size}px`,
                }}
              />
            )}
          </div>
        ))}
        
        <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 text-center">
          <ShieldCheck className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-accent mx-auto mb-4 sm:mb-6 md:mb-8 transition-transform hover:scale-110" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 tracking-tight">
            Ready to Elevate Your Security?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10">
            Discover how GenX Secure's advanced solutions can protect your assets. Let's build a safer future together.
          </p>
          <div className="relative z-20 pb-4 sm:pb-6 md:pb-8">
            <Link
              href="/contact?inquiry=demo"
              className={cn(
                "group relative inline-flex items-center justify-center h-10 sm:h-12 md:h-14 px-6 sm:px-8 md:px-10 text-sm sm:text-base md:text-lg font-semibold rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary",
                "bg-accent text-accent-foreground",
                "-mb-[calc(theme(spacing.6)+theme(spacing.1))] sm:-mb-[calc(theme(spacing.8)+theme(spacing.1))] md:-mb-[calc(theme(spacing.10)+theme(spacing.1))]"
              )}
            >
              <span>Request a Demo</span>
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-neutral-300 relative">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-8 sm:pb-12 md:pb-16 rounded-b-2xl sm:rounded-b-3xl lg:rounded-b-[70px]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 mb-8 sm:mb-12 md:mb-16">
            <div className="md:col-span-12 lg:col-span-4 space-y-4 sm:space-y-6">
              <Link href="/" className="inline-block group">
                <Image
                  src="/genx-logo.png"
                  alt="GenX Secure Logo"
                  width={212}
                  height={40}
                  className="object-contain transition-opacity group-hover:opacity-80"
                  priority
                  data-ai-hint="company logo"
                />
              </Link>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed pr-4">
                Empowering your world with advanced security, simplified.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-neutral-700 hover:bg-accent text-white hover:text-accent-foreground rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    >
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="md:col-span-12 lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-white mb-3 sm:mb-5 tracking-wider uppercase">Our Solutions</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {solutionsLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-neutral-400 hover:text-accent transition-colors duration-300 text-sm sm:text-[15px] group relative"
                      >
                        <span className="relative">
                          {link.label}
                          <span className="absolute -bottom-0.5 left-0 block h-px bg-accent w-0 transition-all duration-300 ease-out group-hover:w-full"></span>
                        </span>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/solutions" className="inline-flex items-center gap-1.5 text-accent hover:text-accent/80 transition-colors duration-300 text-[15px] font-medium group mt-2">
                      View all solutions
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-white mb-3 sm:mb-5 tracking-wider uppercase">Our Company</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {companyLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-neutral-400 hover:text-accent transition-colors duration-300 text-sm sm:text-[15px] group relative"
                      >
                        <span className="relative">
                          {link.label}
                          {link.label === "Careers" && (
                            <span className="ml-2 inline-block py-0.5 px-2 text-xs font-semibold text-primary-foreground bg-primary rounded-full">
                              We&apos;re hiring!
                            </span>
                          )}
                          <span className="absolute -bottom-0.5 left-0 block h-px bg-accent w-0 transition-all duration-300 ease-out group-hover:w-full"></span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-white mb-3 sm:mb-5 tracking-wider uppercase">Resources</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {resourcesLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-neutral-400 hover:text-accent transition-colors duration-300 text-sm sm:text-[15px] group relative"
                      >
                        <span className="relative">
                          {link.label}
                          <span className="absolute -bottom-0.5 left-0 block h-px bg-accent w-0 transition-all duration-300 ease-out group-hover:w-full"></span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-white mb-3 sm:mb-5 tracking-wider uppercase">Success Stories</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {successStoriesLinks.slice(0, 3).map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-neutral-400 hover:text-accent transition-colors duration-300 text-sm sm:text-[15px] group relative"
                      >
                        <span className="relative">
                          {link.label}
                          <span className="absolute -bottom-0.5 left-0 block h-px bg-accent w-0 transition-all duration-300 ease-out group-hover:w-full"></span>
                        </span>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/success-stories" className="inline-flex items-center gap-1.5 text-accent hover:text-accent/80 transition-colors duration-300 text-[15px] font-medium group mt-2">
                      View all stories
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-700 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <p className="text-xs sm:text-sm text-neutral-500 mb-3 sm:mb-0">
              &copy; {new Date().getFullYear()} GenX Secure. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-xs sm:text-sm">
              <Link href="#" className="text-neutral-400 hover:text-accent transition-colors">Legal</Link>
              <Link href="#" className="text-neutral-400 hover:text-accent transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-neutral-400 hover:text-accent transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
    

      

    