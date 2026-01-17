import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ButtonRadioGroupItemProps = ComponentProps<typeof RadioGroupPrimitive.Item>;

export function ButtonRadioGroupItem({ children, className, ...props }: ButtonRadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      className={cn(
        'focus-primary h-12 min-w-12 whitespace-nowrap rounded-full border border-[--border-subtle] px-4 text-sm leading-normal transition-colors [font-family:var(--button-radio-group-font,var(--font-body))]',
        // Checked state
        'data-[state=checked]:border-[--border-checked] data-[state=checked]:bg-[--button-radio-group-fill-checked,var(--form-fill-checked)] data-[state=checked]:text-[--button-radio-group-text-checked,var(--form-text-checked)]',
        // Unchecked state
        'data-[state=unchecked]:bg-[--button-radio-group-fill-unchecked,var(--form-fill-unchecked)] data-[state=unchecked]:text-[--button-radio-group-text-unchecked,var(--form-text-unchecked)]',
        // Unchecked hover state
        'data-[state=unchecked]:hover:border-[--border] data-[state=unchecked]:hover:bg-[--button-radio-group-fill-hover,var(--form-fill-hover)]',
        // Aria-invalid state
        'aria-invalid:border-[--error]',
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
