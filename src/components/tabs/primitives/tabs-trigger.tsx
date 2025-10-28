import * as TabsPrimitive from '@radix-ui/react-tabs';
import type { ComponentPropsWithRef } from 'react';

export type TabsTriggerProps = ComponentPropsWithRef<typeof TabsPrimitive.Trigger>;

export function TabsTrigger({ ref, ...props }: TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      className='relative p-4 text-sm font-[var(--tabs-font-family,var(--font-family-body))] font-semibold text-[var(--tabs-text,hsl(var(--contrast-500)))] transition-colors duration-200 ease-linear after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-bottom after:scale-y-0 after:bg-[var(--tabs-underline-default,hsl(var(--contrast-200)))] after:transition-all after:duration-200 after:ease-linear after:content-[""] hover:text-[var(--tabs-text-hover,hsl(var(--foreground)))] hover:after:scale-y-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tabs-focus,hsl(var(--primary)))] disabled:pointer-events-none disabled:text-[var(--tabs-text,hsl(var(--contrast-500)))] data-[state=active]:text-[var(--tabs-text-active,hsl(var(--foreground)))] data-[state=active]:after:scale-y-100 data-[state=active]:after:bg-[var(--tabs-underline-active,hsl(var(--primary)))] data-[state=inactive]:hover:after:bg-[var(--tabs-underline-hover,hsl(var(--contrast-200)))]'
      data-slot="tabs-trigger"
      ref={ref}
      {...props}
    />
  );
}
