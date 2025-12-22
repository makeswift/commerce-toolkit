'use client';

import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CounterInputProps = ComponentProps<'input'>;

export function CounterInput({ className, ...props }: CounterInputProps) {
  return (
    <input
      className={cn(
        'w-8 bg-transparent text-center [appearance:textfield] focus-visible:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
        className,
      )}
      data-slot="counter-input"
      {...props}
    />
  );
}
