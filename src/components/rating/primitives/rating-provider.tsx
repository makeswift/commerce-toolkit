'use client';

import { createContext, use, useCallback, useMemo, useRef } from 'react';
import type { ReactNode } from 'react';

export type StarType = 'empty' | 'half' | 'full';

interface RatingContext {
  rating: number;
  adjustedRating: number;
  stars: StarType[];
  showRating: boolean;
  getNextStarIndex: () => number;
  resetStarIndex: () => void;
}

export const RatingContext = createContext<RatingContext | undefined>(undefined);

export interface RatingProviderProps {
  rating: number;
  showRating?: boolean;
  children: ReactNode;
}

export function RatingProvider({ children, rating, showRating = true }: RatingProviderProps) {
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
      getNextStarIndex,
      resetStarIndex,
    };
  }, [rating, showRating]);

  return <RatingContext.Provider value={contextValues}>{children}</RatingContext.Provider>;
}

export function useRating() {
  const context = use(RatingContext);

  if (context === undefined) {
    throw new Error('useRating must be used within a RatingProvider');
  }

  return context;
}
