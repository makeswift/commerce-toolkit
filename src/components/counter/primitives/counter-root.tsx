'use client';

import { createContext, use, useCallback, useMemo, useState } from 'react';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

interface CounterContext {
  count: number;
  max: number;
  decrement: () => void;
  increment: () => void;
}

export const CounterContext = createContext<CounterContext | undefined>(undefined);

export type CounterRootProps = ComponentProps<'div'> & {
  start?: number;
  max?: number;
};

export function CounterRoot({
  children,
  className,
  start = 0,
  max = 10,
  ...props
}: CounterRootProps) {
  const [count, setCount] = useState(start);

  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, [max]);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [max]);

  const contextValues = useMemo(
    () => ({
      count,
      max,
      decrement,
      increment,
    }),
    [count, max, decrement, increment],
  );

  return (
    <CounterContext.Provider value={contextValues}>
      <div
        className={cn(
          'flex items-center justify-between rounded-lg border border-[var(--counter-border,hsl(var(--contrast-100)))] bg-[var(--counter-background,hsl(var(--background)))] font-[var(--counter-font-family,var(--font-family-body))] text-[var(--counter-text,hsl(var(--foreground)))]',
          className,
        )}
        data-slot="counter-root"
        {...props}
      >
        {children}
      </div>
    </CounterContext.Provider>
  );
}

export function useCounter() {
  const context = use(CounterContext);

  if (context === undefined) {
    throw new Error('useCounter must be used within a CounterRoot');
  }

  return context;
}
