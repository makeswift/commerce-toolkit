'use client';

import { Minus, Plus } from 'lucide-react';
import { useRef } from 'react';
import type { ComponentProps } from 'react';

import * as CounterPrimitive from '@/components/counter/primitives';

export type CounterProps = ComponentProps<'input'> & {
  decrementAriaLabel?: string;
  incrementAriaLabel?: string;
};

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --counter-focus: hsl(var(--primary));
 *   --counter-font-family: var(--font-family-body);
 *   --counter-background: hsl(var(--background));
 *   --counter-background-hover: color-mix(in oklab, hsl(var(--contrast-100)) 50%, transparent);
 *   --counter-border: hsl(var(--contrast-100));
 *   --counter-text: hsl(var(--foreground));
 *   --counter-icon-hover: hsl(var(--foreground));
 *   --counter-icon: hsl(var(--contrast-300));
 * }
 * ```
 */
export function Counter({
  className,
  decrementAriaLabel = 'Decrease count',
  incrementAriaLabel = 'Increase count',
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
        aria-label={decrementAriaLabel}
        disabled={disabled === true || numValue <= numMin}
        onClick={handleDecrement}
      >
        <Minus
          absoluteStrokeWidth
          className="text-[var(--counter-icon,hsl(var(--contrast-300)))] transition-colors duration-300 group-enabled:group-hover:text-[var(--counter-icon-hover,hsl(var(--foreground)))]"
          size={18}
          strokeWidth={1.5}
        />
      </CounterPrimitive.Decrease>
      <CounterPrimitive.Input
        ref={inputRef}
        {...props}
        defaultValue={defaultValue}
        disabled={disabled}
        max={max}
        min={min}
        onChange={onChange}
        type="number"
        value={value}
      />
      <CounterPrimitive.Increase
        aria-label={incrementAriaLabel}
        disabled={disabled === true || numValue >= numMax}
        onClick={handleIncrement}
      >
        <Plus
          absoluteStrokeWidth
          className="text-[var(--counter-icon,hsl(var(--contrast-300)))] transition-colors duration-300 group-enabled:group-hover:text-[var(--counter-icon-hover,hsl(var(--foreground)))]"
          size={18}
          strokeWidth={1.5}
        />
      </CounterPrimitive.Increase>
    </CounterPrimitive.Root>
  );
}
