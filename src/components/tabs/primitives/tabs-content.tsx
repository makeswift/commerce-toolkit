'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type TabsContentProps = ComponentProps<typeof TabsPrimitive.Content>;

export function TabsContent({ className, children, ...props }: TabsContentProps) {
  return (
    <TabsPrimitive.Content
      className={cn(
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tabs-focus,hsl(var(--primary)))] focus-visible:ring-offset-2',
        className,
      )}
      data-slot="tabs-content"
      {...props}
    >
      {children}
    </TabsPrimitive.Content>
  );
}
