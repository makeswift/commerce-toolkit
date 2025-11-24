'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { createContext, use, useMemo } from 'react';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

interface AccordionContext {
  colorScheme: 'light' | 'dark';
}

export const AccordionContext = createContext<AccordionContext | undefined>(undefined);

export type AccordionRootProps = ComponentProps<typeof AccordionPrimitive.Root> & {
  colorScheme?: 'light' | 'dark';
};

export function AccordionRoot({
  className,
  colorScheme = 'light',
  children,
  ...props
}: AccordionRootProps) {
  const contextValues = useMemo(
    () => ({
      colorScheme,
    }),
    [colorScheme],
  );

  return (
    <AccordionContext.Provider value={contextValues}>
      <AccordionPrimitive.Root className={cn(className)} data-slot="accordion-root" {...props}>
        {children}
      </AccordionPrimitive.Root>
    </AccordionContext.Provider>
  );
}

export function useAccordion() {
  const context = use(AccordionContext);

  if (context === undefined) {
    throw new Error('useAccordion must be used within an AccordionRoot');
  }

  return context;
}
