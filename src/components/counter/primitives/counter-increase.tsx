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
        'focus-primary group/counter z-[1] rounded-r-lg p-3',
        // Hover state
        'enabled:hover:bg-[color-mix(in_oklab,var(--counter-fill-hover,var(--form-fill-hover))_50%,transparent)]',
        // Disabled state
        'disabled:cursor-not-allowed disabled:opacity-50',
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
