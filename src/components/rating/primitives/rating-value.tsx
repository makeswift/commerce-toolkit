'use client';

import type { ComponentProps } from 'react';

import { useRating } from '@/components/rating';
import { cn } from '@/lib';

export type RatingValueProps = ComponentProps<'span'> & {
  totalReviews?: number;
};

export function RatingValue({ className, totalReviews, ...props }: RatingValueProps) {
  const { adjustedRating, showRating } = useRating();

  if (!showRating) return null;

  return (
    <span
      className={cn(
        'ml-2 flex text-xs font-bold leading-normal text-[var(--rating-text,hsl(var(--foreground)))]',
        className,
      )}
      {...props}
    >
      {adjustedRating % 1 !== 0 ? adjustedRating.toFixed(1) : adjustedRating}
      {totalReviews != null && (
        <span className="ml-2 border-l border-contrast-200 pl-2 font-normal text-[var(--rating-text,hsl(var(--contrast-500)))]">
          {totalReviews.toLocaleString()} {totalReviews === 1 ? 'review' : 'reviews'}
        </span>
      )}
    </span>
  );
}
