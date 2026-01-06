import type { ComponentProps } from 'react';

import { useCarousel } from '@/components/carousel';
import { cn } from '@/lib';

export type CarouselPrevProps = ComponentProps<'button'>;

export function CarouselPrev({ children, className, ...props }: CarouselPrevProps) {
  const { canScrollPrev, scrollPrev } = useCarousel();

  return (
    <button
      className={cn(
        'rounded-lg ring-[var(--carousel-focus,var(--brand))] transition-colors duration-300 focus-visible:outline-0 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-25',
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
