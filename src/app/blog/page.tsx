
import type { Metadata } from 'next';
import { Rss } from 'lucide-react';

export const metadata: Metadata = {
  title: 'GenX Secure Blog',
  description: 'Stay updated with the latest news, insights, and articles on security technology from GenX Secure.',
};

export default function BlogPage() {
  return (
    <div className="bg-gradient-to-b from-background to-secondary/30 min-h-[calc(100vh-var(--header-height)-var(--footer-height))] py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <Rss className="h-16 w-16 mx-auto mb-6 text-primary" />
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6">
          GenX Secure Blog
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Our blog is coming soon! Get ready for insightful articles, industry news, and updates on the latest
          in security technology. Stay tuned!
        </p>
        {/* Placeholder for future blog post listings */}
      </div>
    </div>
  );
}
