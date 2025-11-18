'use client';

import { createContext, use, useMemo } from 'react';
import type { ReactNode } from 'react';

interface AccordionItemData {
  title: string;
  content: ReactNode;
  value: string;
}

interface AccordionContext {
  colorScheme: 'light' | 'dark';
  items: AccordionItemData[];
}

export const AccordionContext = createContext<AccordionContext | undefined>(undefined);

export interface AccordionProviderProps extends AccordionContext {
  children: ReactNode;
}

export function AccordionProvider({
  children,
  colorScheme = 'light',
  items,
}: AccordionProviderProps) {
  const contextValues = useMemo(
    () => ({
      colorScheme,
      items,
    }),
    [colorScheme, items],
  );

  return <AccordionContext.Provider value={contextValues}>{children}</AccordionContext.Provider>;
}

export function useAccordion() {
  const context = use(AccordionContext);

  if (context === undefined) {
    throw new Error('useAccordion must be used within an AccordionProvider');
  }

  return context;
}
