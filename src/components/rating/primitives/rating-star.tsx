'use client';

import type { ComponentProps } from 'react';

import { useRating } from '@/components/rating';
import { cn } from '@/lib';

export type RatingStarProps = ComponentProps<'svg'>;

export function RatingStar({ className, ...props }: RatingStarProps) {
  const { stars, getNextStarIndex } = useRating();

  const index = getNextStarIndex();

  const type = stars[index] ?? 'empty';

  const paths = {
    empty: (
      <path
        d="M9.99984 1.66669L12.5748 6.88335L18.3332 7.72502L14.1665 11.7834L15.1498 17.5167L9.99984 14.8084L4.84984 17.5167L5.83317 11.7834L1.6665 7.72502L7.42484 6.88335L9.99984 1.66669Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.4"
      />
    ),
    half: (
      <>
        <path
          d="M9.99984 1.66669L12.5748 6.88335L18.3332 7.72502L14.1665 11.7834L15.1498 17.5167L9.99984 14.8084L4.84984 17.5167L5.83317 11.7834L1.6665 7.72502L7.42484 6.88335L9.99984 1.66669Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.0003 1.6665V14.8082L4.85033 17.5165L5.83366 11.7832L1.66699 7.72484L7.42533 6.88317L10.0003 1.6665Z"
          fill="currentColor"
        />
      </>
    ),
    full: (
      <path
        d="M9.99984 1.66669L12.5748 6.88335L18.3332 7.72502L14.1665 11.7834L15.1498 17.5167L9.99984 14.8084L4.84984 17.5167L5.83317 11.7834L1.6665 7.72502L7.42484 6.88335L9.99984 1.66669Z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  };

  return (
    <svg
      className={cn('inline-block text-[var(--rating-icon,hsl(var(--foreground)))]', className)}
      data-slot="rating-star"
      fill="none"
      height={20}
      viewBox="0 0 20 20"
      width={20}
      {...props}
    >
      {paths[type]}
    </svg>
  );
}
