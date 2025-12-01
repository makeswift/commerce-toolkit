'use client';

import type { ComponentProps } from 'react';

import { useCarousel } from '@/components/carousel';
import { cn } from '@/lib';

export type CarouselViewportProps = ComponentProps<'div'>;

export function CarouselViewport({ className, children, ...props }: CarouselViewportProps) {
  const { carouselRef } = useCarousel();

  return (
    <div
      className={cn('w-full', className)}
      data-slot="carousel-viewport"
      ref={carouselRef}
      {...props}
    >
      {children}
    </div>
  );
}
