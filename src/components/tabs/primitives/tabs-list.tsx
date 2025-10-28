import * as TabsPrimitive from '@radix-ui/react-tabs';
import type { ComponentPropsWithRef } from 'react';

export type TabsListProps = ComponentPropsWithRef<typeof TabsPrimitive.List>;

export function TabsList({ ref, ...props }: TabsListProps) {
  return (
    <TabsPrimitive.List
      className="flex flex-wrap border-b border-[var(--tabs-border,hsl(var(--contrast-100)))]"
      data-slot="tabs-list"
      ref={ref}
      {...props}
    />
  );
}
