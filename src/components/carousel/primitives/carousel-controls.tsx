'use client';

import type { ComponentProps } from 'react';

import { cn } from '@/lib';

import { useCarousel } from '@/components/carousel';

export type CarouselControlsProps = ComponentProps<'div'>;

export function CarouselControls({ className, children, ...props }: CarouselControlsProps) {
  const { colorScheme } = useCarousel();

  return (
    <div
      className={cn(
        'mt-10 flex w-full items-center justify-between gap-2',
        {
          light: 'text-[var(--carousel-light-button,hsl(var(--foreground)))]',
          dark: 'text-[var(--carousel-dark-button,hsl(var(--background)))]',
        }[colorScheme],
        className,
      )}
      data-slot="carousel-controls"
      {...props}
    >
      {children}
    </div>
  );
}
