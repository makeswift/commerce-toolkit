'use client';

import { createContext, use, useMemo } from 'react';
import type { ReactNode } from 'react';

interface ScrollAreaContext {
  orientation: 'vertical' | 'horizontal' | 'both';
  scrollHideDelay: number;
  type: 'auto' | 'always' | 'scroll' | 'hover';
}

export const ScrollAreaContext = createContext<ScrollAreaContext | undefined>(undefined);

export interface ScrollAreaProviderProps {
  orientation?: 'vertical' | 'horizontal' | 'both';
  scrollHideDelay?: number;
  type?: 'auto' | 'always' | 'scroll' | 'hover';
  children: ReactNode;
}

export function ScrollAreaProvider({
  children,
  orientation = 'vertical',
  scrollHideDelay = 500,
  type = 'hover',
}: ScrollAreaProviderProps) {
  const contextValues = useMemo(
    () => ({
      orientation,
      scrollHideDelay,
      type,
    }),
    [orientation, scrollHideDelay, type],
  );

  return <ScrollAreaContext.Provider value={contextValues}>{children}</ScrollAreaContext.Provider>;
}

export function useScrollArea() {
  const context = use(ScrollAreaContext);

  if (context === undefined) {
    throw new Error('useScrollArea must be used within a ScrollAreaProvider');
  }

  return context;
}
