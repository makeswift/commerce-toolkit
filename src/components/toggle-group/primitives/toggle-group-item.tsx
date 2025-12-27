import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ToggleGroupItemProps = ComponentProps<typeof ToggleGroupPrimitive.Item>;

export function ToggleGroupItem({ children, className, ...props }: ToggleGroupItemProps) {
  return (
    <ToggleGroupPrimitive.Item
      className={cn(
        'h-12 whitespace-nowrap rounded-full border border-[var(--toggle-group-light-border,var(--contrast-100))] px-4 font-body text-sm font-normal leading-normal transition-colors',
        // Focus-visible state
        'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--toggle-group-light-focus,var(--brand))]',
        // Off state
        'data-[state=off]:bg-[var(--toggle-group-light-off-background,var(--background))] data-[state=off]:text-[var(--toggle-group-light-off-text,var(--foreground))]',
        // Off + Hover state
        'data-[state=off]:hover:border-[var(--toggle-group-light-off-border-hover,var(--contrast-200))] data-[state=off]:hover:bg-[var(--toggle-group-light-off-background-hover,var(--contrast-100))]',
        // On state
        'data-[state=on]:border-[var(--toggle-group-light-on-border,var(--foreground))] data-[state=on]:bg-[var(--toggle-group-light-on-background,var(--foreground))] data-[state=on]:text-[var(--toggle-group-light-on-text,var(--background))]',
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
