'use client';

import * as SelectPrimitive from '@radix-ui/react-select';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type SelectTriggerProps = ComponentProps<typeof SelectPrimitive.Trigger>;

export function SelectTrigger({ className, children, ...props }: SelectTriggerProps) {
  return (
    <SelectPrimitive.Trigger
      className={cn(
        'focus-primary flex h-fit w-full select-none items-center justify-between gap-3 border border-[--border-subtle] bg-[--select-fill,var(--form-fill)] px-5 py-3 text-sm font-normal text-[--select-text-primary,var(--form-text-primary)] transition-colors',
        // Hover state
        'hover:border-[--border-hover] hover:bg-[--select-fill-hover,var(--form-fill-hover)]',
        // Aria-invalid state
        'aria-invalid:border-[--border-error]',
        // Variant styles
        '[[data-variant=rectangle]_&]:rounded-lg [[data-variant=round]_&]:rounded-full',
        className,
      )}
      data-slot="select-trigger"
      {...props}
    >
      {children}
    </SelectPrimitive.Trigger>
  );
}
