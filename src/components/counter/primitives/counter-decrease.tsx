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
        'group/counter z-[1] rounded-l-lg p-3',
        // Hover state
        'enabled:hover:bg-[var(--counter-background-hover,color-mix(in_oklab,var(--contrast-100)_50%,transparent))]',
        // Focus-visible state
        'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--counter-focus,var(--brand))]',
        // Disabled state
        'disabled:cursor-not-allowed disabled:opacity-50',
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
