'use client';

import type { ComponentProps } from 'react';

import { useCounter } from '@/components/counter';
import { cn } from '@/lib';

export type CounterInputProps = Omit<ComponentProps<'input'>, 'type'>;

export function CounterInput({ className, ...props }: CounterInputProps) {
  const { count, max } = useCounter();

  return (
    <input
      className={cn(
        'w-8 bg-transparent text-center [appearance:textfield] focus-visible:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
        className,
      )}
      data-slot="counter-input"
      max={max}
      type="number"
      value={count}
      {...props}
    />
  );
}
