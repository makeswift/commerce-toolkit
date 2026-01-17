'use client';

import { useRef } from 'react';
import type { ComponentProps, ReactNode } from 'react';

import * as CounterPrimitive from '@/components/counter/primitives';

export type CounterProps = ComponentProps<'input'> & {
  decrementIcon?: {
    label?: string;
    asChild?: boolean;
    children?: ReactNode;
  };
  incrementIcon?: {
    label?: string;
    asChild?: boolean;
    children?: ReactNode;
  };
};

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --counter-fill: var(--form-fill);
 *   --counter-fill-hover: var(--form-fill-hover);
 *   --counter-fill-icon: var(--form-fill-icon);
 *   --counter-fill-icon-hover: var(--form-fill-icon-hover);
 *   --counter-text: var(--form-text-primary);
 *   --counter-font: var(--font-body);
 * }
 * ```
 */
export function Counter({
  className,
  decrementIcon,
  incrementIcon,
  disabled,
  min = 0,
  max = 10,
  value,
  defaultValue,
  onChange,
  ...props
}: CounterProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const numValue = Number(value ?? defaultValue ?? min);
  const numMin = Number(min);
  const numMax = Number(max);

  const handleDecrement = () => {
    const input = inputRef.current;

    if (input == null) return;

    input.stepDown();
    input.dispatchEvent(new Event('input', { bubbles: true }));
  };

  const handleIncrement = () => {
    const input = inputRef.current;

    if (input == null) return;

    input.stepUp();
    input.dispatchEvent(new Event('input', { bubbles: true }));
  };

  return (
    <CounterPrimitive.Root className={className}>
      <CounterPrimitive.Decrease
        aria-label={decrementIcon?.label ?? 'Decrease count'}
        disabled={disabled === true || numValue <= numMin}
        onClick={handleDecrement}
      >
        <CounterPrimitive.DecreaseIcon asChild={decrementIcon?.asChild}>
          {decrementIcon?.children}
        </CounterPrimitive.DecreaseIcon>
      </CounterPrimitive.Decrease>
      <CounterPrimitive.Input
        defaultValue={defaultValue}
        disabled={disabled}
        max={max}
        min={min}
        onChange={onChange}
        ref={inputRef}
        type="number"
        value={value}
        {...props}
      />
      <CounterPrimitive.Increase
        aria-label={incrementIcon?.label ?? 'Increase count'}
        disabled={disabled === true || numValue >= numMax}
        onClick={handleIncrement}
      >
        <CounterPrimitive.IncreaseIcon asChild={incrementIcon?.asChild}>
          {incrementIcon?.children}
        </CounterPrimitive.IncreaseIcon>
      </CounterPrimitive.Increase>
    </CounterPrimitive.Root>
  );
}
