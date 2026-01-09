import * as TabsPrimitive from '@radix-ui/react-tabs';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type TabsTriggerProps = ComponentProps<typeof TabsPrimitive.Trigger>;

export function TabsTrigger({ className, children, ...props }: TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        'relative shrink-0 p-4 text-sm font-semibold text-[var(--tabs-text,var(--contrast-500))] transition-colors duration-200 ease-linear [font-family:var(--tabs-font-family,var(--font-family-body))] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-bottom after:scale-y-0 after:bg-[var(--tabs-underline-default,var(--contrast-200))] after:transition-all after:duration-200 after:ease-linear after:content-[""]',
        // Hover state
        'hover:text-[var(--tabs-text-hover,var(--foreground))] hover:after:scale-y-100',
        // Focus-visible state
        'focus:outline-none focus-visible:text-[var(--tabs-text-active,var(--foreground))] focus-visible:after:scale-y-100 focus-visible:after:bg-[var(--tabs-underline-active,var(--brand))]',
        // Disabled state
        'disabled:pointer-events-none disabled:text-[var(--tabs-text,var(--contrast-500))]',
        // Active state
        'data-[state=active]:text-[var(--tabs-text-active,var(--foreground))] data-[state=active]:after:scale-y-100 data-[state=active]:after:bg-[var(--tabs-underline-active,var(--brand))]',
        // Inactive hover state
        'data-[state=inactive]:hover:after:bg-[var(--tabs-underline-hover,var(--contrast-200)))',
        className,
      )}
      data-slot="tabs-trigger"
      {...props}
    >
      {children}
    </TabsPrimitive.Trigger>
  );
}
