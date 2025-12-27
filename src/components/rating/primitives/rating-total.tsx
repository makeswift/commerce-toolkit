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
        'ml-2 whitespace-nowrap border-l border-[var(--rating-border,var(--contrast-100))] pl-2 font-normal text-[var(--rating-text,var(--contrast-400))]',
        className,
      )}
      data-slot="rating-total"
      {...props}
    >
      {totalReviews.toLocaleString()} {totalReviews === 1 ? 'review' : 'reviews'}
    </span>
  );
}
