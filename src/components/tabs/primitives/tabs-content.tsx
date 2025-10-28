import * as TabsPrimitive from '@radix-ui/react-tabs';
import type { ComponentPropsWithRef } from 'react';

export type TabsContentProps = ComponentPropsWithRef<typeof TabsPrimitive.Content>;

export function TabsContent({ ref, ...props }: TabsContentProps) {
  return (
    <TabsPrimitive.Content
      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tabs-focus,hsl(var(--primary)))] focus-visible:ring-offset-2"
      data-slot="tabs-content"
      ref={ref}
      {...props}
    />
  );
}
