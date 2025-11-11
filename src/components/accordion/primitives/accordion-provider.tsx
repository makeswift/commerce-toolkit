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
