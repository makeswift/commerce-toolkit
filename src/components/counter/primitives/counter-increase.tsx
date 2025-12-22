'use client';

import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CounterIncreaseProps = ComponentProps<'button'>;

export function CounterIncrease({
  children,
  className,
  disabled,
  type = 'button',
  ...props
}: CounterIncreaseProps) {
  return (
    <button
      className={cn(
        'group z-[1] rounded-r-lg p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--counter-focus,hsl(var(--primary)))] enabled:hover:bg-[var(--counter-background-hover,color-mix(in_oklab,hsl(var(--contrast-100))_50%,transparent))] disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      data-slot="counter-increase"
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
