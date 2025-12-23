'use client';

import { createContext, use, useCallback, useMemo, useRef } from 'react';
import type { ComponentProps, ReactNode } from 'react';

import { cn } from '@/lib';

export type StarType = 'empty' | 'half' | 'full';

interface RatingContext {
  rating: number;
  adjustedRating: number;
  stars: StarType[];
  showRating: boolean;
  showTotalReviews: boolean;
  totalReviews: number;
  getNextStarIndex: () => number;
  resetStarIndex: () => void;
}

const RatingContext = createContext<RatingContext | undefined>(undefined);

export interface RatingRootProps extends ComponentProps<'div'> {
  rating: number;
  showRating?: boolean;
  showTotalReviews?: boolean;
  totalReviews?: number;
  children: ReactNode;
}

export function RatingRoot({
  children,
  className,
  rating,
  showRating = true,
  showTotalReviews = true,
  totalReviews = 0,
  ...props
}: RatingRootProps) {
  const starIndexRef = useRef(0);

  const getNextStarIndex = useCallback(() => {
    const index = starIndexRef.current;

    starIndexRef.current += 1;

    return index;
  }, []);

  const resetStarIndex = useCallback(() => {
    starIndexRef.current = 0;
  }, []);

  const contextValues = useMemo(() => {
    const adjustedRating = Math.min(rating, 5);

    const stars: StarType[] = Array.from({ length: 5 }, (_, index) => {
      if (index < Math.floor(adjustedRating)) return 'full';
      if (index < Math.ceil(adjustedRating)) return 'half';

      return 'empty';
    });

    return {
      rating,
      adjustedRating,
      stars,
      showRating,
      showTotalReviews,
      totalReviews,
      getNextStarIndex,
      resetStarIndex,
    };
  }, [rating, showRating, showTotalReviews, totalReviews, getNextStarIndex, resetStarIndex]);

  return (
    <RatingContext.Provider value={contextValues}>
      <div className={cn('flex items-center', className)} data-slot="rating-root" {...props}>
        {children}
      </div>
    </RatingContext.Provider>
  );
}

export function useRating() {
  const context = use(RatingContext);

  if (context === undefined) {
    throw new Error('useRating must be used within a RatingRoot');
  }

  return context;
}
