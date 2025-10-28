import { clsx } from 'clsx';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { ComponentPropsWithoutRef } from 'react';

import { useCarousel } from '@/components/carousel/primitives/carousel-provider';

export interface CarouselButtonsProps extends ComponentPropsWithoutRef<'div'> {
  colorScheme?: 'light' | 'dark';
  previousLabel?: string;
  nextLabel?: string;
}

export function CarouselButtons({
  className,
  colorScheme = 'light',
  previousLabel = 'Previous',
  nextLabel = 'Next',
  ...props
}: CarouselButtonsProps) {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel();

  return (
    <div
      {...props}
      className={clsx(
        'flex gap-2',
        {
          light: 'text-[var(--carousel-light-button,hsl(var(--foreground)))]',
          dark: 'text-[var(--carousel-dark-button,hsl(var(--background)))]',
        }[colorScheme],
        className,
      )}
    >
      <button
        className="rounded-lg ring-[var(--carousel-focus,hsl(var(--primary)))] transition-colors duration-300 focus-visible:outline-0 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-25"
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        title={previousLabel}
      >
        <ArrowLeft className="h-6 w-6" strokeWidth={1.5} />
      </button>
      <button
        className="rounded-lg ring-[var(--carousel-focus,hsl(var(--primary)))] transition-colors duration-300 focus-visible:outline-0 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-25"
        disabled={!canScrollNext}
        onClick={scrollNext}
        title={nextLabel}
      >
        <ArrowRight className="h-6 w-6" strokeWidth={1.5} />
      </button>
    </div>
  );
}
