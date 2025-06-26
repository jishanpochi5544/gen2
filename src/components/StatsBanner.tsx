"use client";

import { useEffect, useState, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Briefcase, Users, HardHat, Handshake } from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
  { value: 15, label: 'Years of Experience', icon: Briefcase },
  { value: 850, label: 'Happy Customers', icon: Users },
  { value: 50, label: 'Strong Workforce', icon: HardHat },
  { value: 100, label: 'Technology Alliances', icon: Handshake }
];

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const CountUpNumber = ({ value, duration = 4000 }: { value: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        const easedPercentage = easeOutCubic(percentage);
        setCount(Math.floor(easedPercentage * value));
        if (progress < duration) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

export function StatsBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="bg-primary text-primary-foreground py-12 sm:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className={cn("transition-all duration-700 ease-out", isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')} style={{ transitionDelay: `${index * 150}ms`}}>
                <Icon className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3" />
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  <CountUpNumber value={stat.value} />+
                </div>
                <p className="text-sm sm:text-base">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 