import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type SwatchRadioGroupItemProps = ComponentProps<typeof RadioGroupPrimitive.Item>;

export function SwatchRadioGroupItem({ children, className, ...props }: SwatchRadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      className={cn(
        'group/swatch-radio-group-item relative box-content h-8 w-8 rounded-full border border-[var(--swatch-radio-group-light-unchecked-border,transparent)] p-0.5 transition-colors',
        // Hover state
        'hover:border-[var(--swatch-radio-group-light-unchecked-border-hover,var(--contrast-200))]',
        // Focus-visible state
        'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--swatch-radio-group-focus,var(--brand))]',
        // Checked state
        'data-[state=checked]:border-[var(--swatch-radio-group-light-checked-border,var(--foreground))]',
        // Aria-invalid state
        'aria-invalid:border-[var(--swatch-radio-group-light-border-error,var(--error))]',
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
