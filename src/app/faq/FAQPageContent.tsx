"use client";

import { HelpCircle } from 'lucide-react';
import { FAQSection } from '@/components/FAQSection';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useRef } from 'react';

export function FAQPageContent() {
  const faqRef = useRef<HTMLDivElement>(null);
  const isFAQVisible = useIntersectionObserver(faqRef, { threshold: 0.1, triggerOnce: true });

  return (
    <div className="bg-gradient-to-b from-background to-secondary/30 min-h-[calc(100vh-var(--header-height)-var(--footer-height))] py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <HelpCircle className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Find answers to common questions about our security solutions and services. If you can't find what you're looking for, feel free to contact us.
          </p>
        </div>
        
        <div ref={faqRef}>
          <FAQSection isVisible={isFAQVisible} />
        </div>
      </div>
    </div>
  );
} 