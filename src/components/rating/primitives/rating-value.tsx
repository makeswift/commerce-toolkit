'use client';

import type { ComponentProps } from 'react';

import { useRating } from '@/components/rating';
import { cn } from '@/lib';

export type RatingValueProps = ComponentProps<'span'>;

export function RatingValue({ className, children, ...props }: RatingValueProps) {
  const { adjustedRating, showRating } = useRating();

  if (!showRating) return null;

  return (
    <span
      className={cn(
        'ml-2 flex text-xs font-bold leading-normal text-[var(--rating-text,hsl(var(--foreground)))]',
        className,
      )}
      data-slot="rating-value"
      {...props}
    >
      {adjustedRating % 1 !== 0 ? adjustedRating.toFixed(1) : adjustedRating}
      {children}
    </span>
  );
}
