import type { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { teamMembers } from '@/lib/data';
import { Users, Shield, Target, Eye, Zap } from 'lucide-react';
import { TeamMemberFlipCard } from '@/components/TeamMemberFlipCard';

export const metadata: Metadata = {
  title: 'About GenX Secure',
  description: 'Learn more about GenX Secure, our mission, values, and the dedicated team behind our advanced security solutions.',
};

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-background to-secondary/30 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        <div className="absolute inset-0 opacity-20">
            <Image 
                src="/about-us/about-us-hero.png" 
                alt="GenX Secure Team or Abstract Background"
                fill
                objectFit="cover"
                priority
                data-ai-hint="company values"
            />
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <Shield className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 mx-auto mb-3 sm:mb-4 text-accent" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">About GenX Secure</h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Your trusted partner in creating safer environments through innovative security technology and unwavering commitment.
          </p>
        </div>
      </section>

      {/* Our Mission & Values Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6">Our Mission & Values</h2>
            <p className="text-muted-foreground text-base sm:text-lg text-center mb-8 sm:mb-10">
              At GenX Secure, we're driven by a commitment to excellence and innovation in security solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { icon: Target, title: "Client-Focused", description: "Tailoring solutions to meet your unique needs." },
                { icon: Zap, title: "Innovative Solutions", description: "Utilizing the latest security technology." },
                { icon: Shield, title: "Unwavering Integrity", description: "Operating with transparency and trust." },
                { icon: Eye, title: "Proactive Protection", description: "Anticipating and mitigating risks effectively." },
              ].map(value => (
                <div key={value.title} className="bg-card p-4 sm:p-6 rounded-lg shadow-lg border hover:border-primary/50 transition-colors">
                  <value.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-2 sm:mb-3" />
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">{value.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Our experienced professionals are dedicated to providing top-tier security solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                      data-ai-hint={member.dataAiHint || 'team member photo'}
                    />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-sm sm:text-base text-primary">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
