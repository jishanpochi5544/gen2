"use client";

import Link from 'next/link';
import Image from 'next/image';
import type { Product as FullProductType } from '@/types'; // Renamed import
import { Card } from '@/components/ui/card'; // Only Card is needed from ui/card
import React from 'react';
import { cn } from '@/lib/utils';

// Define a type for ProductCard that omits the icon
type ProductForCard = Omit<FullProductType, 'icon'>;

interface ProductCardProps {
  product: ProductForCard; // Use the new type
  animationDelay?: string;
  isVisible?: boolean;
}

export function ProductCard({ product, animationDelay = '0ms', isVisible = true }: ProductCardProps) {

  return (
    <Link
      href={`/solutions/${product.slug}`}
      className={cn(
        "group block h-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg", // Added focus styles and rounded-lg for focus outline
        "transition-all duration-300 ease-out",
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      )}
      style={{ transitionDelay: isVisible ? animationDelay : '0ms' }}
    >
      <Card
        className={cn(
          "flex flex-col overflow-hidden shadow-lg h-full",
          "border border-border group-hover:shadow-xl group-hover:shadow-accent/20 group-hover:border-accent/70 transition-all duration-300 ease-out"
        )}
      >
        <div className="relative w-full aspect-[4/3] sm:aspect-video overflow-hidden bg-white">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className={cn(
              "object-contain transition-transform duration-500 ease-in-out group-hover:scale-110",
              isVisible ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
            )}
            data-ai-hint={product.dataAiHints?.[0] || 'security product item'}
          />
        </div>
        <div className="p-2 sm:p-3 flex-grow flex items-center justify-center bg-white">
          <h3 className="text-xs sm:text-sm font-semibold text-center text-card-foreground leading-tight line-clamp-2">{product.name}</h3>
        </div>
      </Card>
    </Link>
  );
}
