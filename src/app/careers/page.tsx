
import type { Metadata } from 'next';
import { Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers at GenX Secure',
  description: 'Join the GenX Secure team and help us build the future of security technology.',
};

export default function CareersPage() {
  return (
    <div className="bg-gradient-to-b from-background to-secondary/30 min-h-[calc(100vh-var(--header-height)-var(--footer-height))] py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <Briefcase className="h-16 w-16 mx-auto mb-6 text-primary" />
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6">
          Careers at GenX Secure
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          We are always looking for talented individuals to join our mission.
          Our careers page is currently under construction. Please check back soon for exciting opportunities!
        </p>
        {/* Placeholder for future job listings or contact for careers */}
      </div>
    </div>
  );
}
