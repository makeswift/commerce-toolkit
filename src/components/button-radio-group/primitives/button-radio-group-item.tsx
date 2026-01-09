import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ButtonRadioGroupItemProps = ComponentProps<typeof RadioGroupPrimitive.Item>;

export function ButtonRadioGroupItem({ children, className, ...props }: ButtonRadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      className={cn(
        'h-12 whitespace-nowrap rounded-full border border-[var(--button-radio-group-unchecked-border,var(--contrast-100))] px-4 font-body text-sm font-normal leading-normal transition-colors',
        // Focus-visible state
        'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--button-radio-group-focus,var(--brand))]',
        // Checked state
        'data-[state=checked]:border-[var(--button-radio-group-checked-background,var(--foreground))] data-[state=checked]:bg-[var(--button-radio-group-checked-background,var(--foreground))] data-[state=checked]:text-[var(--button-radio-group-checked-text,var(--background))]',
        // Unchecked state
        'data-[state=unchecked]:bg-[var(--button-radio-group-unchecked-background,var(--background))] data-[state=unchecked]:text-[var(--button-radio-group-unchecked-text,var(--foreground))]',
        // Unchecked hover state
        'data-[state=unchecked]:hover:border-[var(--button-radio-group-unchecked-border-hover,var(--contrast-200))] data-[state=unchecked]:hover:bg-[var(--button-radio-group-unchecked-background-hover,var(--contrast-100))]',
        // Aria-invalid state
        'aria-invalid:border-[var(--button-radio-group-border-error,var(--error))]',
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
