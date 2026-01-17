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
        'focus-primary group/counter z-[1] rounded-l-lg p-3',
        // Hover state
        'enabled:hover:bg-[color-mix(in_oklab,var(--counter-fill-hover,var(--form-fill-hover))_50%,transparent)]',
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
