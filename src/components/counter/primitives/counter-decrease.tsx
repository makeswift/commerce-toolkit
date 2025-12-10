'use client';

import type { ComponentProps } from 'react';

import { useCounter } from '@/components/counter';
import { cn } from '@/lib';

export type CounterDecreaseProps = ComponentProps<'button'>;

export function CounterDecrease({ children, className, ...props }: CounterDecreaseProps) {
  const { count, decrement } = useCounter();

  return (
    <button
      className={cn(
        'group z-[1] rounded-l-lg p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--counter-focus,hsl(var(--primary)))] enabled:hover:bg-[var(--counter-background-hover,color-mix(in_oklab,hsl(var(--contrast-100))_50%,transparent))] disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      data-slot="counter-decrease"
      data-state={count > 0 ? 'enabled' : 'disabled'}
      disabled={count === 0}
      onClick={decrement}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
