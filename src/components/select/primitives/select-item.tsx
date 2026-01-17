'use client';

import * as SelectPrimitive from '@radix-ui/react-select';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type SelectItemProps = ComponentProps<typeof SelectPrimitive.Item>;

export function SelectItem({ children, className, ...props }: SelectItemProps) {
  return (
    <SelectPrimitive.Item
      className={cn(
        'w-full cursor-default select-none rounded-lg px-3 py-2 text-sm text-[--select-text-secondary,var(--form-text-secondary)] outline-none transition-colors',
        // Hover state
        'hover:bg-[--select-fill-hover,var(--form-fill-hover)] hover:text-[--select-text-hover,var(--form-text-hover)]',
        // Focus-visible state
        'focus-visible:bg-[--select-fill-focus,var(--form-fill-hover)] focus-visible:text-[--select-text-focus,var(--form-text-hover)]',
        // Checked state
        'data-[state=checked]:text-[--select-text-focus,var(--form-text-hover)]',
        // Container queries
        '@4xl:text-base',
        className,
      )}
      data-slot="select-item"
      {...props}
    >
      {children}
    </SelectPrimitive.Item>
  );
}
