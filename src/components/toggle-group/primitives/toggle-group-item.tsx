import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ToggleGroupItemProps = ComponentProps<typeof ToggleGroupPrimitive.Item>;

export function ToggleGroupItem({ children, className, ...props }: ToggleGroupItemProps) {
  return (
    <ToggleGroupPrimitive.Item
      className={cn(
        // Base layout
        'h-12',
        // Spacing
        'px-4',
        // Typography
        'whitespace-nowrap font-body text-sm font-normal leading-normal',
        // Colors
        'border-[var(--toggle-group-light-border,hsl(var(--contrast-100)))]',
        // Borders & Rounded
        'rounded-full border',
        // Effects
        'ring-[var(--toggle-group-light-focus,hsl(var(--primary)))]',
        // Transitions
        'transition-colors',
        // Focus-visible state
        'focus-visible:outline-none focus-visible:ring-2',
        // Off state
        'data-[state=off]:bg-[var(--toggle-group-light-off-background,hsl(var(--background)))]',
        'data-[state=off]:text-[var(--toggle-group-light-off-text,hsl(var(--foreground)))]',
        // Off + Hover state
        'data-[state=off]:hover:border-[var(--toggle-group-light-off-border-hover,hsl(var(--contrast-200)))]',
        'data-[state=off]:hover:bg-[var(--toggle-group-light-off-background-hover,hsl(var(--contrast-100)))]',
        // On state
        'data-[state=on]:border-[var(--toggle-group-light-on-border,hsl(var(--foreground)))]',
        'data-[state=on]:bg-[var(--toggle-group-light-on-background,hsl(var(--foreground)))]',
        'data-[state=on]:text-[var(--toggle-group-light-on-text,hsl(var(--background)))]',
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
