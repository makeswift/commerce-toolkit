'use client';

import * as SelectPrimitive from '@radix-ui/react-select';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type SelectContentProps = ComponentProps<typeof SelectPrimitive.Content>;

export function SelectContent({ children, className, ...props }: SelectContentProps) {
  return (
    <SelectPrimitive.Content
      className={cn(
        'z-50 max-h-80 w-full overflow-y-auto rounded-xl bg-[var(--select-light-content-background,var(--background))] p-2 shadow-xl ring-1 ring-[var(--select-light-content-border,color-mix(in_oklab,var(--foreground)_10%,transparent))]',
        // Open state
        'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
        // Closed state
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
        // Container queries
        '@4xl:rounded-3xl @4xl:p-4',
        className,
      )}
      data-slot="select-content"
      {...props}
    >
      {children}
    </SelectPrimitive.Content>
  );
}
