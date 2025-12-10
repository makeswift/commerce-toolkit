'use client';

import { Minus, Plus } from 'lucide-react';

import * as CounterPrimitive from '@/components/counter';

export interface CounterProps {
  start?: number;
  max?: number;
  decrementAriaLabel?: string;
  incrementAriaLabel?: string;
}

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
  start = 0,
  max = 10,
  decrementAriaLabel = 'Decrease count',
  incrementAriaLabel = 'Increase count',
}: CounterProps) {
  return (
    <CounterPrimitive.Root max={max} start={start}>
      <CounterPrimitive.Decrease aria-label={decrementAriaLabel}>
        <Minus
          absoluteStrokeWidth
          className="text-[var(--counter-icon,hsl(var(--contrast-300)))] transition-colors duration-300 group-data-[state=enabled]:group-hover:text-[var(--counter-icon-hover,hsl(var(--foreground)))]"
          size={18}
          strokeWidth={1.5}
        />
      </CounterPrimitive.Decrease>
      <CounterPrimitive.Input readOnly />
      <CounterPrimitive.Increase aria-label={incrementAriaLabel}>
        <Plus
          absoluteStrokeWidth
          className="text-[var(--counter-icon,hsl(var(--contrast-300)))] transition-colors duration-300 group-data-[state=enabled]:group-hover:text-[var(--counter-icon-hover,hsl(var(--foreground)))]"
          size={18}
          strokeWidth={1.5}
        />
      </CounterPrimitive.Increase>
    </CounterPrimitive.Root>
  );
}
