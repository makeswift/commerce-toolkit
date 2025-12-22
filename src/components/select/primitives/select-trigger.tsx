import * as SelectPrimitive from '@radix-ui/react-select';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type SelectTriggerProps = ComponentProps<typeof SelectPrimitive.Trigger>;

export function SelectTrigger({ className, children, ...props }: SelectTriggerProps) {
  return (
    <SelectPrimitive.Trigger
      className={cn(
        // Base layout
        'flex h-fit w-full select-none items-center justify-between gap-3',
        // Spacing
        'p-2 px-5 py-3',
        // Typography
        'text-sm font-normal text-[var(--select-light-trigger-text,hsl(var(--foreground)))]',
        // Colors
        'bg-[var(--select-light-trigger-background,hsl(var(--background)))]',
        // Borders
        'border border-[var(--select-light-trigger-border,hsl(var(--contrast-100)))]',
        // Transitions
        'transition-colors',
        // Hover state
        'hover:border-[var(--select-light-trigger-border-hover,hsl(var(--contrast-300)))] hover:bg-[var(--select-light-trigger-background-hover,hsl(var(--contrast-100)))]',
        // Focus-visible state
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--select-light-trigger-focus,hsl(var(--primary)))]',
        // Aria-invalid state
        'aria-invalid:border-[var(--select-light-trigger-border-error,hsl(var(--error)))]',
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
