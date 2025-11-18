'use client';

import { createContext, use, useMemo } from 'react';
import type { ReactNode } from 'react';

interface AccordionItemContext {
  title: string;
  content: ReactNode;
  value: string;
}

export const AccordionItemContext = createContext<AccordionItemContext | undefined>(undefined);

export interface AccordionItemProviderProps extends AccordionItemContext {
  children: ReactNode;
}

export function AccordionItemProvider({
  children,
  title,
  content,
  value,
}: AccordionItemProviderProps) {
  const contextValues = useMemo(
    () => ({
      title,
      content,
      value,
    }),
    [title, content, value],
  );

  return (
    <AccordionItemContext.Provider value={contextValues}>{children}</AccordionItemContext.Provider>
  );
}

export function useAccordionItem() {
  const context = use(AccordionItemContext);

  if (context === undefined) {
    throw new Error('useAccordionItem must be used within an AccordionItemProvider');
  }

  return context;
}
