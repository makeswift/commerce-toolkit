'use client';

import type { ComponentProps } from 'react';

import { cn } from '@/lib';

import { useCarousel } from '@/components/carousel';

export type CarouselViewportProps = ComponentProps<'div'>;

export function CarouselViewport({ className, children, ...props }: CarouselViewportProps) {
  const { carouselRef } = useCarousel();

  return (
    <div
      data-slot="carousel-viewport"
      className={cn('w-full', className)}
      ref={carouselRef}
      {...props}
    >
      {children}
    </div>
  );
}
