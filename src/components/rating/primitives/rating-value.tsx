'use client';

import type { ComponentProps } from 'react';

import { useRating } from '@/components/rating';
import { cn } from '@/lib';

export type RatingValueProps = ComponentProps<'span'>;

export function RatingValue({ className, ...props }: RatingValueProps) {
  const { adjustedRating, showRating } = useRating();

  if (!showRating) return null;

  return (
    <span
      className={cn(
        'ml-1.5 flex h-6 min-w-6 shrink-0 items-center justify-center rounded-full border border-[var(--rating-border,hsl(var(--contrast-100)))] px-1 text-xs font-medium text-[var(--rating-text,hsl(var(--contrast-400)))]',
        className,
      )}
      {...props}
    >
      {adjustedRating % 1 !== 0 ? adjustedRating.toFixed(1) : adjustedRating}
    </span>
  );
}
