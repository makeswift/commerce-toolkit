import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type SwatchRadioGroupItemProps = ComponentProps<typeof RadioGroupPrimitive.Item>;

export function SwatchRadioGroupItem({ children, className, ...props }: SwatchRadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      className={cn(
        'focus-primary group/swatch-radio-group-item relative box-content h-8 w-8 rounded-full border border-transparent p-0.5 transition-colors hover:border-[--border-hover]',
        // Checked state
        'data-[state=checked]:border-[--border-checked]',
        // Aria-invalid state
        'aria-invalid:border-[--border-error]',
        // Disabled state
        'disabled:border-transparent data-[disabled]:pointer-events-none [&:disabled>.disabled-icon]:grid',
        className,
      )}
      data-slot="swatch-radio-group-item"
      {...props}
    >
      {children}
    </RadioGroupPrimitive.Item>
  );
}
