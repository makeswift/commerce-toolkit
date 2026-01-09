'use client';

import * as SelectPrimitive from '@radix-ui/react-select';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type SelectTriggerProps = ComponentProps<typeof SelectPrimitive.Trigger>;

export function SelectTrigger({ className, children, ...props }: SelectTriggerProps) {
  return (
    <SelectPrimitive.Trigger
      className={cn(
        'flex h-fit w-full select-none items-center justify-between gap-3 border border-[var(--select-light-trigger-border,var(--contrast-100))] bg-[var(--select-light-trigger-background,var(--background))] px-5 py-3 text-sm font-normal text-[var(--select-light-trigger-text,var(--foreground))] transition-colors',
        // Hover state
        'hover:border-[var(--select-light-trigger-border-hover,var(--contrast-300))] hover:bg-[var(--select-light-trigger-background-hover,var(--contrast-100))]',
        // Focus-visible state
        'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--select-light-trigger-focus,var(--brand))]',
        // Aria-invalid state
        'aria-invalid:border-[var(--select-light-trigger-border-error,var(--error))]',
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
