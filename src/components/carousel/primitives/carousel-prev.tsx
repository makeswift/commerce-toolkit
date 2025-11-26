import { useCarousel } from '@/components/carousel';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CarouselPrevProps = ComponentProps<'button'>;

export function CarouselPrev({ children, className, ...props }: CarouselPrevProps) {
  const { canScrollPrev, scrollPrev } = useCarousel();

  return (
    <button
      className={cn(
        'rounded-lg ring-[var(--carousel-focus,hsl(var(--primary)))] transition-colors duration-300 focus-visible:outline-0 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-25',
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      title="Previous"
      type="button"
      data-slot="carousel-prev"
      {...props}
    >
      {children}
    </button>
  );
}
