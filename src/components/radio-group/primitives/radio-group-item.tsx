'use client';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type RadioGroupItemProps = ComponentProps<typeof RadioGroupPrimitive.Item>;

export function RadioGroupItem({ children, className, ...props }: RadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      className={cn(
        'focus-primary size-5 cursor-default rounded-full border border-[--border] bg-[--radio-group-fill,var(--form-fill)]',
        // Hover state
        'hover:border-[--border-hover]',
        // Aria-invalid state
        'aria-invalid:border-[--border-error] aria-invalid:disabled:border-[color-mix(in_oklab,var(--error)_50%,transparent)]',
        // Disabled state
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&:disabled+label]:pointer-events-none [&:disabled+label]:opacity-50',
        className,
      )}
      data-slot="radio-group-item"
      {...props}
    >
      {children}
    </RadioGroupPrimitive.Item>
  );
}
