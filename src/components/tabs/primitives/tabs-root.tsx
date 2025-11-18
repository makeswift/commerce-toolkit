'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import type { ComponentPropsWithRef } from 'react';

import { useTabs } from '@/components/tabs';
import { cn } from '@/lib';

export type TabsRootProps = Omit<
  ComponentPropsWithRef<typeof TabsPrimitive.Root>,
  'defaultValue' | 'value' | 'onValueChange'
>;

export function TabsRoot({ className, children, ...props }: TabsRootProps) {
  const { defaultValue, activeValue, setActiveValue } = useTabs();

  return (
    <TabsPrimitive.Root
      className={cn(className)}
      data-slot="tabs-root"
      defaultValue={defaultValue}
      onValueChange={setActiveValue}
      value={activeValue}
      {...props}
    >
      {children}
    </TabsPrimitive.Root>
  );
}
