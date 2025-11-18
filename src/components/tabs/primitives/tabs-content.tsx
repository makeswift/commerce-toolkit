'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import type { ComponentProps } from 'react';

import { useTabsItem } from '@/components/tabs';
import { cn } from '@/lib';

export type TabsContentProps = Omit<ComponentProps<typeof TabsPrimitive.Content>, 'value'>;

export function TabsContent({ className, ...props }: TabsContentProps) {
  const { content, value } = useTabsItem();

  return (
    <TabsPrimitive.Content
      className={cn(
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tabs-focus,hsl(var(--primary)))] focus-visible:ring-offset-2',
        className,
      )}
      data-slot="tabs-content"
      value={value}
      {...props}
    >
      {content}
    </TabsPrimitive.Content>
  );
}
