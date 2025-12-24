import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type SwatchRadioGroupItemProps = ComponentProps<typeof RadioGroupPrimitive.Item>;

export function SwatchRadioGroupItem({ children, className, ...props }: SwatchRadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      className={cn(
        // Base layout
        'group relative box-content h-8 w-8',
        // Spacing
        'p-0.5',
        // Borders & Rounded
        'rounded-full border border-[var(--swatch-radio-group-light-unchecked-border,transparent)]',
        // Transitions
        'transition-colors',
        // Hover state
        'hover:border-[var(--swatch-radio-group-light-unchecked-border-hover,hsl(var(--contrast-200)))]',
        // Focus-visible state
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--swatch-radio-group-focus,hsl(var(--primary)))]',
        // Checked state
        'data-[state=checked]:border-[var(--swatch-radio-group-light-checked-border,hsl(var(--foreground)))]',
        // Invalid state
        'aria-invalid:border-[var(--swatch-radio-group-light-border-error,hsl(var(--error)))]',
        // Disabled state
        'disabled:border-[var(--swatch-radio-group-light-disabled-border,transparent)] data-[disabled]:pointer-events-none [&:disabled>.disabled-icon]:grid',
        className,
      )}
      data-slot="swatch-radio-group-item"
      {...props}
    >
      {children}
    </RadioGroupPrimitive.Item>
  );
}
