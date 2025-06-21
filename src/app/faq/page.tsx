
import type { Metadata } from 'next';
import { HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about GenX Secure products, services, and solutions.',
};

export default function FAQPage() {
  return (
    <div className="bg-gradient-to-b from-background to-secondary/30 min-h-[calc(100vh-var(--header-height)-var(--footer-height))] py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <HelpCircle className="h-16 w-16 mx-auto mb-6 text-primary" />
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Our FAQ page is currently under development. We are compiling answers to your most common questions.
          Please check back soon! If you have an urgent inquiry, please visit our Contact Us page.
        </p>
        {/* Placeholder for future FAQ accordion or list */}
      </div>
    </div>
  );
}
