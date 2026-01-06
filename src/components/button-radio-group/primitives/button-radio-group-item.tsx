import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ButtonRadioGroupItemProps = ComponentProps<typeof RadioGroupPrimitive.Item>;

export function ButtonRadioGroupItem({ children, className, ...props }: ButtonRadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      className={cn(
        // Base layout
        'h-12 px-4',
        // Typography
        'whitespace-nowrap font-body text-sm font-normal leading-normal',
        // Colors
        'border-[var(--button-radio-group-light-unchecked-border,var(--contrast-100))]',
        // Borders & Rounded
        'rounded-full border',
        // Transitions
        'transition-colors',
        // Focus-visible state
        'focus-visible:outline-0 focus-visible:ring-2',
        'focus-visible:ring-[var(--button-radio-group-light-focus,var(--brand))]',
        // Checked state
        'data-[state=checked]:border-[var(--button-radio-group-light-checked-background,var(--foreground))]',
        'data-[state=checked]:bg-[var(--button-radio-group-light-checked-background,var(--foreground))]',
        'data-[state=checked]:text-[var(--button-radio-group-light-checked-text,var(--background))]',
        // Unchecked state
        'data-[state=unchecked]:bg-[var(--button-radio-group-light-unchecked-background,var(--background))]',
        'data-[state=unchecked]:text-[var(--button-radio-group-light-unchecked-text,var(--foreground))]',
        // Unchecked hover state
        'data-[state=unchecked]:hover:border-[var(--button-radio-group-light-unchecked-border-hover,var(--contrast-200))]',
        'data-[state=unchecked]:hover:bg-[var(--button-radio-group-light-unchecked-background-hover,var(--contrast-100))]',
        // Aria-invalid state
        'aria-invalid:border-[var(--button-radio-group-light-border-error,var(--error))]',
        // Disabled state
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      )}
      data-slot="button-radio-group-item"
      {...props}
    >
      {children}
    </RadioGroupPrimitive.Item>
  );
}
