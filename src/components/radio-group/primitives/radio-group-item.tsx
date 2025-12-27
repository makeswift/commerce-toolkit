'use client';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type RadioGroupItemProps = ComponentProps<typeof RadioGroupPrimitive.Item>;

export function RadioGroupItem({ children, className, ...props }: RadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      className={cn(
        'size-5 cursor-default rounded-full border border-[var(--radio-group-light-border,var(--contrast-200))] bg-[var(--radio-group-light-background,var(--background))]',
        // Hover state
        'hover:border-[var(--radio-group-light-border-hover,var(--contrast-300))]',
        // Focus-visible state
        'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--radio-group-light-focus,var(--brand))]',
        // Aria-invalid state
        'aria-invalid:border-[var(--radio-group-light-border-error,var(--error))] aria-invalid:disabled:border-[var(--radio-group-light-disabled-border-error,color-mix(in_oklab,var(--error)_50%,transparent))]',
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
