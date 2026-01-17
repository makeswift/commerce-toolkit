import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ToggleGroupItemProps = ComponentProps<typeof ToggleGroupPrimitive.Item>;

export function ToggleGroupItem({ children, className, ...props }: ToggleGroupItemProps) {
  return (
    <ToggleGroupPrimitive.Item
      className={cn(
        'focus-primary h-12 min-w-12 whitespace-nowrap rounded-full border border-[--border-subtle] px-4 font-body text-sm font-normal leading-normal transition-colors',
        // Off state
        'data-[state=off]:bg-[--toggle-group-fill-unchecked,var(--form-fill-unchecked)] data-[state=off]:text-[--toggle-group-text-unchecked,var(--form-text-unchecked)]',
        // Off + Hover state
        'data-[state=off]:hover:border-[--border] data-[state=off]:hover:bg-[--toggle-group-fill-hover,var(--form-fill-hover)]',
        // On state
        'data-[state=on]:border-[--border-checked] data-[state=on]:bg-[--toggle-group-fill-checked,var(--form-fill-checked)] data-[state=on]:text-[--toggle-group-text-checked,var(--form-text-checked)]',
        // Disabled state
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      )}
      data-slot="toggle-group-item"
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
}
