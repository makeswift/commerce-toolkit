'use client';

import type { ComponentProps } from 'react';

import { useCarousel } from '@/components/carousel';
import { cn } from '@/lib';

export type CarouselNextProps = ComponentProps<'button'>;

export function CarouselNext({ children, className, ...props }: CarouselNextProps) {
  const { canScrollNext, scrollNext } = useCarousel();

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
      data-slot="carousel-next"
      disabled={!canScrollNext}
      onClick={scrollNext}
      title="Next"
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
