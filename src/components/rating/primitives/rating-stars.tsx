'use client';

import type { ComponentProps } from 'react';

import { Star as RatingStar, useRating } from '@/components/rating';
import { cn } from '@/lib';

export type RatingStarsProps = ComponentProps<'span'>;

export function RatingStars({ className, ...props }: RatingStarsProps) {
  const { resetStarIndex } = useRating();

  resetStarIndex();

  return (
    <span className={cn('inline-flex', className)} data-slot="rating-stars" {...props}>
      {[0, 1, 2, 3, 4].map((i) => (
        <RatingStar key={i} />
      ))}
    </span>
  );
}
