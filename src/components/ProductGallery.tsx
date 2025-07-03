'use client';

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import Image from 'next/image';
import { useState } from 'react';

interface ProductGalleryProps {
  images: string[];
  name: string;
  dataAiHints?: string[];
}

export function ProductGallery({ images, name, dataAiHints }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image with Zoom */}
      <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-xl border group">
        <Zoom>
          <Image
            src={images[selectedImage]}
            alt={name}
            fill
            quality={100}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
            priority
            data-ai-hint={dataAiHints?.[selectedImage] || 'security product detail'}
          />
        </Zoom>
      </div>
      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-3">
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative aspect-square w-full overflow-hidden rounded-md border cursor-pointer transition-all ${
                selectedImage === index ? 'ring-2 ring-primary' : 'hover:opacity-80'
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={img}
                alt={`${name} - view ${index + 1}`}
                fill
                sizes="(max-width: 768px) 33vw, 16vw"
                className="object-cover transition-transform duration-300 hover:scale-110"
                data-ai-hint={dataAiHints?.[index] || 'product detail image'}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 