'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type TabsContentProps = ComponentProps<typeof TabsPrimitive.Content>;

export function TabsContent({ className, children, ...props }: TabsContentProps) {
  return (
    <TabsPrimitive.Content
      className={cn(
        // Focus-visible state
        'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--tabs-focus,var(--brand))]',
        className,
      )}
      data-slot="tabs-content"
      {...props}
    >
      {children}
    </TabsPrimitive.Content>
  );
}
