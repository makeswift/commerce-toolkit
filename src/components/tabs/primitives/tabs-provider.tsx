'use client';

import { createContext, use, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

interface TabsItemData {
  value: string;
  label: string;
  content: ReactNode;
}

interface TabsContext {
  tabs: TabsItemData[];
  defaultValue: string;
  activeValue: string;
  setActiveValue: (value: string) => void;
}

export const TabsContext = createContext<TabsContext | undefined>(undefined);

export interface TabsProviderProps extends Omit<TabsContext, 'activeValue' | 'setActiveValue'> {
  children: ReactNode;
}

export function TabsProvider({ children, tabs, defaultValue }: TabsProviderProps) {
  const [activeValue, setActiveValue] = useState(defaultValue);

  const contextValues = useMemo(
    () => ({
      tabs,
      defaultValue,
      activeValue,
      setActiveValue,
    }),
    [tabs, defaultValue, activeValue],
  );

  return <TabsContext.Provider value={contextValues}>{children}</TabsContext.Provider>;
}

export function useTabs() {
  const context = use(TabsContext);

  if (context === undefined) {
    throw new Error('useTabs must be used within a TabsProvider');
  }

  return context;
}
