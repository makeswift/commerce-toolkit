'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import { createContext, use, useMemo, useState } from 'react';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

interface TabsContext {
  defaultValue: string;
  activeValue: string;
  setActiveValue: (value: string) => void;
}

export const TabsContext = createContext<TabsContext | undefined>(undefined);

export type TabsRootProps = ComponentProps<typeof TabsPrimitive.Root> & {
  defaultValue: string;
};

export function TabsRoot({ className, children, defaultValue, ...props }: TabsRootProps) {
  const [activeValue, setActiveValue] = useState(defaultValue);

  const contextValues = useMemo(
    () => ({
      defaultValue,
      activeValue,
      setActiveValue,
    }),
    [defaultValue, activeValue],
  );

  return (
    <TabsContext.Provider value={contextValues}>
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
    </TabsContext.Provider>
  );
}

export function useTabs() {
  const context = use(TabsContext);

  if (context === undefined) {
    throw new Error('useTabs must be used within a TabsRoot');
  }

  return context;
}
