import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CardRadioGroupItemProps = ComponentProps<typeof RadioGroupPrimitive.Item>;

export function CardRadioGroupItem({ children, className, ...props }: CardRadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      className={cn(
        'focus-primary relative flex h-12 w-full items-center overflow-hidden rounded-lg border border-[--border-subtle] text-sm text-[--card-radio-group-text-unchecked,var(--form-text-unchecked)] transition-colors [font-family:var(--card-radio-group-font,var(--font-body))]',
        // Checked state
        'data-[state=checked]:border-[--border-checked] data-[state=checked]:bg-[--card-radio-group-fill-checked,var(--form-fill-checked)] data-[state=checked]:text-[--card-radio-group-text-checked,var(--form-text-checked)]',
        // Unchecked state
        'data-[state=unchecked]:bg-[--card-radio-group-fill-unchecked,var(--form-fill-unchecked)]',
        // Unchecked hover state
        'data-[state=unchecked]:hover:border-[--border] data-[state=unchecked]:hover:bg-[--card-radio-group-fill-hover,var(--form-fill-hover)]',
        // Aria-invalid state
        'aria-invalid:border-[--error]',
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
