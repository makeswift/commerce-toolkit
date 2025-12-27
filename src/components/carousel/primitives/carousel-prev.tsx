'use client';

import type { ComponentProps } from 'react';

import { useCarousel } from '@/components/carousel';
import { cn } from '@/lib';

export type CarouselPrevProps = ComponentProps<'button'>;

export function CarouselPrev({ children, className, ...props }: CarouselPrevProps) {
  const { canScrollPrev, scrollPrev } = useCarousel();

  return (
    <button
      className={cn(
        'rounded-lg transition-colors duration-300',
        // Focus-visible state
        'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--carousel-focus,var(--brand))]',
        // Disabled state
        'disabled:pointer-events-none disabled:opacity-25',
        className,
      )}
      data-slot="carousel-prev"
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      title="Previous"
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
