import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CardRadioGroupItemProps = ComponentProps<typeof RadioGroupPrimitive.Item>;

export function CardRadioGroupItem({ children, className, ...props }: CardRadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      className={cn(
        'relative flex h-12 w-full items-center overflow-hidden rounded-lg border border-[var(--card-radio-group-unchecked-border,var(--contrast-100))] font-body text-sm font-normal leading-normal text-[var(--card-radio-group-unchecked-text,var(--foreground))] transition-colors',
        // Focus-visible state
        'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--card-radio-group-focus,var(--brand))]',
        // Checked state
        'data-[state=checked]:border-[var(--card-radio-group-checked-background,var(--foreground))] data-[state=checked]:bg-[var(--card-radio-group-checked-background,var(--foreground))] data-[state=checked]:text-[var(--card-radio-group-checked-text,var(--background))]',
        // Unchecked state
        'data-[state=unchecked]:bg-[var(--card-radio-group-unchecked-background,var(--background))]',
        // Unchecked hover state
        'data-[state=unchecked]:hover:border-[var(--card-radio-group-unchecked-border-hover,var(--contrast-200))] data-[state=unchecked]:hover:bg-[var(--card-radio-group-unchecked-background-hover,var(--contrast-100))]',
        // Aria-invalid state
        'aria-invalid:border-[var(--card-radio-group-border-error,var(--error))]',
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
