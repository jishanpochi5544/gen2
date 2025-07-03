"use client";

import Image from 'next/image';
import { partnerLogos } from '@/lib/data2';
import { cn } from '@/lib/utils';
import React, { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export const PartnersCarousel = () => {
  const partnersRef = useRef<HTMLDivElement>(null);
  const isPartnersVisible = useIntersectionObserver(partnersRef, { threshold: 0.1, triggerOnce: true });

  return (
    <section ref={partnersRef} className="py-16 lg:py-24 bg-white/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn(
          "text-center mb-12 lg:mb-16 transition-all duration-700 ease-out",
          isPartnersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        )} style={{ transitionDelay: isPartnersVisible ? '0ms' : '0ms' }}>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-3 drop-shadow-lg">
            Our Esteemed Partners
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full mb-4"></div>
          <p className="mt-4 text-lg text-foreground font-semibold max-w-2xl mx-auto">
            Collaborating with the best to bring you unparalleled security solutions.
          </p>
        </div>
        {partnerLogos.length > 0 ? (
          <div 
            className="group w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
          >
            <ul className="flex items-center justify-center animate-infinite-scroll-reverse-slow group-hover:pause gap-12">
              {partnerLogos.map((partner, index) => (
                <li key={`${partner.id}-${index}`} className="shrink-0">
                  <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full bg-card shadow-md border flex items-center justify-center p-4 transition-transform duration-300 ease-out hover:scale-110 hover:shadow-lg">
                    <Image
                      src={partner.logoUrl}
                      alt={partner.name}
                      width={130}
                      height={130}
                      className="object-contain filter grayscale transition-all duration-300 ease-out hover:filter-none"
                      data-ai-hint={partner.dataAiHint || 'partner logo'}
                    />
                  </div>
                </li>
              ))}
              {partnerLogos.map((partner, index) => (
                <li key={`${partner.id}-clone-${index}`} className="shrink-0" aria-hidden="true">
                  <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full bg-card shadow-md border flex items-center justify-center p-4 transition-transform duration-300 ease-out hover:scale-110 hover:shadow-lg">
                    <Image
                      src={partner.logoUrl}
                      alt={partner.name}
                      width={130}
                      height={130}
                      className="object-contain filter grayscale transition-all duration-300 ease-out hover:filter-none"
                      data-ai-hint={partner.dataAiHint || 'partner logo'}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-center text-muted-foreground">Partner logos will be displayed here soon.</p>
        )}
      </div>
    </section>
  );
}; 