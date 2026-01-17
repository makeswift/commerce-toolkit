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
        'ml-2 whitespace-nowrap border-l border-[--border-subtle] pl-2 font-normal text-[--rating-text,var(--text-secondary)]',
        className,
      )}
      data-slot="rating-total"
      {...props}
    >
      {totalReviews.toLocaleString()} {totalReviews === 1 ? 'review' : 'reviews'}
    </span>
  );
}
