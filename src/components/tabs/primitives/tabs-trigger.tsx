import * as TabsPrimitive from '@radix-ui/react-tabs';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type TabsTriggerProps = ComponentProps<typeof TabsPrimitive.Trigger>;

export function TabsTrigger({ className, children, ...props }: TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        'relative shrink-0 p-4 text-sm font-semibold text-[--tabs-text,var(--text-secondary)] transition-colors duration-200 ease-linear [font-family:var(--tabs-font,var(--font-body))] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-bottom after:scale-y-0 after:bg-[--tabs-underline,var(--contrast-200)] after:transition-all after:duration-200 after:ease-linear after:content-[""]',
        // Hover state
        'hover:text-[--tabs-text-hover,var(--text-primary)] hover:after:scale-y-100',
        // Focus-visible state
        'focus:outline-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[--border-focus-primary]',
        // Disabled state
        'disabled:pointer-events-none disabled:text-[--tabs-text,var(--text-secondary)]',
        // Active state
        'data-[state=active]:text-[--tabs-text-active,var(--text-primary)] data-[state=active]:after:scale-y-100 data-[state=active]:after:bg-[--tabs-underline-active,var(--brand)]',
        // Inactive hover state
        'data-[state=inactive]:hover:after:bg-[--tabs-underline,var(--contrast-200)]',
        className,
      )}
      data-slot="tabs-trigger"
      {...props}
    >
      {children}
    </TabsPrimitive.Trigger>
  );
}
