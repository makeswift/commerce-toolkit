'use client';

import type { ComponentProps } from 'react';

import { useRating } from '@/components/rating';
import { cn } from '@/lib';

export type RatingTotalProps = ComponentProps<'span'>;

export function RatingTotal({ className, children, ...props }: RatingTotalProps) {
  const { totalReviews, showTotalReviews } = useRating();

  if (!showTotalReviews) return null;

  return (
    <span
      className={cn(
        'ml-2 border-l border-contrast-200 pl-2 font-normal text-[var(--rating-text,hsl(var(--contrast-500)))]',
        className,
      )}
      data-slot="rating-total"
      {...props}
    >
      {totalReviews.toLocaleString()} {totalReviews === 1 ? 'review' : 'reviews'}
    </span>
  );
}
