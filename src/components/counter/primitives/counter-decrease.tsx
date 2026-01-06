'use client';

import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CounterDecreaseProps = ComponentProps<'button'>;

export function CounterDecrease({
  children,
  className,
  disabled,
  type = 'button',
  ...props
}: CounterDecreaseProps) {
  return (
    <button
      className={cn(
        'group z-[1] rounded-l-lg p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--counter-focus,var(--brand))] enabled:hover:bg-[var(--counter-background-hover,color-mix(in_oklab,var(--contrast-100)_50%,transparent))] disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      data-slot="counter-decrease"
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
