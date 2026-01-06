import * as SelectPrimitive from '@radix-ui/react-select';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type SelectItemProps = ComponentProps<typeof SelectPrimitive.Item>;

export function SelectItem({ children, className, ...props }: SelectItemProps) {
  return (
    <SelectPrimitive.Item
      className={cn(
        // Base layout
        'w-full cursor-default select-none',
        // Spacing
        'px-3 py-2',
        // Typography
        'text-sm font-normal text-[var(--select-light-item-text,var(--contrast-400))]',
        // Borders & Rounded
        'rounded-lg',
        // Effects
        'outline-none',
        // Transitions
        'transition-colors',
        // Hover state
        'hover:bg-[var(--select-light-item-background-hover,var(--contrast-100))] hover:text-[var(--select-light-item-text-hover,var(--foreground))]',
        // Focus-visible state
        'focus-visible:bg-[var(--select-light-item-background-focus,var(--contrast-100))] focus-visible:text-[var(--select-light-item-text-focus,var(--foreground))]',
        // Checked state
        'data-[state=checked]:text-[var(--select-light-item-checked-text-focus,var(--foreground))]',
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
