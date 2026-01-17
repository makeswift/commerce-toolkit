'use client';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type RadioGroupIndicatorProps = ComponentProps<typeof RadioGroupPrimitive.Indicator>;

export function RadioGroupIndicator({ className, children, ...props }: RadioGroupIndicatorProps) {
  return (
    <RadioGroupPrimitive.Indicator
      className={cn(
        'relative flex size-full items-center justify-center after:block after:size-3 after:rounded-full after:bg-[--radio-group-fill-checked,var(--form-fill-checked)]',
        className,
      )}
      data-slot="radio-group-indicator"
      {...props}
    >
      {children}
    </RadioGroupPrimitive.Indicator>
  );
}
