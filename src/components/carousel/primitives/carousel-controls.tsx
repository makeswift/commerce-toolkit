'use client';

import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CarouselControlsProps = ComponentProps<'div'>;

export function CarouselControls({ className, children, ...props }: CarouselControlsProps) {
  return (
    <div
      className={cn(
        'mt-10 flex w-full items-center justify-between gap-2 text-[var(--carousel-light-button,var(--foreground))]',
        className,
      )}
      data-slot="carousel-controls"
      {...props}
    >
      {children}
    </div>
  );
}
