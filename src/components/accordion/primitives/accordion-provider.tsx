'use client';

import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';

interface AccordionContext {
  colorScheme: 'light' | 'dark';
}

export const AccordionContext = createContext<AccordionContext | undefined>(undefined);

export interface AccordionProviderProps {
  children: ReactNode;
  colorScheme?: 'light' | 'dark';
}

export function AccordionProvider({ children, colorScheme = 'light' }: AccordionProviderProps) {
  return <AccordionContext value={{ colorScheme }}>{children}</AccordionContext>;
}

export function useAccordionContext() {
  const context = useContext(AccordionContext);

  if (context === undefined) {
    throw new Error('useAccordionContext must be used within an AccordionProvider');
  }

  return context;
}
