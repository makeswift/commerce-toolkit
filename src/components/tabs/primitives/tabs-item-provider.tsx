'use client';

import { createContext, use, useMemo } from 'react';
import type { ReactNode } from 'react';

export interface TabsItemContext {
  value: string;
  label: string;
  content: ReactNode;
}

export const TabsItemContext = createContext<TabsItemContext | undefined>(undefined);

export interface TabsItemProviderProps extends TabsItemContext {
  children: ReactNode;
}

export function TabsItemProvider({ children, value, label, content }: TabsItemProviderProps) {
  const contextValues = useMemo(
    () => ({
      value,
      label,
      content,
    }),
    [value, label, content],
  );

  return <TabsItemContext.Provider value={contextValues}>{children}</TabsItemContext.Provider>;
}

export function useTabsItem() {
  const context = use(TabsItemContext);

  if (context === undefined) {
    throw new Error('useTabsItem must be used within a TabsItemProvider');
  }

  return context;
}
