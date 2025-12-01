import type { ComponentProps } from 'react';

import { useCarousel } from '@/components/carousel';
import { cn } from '@/lib';

export type CarouselNextProps = ComponentProps<'button'>;

export function CarouselNext({ children, className, ...props }: CarouselNextProps) {
  const { canScrollNext, scrollNext } = useCarousel();

  return (
    <button
      className={cn(
        'rounded-lg ring-[var(--carousel-focus,hsl(var(--primary)))] transition-colors duration-300 focus-visible:outline-0 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-25',
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
