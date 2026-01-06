import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CardRadioGroupItemProps = ComponentProps<typeof RadioGroupPrimitive.Item>;

export function CardRadioGroupItem({ children, className, ...props }: CardRadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      className={cn(
        // Base layout
        'relative flex h-12 w-full items-center overflow-hidden',
        // Typography
        'font-body text-sm font-normal leading-normal',
        // Colors
        'border-[var(--card-radio-group-light-unchecked-border,var(--contrast-100))]',
        'text-[var(--card-radio-group-light-unchecked-text,var(--foreground))]',
        // Borders & Rounded
        'rounded-lg border',
        // Transitions
        'transition-colors',
        // Focus-visible state
        'focus-visible:outline-0 focus-visible:ring-2',
        'focus-visible:ring-[var(--card-radio-group-focus,var(--brand))]',
        // Checked state
        'data-[state=checked]:border-[var(--card-radio-group-light-checked-background,var(--foreground))]',
        'data-[state=checked]:bg-[var(--card-radio-group-light-checked-background,var(--foreground))]',
        'data-[state=checked]:text-[var(--card-radio-group-light-checked-text,var(--background))]',
        // Unchecked state
        'data-[state=unchecked]:bg-[var(--card-radio-group-light-unchecked-background,var(--background))]',
        // Unchecked hover state
        'data-[state=unchecked]:hover:border-[var(--card-radio-group-light-unchecked-border-hover,var(--contrast-200))]',
        'data-[state=unchecked]:hover:bg-[var(--card-radio-group-light-unchecked-background-hover,var(--contrast-100))]',
        // Aria-invalid state
        'aria-invalid:border-[var(--card-radio-group-light-border-error,var(--error))]',
        // Disabled state
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      )}
      data-slot="card-radio-group-item"
      {...props}
    >
      {children}
    </RadioGroupPrimitive.Item>
  );
}
